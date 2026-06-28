**Luxury Residences** (nome curto: LuxeStay) é uma Progressive Web App (PWA) mobile-first para um hotel 5 estrelas. O app funciona como a interface digital completa do hóspede — desde a descoberta e reserva de quartos até a gestão da estadia e solicitação de serviços in-room — com uma estética visual de ultra-luxo e arquitetura totalmente offline-capable.

1. Discover (Tela Principal)
A tela de entrada do app. Contém:
Hero dinâmico — imagem de fundo em rotação automática a cada 5 segundos (3 fotos do hotel com transição suave de opacidade), título com tipografia Cormorant Garamond em itálico e eyebrow de boas-vindas.
Search Float Card — cartão flutuante fixo sobre o hero com 3 campos interativos: Check-in, Check-out e Hóspedes. Ao tocar em qualquer campo, abre um modal dedicado. O botão Search rooms dispara a busca por disponibilidade real.
Room Cards (Listing) — grid de quartos com foto, nome, tipo, área, andar, capacidade, rating em estrelas, preço por noite (ou total se datas selecionadas) e badge de disponibilidade. Cada card tem botão de favoritar (coração) e botão de reserva direta.
Filter Chips — 5 filtros: Todos, Suítes, Deluxe, Penthouse, e Favoritos. O filtro de Favoritos mostra apenas os quartos salvos pelo utilizador.
Amenities Strip — barra horizontal scrollável com 5 ícones de comodidades do hotel: Wi-Fi Premium, Concierge 24h, Spa & Wellness, Gastronomia, Transfer VIP.

2. Room Detail (Detalhe do Quarto)
Acessível ao tocar num card. Contém:
Galeria de Fotos — carousel touch-swipeable com 5 fotos por quarto, setas de navegação, dots de progresso e contador (ex: "2 / 5"). Toque numa foto abre o Lightbox fullscreen com as mesmas fotos em alta resolução, navegação por swipe e botão de fechar.
Informações Completas — nome, tipo, vista, área, andar, capacidade, descrição longa, lista de comodidades como tags (ex: Banheira Imersão, Butler Exclusivo, Minibar Premium).
Reviews de Hóspedes — cards de avaliação com nome do autor, data, rating em estrelas e texto da review. Rating geral exibido com estrelas (ex: ★ 4.9).
Pricing Contextual — se há datas selecionadas, exibe o total da estadia + nº de noites. Caso contrário, exibe o preço por noite. Badge de disponibilidade em tempo real.
CTA de Reserva — botão dourado Reservar este quarto ou desativado com Indisponível caso o quarto esteja ocupado nas datas selecionadas.

3. Booking Flow (Finalização de Reserva)
Fluxo guiado com 3 etapas:
Etapa 1 — Resumo — foto do quarto, nome, datas, nº de noites, total calculado automaticamente.
Etapa 2 — Dados do Hóspede — campos: Nome completo, Email, Telefone, Pedidos especiais (textarea opcional).
Etapa 3 — Pagamento — campos de cartão de crédito (número, titular, validade, CVV) com campo de dados do cartão.
Ao confirmar, abre um modal de confirmação com ícone de check animado e botão para ir diretamente às My Stays.

4. My Stays (Minhas Estadias)
Gestão completa de reservas. Dividida em 2 tabs:
Upcoming — reservas futuras confirmadas. Cada card mostra foto do quarto, nome, datas, total pago, status Confirmed, e 3 ações: Edit (modal de edição de datas com verificação de conflito e preview de novo total), Cancel (cancela com confirmação), Rate (abre modal de avaliação com 5 estrelas + texto).
History — reservas passadas. Mesmas informações mas com status Completed e opção de avaliar o quarto (se ainda não avaliado).
O ícone de Stays na nav bar exibe um dot de notificação dourado quando há reservas ativas.

5. Services (Serviços)
Catálogo de 6 serviços solicitáveis durante a estadia, em grid 2×3:
Spa — massagens e tratamentos
Dinner — room service premium
Transfer — aeroporto e tours
Laundry — lavanderia com entrega em 4h
Breakfast — café da manhã no quarto
Concierge — assistência personalizada
Ao tocar num serviço, abre um painel deslizante com campo de data/hora, notas adicionais e botão de envio. Submissão mostra toast de confirmação dourado.

6. Profile (Perfil)
Área pessoal do hóspede com:
Avatar e nome do utilizador
Toggles de preferências: Notificações e Digital Check-in (persistidos no localStorage)
Seletor de Idioma: Português (PT), English (EN), Español (ES)
Seletor de Moeda: BRL (R), USD (), EUR (€)
Botão de Logout

Sistema de Internacionalização (i18n)
O app suporta 3 idiomas completos com tradução de toda a interface — incluindo labels, botões, mensagens de erro, amenidades, serviços e formatação de datas. A troca de idioma é instantânea e re-renderiza todos os textos do DOM sem recarregar.
A moeda também é comutável com formatação regional correta (R$ 1.680,00 / $336.00 / €310,00).

Sistema de Disponibilidade
A disponibilidade é calculada em tempo real por intervalo de datas, não por flag estática. O sistema combina:
Reservas externas simuladas (ROOM_BOOKINGS) — outros hóspedes já reservaram certas datas
Reservas do utilizador atual (state.stays) — evita double-booking
Se um quarto está indisponível, o app calcula e exibe automaticamente a próxima data livre (ex: "Ocupado até 1 jul").

Persistência de Dados
Todo o estado relevante é salvo no localStorage:
Reservas do hóspede
Quartos favoritos
Avaliações submetidas
Preferências de notificação e check-in digital
Overrides de status e rating dos quartos
O app recupera o estado ao abrir e funciona continuamente sem necessidade de login ou backend.

PWA — Instalação e Offline
Instalável no homescreen (Android/Chrome com banner nativo; iOS com metatags Apple)
Service Worker registado para cache de assets e funcionamento offline
Shortcut no manifest que leva direto à tela Minhas Estadias a partir do ícone instalado
Banner de instalação inteligente: aparece com delay de 3s e não volta a aparecer se o utilizador dispensar

Design e Tipografia
Palette escura (background #0a0a0a) com dourado #C9A96E como cor de destaque
Cormorant Garamond — tipografia serifada para títulos, preços e elementos de luxo
Inter — tipografia sans-serif para UI, labels e corpo de texto
Animações suaves em modais (slide-up), toasts (fade), hero (cross-fade), e galeria (transform translate)
