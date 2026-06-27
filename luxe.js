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
    desc: 'A suite mais exclusiva do hotel, com sala de estar separada, varanda privativa e vista panorâmica do oceano. Decoração contemporânea com toques de arte brasileira selecionada. Banheira de imersão e amenidades Hermès.',
    amenities: ['Varanda Privativa', 'Banheira Imersão', 'Sala de Estar', 'Minibar Premium', 'Smart TV 75"', 'Wi-Fi 1Gbps', 'Butler Exclusivo', 'Chegada VIP'],
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
    status: 'occupied',
    img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80',
    imgDetail: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
    desc: 'Vista frontal para o Oceano Atlântico a partir do 12º andar. Arquitetura aberta que convida o mar para dentro do ambiente. Uma experiência visual inesquecível ao amanhecer.',
    amenities: ['Vista Frontal Mar', 'Varanda Ampla', 'Ducha Italiana', 'Escrivaninha', 'Smart TV 70"', 'Frigobar Encastrado'],
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
  },
];

const SERVICE_NAMES = {
  spa:       'Spa & Massagens',
  dinner:    'Room Service Premium',
  transfer:  'Transfer VIP',
  laundry:   'Lavanderia',
  breakfast: 'Café da Manhã',
  concierge: 'Concierge',
};

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
};

// Pre-seed a demo stay
state.stays.push({
  id: 'demo-1',
  roomId: 103,
  roomName: 'Suite Ocean View',
  roomImg: ROOMS_DATA[2].img,
  checkin: '2026-07-10',
  checkout: '2026-07-14',
  nights: 4,
  total: 1680,
  status: 'confirmed',
});

// ── HELPERS ──────────────────────────────────────────────────
const el   = id => document.getElementById(id);
const q    = s  => document.querySelector(s);
const qa   = s  => document.querySelectorAll(s);

function fmt(v) {
  return 'R$ ' + Number(v).toLocaleString('pt-BR', { minimumFractionDigits: 0 });
}

function fmtDate(str) {
  if (!str) return '—';
  const [y, m, d] = str.split('-');
  const months = ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'];
  return `${d} ${months[parseInt(m)-1]} ${y}`;
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

  const list = ROOMS_DATA.filter(r => state.filter === 'all' || r.tag === state.filter);

  if (!list.length) {
    container.innerHTML = `<div class="empty-dark">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 12h20M2 12V7a2 2 0 012-2h16a2 2 0 012 2v5M2 12v5a2 2 0 002 2h16a2 2 0 002-2v-5"/></svg>
      <p>Nenhum quarto nesta categoria</p>
    </div>`;
    return;
  }

  list.forEach(room => {
    const avail = room.status === 'available';
    const hasSearch = state.checkin && state.checkout;
    const nights = hasSearch ? nightsBetween(state.checkin, state.checkout) : null;
    const total  = nights ? nights * room.price : null;

    const card = document.createElement('div');
    card.className = 'room-card-guest';
    card.innerHTML = `
      <img class="room-card-img" src="${room.img}" alt="${room.name}" loading="lazy">
      <div class="room-card-body">
        <div class="rcb-top">
          <div class="rcb-name">${room.name}</div>
          <div class="rcb-type">${room.type}</div>
        </div>
        <div class="rcb-meta">
          <div class="rcb-meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            ${room.capacity} hóspedes
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
            <span class="rcb-price-unit">${total ? `por ${nights} noite${nights > 1 ? 's' : ''}` : 'por noite'}</span>
          </div>
          ${avail
            ? `<div style="display:flex;align-items:center;gap:10px">
                <div class="rcb-avail"><div class="rcb-avail-dot"></div>Disponível</div>
                <button class="btn-reserve-card" data-room="${room.id}">Reservar</button>
              </div>`
            : `<div class="rcb-avail unavailable"><div class="rcb-avail-dot"></div>Ocupado</div>`
          }
        </div>
      </div>
    `;

    // Click on card → detail
    card.addEventListener('click', e => {
      if (e.target.classList.contains('btn-reserve-card')) return;
      openRoomDetail(room.id);
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

  const avail = room.status === 'available';
  const hasSearch = state.checkin && state.checkout;
  const nights = hasSearch ? nightsBetween(state.checkin, state.checkout) : null;
  const total  = nights ? nights * room.price : null;

  el('roomDetailContent').innerHTML = `
    <img class="room-detail-img" src="${room.imgDetail}" alt="${room.name}">
    <div class="room-detail-body">
      <div class="rd-header">
        <div class="rd-name">${room.name}</div>
        <div class="rd-type">${room.type} · ${room.view}</div>
      </div>

      <div class="rd-features">
        <div class="rd-feature">
          <span class="rd-feature-label">Área</span>
          <span class="rd-feature-val">${room.area}</span>
        </div>
        <div class="rd-feature">
          <span class="rd-feature-label">Andar</span>
          <span class="rd-feature-val">${room.floor}</span>
        </div>
        <div class="rd-feature">
          <span class="rd-feature-label">Capacidade</span>
          <span class="rd-feature-val">${room.capacity} hóspedes</span>
        </div>
        <div class="rd-feature">
          <span class="rd-feature-label">Vista</span>
          <span class="rd-feature-val">${room.view}</span>
        </div>
      </div>

      <p class="rd-desc">${room.desc}</p>

      <div class="rd-amenities-title">Comodidades incluídas</div>
      <div class="rd-amenities-list">
        ${room.amenities.map(a => `<span class="rd-amenity-tag">${a}</span>`).join('')}
      </div>

      <div class="rd-price-row">
        <div>
          <div class="rd-price-val">${total ? fmt(total) : fmt(room.price)}</div>
          <div class="rd-price-unit">${total ? `total — ${nights} noite${nights > 1 ? 's' : ''}` : 'por noite'}</div>
        </div>
        ${avail
          ? `<div class="rcb-avail"><div class="rcb-avail-dot"></div>Disponível</div>`
          : `<div class="rcb-avail unavailable"><div class="rcb-avail-dot"></div>Ocupado</div>`
        }
      </div>

      ${avail
        ? `<button class="btn-gold" id="btnDetailReserve">Reservar este quarto</button>`
        : `<button class="btn-gold" disabled>Indisponível</button>`
      }
    </div>
  `;

  const detailBtn = el('btnDetailReserve');
  if (detailBtn) {
    detailBtn.addEventListener('click', () => openBookingFlow(roomId));
  }

  goTo('rooms');
}

// ── BOOKING FLOW ─────────────────────────────────────────────
function openBookingFlow(roomId) {
  const room = ROOMS_DATA.find(r => r.id === roomId);
  if (!room) return;
  state.activeRoom = roomId;

  const ci = state.checkin  || today();
  const co = state.checkout || tomorrow();
  const nights = nightsBetween(ci, co);
  const subtotal = nights * room.price;
  const taxes    = Math.round(subtotal * 0.12);
  const total    = subtotal + taxes;

  el('bookFlow').innerHTML = `
    <div class="booking-card">
      <img class="bc-img" src="${room.img}" alt="${room.name}">
      <div class="bc-info">
        <div class="bc-name">${room.name}</div>
        <div class="bc-price">${fmt(room.price)}<span style="font-size:11px;font-weight:400;color:var(--text-2)">/noite</span></div>
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
          <span class="bc-date-label">Noites</span>
          <span class="bc-date-val">${nights}</span>
        </div>
      </div>
    </div>

    <div class="price-breakdown">
      <div class="pb-row">
        <span>${fmt(room.price)} × ${nights} noite${nights > 1 ? 's' : ''}</span>
        <span>${fmt(subtotal)}</span>
      </div>
      <div class="pb-row">
        <span>Taxas e serviços (12%)</span>
        <span>${fmt(taxes)}</span>
      </div>
      <div class="pb-row total">
        <span>Total</span>
        <span>${fmt(total)}</span>
      </div>
    </div>

    <div class="guest-form">
      <div class="book-section-title">Dados do hóspede</div>
      <div class="field-dark">
        <label>Nome completo</label>
        <input type="text" id="bfName" placeholder="Como no documento de identificação" value="Alexandre Motta">
        <span class="field-error-msg" id="bfNameErr">Informe o nome completo.</span>
      </div>
      <div class="field-dark">
        <label>Email</label>
        <input type="email" id="bfEmail" placeholder="seu@email.com" value="alexandre@email.com">
        <span class="field-error-msg" id="bfEmailErr">Informe um email válido.</span>
      </div>
      <div class="field-dark">
        <label>Telefone</label>
        <input type="tel" id="bfPhone" placeholder="+55 (00) 00000-0000" value="+55 21 99999-0000">
        <span class="field-error-msg" id="bfPhoneErr">Informe o telefone.</span>
      </div>
      <div class="field-dark">
        <label>Pedidos especiais (opcional)</label>
        <textarea id="bfNotes" rows="2" placeholder="Aniversário, restrições alimentares, chegada antecipada..."></textarea>
      </div>
    </div>

    <button class="btn-gold" id="btnCompleteBooking">Confirmar reserva · ${fmt(total)}</button>
    <button class="btn-ghost-sm" id="btnCancelBook">Voltar</button>
  `;

  el('btnCompleteBooking').addEventListener('click', () => completeBooking(room, ci, co, nights, total));
  el('btnCancelBook').addEventListener('click', () => goBack('discover'));

  goTo('book');
}

function completeBooking(room, ci, co, nights, total) {
  const name  = el('bfName').value.trim();
  const email = el('bfEmail').value.trim();
  const phone = el('bfPhone').value.trim();
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

  // Mark room as occupied
  const roomData = ROOMS_DATA.find(r => r.id === room.id);
  if (roomData) roomData.status = 'occupied';

  const newStay = {
    id:       Date.now(),
    roomId:   room.id,
    roomName: room.name,
    roomImg:  room.img,
    checkin:  ci,
    checkout: co,
    nights,
    total,
    status: 'confirmed',
    guestName: name,
  };

  state.stays.unshift(newStay);

  // Update nav dot
  const dot = el('staysDot');
  if (dot) dot.style.display = 'block';

  // Show confirm modal
  el('confirmSummaryText').textContent =
    `${room.name} · ${fmtDate(ci)} — ${fmtDate(co)} · ${nights} noite${nights > 1 ? 's' : ''} · ${fmt(total)}`;

  openModal('modalConfirm');
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
    prev.textContent = `${n} noite${n > 1 ? 's' : ''}`;
    prev.style.display = 'block';
  } else {
    prev.style.display = 'none';
  }
}

function confirmDates() {
  const ci = el('inputCheckin').value;
  const co = el('inputCheckout').value;
  if (!ci || !co || co <= ci) {
    toast('Selecione datas válidas');
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
      ? `${state.adults + state.children} hóspede${(state.adults + state.children) > 1 ? 's' : ''}`
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
    `${nights} noite${nights > 1 ? 's' : ''} · ${state.adults + state.children} hóspede${(state.adults + state.children) > 1 ? 's' : ''}`;
  renderRooms();
  toast('Resultados atualizados', 'gold');
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
      <p>${state.staysTab === 'upcoming' ? 'Nenhuma estadia próxima. Reserve agora.' : 'Nenhum histórico disponível.'}</p>
    </div>`;
    return;
  }

  list.forEach(stay => {
    const badgeClass = stay.status === 'confirmed' ? 'confirmed' : 'past';
    const badgeText  = stay.status === 'confirmed' ? 'Confirmada' : 'Concluída';

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
          <span>Check-in: ${fmtDate(stay.checkin)}</span>
          <span>Check-out: ${fmtDate(stay.checkout)}</span>
        </div>
        <div class="stay-card-footer">
          <span class="stay-total">${fmt(stay.total)}</span>
          ${stay.status === 'confirmed'
            ? `<button class="btn-stay-action" data-cancel="${stay.id}">Cancelar</button>`
            : `<button class="btn-stay-action">Ver detalhes</button>`
          }
        </div>
      </div>
    `;

    const cancelBtn = card.querySelector('[data-cancel]');
    if (cancelBtn) {
      cancelBtn.addEventListener('click', () => {
        const idx = state.stays.findIndex(s => String(s.id) === String(stay.id));
        if (idx !== -1) {
          // Free up room
          const room = ROOMS_DATA.find(r => r.id === stay.roomId);
          if (room) room.status = 'available';
          state.stays.splice(idx, 1);
          renderStays();
          renderRooms();
          toast('Reserva cancelada');
        }
      });
    }

    container.appendChild(card);
  });
}

// ── SERVICES ─────────────────────────────────────────────────
function openServiceRequest(serviceKey) {
  state.activeService = serviceKey;
  el('srpTitle').textContent = `Solicitar ${SERVICE_NAMES[serviceKey] || serviceKey}`;
  const panel = el('serviceRequestPanel');
  panel.style.display = 'block';
  panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function sendServiceRequest() {
  const date  = el('serviceDate').value;
  const notes = el('serviceNotes').value.trim();
  if (!date) { toast('Selecione uma data e horário'); return; }

  el('serviceRequestPanel').style.display = 'none';
  el('serviceDate').value  = '';
  el('serviceNotes').value = '';
  toast(`${SERVICE_NAMES[state.activeService]} solicitado com sucesso`, 'gold');
  state.activeService = null;
}

// ── MODALS ───────────────────────────────────────────────────
function openModal(id) {
  const m = el(id);
  if (m) m.classList.add('open');
}

function closeModal(id) {
  const m = el(id);
  if (m) m.classList.remove('open');
}

// Close modal on backdrop click
function setupModalClose(id) {
  const m = el(id);
  if (!m) return;
  m.addEventListener('click', e => {
    if (e.target === m) closeModal(id);
  });
}

// ── EVENT LISTENERS ───────────────────────────────────────────
function setupListeners() {

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
}

// ── INIT ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderRooms();
  setupListeners();
  setInterval(rotateHero, 5000);

  // Set date input constraints
  const ciInp = el('inputCheckin');
  const coInp = el('inputCheckout');
  if (ciInp) ciInp.min = today();
  if (coInp) coInp.min = tomorrow();
});
