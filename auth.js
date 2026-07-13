/* ============================================================
   LUXURY RESIDENCES — AUTH MODULE
   Login · Cadastro · Recuperação de senha · Gate de acesso
   Backend: Supabase (Postgres + Auth)
   ============================================================ */

// ── CONFIG ───────────────────────────────────────────────────
// TODO: substituir pelos dados do seu projeto Supabase
// (Project Settings → API, no painel do Supabase).
const SUPABASE_URL      = 'https://mickvntfgyddeqxxnmjm.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_EqViSaWUKdHSzAML1CJSZw_oK3tVaYZ';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ── DOM HELPERS ──────────────────────────────────────────────
const aEl = id => document.getElementById(id);
const aQa = sel => document.querySelectorAll(sel);

// ── STATE ────────────────────────────────────────────────────
const authState = {
  view: 'login',       // 'login' | 'signup' | 'forgot' | 'check-email'
  submitting: false,
};

// ── VALIDATION HELPERS ───────────────────────────────────────
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmail(value) {
  return EMAIL_RE.test(String(value || '').trim());
}

// ── VALIDAÇÃO: DATA DE NASCIMENTO ────────────────────────────
const MIN_SIGNUP_AGE = 18;

// Retorna { valid, reason } onde reason é 'invalid' | 'future' | 'underage' | null
function validateBirthdate(value) {
  if (!value) return { valid: false, reason: null };

  const date = new Date(value + 'T00:00:00');
  if (isNaN(date.getTime())) return { valid: false, reason: 'invalid' };

  const now = new Date();
  if (date > now) return { valid: false, reason: 'future' };

  let age = now.getFullYear() - date.getFullYear();
  const monthDiff = now.getMonth() - date.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < date.getDate())) age--;

  if (age < MIN_SIGNUP_AGE) return { valid: false, reason: 'underage' };

  return { valid: true, reason: null };
}

// Retorna { score: 0-4, label: string } com base em critérios comuns
function passwordStrength(pw) {
  pw = pw || '';
  let score = 0;
  if (pw.length >= 8)         score++;
  if (/[a-z]/.test(pw) && /[A-Z]/.test(pw)) score++;
  if (/\d/.test(pw))           score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;

  const colors = ['#E05252', '#E0A052', '#D8C550', '#8FCB6A', '#5DB87A'];

  return {
    score,
    percent: (score / 4) * 100,
    label: t2('strength_' + score),
    color: colors[score],
  };
}

// ── FIELD ERROR HELPERS ──────────────────────────────────────
function setFieldError(inputId, errId, message) {
  const input = aEl(inputId);
  const err   = aEl(errId);
  if (input) input.classList.add('err');
  if (err) {
    err.textContent = message;
    err.classList.add('show');
  }
}

function clearFieldError(inputId, errId) {
  const input = aEl(inputId);
  const err   = aEl(errId);
  if (input) input.classList.remove('err');
  if (err) {
    err.textContent = '';
    err.classList.remove('show');
  }
}

function clearFormErrors(form) {
  form.querySelectorAll('input.err').forEach(i => i.classList.remove('err'));
  form.querySelectorAll('.auth-field-err.show').forEach(e => {
    e.classList.remove('show');
    e.textContent = '';
  });
}

function setFormMessage(msgId, message, type) {
  const box = aEl(msgId);
  if (!box) return;
  box.textContent = message;
  box.className = 'auth-form-msg show' + (type === 'success' ? ' success' : '');
}

function clearFormMessage(msgId) {
  const box = aEl(msgId);
  if (!box) return;
  box.textContent = '';
  box.className = 'auth-form-msg';
}

// ── SUPABASE ERROR → MENSAGEM AMIGÁVEL ───────────────────────
function friendlyAuthError(error) {
  const lang = (typeof i18nState !== 'undefined' && i18nState.language === 'pt') ? 'pt' : 'en';
  const msg = (error && error.message) || '';

  const map = {
    'Invalid login credentials': {
      pt: 'E-mail ou senha incorretos.',
      en: 'Incorrect email or password.',
    },
    'User already registered': {
      pt: 'Já existe uma conta com esse e-mail.',
      en: 'An account with this email already exists.',
    },
    'Email not confirmed': {
      pt: 'Confirme seu e-mail antes de entrar.',
      en: 'Please confirm your email before signing in.',
    },
    'Password should be at least 6 characters': {
      pt: 'A senha precisa ter pelo menos 6 caracteres.',
      en: 'Password must be at least 6 characters.',
    },
  };

  for (const key in map) {
    if (msg.includes(key)) return map[key][lang];
  }

  return msg || (lang === 'pt'
    ? 'Algo deu errado. Tente novamente.'
    : 'Something went wrong. Please try again.');
}

// ── BUTTON LOADING STATE ─────────────────────────────────────
function setButtonLoading(btnId, loading) {
  const btn = aEl(btnId);
  if (!btn) return;
  btn.disabled = loading;
  btn.classList.toggle('loading', loading);
}

// ── PASSWORD VISIBILITY TOGGLE ───────────────────────────────
function initPasswordToggles() {
  aQa('.auth-eye').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      const input = aEl(targetId);
      if (!input) return;
      const show = input.type === 'password';
      input.type = show ? 'text' : 'password';
      btn.classList.toggle('is-visible', show);
    });
  });
}

// ── VIEW SWITCHING ────────────────────────────────────────────
function switchAuthView(viewName) {
  authState.view = viewName;

  aQa('.auth-view').forEach(v => v.classList.remove('active'));
  const target = document.querySelector(`.auth-view[data-auth-view="${viewName}"]`);
  if (target) target.classList.add('active');

  // Switcher (Entrar / Criar conta) só aparece nas duas telas principais
  const switcher = aEl('authSwitcher');
  if (switcher) {
    switcher.style.display = (viewName === 'login' || viewName === 'signup') ? 'flex' : 'none';
  }
  if (viewName === 'login' || viewName === 'signup') {
    aEl('authTabLogin').classList.toggle('active', viewName === 'login');
    aEl('authTabSignup').classList.toggle('active', viewName === 'signup');
  }

  // Foco no primeiro campo visível, sem forçar scroll agressivo
  const firstInput = target && target.querySelector('input');
  if (firstInput) setTimeout(() => firstInput.focus({ preventScroll: true }), 50);
}

function initAuthNav() {
  aQa('[data-auth-nav]').forEach(btn => {
    btn.addEventListener('click', () => switchAuthView(btn.dataset.authNav));
  });
}

// ── SIGNUP: MEDIDOR DE FORÇA DA SENHA (live) ─────────────────
function initStrengthMeter() {
  const input = aEl('signupPassword');
  const wrap  = aEl('signupStrengthWrap');
  const fill  = aEl('strengthFill');
  const label = aEl('strengthLabel');
  if (!input) return;

  input.addEventListener('input', () => {
    if (!input.value) {
      wrap.style.display = 'none';
      return;
    }
    wrap.style.display = 'flex';
    const s = passwordStrength(input.value);
    fill.style.width = s.percent + '%';
    fill.style.background = s.color;
    label.textContent = s.label;
    label.style.color = s.color;
  });
}

// ── LOGIN ─────────────────────────────────────────────────────
function validateLoginForm() {
  let ok = true;
  const email = aEl('loginEmail').value.trim();
  const pw    = aEl('loginPassword').value;

  if (!email) {
    setFieldError('loginEmail', 'errLoginEmail', t2('auth_err_email_required'));
    ok = false;
  } else if (!isValidEmail(email)) {
    setFieldError('loginEmail', 'errLoginEmail', t2('auth_err_email_invalid'));
    ok = false;
  }

  if (!pw) {
    setFieldError('loginPassword', 'errLoginPassword', t2('auth_err_password_required'));
    ok = false;
  }

  return ok;
}

async function handleLoginSubmit(e) {
  e.preventDefault();
  if (authState.submitting) return;

  const form = aEl('formLogin');
  clearFormErrors(form);
  clearFormMessage('authLoginMsg');

  if (!validateLoginForm()) return;

  authState.submitting = true;
  setButtonLoading('btnLoginSubmit', true);

  const email = aEl('loginEmail').value.trim();
  const password = aEl('loginPassword').value;

  const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });

  setButtonLoading('btnLoginSubmit', false);
  authState.submitting = false;

  if (error) {
    setFormMessage('authLoginMsg', friendlyAuthError(error));
    return;
  }

  // onAuthStateChange cuida de esconder o gate e entrar no app
}

// ── CADASTRO ─────────────────────────────────────────────────
function validateSignupForm() {
  let ok = true;
  const name       = aEl('signupName').value.trim();
  const email      = aEl('signupEmail').value.trim();
  const birthdate  = aEl('signupBirthdate').value;
  const country    = aEl('signupCountry').value;
  const pw    = aEl('signupPassword').value;
  const pw2   = aEl('signupPasswordConfirm').value;
  const terms = aEl('signupTerms').checked;

  if (!name) {
    setFieldError('signupName', 'errSignupName', t2('auth_err_name_required'));
    ok = false;
  }

  if (!email) {
    setFieldError('signupEmail', 'errSignupEmail', t2('auth_err_email_required'));
    ok = false;
  } else if (!isValidEmail(email)) {
    setFieldError('signupEmail', 'errSignupEmail', t2('auth_err_email_invalid'));
    ok = false;
  }

  const phone = aEl('signupPhone').value.trim();
  if (!phone) {
    setFieldError('signupPhone', 'errSignupPhone', t2('auth_err_phone_required'));
    ok = false;
  }

  if (!birthdate) {
    setFieldError('signupBirthdate', 'errSignupBirthdate', t2('auth_err_birthdate_required'));
    ok = false;
  } else {
    const check = validateBirthdate(birthdate);
    if (!check.valid) {
      const key = check.reason === 'future' ? 'auth_err_birthdate_future'
        : check.reason === 'underage' ? 'auth_err_birthdate_underage'
        : 'auth_err_birthdate_invalid';
      setFieldError('signupBirthdate', 'errSignupBirthdate', t2(key));
      ok = false;
    }
  }

  if (!country) {
    setFieldError('signupCountry', 'errSignupCountry', t2('auth_err_country_required'));
    ok = false;
  }

  if (!pw) {
    setFieldError('signupPassword', 'errSignupPassword', t2('auth_err_password_required'));
    ok = false;
  } else if (pw.length < 8) {
    setFieldError('signupPassword', 'errSignupPassword', t2('auth_err_password_short'));
    ok = false;
  }

  if (pw && pw2 && pw !== pw2) {
    setFieldError('signupPasswordConfirm', 'errSignupPasswordConfirm', t2('auth_err_password_mismatch'));
    ok = false;
  } else if (!pw2) {
    setFieldError('signupPasswordConfirm', 'errSignupPasswordConfirm', t2('auth_err_password_confirm_required'));
    ok = false;
  }

  if (!terms) {
    setFieldError('signupTerms', 'errSignupTerms', t2('auth_err_terms_required'));
    ok = false;
  }

  return ok;
}

async function handleSignupSubmit(e) {
  e.preventDefault();
  if (authState.submitting) return;

  const form = aEl('formSignup');
  clearFormErrors(form);
  clearFormMessage('authSignupMsg');

  if (!validateSignupForm()) return;

  authState.submitting = true;
  setButtonLoading('btnSignupSubmit', true);

  const name      = aEl('signupName').value.trim();
  const email     = aEl('signupEmail').value.trim();
  const phone     = aEl('signupPhone').value.trim();
  const birthdate = aEl('signupBirthdate').value;
  const country   = aEl('signupCountry').value;
  const password  = aEl('signupPassword').value;

  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password,
    options: { data: { full_name: name, phone, birthdate, country } },
  });

  setButtonLoading('btnSignupSubmit', false);
  authState.submitting = false;

  if (error) {
    setFormMessage('authSignupMsg', friendlyAuthError(error));
    return;
  }

  // Se o projeto exige confirmação de e-mail, não há sessão ainda —
  // mostramos a tela de "verifique seu e-mail". Se confirmação estiver
  // desativada no Supabase, onAuthStateChange já loga o usuário direto.
  if (data && data.user && !data.session) {
    showCheckEmail(email, 'signup');
  }
}

// ── RECUPERAR SENHA ───────────────────────────────────────────
function validateForgotForm() {
  let ok = true;
  const email = aEl('forgotEmail').value.trim();

  if (!email) {
    setFieldError('forgotEmail', 'errForgotEmail', t2('auth_err_email_required'));
    ok = false;
  } else if (!isValidEmail(email)) {
    setFieldError('forgotEmail', 'errForgotEmail', t2('auth_err_email_invalid'));
    ok = false;
  }

  return ok;
}

async function handleForgotSubmit(e) {
  e.preventDefault();
  if (authState.submitting) return;

  const form = aEl('formForgot');
  clearFormErrors(form);
  clearFormMessage('authForgotMsg');

  if (!validateForgotForm()) return;

  authState.submitting = true;
  setButtonLoading('btnForgotSubmit', true);

  const email = aEl('forgotEmail').value.trim();

  const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
    redirectTo: window.location.origin + window.location.pathname,
  });

  setButtonLoading('btnForgotSubmit', false);
  authState.submitting = false;

  if (error) {
    setFormMessage('authForgotMsg', friendlyAuthError(error));
    return;
  }

  showCheckEmail(email, 'forgot');
}

function showCheckEmail(email, origin) {
  const titleKey = origin === 'forgot' ? 'auth_check_title_forgot' : 'auth_check_title_signup';
  const textKey  = origin === 'forgot' ? 'auth_check_text_forgot'  : 'auth_check_text_signup';

  aEl('checkEmailTitle').textContent = t2(titleKey);
  // O template i18n usa {email} como placeholder — inserimos o valor real com escape básico
  const safeEmail = String(email).replace(/</g, '&lt;').replace(/>/g, '&gt;');
  aEl('checkEmailText').innerHTML = t2(textKey).replace('{email}', `<strong>${safeEmail}</strong>`);

  switchAuthView('check-email');
}

// ── SIGN OUT ──────────────────────────────────────────────────
function initSignOut() {
  const btn = aEl('btnSignOut');
  if (!btn) return;
  btn.addEventListener('click', async () => {
    await supabaseClient.auth.signOut();
    // onAuthStateChange mostra o gate de novo
  });
}

// ── ENTRAR / SAIR DO APP CONFORME SESSÃO ─────────────────────
function populateProfile(user) {
  if (!user) return;
  const meta = user.user_metadata || {};
  const name  = meta.full_name || user.email.split('@')[0];
  const email = user.email || '—';
  const phone = meta.phone || '—';
  const initials = name.trim().split(/\s+/).map(p => p[0]).slice(0, 2).join('').toUpperCase();

  const avatarEl = aEl('profileAvatar');
  const nameEl   = aEl('profileName');
  const fullNameEl = aEl('profileFullName');
  const emailEl = aEl('profileEmail');
  const phoneEl = aEl('profilePhone');

  if (avatarEl) avatarEl.textContent = initials || '—';
  if (nameEl) nameEl.textContent = name;
  if (fullNameEl) fullNameEl.textContent = name;
  if (emailEl) emailEl.textContent = email;
  if (phoneEl) phoneEl.textContent = phone;
}

function enterApp(user) {
  populateProfile(user);
  const gate = aEl('authGate');
  const app  = aEl('app');
  if (gate) gate.hidden = true;
  if (app) app.style.display = 'flex';
  if (window.RotaApp && typeof window.RotaApp.init === 'function') {
    window.RotaApp.init(user);
  }
}

function exitApp() {
  const gate = aEl('authGate');
  const app  = aEl('app');
  if (app) app.style.display = 'none';
  if (window.RotaApp && typeof window.RotaApp.reset === 'function') {
    window.RotaApp.reset();
  }
  if (gate) {
    gate.hidden = false;
    switchAuthView('login');
    // Limpa campos sensíveis ao sair
    ['formLogin', 'formSignup', 'formForgot'].forEach(id => {
      const f = aEl(id);
      if (f) f.reset();
    });
  }
}

function hideBootLoader() {
  const boot = aEl('authBoot');
  if (boot) boot.hidden = true;
}

// ── i18n LOCAL (fallback caso as chaves ainda não existam em i18n.js) ──
function t2(key) {
  if (typeof t === 'function') {
    const val = t(key);
    if (val && val !== key) return val;
  }
  return AUTH_FALLBACK_STRINGS[key] || key;
}

const AUTH_FALLBACK_STRINGS = {
  auth_err_email_required: 'Informe seu e-mail.',
  auth_err_email_invalid: 'Digite um e-mail válido.',
  auth_err_phone_required: 'Informe seu telefone.',
  auth_err_password_required: 'Informe sua senha.',
  auth_err_password_short: 'A senha precisa ter no mínimo 8 caracteres.',
  auth_err_password_mismatch: 'As senhas não coincidem.',
  auth_err_password_confirm_required: 'Confirme sua senha.',
  auth_err_name_required: 'Informe seu nome completo.',
  auth_err_terms_required: 'Você precisa aceitar os termos para continuar.',
  auth_err_birthdate_required: 'Informe sua data de nascimento.',
  auth_err_birthdate_invalid: 'Digite uma data válida.',
  auth_err_birthdate_future: 'A data de nascimento não pode ser no futuro.',
  auth_err_birthdate_underage: 'Você precisa ter pelo menos 18 anos para se cadastrar.',
  auth_err_country_required: 'Selecione seu país.',
  auth_check_title_signup: 'Verifique seu e-mail',
  auth_check_text_signup: 'Enviamos um link de confirmação para {email}. Abra sua caixa de entrada para ativar sua conta.',
  auth_check_title_forgot: 'Link enviado',
  auth_check_text_forgot: 'Enviamos um link de redefinição de senha para {email}.',
  strength_0: 'Muito fraca',
  strength_1: 'Fraca',
  strength_2: 'Razoável',
  strength_3: 'Forte',
  strength_4: 'Muito forte',
};

// ── INIT ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initAuthNav();
  initPasswordToggles();
  initStrengthMeter();
  initSignOut();

  aEl('formLogin').addEventListener('submit', handleLoginSubmit);
  aEl('formSignup').addEventListener('submit', handleSignupSubmit);
  aEl('formForgot').addEventListener('submit', handleForgotSubmit);

  // Limpa erro do campo assim que o usuário volta a digitar
  [
    ['loginEmail', 'errLoginEmail'], ['loginPassword', 'errLoginPassword'],
    ['signupName', 'errSignupName'], ['signupEmail', 'errSignupEmail'],
    ['signupPhone', 'errSignupPhone'],
    ['signupBirthdate', 'errSignupBirthdate'],
    ['signupPassword', 'errSignupPassword'], ['signupPasswordConfirm', 'errSignupPasswordConfirm'],
    ['forgotEmail', 'errForgotEmail'],
  ].forEach(([inputId, errId]) => {
    const input = aEl(inputId);
    if (input) input.addEventListener('input', () => clearFieldError(inputId, errId));
  });
  const termsInput = aEl('signupTerms');
  if (termsInput) termsInput.addEventListener('change', () => clearFieldError('signupTerms', 'errSignupTerms'));
  const countrySelect = aEl('signupCountry');
  if (countrySelect) countrySelect.addEventListener('change', () => clearFieldError('signupCountry', 'errSignupCountry'));

  // Restringe o seletor nativo de data a um intervalo plausível (reforça a validação em JS)
  const birthdateInput = aEl('signupBirthdate');
  if (birthdateInput) {
    const now = new Date();
    const maxDate = now.toISOString().slice(0, 10);
    const minDate = `${now.getFullYear() - 120}-01-01`;
    birthdateInput.max = maxDate;
    birthdateInput.min = minDate;
  }

  // Garante que o select de país já apareça preenchido, mesmo antes do applyI18n rodar
  if (typeof populateCountrySelect === 'function') populateCountrySelect('signupCountry');

  // App começa escondido — só aparece se houver sessão válida
  const app = aEl('app');
  if (app) app.style.display = 'none';

  // Checa sessão existente.
  // OBS: getSession() usa a Web Locks API por baixo dos panos e pode ficar
  // pendurado (nunca resolver) quando a aba carrega em segundo plano ou o
  // navegador posterga a liberação do lock — bug conhecido do supabase-js.
  // Sintoma: o app fica com display:none pra sempre até o usuário trocar de
  // aba e voltar (o evento de foco força o lock a liberar). Por isso usamos
  // uma flag `resolved` + timeout de segurança, e tratamos também o evento
  // INITIAL_SESSION do onAuthStateChange, que costuma disparar mesmo quando
  // getSession() trava.
  let sessionResolved = false;

  const settleSession = (session) => {
    if (sessionResolved) return;
    sessionResolved = true;
    hideBootLoader();
    if (session && session.user) {
      enterApp(session.user);
    } else {
      aEl('authGate').hidden = false;
    }
  };

  supabaseClient.auth.getSession().then(({ data }) => {
    settleSession(data && data.session);
  });

  // Timeout de segurança: se getSession() não resolver em 4s, não deixa o
  // app travado em branco — mostra o gate de login (o onAuthStateChange
  // ainda pode chamar enterApp depois, se a sessão existir e destravar).
  setTimeout(() => settleSession(null), 4000);

  // Reage a login / logout / refresh de token em tempo real
  supabaseClient.auth.onAuthStateChange((event, session) => {
    if ((event === 'SIGNED_IN' || event === 'INITIAL_SESSION') && session && session.user) {
      sessionResolved = true;
      hideBootLoader();
      enterApp(session.user);
    } else if (event === 'SIGNED_OUT') {
      exitApp();
    }
  });
});
