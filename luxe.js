/* ============================================================
   LUXURY RESIDENCES — GUEST APP SCRIPT
   ============================================================ */

// ── DATA ──────────────────────────────────────────────────────
const ROOMS_DATA = [
  {
    id: 101,
    name: 'Suite Presidencial',
    type: 'Suite Premium',
    tag: 'suite',
    price: 500,
    capacity: 2,
    area: '85m²',
    floor: '14º andar',
    view: 'Vista Mar',
    status: 'available',
    img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80',
    imgDetail: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    desc: 'A suite mais exclusiva do hotel, com sala de estar separada, varanda privativa e vista panorâmica do oceano. Decoração contemporânea com toques de arte angolana selecionada. Banheira de imersão e amenidades Hermès.',
    amenities: ['Varanda Privativa', 'Banheira Imersão', 'Sala de Estar', 'Minibar Premium', 'Smart TV 75"', 'Wi-Fi 1Gbps', 'Butler Exclusivo', 'Chegada VIP'],
    rating: 4.9,
    reviews: [
      { author: 'James K.', date: '2026-05-12', rating: 5, text: 'Absolutely flawless. The butler service was impeccable and the ocean view took our breath away every morning.' },
      { author: 'Mariana F.', date: '2026-04-03', rating: 5, text: 'A experiência mais luxuosa que já tive. O banheiro com banheira de imersão é simplesmente incrível.' },
      { author: 'Chen W.', date: '2026-03-18', rating: 5, text: 'Worth every penny. The VIP arrival and dedicated butler made us feel like royalty from the moment we stepped in.' },
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80', caption: 'Vista geral da suíte' },
      { url: 'https://images.unsplash.com/photo-1631049421450-348ccd8ee171?w=800&q=80', caption: 'Varanda privativa com vista mar' },
      { url: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80', caption: 'Banheira de imersão' },
      { url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80', caption: 'Sala de estar separada' },
      { url: 'https://images.unsplash.com/photo-1588362951121-3ee319b018b2?w=800&q=80', caption: 'Minibar & amenidades Hermès' },
    ],
  },
  {
    id: 102,
    name: 'Master Deluxe',
    type: 'Quarto Deluxe',
    tag: 'deluxe',
    price: 350,
    capacity: 2,
    area: '52m²',
    floor: '10º andar',
    view: 'Vista Piscina',
    status: 'available',
    img: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80',
    imgDetail: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80',
    desc: 'Elegância e conforto com cama king-size, decoração sofisticada e vista para as piscinas privativas. Perfeito para casais em busca de privacidade e requinte na medida certa.',
    amenities: ['Cama King-size', 'Smart TV 65"', 'Minibar', 'Roupão Hermès', 'Wi-Fi Premium', 'Café da Manhã Incluso'],
    rating: 4.7,
    reviews: [
      { author: 'Sofia L.', date: '2026-05-20', rating: 5, text: 'Perfect room for a romantic getaway. The king bed is incredibly comfortable and the pool view is stunning at night.' },
      { author: 'Ricardo A.', date: '2026-04-15', rating: 4, text: 'Ótimo quarto, muito bem decorado. Pequena ressalva: o minibar poderia ter mais opções de bebidas locais.' },
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80', caption: 'Quarto com cama king-size' },
      { url: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80', caption: 'Vista para as piscinas privativas' },
      { url: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&q=80', caption: 'Banheiro sofisticado' },
      { url: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80', caption: 'Detalhes da decoração' },
      { url: 'https://images.unsplash.com/photo-1601565415267-724db0e5c7f9?w=800&q=80', caption: 'Smart TV 65" e área de descanso' },
    ],
  },
  {
    id: 103,
    name: 'Suite Ocean View',
    type: 'Suite Premium',
    tag: 'suite',
    price: 420,
    capacity: 2,
    area: '68m²',
    floor: '12º andar',
    view: 'Vista Mar Frontal',
    status: 'available', // real availability now comes from ROOM_BOOKINGS / state.stays
    img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80',
    imgDetail: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
    desc: 'Vista frontal para o Oceano Atlântico a partir do 12º andar. Arquitetura aberta que convida o mar para dentro do ambiente. Uma experiência visual inesquecível ao amanhecer.',
    amenities: ['Vista Frontal Mar', 'Varanda Ampla', 'Ducha Italiana', 'Escrivaninha', 'Smart TV 70"', 'Frigobar Encastrado'],
    rating: 4.8,
    reviews: [
      { author: 'Aiko T.', date: '2026-06-01', rating: 5, text: 'Watching the sunrise over the Atlantic from bed is something I will never forget. This room is pure magic.' },
      { author: 'Lucas M.', date: '2026-05-08', rating: 5, text: 'Vista incrível, quarto espaçoso e limpo. O duche italiano é um diferencial muito bom.' },
      { author: 'Hannah B.', date: '2026-03-30', rating: 4, text: 'Great suite, the open architecture really brings the ocean inside. Would have liked a bathtub option though.' },
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80', caption: 'Vista frontal para o Oceano Atlântico' },
      { url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80', caption: 'Varanda ampla com vista mar' },
      { url: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&q=80', caption: 'Italian shower' },
      { url: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80', caption: 'Área de trabalho com escrivaninha' },
      { url: 'https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=800&q=80', caption: 'Cama com vista para o horizonte' },
    ],
  },
  {
    id: 104,
    name: 'Penthouse',
    type: 'Cobertura',
    tag: 'penthouse',
    price: 900,
    capacity: 4,
    area: '180m²',
    floor: '20º andar',
    view: 'Vista 360°',
    status: 'available',
    img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80',
    imgDetail: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    desc: 'O cume da experiência. Dois andares, piscina privativa aquecida, terraço panorâmico com vista de 360° da cidade e do mar. Inclui chef privativo e serviço de mordomo 24 horas.',
    amenities: ['Piscina Privativa', 'Terraço 360°', 'Chef Privativo', 'Mordomo 24h', '2 Suítes Master', 'Sala Gourmet', 'Adega Climatizada', 'Transfer Helicóptero'],
    rating: 5.0,
    reviews: [
      { author: 'Viktor R.', date: '2026-05-28', rating: 5, text: 'There are no words. The private pool at sunset, the private chef, the 360° view. This is the pinnacle of hospitality.' },
      { author: 'Isabela C.', date: '2026-04-20', rating: 5, text: 'Comemoramos nosso aniversário aqui e foi perfeito em cada detalhe. O chef privativo preparou um jantar inesquecível no terraço.' },
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80', caption: 'Terraço panorâmico 360°' },
      { url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80', caption: 'Piscina privativa aquecida' },
      { url: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80', caption: 'Sala gourmet com adega climatizada' },
      { url: 'https://images.unsplash.com/photo-1594563703937-fdc640497dcd?w=800&q=80', caption: 'Suíte master principal' },
      { url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80', caption: 'Vista da cidade ao entardecer' },
    ],
  },
  {
    id: 105,
    name: 'Suite Romântica',
    type: 'Suite',
    tag: 'suite',
    price: 320,
    capacity: 2,
    area: '58m²',
    floor: '8º andar',
    view: 'Vista Jardim',
    status: 'available',
    img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80',
    imgDetail: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
    desc: 'Pensada para momentos especiais. Decoração intimista com iluminação cênica, banheira para dois com pétalas de rosa na chegada, champagne de boas-vindas e cardápio afrodisíaco exclusivo.',
    amenities: ['Banheira para Dois', 'Champagne Chegada', 'Decoração Romântica', 'Jantar Privativo', 'Vista Jardim Zen', 'Aromaterapia'],
    rating: 4.6,
    reviews: [
      { author: 'Diego P.', date: '2026-05-14', rating: 5, text: 'My partner was completely surprised. Rose petals, champagne, candlelight — everything was perfectly arranged. Worth every cent.' },
      { author: 'Fernanda S.', date: '2026-04-08', rating: 4, text: 'Muito romântico e acolhedor. O jardim zen visto da varanda cria uma paz única. Recomendo para aniversários.' },
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80', caption: 'Quarto com decoração romântica' },
      { url: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80', caption: 'Banheira para dois com pétalas de rosa' },
      { url: 'https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=800&q=80', caption: 'Vista do jardim zen' },
      { url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80', caption: 'Jantar privativo incluído' },
      { url: 'https://images.unsplash.com/photo-1602524816235-73b77daba576?w=800&q=80', caption: 'Champagne e amenidades de boas-vindas' },
    ],
  },
];

// Real per-date bookings for ALL guests (not just the current one), used to
// decide availability. Populated from the `room_occupancy` view in Supabase
// (see refreshOccupancy()) — no personal data, just room_id + dates.
// Keyed by the room's numeric `legacy_id` to match ROOMS_DATA[i].id.
const ROOM_BOOKINGS = {};

// SERVICE_NAMES are now resolved via t() at runtime
function getServiceName(key) {
  const map = {
    spa:       'svc_spa',
    dinner:    'svc_dinner',
    transfer:  'svc_transfer',
    laundry:   'svc_laundry',
    breakfast: 'svc_breakfast',
    concierge: 'svc_concierge',
  };
  return map[key] ? t(map[key]) : key;
}

// ── STATE ────────────────────────────────────────────────────
const state = {
  checkin:      null,
  checkout:     null,
  adults:       1,
  children:     0,
  activeScreen: 'discover',
  activeRoom:   null,
  stays:        [],
  staysTab:     'upcoming',
  activeService: null,
  filter:       'all',
  favorites:    [],
  currentUser:  null,
};

// (Real stays are loaded from Supabase in loadAppData(), see below —
// no more demo seed / localStorage bootstrap for bookings.)

// ── HELPERS ──────────────────────────────────────────────────
const el   = id => document.getElementById(id);
const q    = s  => document.querySelector(s);
const qa   = s  => document.querySelectorAll(s);

// Escapa valores vindos do usuário antes de injetar em innerHTML/atributos
function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function fmt(v) {
  return formatCurrency(v);
}

function fmtDate(str) {
  return formatDate(str);
}

// ── PERSISTENCE ──────────────────────────────────────────────
// Rooms, bookings and reviews now live in Supabase (source of truth).
// localStorage is kept only for small device-local UI prefs that have
// no matching table (favorites, notification toggles).
const STORAGE_KEY = 'luxe-app-prefs';

function persistPrefs() {
  try {
    const payload = {
      favorites: state.favorites,
      notifEnabled:   el('notifToggle')     ? el('notifToggle').checked     : true,
      digitalCheckin: el('digitalCheckin')  ? el('digitalCheckin').checked  : true,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (e) {
    // Storage unavailable or full — fail silently, app keeps working in-memory
  }
}

function restorePrefs() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);

    if (Array.isArray(data.favorites)) state.favorites = data.favorites;

    if (typeof data.notifEnabled === 'boolean') {
      const t = el('notifToggle');
      if (t) t.checked = data.notifEnabled;
    }
    if (typeof data.digitalCheckin === 'boolean') {
      const t = el('digitalCheckin');
      if (t) t.checked = data.digitalCheckin;
    }
  } catch (e) {
    // Corrupted saved data — ignore and continue with in-memory defaults
  }
}

// Escolhe, para cada quarto, os campos "ativos" (name/type/view/floor/desc/
// amenities/gallery) conforme o idioma atual — com fallback para português
// caso a tradução em inglês ainda não tenha sido preenchida no banco.
// Chamada uma vez após carregar os dados, e de novo sempre que o idioma
// muda (ver setLanguage() em i18n.js).
function localizeRoomFields() {
  const isEn = (typeof i18nState !== 'undefined' && i18nState.language === 'en');
  ROOMS_DATA.forEach(room => {
    room.name      = (isEn && room.name_en)      || room.name_pt;
    room.type      = (isEn && room.type_en)      || room.type_pt;
    room.view      = (isEn && room.view_en)      || room.view_pt;
    room.floor     = (isEn && room.floor_en)     || room.floor_pt;
    room.desc      = (isEn && room.desc_en)      || room.desc_pt;
    room.amenities = (isEn && room.amenities_en) || room.amenities_pt;
    room.gallery   = (isEn && room.gallery_en)   || room.gallery_pt;
  });
}

// ── SUPABASE DATA LOADING ────────────────────────────────────
// Called by auth.js (window.RotaApp.init) once a guest session exists.
async function loadAppData(user) {
  state.currentUser = user;

  const { data: roomRows, error: roomsErr } = await supabaseClient
    .from('rooms')
    .select('*')
    .order('legacy_id', { ascending: true });

  if (roomsErr) {
    toast('Não foi possível carregar os quartos. Puxe pra atualizar.');
    return;
  }

  ROOMS_DATA.length = 0;
  (roomRows || []).forEach(row => {
    ROOMS_DATA.push({
      dbId: row.id,
      id: row.legacy_id,
      tag: row.tag,
      price: Number(row.price),
      capacity: row.capacity,
      area: row.area,
      status: row.status,
      img: row.img,
      imgDetail: row.img_detail,
      rating: Number(row.rating),
      reviews: [],

      // Conteúdo bilíngue — guardamos as duas versões e localizeRoomFields()
      // escolhe qual delas fica "ativa" (name/type/view/floor/desc/amenities/gallery)
      // conforme o idioma atual. Ver localizeRoomFields() logo abaixo.
      name_pt: row.name,             name_en: row.name_en,
      type_pt: row.type,             type_en: row.type_en,
      view_pt: row.view,             view_en: row.view_en,
      floor_pt: row.floor,           floor_en: row.floor_en,
      desc_pt: row.description,      desc_en: row.description_en,
      amenities_pt: row.amenities || [],
      amenities_en: row.amenities_en || null,
      gallery_pt: row.gallery || [],
      gallery_en: row.gallery_en || null,
    });
  });

  localizeRoomFields();

  const { data: reviewRows } = await supabaseClient
    .from('room_reviews')
    .select('id, room_id, rating, text, created_at, profiles(full_name)')
    .order('created_at', { ascending: false });

  (reviewRows || []).forEach(r => {
    const room = ROOMS_DATA.find(x => x.dbId === r.room_id);
    if (!room) return;
    room.reviews.push({
      author: r.profiles?.full_name || t('review_author'),
      date: (r.created_at || '').slice(0, 10),
      rating: r.rating,
      text: r.text,
    });
  });

  await refreshOccupancy();

  const { data: bookingRows } = await supabaseClient
    .from('bookings')
    .select('*')
    .eq('guest_id', user.id)
    .order('checkin', { ascending: false });

  state.stays = (bookingRows || []).map(b => {
    const room = ROOMS_DATA.find(x => x.dbId === b.room_id);
    return {
      id: b.id,
      roomId: room ? room.id : null,
      roomDbId: b.room_id,
      roomName: room ? room.name : b.guest_name,
      roomImg: room ? room.img : '',
      checkin: b.checkin,
      checkout: b.checkout,
      nights: b.nights,
      total: Number(b.total),
      status: b.status,
      guestName: b.guest_name,
    };
  });
}

// Refreshes ROOM_BOOKINGS from the room_occupancy view (all guests' confirmed
// dates, no personal data). Note: this naturally includes the current
// guest's own dates too, which getRoomBookings() also adds separately from
// state.stays — harmless duplication for the overlap checks below.
async function refreshOccupancy() {
  const { data: occRows } = await supabaseClient
    .from('room_occupancy')
    .select('room_id, checkin, checkout');

  Object.keys(ROOM_BOOKINGS).forEach(k => delete ROOM_BOOKINGS[k]);
  (occRows || []).forEach(o => {
    const room = ROOMS_DATA.find(x => x.dbId === o.room_id);
    if (!room) return;
    if (!ROOM_BOOKINGS[room.id]) ROOM_BOOKINGS[room.id] = [];
    ROOM_BOOKINGS[room.id].push({ checkin: o.checkin, checkout: o.checkout });
  });
}

function updateStaysDot() {
  const dot = el('staysDot');
  if (!dot) return;
  const hasUpcoming = state.stays.some(s => s.status === 'confirmed' && s.checkout >= today());
  dot.style.display = hasUpcoming ? 'block' : 'none';
}

function renderStars(rating, size = 'sm') {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  let html = `<div class="stars stars-${size}">`;
  for (let i = 0; i < full;  i++) html += `<span class="star full">★</span>`;
  if (half)                        html += `<span class="star half">★</span>`;
  for (let i = 0; i < empty; i++) html += `<span class="star empty">★</span>`;
  html += `<span class="star-val">${rating.toFixed(1)}</span></div>`;
  return html;
}

function nightsBetween(a, b) {
  return Math.max(0, Math.ceil((new Date(b) - new Date(a)) / 86400000));
}

function today() {
  return new Date().toISOString().split('T')[0];
}

function tomorrow() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split('T')[0];
}

function addDays(dateStr, n) {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + n);
  return d.toISOString().split('T')[0];
}

// ── AVAILABILITY (per-date, not a fixed flag) ──────────────────
// Combines seeded "other guests" bookings (ROOM_BOOKINGS) with the
// current guest's own confirmed reservations (state.stays) to decide
// whether a room is free for a specific check-in/check-out window.
function getRoomBookings(roomId) {
  const external = ROOM_BOOKINGS[roomId] || [];
  const own = state.stays
    .filter(s => s.roomId === roomId && s.status === 'confirmed')
    .map(s => ({ checkin: s.checkin, checkout: s.checkout }));
  return external.concat(own);
}

function isRoomAvailable(roomId, ci, co) {
  const room = ROOMS_DATA.find(r => r.id === roomId);
  // A manual override (e.g. room under maintenance) blocks all dates
  if (room && room.status === 'maintenance') return false;
  if (!ci || !co) return true;
  // Two ranges overlap when one starts before the other ends, both ways
  return !getRoomBookings(roomId).some(b => ci < b.checkout && b.checkin < co);
}

// Finds the next free check-in date for a room, starting from a given date.
// Used to tell the guest when an unavailable room opens up again.
function nextAvailableDate(roomId, fromDate) {
  let probe = fromDate;
  for (let i = 0; i < 365; i++) {
    const probeOut = addDays(probe, 1);
    if (isRoomAvailable(roomId, probe, probeOut)) return probe;
    probe = addDays(probe, 1);
  }
  return null;
}

// ── FAVORITES ────────────────────────────────────────────────
function isFavorite(roomId) {
  return state.favorites.includes(roomId);
}

function toggleFavorite(roomId) {
  const idx = state.favorites.indexOf(roomId);
  if (idx === -1) state.favorites.push(roomId);
  else state.favorites.splice(idx, 1);
  persistPrefs();
  return isFavorite(roomId);
}

let toastT = null;
function toast(msg, type = '') {
  const box = el('toast');
  box.textContent = msg;
  box.className   = 'toast' + (type ? ' ' + type : '');
  box.classList.add('show');
  clearTimeout(toastT);
  toastT = setTimeout(() => box.classList.remove('show'), 3000);
}

// ── SCREEN NAVIGATION ────────────────────────────────────────
function goTo(screenName) {
  qa('.screen').forEach(s => s.classList.remove('active'));
  qa('.nav-btn').forEach(b => b.classList.remove('active'));

  const screen = el('screen-' + screenName);
  if (!screen) return;
  screen.classList.add('active');
  screen.scrollTop = 0;
  state.activeScreen = screenName;

  const navBtn = q(`.nav-btn[data-screen="${screenName}"]`);
  if (navBtn) navBtn.classList.add('active');
}

function goBack(screenName) {
  goTo(screenName || 'discover');
}

// ── HERO IMAGE ROTATION ──────────────────────────────────────
const heroImages = [
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
  'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
  'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
];
let heroIdx = 0;

function rotateHero() {
  heroIdx = (heroIdx + 1) % heroImages.length;
  const img = el('heroBg');
  if (img) {
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.8s ease';
    setTimeout(() => {
      img.src = heroImages[heroIdx];
      img.style.opacity = '1';
    }, 400);
  }
}

// ── RENDER ROOMS ─────────────────────────────────────────────
function renderRooms(filter) {
  if (filter !== undefined) state.filter = filter;
  const container = el('roomCards');
  if (!container) return;
  container.innerHTML = '';

  const list = ROOMS_DATA.filter(r => {
    if (state.filter === 'all') return true;
    if (state.filter === 'favorites') return isFavorite(r.id);
    return r.tag === state.filter;
  });

  if (!list.length) {
    const isFavView = state.filter === 'favorites';
    container.innerHTML = `<div class="empty-dark">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">${
        isFavView
          ? '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>'
          : '<path d="M2 12h20M2 12V7a2 2 0 012-2h16a2 2 0 012 2v5M2 12v5a2 2 0 002 2h16a2 2 0 002-2v-5"/>'
      }</svg>
      <p>${isFavView ? t('no_favs') : t('no_rooms')}</p>
    </div>`;
    return;
  }

  list.forEach(room => {
    const hasSearch = state.checkin && state.checkout;
    const ci = state.checkin  || today();
    const co = state.checkout || tomorrow();
    const avail = isRoomAvailable(room.id, ci, co);
    const nights = hasSearch ? nightsBetween(state.checkin, state.checkout) : null;
    const total  = nights ? nights * room.price : null;

    const card = document.createElement('div');
    card.className = 'room-card-guest';
    const photoCount = room.gallery && room.gallery.length ? room.gallery.length : 1;
    card.innerHTML = `
      <div class="room-card-img-wrap">
        <img class="room-card-img" src="${room.img}" alt="${room.name}" loading="lazy">
        <button class="btn-favorite${isFavorite(room.id) ? ' active' : ''}" data-room="${room.id}" aria-label="Favoritar">
          <svg viewBox="0 0 24 24" fill="${isFavorite(room.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </button>
        ${photoCount > 1 ? `
          <div class="rcb-photo-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
            ${photoCount}
          </div>
        ` : ''}
      </div>
      <div class="room-card-body">
        <div class="rcb-top">
          <div class="rcb-name">${room.name}</div>
          <div class="rcb-type">${room.type}</div>
        </div>
        ${room.rating ? renderStars(room.rating) : ''}
        <div class="rcb-meta">
          <div class="rcb-meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            ${room.capacity} ${room.capacity === 1 ? t('guest_singular') : t('guest_plural')}
          </div>
          <div class="rcb-meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
            ${room.area}
          </div>
          <div class="rcb-meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 6l11 6 11-6"/><path d="M1 12l11 6 11-6"/></svg>
            ${room.floor}
          </div>
        </div>
        <div class="rcb-footer">
          <div class="rcb-price">
            <span class="rcb-price-val">${total ? fmt(total) : fmt(room.price)}</span>
            <span class="rcb-price-unit">${total ? `${nights} ${nights > 1 ? t('night_plural') : t('night_singular')}` : t('per_night')}</span>
          </div>
          ${avail
            ? `<div style="display:flex;align-items:center;gap:10px">
                <div class="rcb-avail"><div class="rcb-avail-dot"></div>${t('available')}</div>
                <button class="btn-reserve-card" data-room="${room.id}">${t('book_btn')}</button>
              </div>`
            : `<div class="rcb-avail unavailable"><div class="rcb-avail-dot"></div>${
                hasSearch ? t('booked_dates') : `${t('booked_until')} ${fmtDate(nextAvailableDate(room.id, co))}`
              }</div>`
          }
        </div>
      </div>
    `;

    // Click on card → detail
    card.addEventListener('click', e => {
      if (e.target.closest('.btn-reserve-card, .btn-favorite')) return;
      openRoomDetail(room.id);
    });

    // Favorite button
    const favBtn = card.querySelector('.btn-favorite');
    favBtn.addEventListener('click', e => {
      e.stopPropagation();
      const fav = toggleFavorite(room.id);
      favBtn.classList.toggle('active', fav);
      favBtn.querySelector('svg').setAttribute('fill', fav ? 'currentColor' : 'none');
      if (state.filter === 'favorites' && !fav) renderRooms();
    });

    // Reserve button
    const reserveBtn = card.querySelector('.btn-reserve-card');
    if (reserveBtn) {
      reserveBtn.addEventListener('click', e => {
        e.stopPropagation();
        openBookingFlow(room.id);
      });
    }

    container.appendChild(card);
  });
}

// ── ROOM DETAIL ──────────────────────────────────────────────
function openRoomDetail(roomId) {
  const room = ROOMS_DATA.find(r => r.id === roomId);
  if (!room) return;
  state.activeRoom = roomId;

  el('roomDetailTitle').textContent = room.name;

  const hasSearch = state.checkin && state.checkout;
  const ci = state.checkin  || today();
  const co = state.checkout || tomorrow();
  const avail = isRoomAvailable(room.id, ci, co);
  const nights = hasSearch ? nightsBetween(state.checkin, state.checkout) : null;
  const total  = nights ? nights * room.price : null;

  const gallery = room.gallery && room.gallery.length ? room.gallery : [{ url: room.imgDetail, caption: room.name }];

  el('roomDetailContent').innerHTML = `
    <div class="gallery" id="roomGallery">
      <button class="btn-favorite btn-favorite-detail${isFavorite(room.id) ? ' active' : ''}" id="btnDetailFavorite" aria-label="Favoritar">
        <svg viewBox="0 0 24 24" fill="${isFavorite(room.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      </button>
      <div class="gallery-track" id="galleryTrack">
        ${gallery.map((g, i) => `
          <div class="gallery-slide">
            <img src="${g.url}" alt="${g.caption}" loading="${i === 0 ? 'eager' : 'lazy'}">
            <div class="gallery-caption">${g.caption}</div>
          </div>
        `).join('')}
      </div>
      ${gallery.length > 1 ? `
        <button class="gallery-arrow gallery-prev" id="galleryPrev" aria-label="Foto anterior">&#8249;</button>
        <button class="gallery-arrow gallery-next" id="galleryNext" aria-label="Próxima foto">&#8250;</button>
        <div class="gallery-dots" id="galleryDots">
          ${gallery.map((_, i) => `<button class="gallery-dot${i === 0 ? ' active' : ''}" data-idx="${i}" aria-label="Foto ${i + 1}"></button>`).join('')}
        </div>
        <div class="gallery-counter" id="galleryCounter">1 / ${gallery.length}</div>
      ` : ''}
    </div>
    <div class="room-detail-body">
      <div class="rd-header">
        <div class="rd-name">${room.name}</div>
        <div class="rd-type">${room.type} · ${room.view}</div>
      </div>

      <div class="rd-features">
        <div class="rd-feature">
          <span class="rd-feature-label">${t('rd_area')}</span>
          <span class="rd-feature-val">${room.area}</span>
        </div>
        <div class="rd-feature">
          <span class="rd-feature-label">${t('rd_floor')}</span>
          <span class="rd-feature-val">${room.floor}</span>
        </div>
        <div class="rd-feature">
          <span class="rd-feature-label">${t('rd_capacity')}</span>
          <span class="rd-feature-val">${room.capacity} ${room.capacity === 1 ? t('guest_singular') : t('guest_plural')}</span>
        </div>
        <div class="rd-feature">
          <span class="rd-feature-label">${t('rd_view')}</span>
          <span class="rd-feature-val">${room.view}</span>
        </div>
      </div>

      <p class="rd-desc">${room.desc}</p>

      <div class="rd-amenities-title">${t('rd_amenities')}</div>
      <div class="rd-amenities-list">
        ${room.amenities.map(a => `<span class="rd-amenity-tag">${a}</span>`).join('')}
      </div>

      ${room.reviews && room.reviews.length ? `
      <div class="rd-reviews">
        <div class="rd-reviews-header">
          <span class="rd-amenities-title">${t('rd_reviews')}</span>
          ${renderStars(room.rating, 'md')}
        </div>
        <div class="rd-reviews-list">
          ${room.reviews.map(r => `
            <div class="review-card">
              <div class="review-top">
                <span class="review-author">${r.author}</span>
                <div class="review-meta">
                  ${renderStars(r.rating, 'xs')}
                  <span class="review-date">${fmtDate(r.date)}</span>
                </div>
              </div>
              <p class="review-text">${r.text}</p>
            </div>
          `).join('')}
        </div>
      </div>` : ''}

      <div class="rd-price-row">
        <div>
          <div class="rd-price-val">${total ? fmt(total) : fmt(room.price)}</div>
          <div class="rd-price-unit">${total ? `${t('rd_total')} — ${nights} ${nights > 1 ? t('night_plural') : t('night_singular')}` : t('per_night')}</div>
        </div>
        ${avail
          ? `<div class="rcb-avail"><div class="rcb-avail-dot"></div>${t('available')}</div>`
          : `<div class="rcb-avail unavailable"><div class="rcb-avail-dot"></div>${
              hasSearch ? t('booked_dates') : `${t('booked_until')} ${fmtDate(nextAvailableDate(room.id, co))}`
            }</div>`
        }
      </div>

      ${avail
        ? `<button class="btn-gold" id="btnDetailReserve">${t('rd_book')}</button>`
        : `<button class="btn-gold" disabled>${t('rd_unavailable')}</button>`
      }
    </div>
  `;

  const detailBtn = el('btnDetailReserve');
  if (detailBtn) {
    detailBtn.addEventListener('click', () => openBookingFlow(roomId));
  }

  const favBtn = el('btnDetailFavorite');
  if (favBtn) {
    favBtn.addEventListener('click', () => {
      const fav = toggleFavorite(room.id);
      favBtn.classList.toggle('active', fav);
      favBtn.querySelector('svg').setAttribute('fill', fav ? 'currentColor' : 'none');
    });
  }

  initGallery(gallery);
  goTo('rooms');
}

// ── GALLERY ──────────────────────────────────────────────────
function initGallery(gallery) {
  const track = el('galleryTrack');
  if (!track) return;

  const slides = track.querySelectorAll('.gallery-slide');
  const total  = slides.length;

  // Tap a slide to open the fullscreen lightbox
  slides.forEach((slide, i) => {
    slide.addEventListener('click', () => openLightbox(gallery, i));
  });

  if (total <= 1) return;

  let current  = 0;
  let startX   = 0;
  let dragging = false;

  function goSlide(idx) {
    current = (idx + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;

    // dots
    el('galleryDots').querySelectorAll('.gallery-dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });

    // counter
    el('galleryCounter').textContent = `${current + 1} / ${total}`;
  }

  // Arrows
  el('galleryPrev').addEventListener('click', () => goSlide(current - 1));
  el('galleryNext').addEventListener('click', () => goSlide(current + 1));

  // Dots
  el('galleryDots').querySelectorAll('.gallery-dot').forEach(dot => {
    dot.addEventListener('click', () => goSlide(Number(dot.dataset.idx)));
  });

  // Touch swipe
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; dragging = true; }, { passive: true });
  track.addEventListener('touchend',   e => {
    if (!dragging) return;
    dragging = false;
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goSlide(diff > 0 ? current + 1 : current - 1);
  });
}

// ── GALLERY LIGHTBOX (fullscreen viewer) ──────────────────────
const lightboxState = { gallery: [], current: 0 };

function openLightbox(gallery, startIndex) {
  if (!gallery || !gallery.length) return;
  lightboxState.gallery = gallery;

  const track = el('lightboxTrack');
  track.innerHTML = gallery.map(g => `
    <div class="lightbox-slide">
      <img src="${g.url}" alt="${g.caption}">
      <div class="lightbox-caption">${g.caption}</div>
    </div>
  `).join('');

  const multi = gallery.length > 1;
  el('lightboxPrev').style.display = multi ? 'flex' : 'none';
  el('lightboxNext').style.display = multi ? 'flex' : 'none';

  const dotsWrap = el('lightboxDots');
  dotsWrap.innerHTML = multi
    ? gallery.map((_, i) => `<button class="gallery-dot" data-idx="${i}" aria-label="Foto ${i + 1}"></button>`).join('')
    : '';
  dotsWrap.querySelectorAll('.gallery-dot').forEach(dot => {
    dot.addEventListener('click', () => goLightboxSlide(Number(dot.dataset.idx)));
  });

  goLightboxSlide(startIndex);
  el('lightboxOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function goLightboxSlide(idx) {
  const total = lightboxState.gallery.length;
  if (!total) return;
  lightboxState.current = (idx + total) % total;
  el('lightboxTrack').style.transform = `translateX(-${lightboxState.current * 100}%)`;
  el('lightboxCounter').textContent = `${lightboxState.current + 1} / ${total}`;
  el('lightboxDots').querySelectorAll('.gallery-dot').forEach((d, i) => {
    d.classList.toggle('active', i === lightboxState.current);
  });
}

function closeLightbox() {
  el('lightboxOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function setupLightbox() {
  const overlay = el('lightboxOverlay');
  const track   = el('lightboxTrack');
  if (!overlay || !track) return;

  el('lightboxClose').addEventListener('click', closeLightbox);
  el('lightboxPrev').addEventListener('click', () => goLightboxSlide(lightboxState.current - 1));
  el('lightboxNext').addEventListener('click', () => goLightboxSlide(lightboxState.current + 1));

  // Tap empty space around the photo (not the photo itself) to close
  track.addEventListener('click', e => {
    if (e.target === track || e.target.classList.contains('lightbox-slide')) closeLightbox();
  });

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeLightbox();
  });

  // Touch swipe between photos
  let startX = 0, dragging = false;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; dragging = true; }, { passive: true });
  track.addEventListener('touchend', e => {
    if (!dragging) return;
    dragging = false;
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goLightboxSlide(lightboxState.current + (diff > 0 ? 1 : -1));
  });
}

// ── BOOKING FLOW ─────────────────────────────────────────────
function openBookingFlow(roomId, prefill) {
  const room = ROOMS_DATA.find(r => r.id === roomId);
  if (!room) return;

  const ci = state.checkin  || today();
  const co = state.checkout || tomorrow();

  if (!isRoomAvailable(room.id, ci, co)) {
    toast(t('toast_not_avail'));
    return;
  }

  state.activeRoom = roomId;
  const nights = nightsBetween(ci, co);
  const subtotal = nights * room.price;
  const taxes    = Math.round(subtotal * 0.12);
  const total    = subtotal + taxes;

  // Pré-preenche os dados do hóspede com o usuário logado (Supabase Auth),
  // ou com o que já foi digitado antes (ex: ao voltar da tela de pagamento).
  const meta = (state.currentUser && state.currentUser.user_metadata) || {};
  const guestName  = (prefill && prefill.name)  || meta.full_name || '';
  const guestEmail = (prefill && prefill.email) || (state.currentUser && state.currentUser.email) || '';
  const guestPhone = (prefill && prefill.phone) || meta.phone || '';
  const guestNotes = (prefill && prefill.notes) || '';

  el('bookFlow').innerHTML = `
    <div class="booking-card">
      <img class="bc-img" src="${room.img}" alt="${room.name}">
      <div class="bc-info">
        <div class="bc-name">${room.name}</div>
        <div class="bc-price">${fmt(room.price)}<span style="font-size:11px;font-weight:400;color:var(--text-2)">/${t('per_night')}</span></div>
      </div>
      <div class="bc-dates">
        <div class="bc-date-item">
          <span class="bc-date-label">Check-in</span>
          <span class="bc-date-val">${fmtDate(ci)}</span>
        </div>
        <div class="bc-date-item">
          <span class="bc-date-label">Check-out</span>
          <span class="bc-date-val">${fmtDate(co)}</span>
        </div>
        <div class="bc-date-item">
          <span class="bc-date-label">${t('night_plural')}</span>
          <span class="bc-date-val">${nights}</span>
        </div>
      </div>
    </div>

    <div class="price-breakdown">
      <div class="pb-row">
        <span>${fmt(room.price)} × ${nights} ${nights > 1 ? t('night_plural') : t('night_singular')}</span>
        <span>${fmt(subtotal)}</span>
      </div>
      <div class="pb-row">
        <span>${t('bf_taxes')}</span>
        <span>${fmt(taxes)}</span>
      </div>
      <div class="pb-row total">
        <span>${t('bf_total')}</span>
        <span>${fmt(total)}</span>
      </div>
    </div>

    <div class="guest-form">
      <div class="book-section-title">${t('bf_guest_data')}</div>
      <div class="field-dark">
        <label>${t("bf_name_lbl")}</label>
        <input type="text" id="bfName" placeholder=t('bf_name_ph') value="${escapeHtml(guestName)}">
        <span class="field-error-msg" id="bfNameErr">${t('bf_err_name')}</span>
      </div>
      <div class="field-dark">
        <label>${t("bf_email_lbl")}</label>
        <input type="email" id="bfEmail" placeholder=t('bf_email_ph') value="${escapeHtml(guestEmail)}">
        <span class="field-error-msg" id="bfEmailErr">${t('bf_err_email')}</span>
      </div>
      <div class="field-dark">
        <label>${t("bf_phone_lbl")}</label>
        <input type="tel" id="bfPhone" placeholder=t('bf_phone_ph') value="${escapeHtml(guestPhone)}">
        <span class="field-error-msg" id="bfPhoneErr">${t('bf_err_phone')}</span>
      </div>
      <div class="field-dark">
        <label>${t("bf_notes_lbl")}</label>
        <textarea id="bfNotes" rows="2" placeholder=t('bf_notes_ph')>${escapeHtml(guestNotes)}</textarea>
      </div>
    </div>

    <button class="btn-gold" id="btnCompleteBooking">${t('bf_confirm_btn')} · ${fmt(total)}</button>
    <button class="btn-ghost-sm" id="btnCancelBook">${t('bf_back')}</button>
  `;

  el('btnCompleteBooking').addEventListener('click', () => {
    const name  = el('bfName').value.trim();
    const email = el('bfEmail').value.trim();
    const phone = el('bfPhone').value.trim();
    const notes = el('bfNotes').value.trim();
    let valid = true;

    [['bfName','bfNameErr', !name],
     ['bfEmail','bfEmailErr', !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)],
     ['bfPhone','bfPhoneErr', !phone]].forEach(([inpId, errId, fail]) => {
      const inp = el(inpId);
      const err = el(errId);
      if (fail) {
        inp.classList.add('err');
        err.classList.add('show');
        valid = false;
      } else {
        inp.classList.remove('err');
        err.classList.remove('show');
      }
    });

    if (!valid) return;

    if (!state.currentUser) { toast(t('auth_err_email_required') || 'Sessão expirada. Entre novamente.'); return; }

    renderPaymentStep(room, ci, co, nights, total, { name, email, phone, notes });
  });
  el('btnCancelBook').addEventListener('click', () => goBack('discover'));

  goTo('book');
}

// ── PAYMENT STEP ──────────────────────────────────────────────
const BANK_ACCOUNTS = {
  bai:      { label: 'BAI — Banco Angolano de Investimentos', iban: 'AO06 0040 0000 8817 3629 1014 7' },
  bfa:      { label: 'BFA — Banco de Fomento Angola',          iban: 'AO06 0006 0000 4127 8853 1017 3' },
  atlantico:{ label: 'Banco Atlântico',                        iban: 'AO06 0055 0000 3392 6610 1013 9' },
  bpc:      { label: 'BPC — Banco de Poupança e Crédito',      iban: 'AO06 0057 0000 7724 4415 1019 5' },
  standard: { label: 'Standard Bank Angola',                   iban: 'AO06 0025 0000 5561 0027 1011 2' },
};

function renderPaymentStep(room, ci, co, nights, total, guest) {
  el('bookFlow').innerHTML = `
    <div class="booking-card">
      <img class="bc-img" src="${room.img}" alt="${room.name}">
      <div class="bc-info">
        <div class="bc-name">${room.name}</div>
        <div class="bc-price">${fmt(total)}</div>
      </div>
      <div class="bc-dates">
        <div class="bc-date-item">
          <span class="bc-date-label">Check-in</span>
          <span class="bc-date-val">${fmtDate(ci)}</span>
        </div>
        <div class="bc-date-item">
          <span class="bc-date-label">Check-out</span>
          <span class="bc-date-val">${fmtDate(co)}</span>
        </div>
        <div class="bc-date-item">
          <span class="bc-date-label">${t('night_plural')}</span>
          <span class="bc-date-val">${nights}</span>
        </div>
      </div>
    </div>

    <div class="pay-tabs">
      <button class="pay-tab active" id="payTabTransfer" data-pay="transfer">${t('pay_bank_transfer')}</button>
      <button class="pay-tab" id="payTabExpress" data-pay="express">${t('pay_express')}</button>
    </div>

    <div id="payPanel"></div>

    <button class="btn-ghost-sm" id="btnBackToGuest">${t('bf_back')}</button>
  `;

  let method = 'transfer';
  renderPayPanel(method, room, ci, co, nights, total, guest);

  qa('.pay-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      qa('.pay-tab').forEach(b => b.classList.remove('active'));
      tab.classList.add('active');
      method = tab.dataset.pay;
      renderPayPanel(method, room, ci, co, nights, total, guest);
    });
  });

  el('btnBackToGuest').addEventListener('click', () => openBookingFlow(room.id, guest));

  goTo('book');
}

function renderPayPanel(method, room, ci, co, nights, total, guest) {
  const panel = el('payPanel');

  if (method === 'transfer') {
    panel.innerHTML = `
      <div class="book-section-title">${t('pay_choose_bank')}</div>
      <div class="field-dark">
        <label>${t('pay_bank_lbl')}</label>
        <select id="payBankSelect">
          <option value="">${t('select')}</option>
          ${Object.entries(BANK_ACCOUNTS).map(([key, b]) => `<option value="${key}">${b.label}</option>`).join('')}
        </select>
      </div>
      <div id="payBankDetails"></div>
      <button class="btn-gold" id="btnConfirmTransfer" disabled>${t('pay_confirm_transfer')}</button>
    `;

    const select = el('payBankSelect');
    const details = el('payBankDetails');
    const btn = el('btnConfirmTransfer');

    select.addEventListener('change', () => {
      const bank = BANK_ACCOUNTS[select.value];
      if (!bank) {
        details.innerHTML = '';
        btn.disabled = true;
        return;
      }
      details.innerHTML = `
        <div class="price-breakdown pay-bank-details">
          <div class="pb-row"><span>${t('pay_bank_name')}</span><span>${bank.label}</span></div>
          <div class="pb-row"><span>${t('pay_iban')}</span><span class="pay-iban">${bank.iban}</span></div>
          <div class="pb-row total"><span>${t('pay_amount')}</span><span>${fmt(total)}</span></div>
        </div>
        <p class="pay-hint">${t('pay_transfer_hint')}</p>
      `;
      btn.disabled = false;
    });

    btn.addEventListener('click', () => finalizePayment(room, ci, co, nights, total, guest, btn));

  } else {
    const seed = `${room.id}-${ci}-${co}-${total}`;
    panel.innerHTML = `
      <div class="book-section-title">${t('pay_express_title')}</div>
      <div class="pay-qr-wrap">
        ${generateFakeQR(seed)}
        <div class="pay-qr-amount">${fmt(total)}</div>
        <p class="pay-hint">${t('pay_express_hint')}</p>
      </div>
      <button class="btn-gold" id="btnConfirmExpress">${t('pay_already_paid')}</button>
    `;

    el('btnConfirmExpress').addEventListener('click', () => finalizePayment(room, ci, co, nights, total, guest, el('btnConfirmExpress')));
  }
}

// Deterministic pseudo-QR pattern (visual only, not scannable) so the demo
// never depends on an external QR-generation API.
function generateFakeQR(seed) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  const rand = () => { h = (h * 1103515245 + 12345) >>> 0; return (h >>> 8) / 16777216; };

  const size = 17;
  let cells = '';
  const isFinder = (x, y) => (x < 5 && y < 5) || (x > size - 6 && y < 5) || (x < 5 && y > size - 6);

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let on;
      if (isFinder(x, y)) {
        const lx = x < 5 ? x : x > size - 6 ? x - (size - 7) : x;
        const ly = y;
        on = lx === 0 || lx === 6 || ly === 0 || ly === 6 || (lx >= 2 && lx <= 4 && ly >= 2 && ly <= 4);
      } else {
        on = rand() > 0.55;
      }
      if (on) cells += `<rect x="${x}" y="${y}" width="1" height="1"/>`;
    }
  }
  return `<svg class="pay-qr" viewBox="0 0 ${size} ${size}" fill="currentColor">${cells}</svg>`;
}

async function finalizePayment(room, ci, co, nights, total, guest, triggerBtn) {
  triggerBtn.disabled = true;
  const originalText = triggerBtn.textContent;
  triggerBtn.innerHTML = `<span class="btn-spinner"></span> ${t('pay_processing')}`;

  await new Promise(res => setTimeout(res, 1200));

  const ok = await completeBooking(room, ci, co, nights, total, guest);
  if (!ok) {
    triggerBtn.disabled = false;
    triggerBtn.textContent = originalText;
  }
}

async function completeBooking(room, ci, co, nights, total, guest) {
  const { name, email, phone } = guest;

  const user = state.currentUser;
  if (!user) { toast(t('auth_err_email_required') || 'Sessão expirada. Entre novamente.'); return false; }

  // Availability for these dates is now derived automatically from
  // state.stays (see getRoomBookings/isRoomAvailable) — no flag to flip.

  const { data, error } = await supabaseClient
    .from('bookings')
    .insert({
      guest_id:    user.id,
      room_id:     room.dbId,
      guest_name:  name,
      guest_email: email,
      guest_phone: phone,
      checkin:     ci,
      checkout:    co,
      nights,
      total,
      status: 'confirmed',
    })
    .select()
    .single();

  if (error) {
    toast('Não foi possível concluir a reserva. Tente novamente.');
    return false;
  }

  const newStay = {
    id:       data.id,
    roomId:   room.id,
    roomDbId: room.dbId,
    roomName: room.name,
    roomImg:  room.img,
    checkin:  data.checkin,
    checkout: data.checkout,
    nights:   data.nights,
    total:    Number(data.total),
    status:   data.status,
    guestName: data.guest_name,
  };

  state.stays.unshift(newStay);
  if (!ROOM_BOOKINGS[room.id]) ROOM_BOOKINGS[room.id] = [];
  ROOM_BOOKINGS[room.id].push({ checkin: ci, checkout: co });

  // Update nav dot
  updateStaysDot();

  // Show confirm modal
  el('confirmSummaryText').textContent =
    `${room.name} · ${fmtDate(ci)} — ${fmtDate(co)} · ${nights} ${nights > 1 ? t('night_plural') : t('night_singular')} · ${fmt(total)}`;

  openModal('modalConfirm');
  return true;
}

// ── DATES MODAL ───────────────────────────────────────────────
function openDatesModal() {
  const ciInp = el('inputCheckin');
  const coInp = el('inputCheckout');
  ciInp.min = today();
  coInp.min = tomorrow();
  if (state.checkin)  ciInp.value = state.checkin;
  if (state.checkout) coInp.value = state.checkout;
  updateNightsPreview();
  openModal('modalDates');
}

function updateNightsPreview() {
  const ci = el('inputCheckin').value;
  const co = el('inputCheckout').value;
  const prev = el('nightsPreview');
  if (ci && co && co > ci) {
    const n = nightsBetween(ci, co);
    prev.textContent = `${n} ${n > 1 ? t('night_plural') : t('night_singular')}`;
    prev.style.display = 'block';
  } else {
    prev.style.display = 'none';
  }
}

function confirmDates() {
  const ci = el('inputCheckin').value;
  const co = el('inputCheckout').value;
  if (!ci || !co || co <= ci) {
    toast(t('dates_invalid'));
    return;
  }
  state.checkin  = ci;
  state.checkout = co;

  el('displayCheckin').textContent  = fmtDate(ci);
  el('displayCheckout').textContent = fmtDate(co);

  closeModal('modalDates');
  renderRooms();
}

// ── GUESTS MODAL ──────────────────────────────────────────────
function openGuestsModal() {
  el('cntAdults').textContent   = state.adults;
  el('cntChildren').textContent = state.children;
  openModal('modalGuests');
}

function confirmGuests() {
  el('displayGuests').textContent =
    state.adults + state.children > 0
      ? `${state.adults + state.children} ${(state.adults + state.children) > 1 ? t('guest_plural') : t('guest_singular')}`
      : '1';
  closeModal('modalGuests');
}

// ── SEARCH ───────────────────────────────────────────────────
function doSearch() {
  if (!state.checkin || !state.checkout) {
    openDatesModal();
    return;
  }
  const nights = nightsBetween(state.checkin, state.checkout);
  el('listingLabel').textContent =
    `${nights} ${nights > 1 ? t('night_plural') : t('night_singular')} · ${state.adults + state.children} ${(state.adults + state.children) > 1 ? t('guest_plural') : t('guest_singular')}`;
  renderRooms();
  toast(t('toast_search_upd'), 'gold');
  // Scroll to listing
  setTimeout(() => {
    const listing = q('.listing-area');
    if (listing) listing.scrollIntoView({ behavior: 'smooth' });
  }, 100);
}

// ── STAYS ─────────────────────────────────────────────────────
function renderStays() {
  const container = el('staysList');
  if (!container) return;
  container.innerHTML = '';

  const now = today();
  const list = state.stays.filter(s => {
    if (state.staysTab === 'upcoming') return s.checkout >= now;
    return s.checkout < now;
  });

  if (!list.length) {
    container.innerHTML = `<div class="empty-dark">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
      <p>${state.staysTab === 'upcoming' ? t('no_upcoming') : t('no_history')}</p>
      ${state.staysTab === 'upcoming' ? `<button class="btn-gold-outline" id="btnEmptyExplore">${t('empty_explore_btn')}</button>` : ''}
    </div>`;
    const exploreBtn = el('btnEmptyExplore');
    if (exploreBtn) exploreBtn.addEventListener('click', () => goTo('discover'));
    return;
  }

  list.forEach(stay => {
    const badgeClass = stay.status === 'confirmed' ? 'confirmed' : 'past';
    const badgeText  = stay.status === 'confirmed' ? t('stay_confirmed') : t('stay_past');

    const card = document.createElement('div');
    card.className = 'stay-card';
    card.innerHTML = `
      <img class="stay-card-img" src="${stay.roomImg}" alt="${stay.roomName}">
      <div class="stay-card-body">
        <div class="stay-card-top">
          <span class="stay-card-name">${stay.roomName}</span>
          <span class="stay-badge ${badgeClass}">${badgeText}</span>
        </div>
        <div class="stay-card-dates">
          <span>${t('stays_checkin')}: ${fmtDate(stay.checkin)}</span>
          <span>${t('stays_checkout')}: ${fmtDate(stay.checkout)}</span>
        </div>
        <div class="stay-card-footer">
          <span class="stay-total">${fmt(stay.total)}</span>
          ${stay.status === 'confirmed'
            ? `<div class="stay-actions">
                 <button class="btn-stay-action btn-stay-edit" data-edit="${stay.id}">${t('stay_edit')}</button>
                 <button class="btn-stay-action" data-cancel="${stay.id}">${t('stay_cancel')}</button>
               </div>`
            : `<button class="btn-stay-action btn-review" data-review="${stay.roomId}">${t('stay_review')}</button>`
          }
        </div>
      </div>
    `;

    const editBtn = card.querySelector('[data-edit]');
    if (editBtn) {
      editBtn.addEventListener('click', () => openEditModal(stay));
    }

    const cancelBtn = card.querySelector('[data-cancel]');
    if (cancelBtn) {
      cancelBtn.addEventListener('click', async () => {
        const idx = state.stays.findIndex(s => String(s.id) === String(stay.id));
        if (idx === -1) return;

        const { error } = await supabaseClient
          .from('bookings')
          .update({ status: 'cancelled' })
          .eq('id', stay.id);

        if (error) {
          toast('Não foi possível cancelar a reserva.');
          return;
        }

        // Removing the stay automatically frees those dates again
        // (availability is derived from state.stays + room_occupancy)
        state.stays.splice(idx, 1);
        await refreshOccupancy();
        updateStaysDot();
        renderStays();
        renderRooms();
        toast(t('toast_cancelled'));
      });
    }

    const reviewBtn = card.querySelector('[data-review]');
    if (reviewBtn) {
      reviewBtn.addEventListener('click', () => openReviewModal(stay.roomId, stay.roomName));
    }

    container.appendChild(card);
  });
}

// ── EDIT BOOKING ─────────────────────────────────────────────

function openEditModal(stay) {
  el('editBookingId').value   = stay.id;
  el('editBookingRoomName').textContent = stay.roomName;
  el('editCheckin').value     = stay.checkin;
  el('editCheckout').value    = stay.checkout;
  el('editCheckin').min       = today();
  el('editCheckout').min      = stay.checkin;
  el('editConflictMsg').style.display = 'none';

  setupEditDatesPreview(stay);
  openModal('modalEditBooking');
}

function setupEditDatesPreview(stay) {
  const ciInp = el('editCheckin');
  const coInp = el('editCheckout');
  const room  = ROOMS_DATA.find(r => r.id === stay.roomId);

  function recalc() {
    const ci = ciInp.value;
    const co = coInp.value;
    const preview  = el('editNightsPreview');
    const nights_el = el('editNightsCount');
    const totalPrev = el('editTotalPreview');
    const totalVal  = el('editTotalValue');
    const conflictEl = el('editConflictMsg');

    if (ci && co && co > ci) {
      const nights = Math.round((new Date(co) - new Date(ci)) / 86400000);
      nights_el.textContent = `${nights} ${nights > 1 ? t('night_plural') : t('night_singular')}`;
      preview.style.display = 'block';

      if (room) {
        totalVal.textContent = fmt(room.price * nights);
        totalPrev.style.display = 'flex';
      }

      // Verifica conflito com outras reservas do mesmo quarto (exceto a atual)
      const conflict = state.stays.some(s =>
        String(s.id) !== String(stay.id) &&
        s.roomId === stay.roomId &&
        s.status === 'confirmed' &&
        s.checkin < co && s.checkout > ci
      );

      if (conflict) {
        el('editConflictText').textContent = t('edit_conflict');
        conflictEl.style.display = 'flex';
      } else {
        conflictEl.style.display = 'none';
      }
    } else {
      preview.style.display   = 'none';
      totalPrev.style.display = 'none';
      conflictEl.style.display = 'none';
    }

    // checkout min = checkin + 1 dia
    if (ci) coInp.min = new Date(new Date(ci).getTime() + 86400000).toISOString().slice(0,10);
  }

  ciInp.removeEventListener('change', ciInp._editHandler);
  coInp.removeEventListener('change', coInp._editHandler);
  ciInp._editHandler = recalc;
  coInp._editHandler = recalc;
  ciInp.addEventListener('change', recalc);
  coInp.addEventListener('change', recalc);

  recalc(); // run on open to show current values
}

async function saveEditBooking() {
  const id  = el('editBookingId').value;
  const ci  = el('editCheckin').value;
  const co  = el('editCheckout').value;

  if (!ci || !co || co <= ci) {
    toast(t('dates_invalid'));
    return;
  }

  const conflictEl = el('editConflictMsg');
  if (conflictEl.style.display !== 'none') {
    toast(t('edit_conflict_toast'));
    return;
  }

  const idx = state.stays.findIndex(s => String(s.id) === String(id));
  if (idx === -1) { toast(t('edit_not_found')); return; }

  const stay = state.stays[idx];
  const room = ROOMS_DATA.find(r => r.id === stay.roomId);
  const nights = Math.round((new Date(co) - new Date(ci)) / 86400000);
  const total = room ? room.price * nights : stay.total;

  const { data, error } = await supabaseClient
    .from('bookings')
    .update({ checkin: ci, checkout: co, nights, total })
    .eq('id', stay.id)
    .select()
    .single();

  if (error) {
    toast('Não foi possível atualizar a reserva.');
    return;
  }

  state.stays[idx] = {
    ...stay,
    checkin:  data.checkin,
    checkout: data.checkout,
    nights:   data.nights,
    total:    Number(data.total),
  };

  await refreshOccupancy();

  renderStays();
  renderRooms();
  closeModal('modalEditBooking');
  toast(t('toast_updated'));
}

// ── REVIEWS ─────────────────────────────────────────────────
let reviewRating = 5;

function openReviewModal(roomId, roomName) {
  reviewRating = 5;
  el('reviewRoomName').textContent = roomName;
  el('reviewText').value = '';
  updateReviewStars(5);
  openModal('modalReview');
  el('reviewRoomId').value = roomId;
}

function updateReviewStars(val) {
  reviewRating = val;
  qa('.review-star-btn').forEach(btn => {
    btn.classList.toggle('active', Number(btn.dataset.val) <= val);
  });
}

async function submitReview() {
  const text   = el('reviewText').value.trim();
  const roomId = Number(el('reviewRoomId').value);
  if (!text) { toast(t('review_empty')); return; }

  const room = ROOMS_DATA.find(r => r.id === roomId);
  if (!room) return;

  const user = state.currentUser;
  if (!user) return;

  const relatedStay = state.stays.find(s => s.roomId === roomId);

  const { data, error } = await supabaseClient
    .from('room_reviews')
    .insert({
      room_id:    room.dbId,
      guest_id:   user.id,
      booking_id: relatedStay ? relatedStay.id : null,
      rating:     reviewRating,
      text,
    })
    .select()
    .single();

  if (error) {
    toast('Não foi possível enviar a avaliação.');
    return;
  }

  room.reviews.unshift({
    author: user.user_metadata?.full_name || t('review_author'),
    date: (data.created_at || today()).slice(0, 10),
    rating: data.rating,
    text: data.text,
  });

  // Optimistic local average — the source of truth is recalculated
  // server-side by a trigger on room_reviews, and will reflect on next load.
  const avg = room.reviews.reduce((s, r) => s + r.rating, 0) / room.reviews.length;
  room.rating = Math.round(avg * 10) / 10;

  closeModal('modalReview');
  toast(t('review_thanks'), 'gold');
}

// ── SERVICES ─────────────────────────────────────────────────
function openServiceRequest(serviceKey) {
  state.activeService = serviceKey;
  el('srpTitle').textContent = `${t('srp_request')} ${getServiceName(serviceKey)}`;
  const panel = el('serviceRequestPanel');
  panel.style.display = 'block';
  panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function sendServiceRequest() {
  const date  = el('serviceDate').value;
  const notes = el('serviceNotes').value.trim();
  if (!date) { toast(t('svc_date_req')); return; }

  el('serviceRequestPanel').style.display = 'none';
  el('serviceDate').value  = '';
  el('serviceNotes').value = '';
  toast(`${getServiceName(state.activeService)} ${t('svc_success')}`, 'gold');
  state.activeService = null;
}

// ── MODALS ───────────────────────────────────────────────────
let modalReturnFocus = null;

function getFocusable(container) {
  return Array.from(container.querySelectorAll(
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )).filter(node => node.offsetParent !== null);
}

function openModal(id) {
  const m = el(id);
  if (!m) return;

  modalReturnFocus = document.activeElement;
  m.classList.add('open');

  // Wait a tick so display:flex has taken effect before we measure focusable els.
  setTimeout(() => {
    const focusable = getFocusable(m);
    (focusable[0] || m).focus();
  }, 0);
}

function closeModal(id) {
  const m = el(id);
  if (m) m.classList.remove('open');

  if (modalReturnFocus && typeof modalReturnFocus.focus === 'function') {
    modalReturnFocus.focus();
  }
  modalReturnFocus = null;
}

// Close modal on backdrop click
function setupModalClose(id) {
  const m = el(id);
  if (!m) return;
  m.addEventListener('click', e => {
    if (e.target === m) closeModal(id);
  });
}

// Esc closes the open modal; Tab is trapped inside it while it's open.
function setupModalA11y() {
  document.addEventListener('keydown', e => {
    const openM = document.querySelector('.modal-backdrop.open');
    if (!openM) return;

    if (e.key === 'Escape') {
      closeModal(openM.id);
      return;
    }

    if (e.key === 'Tab') {
      const focusable = getFocusable(openM);
      if (!focusable.length) return;
      const first = focusable[0];
      const last  = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
}

// ── EVENT LISTENERS ───────────────────────────────────────────
function setupListeners() {

  // Modal accessibility: Esc to close, Tab trapped inside open modal
  setupModalA11y();

  // Bottom nav
  qa('.nav-btn[data-screen]').forEach(btn => {
    btn.addEventListener('click', () => {
      const screen = btn.dataset.screen;
      goTo(screen);
      if (screen === 'stays') renderStays();
    });
  });

  // Back buttons
  qa('.back-btn[data-back]').forEach(btn => {
    btn.addEventListener('click', () => goBack(btn.dataset.back));
  });

  // Search bar fields
  el('btnPickCheckin').addEventListener('click', () => openDatesModal());
  el('btnPickCheckout').addEventListener('click', () => openDatesModal());
  el('btnPickGuests').addEventListener('click', () => openGuestsModal());
  el('btnSearch').addEventListener('click', doSearch);

  // Filter chips
  qa('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      qa('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      renderRooms(chip.dataset.filter);
    });
  });

  // Dates modal
  el('inputCheckin').addEventListener('change', updateNightsPreview);
  el('inputCheckout').addEventListener('change', updateNightsPreview);
  el('btnConfirmDates').addEventListener('click', confirmDates);
  el('btnCancelDates').addEventListener('click', () => closeModal('modalDates'));
  setupModalClose('modalDates');

  // Guests modal
  qa('.counter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.dataset.type;
      const op   = btn.dataset.op;
      if (type === 'adults') {
        if (op === 'plus')  state.adults = Math.min(8, state.adults + 1);
        if (op === 'minus') state.adults = Math.max(1, state.adults - 1);
        el('cntAdults').textContent = state.adults;
      } else {
        if (op === 'plus')    state.children = Math.min(6, state.children + 1);
        if (op === 'minus')   state.children = Math.max(0, state.children - 1);
        el('cntChildren').textContent = state.children;
      }
    });
  });

  el('btnConfirmGuests').addEventListener('click', confirmGuests);
  el('btnCancelGuests').addEventListener('click', () => closeModal('modalGuests'));
  setupModalClose('modalGuests');

  // Confirm modal
  el('btnGoToStays').addEventListener('click', () => {
    closeModal('modalConfirm');
    state.staysTab = 'upcoming';
    qa('.stay-tab').forEach(t => t.classList.toggle('active', t.dataset.stays === 'upcoming'));
    renderStays();
    goTo('stays');
  });
  setupModalClose('modalConfirm');

  // Stays tabs
  qa('.stay-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      qa('.stay-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.staysTab = tab.dataset.stays;
      renderStays();
    });
  });

  // Services
  qa('.service-card').forEach(card => {
    card.addEventListener('click', () => {
      const key = card.dataset.service;
      openServiceRequest(key);
    });
  });

  el('srpClose').addEventListener('click', () => {
    el('serviceRequestPanel').style.display = 'none';
  });

  el('btnSendService').addEventListener('click', sendServiceRequest);

  // Review modal
  qa('.review-star-btn').forEach(btn => {
    btn.addEventListener('click', () => updateReviewStars(Number(btn.dataset.val)));
  });
  el('btnSubmitReview').addEventListener('click', submitReview);
  el('btnCancelReview').addEventListener('click', () => closeModal('modalReview'));
  setupModalClose('modalReview');

  // Edit booking modal
  el('btnSaveEditBooking').addEventListener('click', saveEditBooking);
  el('btnCancelEditBooking').addEventListener('click', () => closeModal('modalEditBooking'));
  setupModalClose('modalEditBooking');

  // Gallery lightbox
  setupLightbox();

  // Profile toggles — persist on change
  const notifToggleEl = el('notifToggle');
  if (notifToggleEl) notifToggleEl.addEventListener('change', persistPrefs);
  const digitalCheckinEl = el('digitalCheckin');
  if (digitalCheckinEl) digitalCheckinEl.addEventListener('change', persistPrefs);
}

// ── INIT ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  restorePrefs();
  applyI18n();       // translate all static DOM strings on load
  setupListeners();
  setInterval(rotateHero, 5000);

  // Set date input constraints
  const ciInp = el('inputCheckin');
  const coInp = el('inputCheckout');
  if (ciInp) ciInp.min = today();
  if (coInp) coInp.min = tomorrow();

  // i18n selectors
  const langSel = el('selectLang');
  const currSel = el('selectCurrency');
  if (langSel) {
    langSel.value = i18nState.language;
    langSel.addEventListener('change', e => setLanguage(e.target.value));
  }
  if (currSel) {
    currSel.value = i18nState.currency;
    currSel.addEventListener('change', e => setCurrency(e.target.value));
  }

  // Rooms/bookings depend on a logged-in guest — auth.js calls
  // window.RotaApp.init(user) once a Supabase session is confirmed.
  window.RotaApp = {
    init: async (user) => {
      await loadAppData(user);
      renderRooms();
      renderStays();
      updateStaysDot();
    },
    reset: () => {
      ROOMS_DATA.length = 0;
      state.stays = [];
      state.currentUser = null;
      Object.keys(ROOM_BOOKINGS).forEach(k => delete ROOM_BOOKINGS[k]);
    },
  };

});
