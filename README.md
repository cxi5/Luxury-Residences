# Luxury Residences

App de reservas de hotel (PWA) com fluxo completo de descoberta,
reserva e gestão de estadias. Supabase como backend, sem frameworks no
front-end.

**🔗 Live: [luxuryresidences.pages.dev](https://luxuryresidences.pages.dev)**
**👤 Conta de demonstração:**

Para avaliar sem precisar criar conta e confirmar e-mail:

Email: **demo@luxuryresidence.com**
Senha: Demoaccount@1234*

---

## O problema que o projeto resolve

Plataformas de reserva de hotéis geralmente entregam uma de duas
experiências: ou são genéricas (mesma UI de qualquer OTA, mesma sensação
de "comparador de preços"), ou são pesadas (frameworks grandes, bundles
grandes, tempo de carregamento alto — justo o oposto do que um hóspede espera de uma experiência rápida e discreta).

O Luxury Residences foi construído pra testar até onde dá pra ir com
**JavaScript vanilla + CSS custom**, sem abrir mão de:
- Autenticação real (cadastro, login, recuperação de senha)
- Dados reais persistidos (quartos, reviews, reservas, cancelamentos)
- Fluxo de reserva completo (busca → seleção → dados do hóspede → pagamento
  mockado → confirmação)
- Interface bilíngue (PT/EN) sem biblioteca de i18n

## Stack

Camada, Tecnologia & Por quê
Front-end: HTML5 + CSS3 + JavaScript (ES6+, vanilla), Sem build step, sem dependências de framework — todo o app roda de arquivos estáticos.

Backend temporário (testes): [Supabase](https://supabase.com) (Postgres + Auth + Row Level Security). Postgres real com autenticação embutida, sem precisar manter um back-end próprio; RLS garante que cada usuário só acessa suas próprias reservas mesmo com a chave `anon` exposta no client.

Hospedagem: Cloudflare Pages, Deploy estático, CDN global, HTTPS grátis.

PWA: `manifest.json` + Service Worker (`sw.js`). Instalável, funciona parcialmente offline. Estratégia por tipo de recurso: HTML/JS/CSS/JSON usam network-first (busca sempre a versão mais recente quando há internet, cai pro cache se offline); imagens e ícones usam cache-first; fontes do Google Fonts usam stale-while-revalidate.

i18n: Sistema próprio (`i18n.js`). Dicionário PT/EN simples, sem overhead de biblioteca para um app de 2 idiomas.

## Decisões técnicas

**Por que Supabase em vez de back-end próprio?**
O objetivo do projeto é demonstrar modelagem de dados e fluxos reais de
produto (reserva, cancelamento, reviews), não reinventar autenticação e
infraestrutura. Supabase dá Postgres + Auth + RLS prontos, o que deixou o
tempo focado em UX e regras de negócio.

**Row Level Security (RLS)**
Todas as tabelas sensíveis (`bookings`, `room_reviews`, `profiles`) têm
políticas RLS ativas — um usuário autenticado só consegue ler/escrever
linhas onde `guest_id` (ou equivalente) bate com o próprio `auth.uid()`.
Isso importa porque a chave `anon` do Supabase é pública por design (vai
no client-side); a segurança real vem das políticas no banco, não de
esconder a chave.

**PWA em vez de app nativo**
Instalável via navegador (`manifest.json`), com um Service Worker que aplica cache diferenciado por tipo de asset (ver Stack acima). Cobre o caso de uso
principal (revisitar o app, carregamento rápido) sem a complexidade de publicar em App Store/Play Store.

**Imagens hospedadas localmente**
As fotos dos quartos inicialmente vinham direto de URLs do Unsplash.
Migradas para a pasta `images/` do próprio projeto para não depender de
disponibilidade de terceiros numa demo ao vivo (rate limit, mudança de
URL, remoção de conteúdo pela plataforma de origem já aconteceu com 3
das 26 fotos originais durante o desenvolvimento).

**Fluxo de pagamento mockado**
Sem integração real com gateway de pagamento (não é o objetivo do
projeto). A tela de pagamento oferece duas opções simuladas: transferência
bancária (o hóspede escolhe um banco e recebe os dados de IBAN para
"confirmar transferência") ou um QR code fictício ("pagamento expresso")
com botão "já paguei". Nenhuma das duas processa dados de cartão nem
dinheiro real. Fecha a narrativa do fluxo de compra sem a complexidade de
lidar com pagamentos reais.

## Funcionalidades

- Autenticação completa (cadastro, login, recuperação de senha, validação de idade mínima de 18 anos e força de senha)
- Busca e filtro de quartos (tipo, disponibilidade por data, favoritos)
- Galeria de fotos por quarto com lightbox fullscreen
- Fluxo de reserva: seleção de datas → dados do hóspede (pré-preenchidos com o usuário logado) → pagamento mockado (transferência bancária simulada ou QR code fictício) → confirmação
- Minhas Estadias: histórico de reservas confirmadas/passadas, com cancelamento e estado vazio dedicado
- Avaliações (reviews) por quarto, vinculadas ao perfil do autor
- Interface bilíngue PT/EN com conteúdo de quartos traduzido no banco
- PWA instalável, funcional offline para navegação já cacheada
