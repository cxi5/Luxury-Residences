/* ============================================================
   LUXURY RESIDENCES — i18n SYSTEM
   ============================================================ */

// ── TRANSLATIONS ─────────────────────────────────────────────
const TRANSLATIONS = {
  pt: {
    // months
    months: ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'],

    // hero
    hero_eyebrow:   'Bem-vindo de volta',
    hero_title1:    'Onde cada',
    hero_title2:    'detalhe importa',
    hero_sub:       'Rio de Janeiro · 5 estrelas',

    // search bar
    checkin:        'Check-in',
    checkout:       'Check-out',
    guests:         'Hóspedes',
    select:         'Selecionar',
    search_btn:     'Buscar quartos',

    // listing
    our_rooms:      'Nossos quartos',
    filter_all:     'Todos',
    filter_suite:   'Suítes',
    filter_deluxe:  'Deluxe',
    filter_penth:   'Penthouse',
    filter_favs:    '♥ Favoritos',

    // amenities strip
    wifi:           'Wi-Fi Premium',
    concierge_24:   'Concierge 24h',
    spa_wellness:   'Spa & Wellness',
    gastronomy:     'Gastronomia',
    transfer_vip:   'Transfer VIP',

    // nav
    nav_discover:   'Descobrir',
    nav_stays:      'Estadias',
    nav_services:   'Serviços',
    nav_profile:    'Perfil',

    // room card
    guest_singular: 'hóspede',
    guest_plural:   'hóspedes',
    per_night:      'por noite',
    night_singular: 'noite',
    night_plural:   'noites',
    available:      'Disponível',
    booked_dates:   'Ocupado nessas datas',
    booked_until:   'Ocupado até',
    book_btn:       'Reservar',
    favorite_label: 'Favoritar',
    photos_badge:   'fotos',
    no_rooms:       'Nenhum quarto nesta categoria',
    no_favs:        'Nenhum quarto favoritado ainda. Toque no ♥ para salvar.',

    // room detail
    rd_area:        'Área',
    rd_floor:       'Andar',
    rd_capacity:    'Capacidade',
    rd_view:        'Vista',
    rd_amenities:   'Comodidades incluídas',
    rd_reviews:     'Avaliações',
    rd_total:       'total',
    rd_book:        'Reservar este quarto',
    rd_unavailable: 'Indisponível',

    // booking flow
    book_header:    'Finalizar reserva',
    bf_guest_data:  'Dados do hóspede',
    bf_name_lbl:    'Nome completo',
    bf_name_ph:     'Como no documento de identificação',
    bf_email_lbl:   'Email',
    bf_email_ph:    'seu@email.com',
    bf_phone_lbl:   'Telefone',
    bf_phone_ph:    '+55 (00) 00000-0000',
    bf_notes_lbl:   'Pedidos especiais (opcional)',
    bf_notes_ph:    'Aniversário, restrições alimentares, chegada antecipada...',
    bf_confirm_btn: 'Confirmar reserva',
    bf_back:        'Voltar',
    bf_taxes:       'Taxas e serviços (12%)',
    bf_total:       'Total',
    bf_price_row:   'por noite', // reuse
    bf_err_name:    'Informe o nome completo.',
    bf_err_email:   'Informe um email válido.',
    bf_err_phone:   'Informe o telefone.',

    // dates modal
    dates_title:    'Selecionar datas',
    dates_checkin:  'Check-in',
    dates_checkout: 'Check-out',
    dates_confirm:  'Confirmar datas',
    dates_cancel:   'Cancelar',
    dates_invalid:  'Selecione datas válidas',

    // guests modal
    guests_title:   'Hóspedes',
    adults_label:   'Adultos',
    adults_sub:     '13+ anos',
    children_label: 'Crianças',
    children_sub:   'Até 12 anos',
    guests_confirm: 'Confirmar',
    guests_cancel:  'Cancelar',

    // confirm modal
    confirm_title:  'Reserva confirmada',
    confirm_btn:    'Ver minhas estadias',

    // stays screen
    stays_title:    'Minhas estadias',
    stays_sub:      'Histórico e reservas ativas',
    stays_upcoming: 'Próximas',
    stays_past:     'Histórico',
    stays_checkin:  'Check-in',
    stays_checkout: 'Check-out',
    stay_confirmed: 'Confirmada',
    stay_past:      'Concluída',
    stay_edit:      'Editar',
    stay_cancel:    'Cancelar',
    stay_review:    'Avaliar',
    no_upcoming:    'Nenhuma estadia próxima. Reserve agora.',
    no_history:     'Nenhum histórico disponível.',
    toast_cancelled:'Reserva cancelada',
    toast_updated:  'Reserva atualizada ✓',

    // edit booking modal
    edit_title:     'Editar reserva',
    edit_checkin:   'Check-in',
    edit_checkout:  'Check-out',
    edit_save:      'Salvar alterações',
    edit_cancel:    'Cancelar',
    edit_conflict:  'Essas datas conflitam com outra reserva deste quarto.',
    edit_invalid:   'Selecione datas válidas',
    edit_conflict_toast: 'Resolva o conflito de datas antes de salvar',
    edit_not_found: 'Reserva não encontrada',
    est_total:      'Total estimado',

    // review modal
    review_title:   'Avaliar estadia',
    review_lbl:     'Sua avaliação',
    review_ph:      'Conte como foi sua experiência...',
    review_submit:  'Enviar avaliação',
    review_cancel:  'Cancelar',
    review_empty:   'Escreva sua avaliação antes de enviar',
    review_author:  'Você',
    review_thanks:  'Avaliação enviada. Obrigado!',

    // services screen
    services_title: 'Serviços',
    services_sub:   'Solicite durante sua estadia',
    svc_spa:        'Spa',
    svc_spa_desc:   'Massagens e tratamentos',
    svc_dinner:     'Jantar',
    svc_dinner_desc:'Room service premium',
    svc_transfer:   'Transfer',
    svc_trans_desc: 'Aeroporto e passeios',
    svc_laundry:    'Lavanderia',
    svc_laund_desc: 'Entrega em 4 horas',
    svc_breakfast:  'Café da manhã',
    svc_brkf_desc:  'No quarto ou restaurante',
    svc_concierge:  'Concierge',
    svc_conc_desc:  'Assistência personalizada',
    srp_request:    'Solicitar',
    srp_date_lbl:   'Data e horário desejado',
    srp_notes_lbl:  'Observações',
    srp_notes_ph:   'Preferências, alergias, pedidos especiais...',
    srp_confirm:    'Confirmar solicitação',
    svc_success:    'solicitado com sucesso',
    svc_date_req:   'Selecione uma data e horário',

    // profile screen
    profile_tier:       'Membro Gold · 4 estadias',
    profile_account:    'Conta',
    profile_name_lbl:   'Nome completo',
    profile_email_lbl:  'Email',
    profile_phone_lbl:  'Telefone',
    profile_prefs:      'Preferências',
    profile_lang:       'Idioma / Language',
    profile_currency:   'Moeda / Currency',
    profile_notif:      'Notificações',
    profile_checkin:    'Check-in digital',
    profile_loyalty:    'Fidelidade',
    profile_support:    'Suporte',
    profile_help:       'Central de ajuda',
    profile_concierge:  'Falar com concierge',
    profile_logout:     'Sair da conta',
    loyalty_pts_to:     'pts para Platinum',
    loyalty_total:      'pts',

    // search result label
    search_label_nights: 'noite',
    search_label_nights_pl: 'noites',

    // toast messages
    toast_not_avail:    'Este quarto não está disponível nas datas selecionadas',
    toast_search_upd:   'Resultados atualizados',
    toast_date_req:     'Selecione uma data e horário',

    // PWA install bar
    pwa_install_msg:    'Instalar app na tela inicial',
    pwa_dismiss:        'Agora não',
    pwa_install:        'Instalar',
  },

  en: {
    months: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],

    hero_eyebrow:   'Welcome back',
    hero_title1:    'Where every',
    hero_title2:    'detail matters',
    hero_sub:       'Rio de Janeiro · 5 stars',

    checkin:        'Check-in',
    checkout:       'Check-out',
    guests:         'Guests',
    select:         'Select',
    search_btn:     'Search rooms',

    our_rooms:      'Our rooms',
    filter_all:     'All',
    filter_suite:   'Suites',
    filter_deluxe:  'Deluxe',
    filter_penth:   'Penthouse',
    filter_favs:    '♥ Favorites',

    wifi:           'Premium Wi-Fi',
    concierge_24:   '24h Concierge',
    spa_wellness:   'Spa & Wellness',
    gastronomy:     'Fine Dining',
    transfer_vip:   'VIP Transfer',

    nav_discover:   'Discover',
    nav_stays:      'Stays',
    nav_services:   'Services',
    nav_profile:    'Profile',

    guest_singular: 'guest',
    guest_plural:   'guests',
    per_night:      'per night',
    night_singular: 'night',
    night_plural:   'nights',
    available:      'Available',
    booked_dates:   'Unavailable for these dates',
    booked_until:   'Booked until',
    book_btn:       'Reserve',
    favorite_label: 'Favorite',
    photos_badge:   'photos',
    no_rooms:       'No rooms in this category',
    no_favs:        'No favorites yet. Tap ♥ to save a room.',

    rd_area:        'Area',
    rd_floor:       'Floor',
    rd_capacity:    'Capacity',
    rd_view:        'View',
    rd_amenities:   'Included amenities',
    rd_reviews:     'Reviews',
    rd_total:       'total',
    rd_book:        'Reserve this room',
    rd_unavailable: 'Unavailable',

    book_header:    'Complete booking',
    bf_guest_data:  'Guest details',
    bf_name_lbl:    'Full name',
    bf_name_ph:     'As shown on your ID',
    bf_email_lbl:   'Email',
    bf_email_ph:    'your@email.com',
    bf_phone_lbl:   'Phone',
    bf_phone_ph:    '+1 (000) 000-0000',
    bf_notes_lbl:   'Special requests (optional)',
    bf_notes_ph:    'Anniversary, dietary restrictions, early arrival...',
    bf_confirm_btn: 'Confirm booking',
    bf_back:        'Back',
    bf_taxes:       'Taxes & fees (12%)',
    bf_total:       'Total',
    bf_price_row:   'per night',
    bf_err_name:    'Please enter your full name.',
    bf_err_email:   'Please enter a valid email.',
    bf_err_phone:   'Please enter your phone number.',

    dates_title:    'Select dates',
    dates_checkin:  'Check-in',
    dates_checkout: 'Check-out',
    dates_confirm:  'Confirm dates',
    dates_cancel:   'Cancel',
    dates_invalid:  'Please select valid dates',

    guests_title:   'Guests',
    adults_label:   'Adults',
    adults_sub:     '13+ years',
    children_label: 'Children',
    children_sub:   'Up to 12 years',
    guests_confirm: 'Confirm',
    guests_cancel:  'Cancel',

    confirm_title:  'Booking confirmed',
    confirm_btn:    'View my stays',

    stays_title:    'My Stays',
    stays_sub:      'Active bookings & history',
    stays_upcoming: 'Upcoming',
    stays_past:     'History',
    stays_checkin:  'Check-in',
    stays_checkout: 'Check-out',
    stay_confirmed: 'Confirmed',
    stay_past:      'Completed',
    stay_edit:      'Edit',
    stay_cancel:    'Cancel',
    stay_review:    'Review',
    no_upcoming:    'No upcoming stays. Book now.',
    no_history:     'No history available.',
    toast_cancelled:'Booking cancelled',
    toast_updated:  'Booking updated ✓',

    edit_title:     'Edit booking',
    edit_checkin:   'Check-in',
    edit_checkout:  'Check-out',
    edit_save:      'Save changes',
    edit_cancel:    'Cancel',
    edit_conflict:  'These dates conflict with another booking for this room.',
    edit_invalid:   'Please select valid dates',
    edit_conflict_toast: 'Please resolve the date conflict before saving',
    edit_not_found: 'Booking not found',
    est_total:      'Estimated total',

    review_title:   'Rate your stay',
    review_lbl:     'Your review',
    review_ph:      'Tell us about your experience...',
    review_submit:  'Submit review',
    review_cancel:  'Cancel',
    review_empty:   'Please write a review before submitting',
    review_author:  'You',
    review_thanks:  'Review submitted. Thank you!',

    services_title: 'Services',
    services_sub:   'Request during your stay',
    svc_spa:        'Spa',
    svc_spa_desc:   'Massages & treatments',
    svc_dinner:     'Dinner',
    svc_dinner_desc:'Premium room service',
    svc_transfer:   'Transfer',
    svc_trans_desc: 'Airport & tours',
    svc_laundry:    'Laundry',
    svc_laund_desc: '4-hour delivery',
    svc_breakfast:  'Breakfast',
    svc_brkf_desc:  'In-room or restaurant',
    svc_concierge:  'Concierge',
    svc_conc_desc:  'Personalized assistance',
    srp_request:    'Request',
    srp_date_lbl:   'Preferred date & time',
    srp_notes_lbl:  'Notes',
    srp_notes_ph:   'Preferences, allergies, special requests...',
    srp_confirm:    'Confirm request',
    svc_success:    'requested successfully',
    svc_date_req:   'Please select a date and time',

    profile_tier:       'Gold Member · 4 stays',
    profile_account:    'Account',
    profile_name_lbl:   'Full name',
    profile_email_lbl:  'Email',
    profile_phone_lbl:  'Phone',
    profile_prefs:      'Preferences',
    profile_lang:       'Language / Idioma',
    profile_currency:   'Currency / Moeda',
    profile_notif:      'Notifications',
    profile_checkin:    'Digital check-in',
    profile_loyalty:    'Loyalty',
    profile_support:    'Support',
    profile_help:       'Help center',
    profile_concierge:  'Talk to concierge',
    profile_logout:     'Sign out',
    loyalty_pts_to:     'pts to Platinum',
    loyalty_total:      'pts',

    search_label_nights:    'night',
    search_label_nights_pl: 'nights',

    toast_not_avail:    'This room is not available for the selected dates',
    toast_search_upd:   'Results updated',
    toast_date_req:     'Please select a date and time',

    pwa_install_msg:    'Install app on home screen',
    pwa_dismiss:        'Not now',
    pwa_install:        'Install',
  },
};

// ── CURRENCY CONFIG ──────────────────────────────────────────
const CURRENCIES = {
  BRL: { symbol: 'R$',  locale: 'pt-BR', decimals: 0 },
  KZ:  { symbol: 'Kz',  locale: 'pt-AO', decimals: 0 },
  USD: { symbol: 'US$', locale: 'en-US', decimals: 2 },
  EUR: { symbol: '€',   locale: 'de-DE', decimals: 2 },
};

// ── STATE — default EN ────────────────────────────────────────
const i18nState = {
  language: localStorage.getItem('app-lang') || 'en',
  currency: localStorage.getItem('app-currency') || 'KZ',
};

// ── HELPERS ──────────────────────────────────────────────────
function t(key) {
  const dict = TRANSLATIONS[i18nState.language] || TRANSLATIONS.en;
  return key in dict ? dict[key] : (TRANSLATIONS.en[key] || key);
}

function formatCurrency(value) {
  const cfg = CURRENCIES[i18nState.currency] || CURRENCIES.KZ;
  const num = Number(value).toLocaleString(cfg.locale, {
    minimumFractionDigits: cfg.decimals,
    maximumFractionDigits: cfg.decimals,
  });
  return `${cfg.symbol} ${num}`;
}

function formatDate(str) {
  if (!str) return '—';
  const [y, m, d] = str.split('-');
  const months = t('months');
  return `${d} ${months[parseInt(m) - 1]} ${y}`;
}

// ── APPLY TRANSLATIONS TO DOM ────────────────────────────────
function applyI18n() {
  const lang = i18nState.language;

  // Helper: set text if element exists
  const setText = (id, key) => { const e = document.getElementById(id); if (e) e.textContent = t(key); };
  const setAttr = (id, attr, key) => { const e = document.getElementById(id); if (e) e.setAttribute(attr, t(key)); };
  const setQText = (sel, key) => { const e = document.querySelector(sel); if (e) e.textContent = t(key); };
  const setQAttr = (sel, attr, key) => { const e = document.querySelector(sel); if (e) e.setAttribute(attr, t(key)); };

  // Hero
  setQText('.hero-eyebrow', 'hero_eyebrow');
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) heroTitle.innerHTML = `${t('hero_title1')}<br><em>${t('hero_title2')}</em>`;
  setQText('.hero-sub', 'hero_sub');

  // Search bar
  document.querySelectorAll('.sf-label').forEach((el, i) => {
    const keys = ['checkin','checkout','guests'];
    if (keys[i]) el.textContent = t(keys[i]);
  });
  const dispCI = document.getElementById('displayCheckin');
  if (dispCI && dispCI.textContent === 'Selecionar' || (dispCI && dispCI.textContent === 'Select')) {
    dispCI.textContent = t('select');
  }
  const dispCO = document.getElementById('displayCheckout');
  if (dispCO && (dispCO.textContent === 'Selecionar' || dispCO.textContent === 'Select')) {
    dispCO.textContent = t('select');
  }
  const searchBtn = document.getElementById('btnSearch');
  if (searchBtn) {
    const svg = searchBtn.querySelector('svg');
    searchBtn.textContent = '';
    if (svg) searchBtn.appendChild(svg);
    searchBtn.append(' ' + t('search_btn'));
  }

  // Listing label — only if showing default "our rooms" (not a search result)
  setText('listingLabel', 'our_rooms');

  // Filter chips
  const chipMap = { all: 'filter_all', suite: 'filter_suite', deluxe: 'filter_deluxe', penthouse: 'filter_penth', favorites: 'filter_favs' };
  document.querySelectorAll('.chip[data-filter]').forEach(c => {
    const key = chipMap[c.dataset.filter];
    if (key) c.textContent = t(key);
  });

  // Amenities strip
  const amenKeys = ['wifi','concierge_24','spa_wellness','gastronomy','transfer_vip'];
  document.querySelectorAll('.amenity-item span').forEach((el, i) => {
    if (amenKeys[i]) el.textContent = t(amenKeys[i]);
  });

  // Screens — static headers
  setQText('#screen-rooms .subpage-header span:last-child', 'our_rooms'); // updated on room open
  setQText('#screen-book .subpage-header span:last-child', 'book_header');
  setQText('#screen-stays .screen-title', 'stays_title');
  setQText('#screen-stays .screen-sub', 'stays_sub');
  setQText('#screen-services .screen-title', 'services_title');
  setQText('#screen-services .screen-sub', 'services_sub');

  // Stays tabs
  const stayTabs = document.querySelectorAll('.stay-tab');
  if (stayTabs[0]) stayTabs[0].textContent = t('stays_upcoming');
  if (stayTabs[1]) stayTabs[1].textContent = t('stays_past');

  // Services grid
  const svcKeys = [
    ['svc_spa','svc_spa_desc'],
    ['svc_dinner','svc_dinner_desc'],
    ['svc_transfer','svc_trans_desc'],
    ['svc_laundry','svc_laund_desc'],
    ['svc_breakfast','svc_brkf_desc'],
    ['svc_concierge','svc_conc_desc'],
  ];
  document.querySelectorAll('.service-card').forEach((card, i) => {
    const name = card.querySelector('.service-name');
    const desc = card.querySelector('.service-desc');
    if (name && svcKeys[i]) name.textContent = t(svcKeys[i][0]);
    if (desc && svcKeys[i]) desc.textContent = t(svcKeys[i][1]);
  });

  // Service request panel
  const srpDateLabel = document.querySelector('#serviceRequestPanel label:first-of-type');
  if (srpDateLabel) srpDateLabel.textContent = t('srp_date_lbl');
  const srpNotesLabel = document.querySelector('#serviceRequestPanel label:last-of-type');
  if (srpNotesLabel) srpNotesLabel.textContent = t('srp_notes_lbl');
  setAttr('serviceNotes','placeholder','srp_notes_ph');
  setText('btnSendService','srp_confirm');

  // Profile
  setQText('.profile-tier', 'profile_tier');
  const psSections = document.querySelectorAll('.ps-title');
  const psTitleKeys = ['profile_account','profile_prefs','profile_loyalty','profile_support'];
  psSections.forEach((el, i) => { if (psTitleKeys[i]) el.textContent = t(psTitleKeys[i]); });

  const psItems = document.querySelectorAll('.profile-section');
  // Account section items
  const accountItems = psItems[0] ? psItems[0].querySelectorAll('.ps-item > span:first-child') : [];
  const accountKeys  = ['profile_name_lbl','profile_email_lbl','profile_phone_lbl'];
  accountItems.forEach((el, i) => { if (accountKeys[i]) el.textContent = t(accountKeys[i]); });

  // Prefs section items
  const prefItems = psItems[1] ? psItems[1].querySelectorAll('.ps-item > span:first-child') : [];
  const prefKeys  = ['profile_lang','profile_currency','profile_notif','profile_checkin'];
  prefItems.forEach((el, i) => { if (prefKeys[i]) el.textContent = t(prefKeys[i]); });

  // Loyalty
  setQText('.lc-legend span:last-child', 'loyalty_total');
  const ptsToEl = document.querySelector('.lc-legend span:first-child');
  if (ptsToEl) ptsToEl.textContent = `600 ${t('loyalty_pts_to')}`;

  // Support items
  const suppItems = psItems[3] ? psItems[3].querySelectorAll('.ps-item > span:first-child') : [];
  const suppKeys  = ['profile_help','profile_concierge','profile_logout'];
  suppItems.forEach((el, i) => { if (suppKeys[i]) el.textContent = t(suppKeys[i]); });

  // Bottom nav
  const navKeys = ['nav_discover','nav_stays','nav_services','nav_profile'];
  document.querySelectorAll('.nav-btn span:first-of-type').forEach((el, i) => {
    if (navKeys[i]) el.textContent = t(navKeys[i]);
  });

  // Modals — dates
  setQText('#modalDates .modal-title', 'dates_title');
  const dateLabels = document.querySelectorAll('#modalDates .field-dark label');
  if (dateLabels[0]) dateLabels[0].textContent = t('dates_checkin');
  if (dateLabels[1]) dateLabels[1].textContent = t('dates_checkout');
  setText('btnConfirmDates','dates_confirm');
  setText('btnCancelDates','dates_cancel');

  // Modals — guests
  setQText('#modalGuests .modal-title', 'guests_title');
  const counterLabels = document.querySelectorAll('.counter-label');
  if (counterLabels[0]) counterLabels[0].textContent = t('adults_label');
  if (counterLabels[1]) counterLabels[1].textContent = t('children_label');
  const counterSubs = document.querySelectorAll('.counter-sub');
  if (counterSubs[0]) counterSubs[0].textContent = t('adults_sub');
  if (counterSubs[1]) counterSubs[1].textContent = t('children_sub');
  setText('btnConfirmGuests','guests_confirm');
  setText('btnCancelGuests','guests_cancel');

  // Modals — confirm
  setQText('#modalConfirm .modal-title', 'confirm_title');
  setText('btnGoToStays','confirm_btn');

  // Modals — edit booking
  setQText('#modalEditBooking .modal-title', 'edit_title');
  const editLabels = document.querySelectorAll('#modalEditBooking .field-dark label');
  if (editLabels[0]) editLabels[0].textContent = t('edit_checkin');
  if (editLabels[1]) editLabels[1].textContent = t('edit_checkout');
  setText('btnSaveEditBooking','edit_save');
  setText('btnCancelEditBooking','edit_cancel');
  setQText('.etp-label', 'est_total');

  // Modals — review
  setQText('#modalReview .modal-title', 'review_title');
  const reviewLabel = document.querySelector('#modalReview .field-dark label');
  if (reviewLabel) reviewLabel.textContent = t('review_lbl');
  setAttr('reviewText','placeholder','review_ph');
  setText('btnSubmitReview','review_submit');
  setText('btnCancelReview','review_cancel');

  // PWA install bar
  setQText('.pwa-install-text span', 'pwa_install_msg');
  setText('pwaInstallDismiss','pwa_dismiss');
  setText('pwaInstallBtn','pwa_install');
}

function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  i18nState.language = lang;
  localStorage.setItem('app-lang', lang);
  applyI18n();
  if (typeof renderRooms === 'function') renderRooms();
  if (typeof renderStays === 'function') renderStays();
}

function setCurrency(currency) {
  if (!CURRENCIES[currency]) return;
  i18nState.currency = currency;
  localStorage.setItem('app-currency', currency);
  if (typeof renderRooms === 'function') renderRooms();
  if (typeof renderStays === 'function') renderStays();
}
