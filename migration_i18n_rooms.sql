-- ============================================================
-- MIGRAÇÃO: conteúdo bilíngue (pt/en) para a tabela rooms
-- Rode no SQL Editor do Supabase, depois do schema original
-- ============================================================

-- 1) Novas colunas em inglês (mantemos as colunas pt originais como estão)
alter table public.rooms
  add column if not exists name_en        text,
  add column if not exists type_en        text,
  add column if not exists view_en        text,
  add column if not exists floor_en       text,
  add column if not exists description_en text,
  add column if not exists amenities_en   jsonb,
  add column if not exists gallery_en     jsonb;  -- mesmo formato de "gallery": [{url, caption}]

-- 2) Preenche o conteúdo em inglês dos 5 quartos existentes (legacy_id 101–105)

update public.rooms set
  name_en = 'Presidential Suite',
  type_en = 'Premium Suite',
  view_en = 'Ocean View',
  description_en = 'The hotel''s most exclusive suite, with a separate living room, private balcony and panoramic ocean views. Contemporary decor with curated touches of Angolan art. Soaking tub and Hermès amenities.',
  amenities_en = '["Private Balcony","Soaking Tub","Living Room","Premium Minibar","75\" Smart TV","1Gbps Wi-Fi","Dedicated Butler","VIP Arrival"]'::jsonb,
  gallery_en = '[
    {"url":"https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80","caption":"Overview of the suite"},
    {"url":"https://images.unsplash.com/photo-1631049421450-348ccd8ee171?w=800&q=80","caption":"Private balcony with ocean view"},
    {"url":"https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80","caption":"Soaking tub"},
    {"url":"https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80","caption":"Separate living room"},
    {"url":"https://images.unsplash.com/photo-1588362951121-3ee319b018b2?w=800&q=80","caption":"Minibar & Hermès amenities"}
  ]'::jsonb
where legacy_id = 101;

update public.rooms set
  name_en = 'Master Deluxe',
  type_en = 'Deluxe Room',
  view_en = 'Pool View',
  description_en = 'Elegance and comfort with a king-size bed, sophisticated decor and views over the private pools. Perfect for couples seeking privacy with just the right touch of refinement.',
  amenities_en = '["King-size Bed","65\" Smart TV","Minibar","Hermès Bathrobe","Premium Wi-Fi","Breakfast Included"]'::jsonb,
  gallery_en = '[
    {"url":"https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80","caption":"Room with king-size bed"},
    {"url":"https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80","caption":"View over the private pools"},
    {"url":"https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&q=80","caption":"Sophisticated bathroom"},
    {"url":"https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80","caption":"Decor details"},
    {"url":"https://images.unsplash.com/photo-1601565415267-724db0e5c7f9?w=800&q=80","caption":"65\" Smart TV and lounge area"}
  ]'::jsonb
where legacy_id = 102;

update public.rooms set
  name_en = 'Suite Ocean View',
  type_en = 'Premium Suite',
  view_en = 'Frontal Ocean View',
  description_en = 'Frontal views of the Atlantic Ocean from the 12th floor. Open architecture that brings the sea into the space. An unforgettable visual experience at sunrise.',
  amenities_en = '["Frontal Ocean View","Spacious Balcony","Italian Shower","Desk","70\" Smart TV","Built-in Mini Fridge"]'::jsonb,
  gallery_en = '[
    {"url":"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80","caption":"Frontal view of the Atlantic Ocean"},
    {"url":"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80","caption":"Spacious balcony with ocean view"},
    {"url":"https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&q=80","caption":"Italian shower"},
    {"url":"https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80","caption":"Work area with desk"},
    {"url":"https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=800&q=80","caption":"Bed with a view of the horizon"}
  ]'::jsonb
where legacy_id = 103;

update public.rooms set
  name_en = 'Penthouse',
  type_en = 'Penthouse',
  view_en = '360° View',
  description_en = 'The pinnacle of the experience. Two floors, a private heated pool, a panoramic terrace with 360° views of the city and sea. Includes a private chef and 24-hour butler service.',
  amenities_en = '["Private Pool","360° Terrace","Private Chef","24h Butler","2 Master Suites","Gourmet Room","Climate-controlled Wine Cellar","Helicopter Transfer"]'::jsonb,
  gallery_en = '[
    {"url":"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80","caption":"360° panoramic terrace"},
    {"url":"https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80","caption":"Private heated pool"},
    {"url":"https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80","caption":"Gourmet room with climate-controlled wine cellar"},
    {"url":"https://images.unsplash.com/photo-1594563703937-fdc640497dcd?w=800&q=80","caption":"Main master suite"},
    {"url":"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80","caption":"City view at dusk"}
  ]'::jsonb
where legacy_id = 104;

update public.rooms set
  name_en = 'Romantic Suite',
  type_en = 'Suite',
  view_en = 'Garden View',
  description_en = 'Designed for special moments. Intimate decor with scenic lighting, a bathtub for two with rose petals on arrival, welcome champagne and an exclusive aphrodisiac menu.',
  amenities_en = '["Bathtub for Two","Welcome Champagne","Romantic Decor","Private Dinner","Zen Garden View","Aromatherapy"]'::jsonb,
  gallery_en = '[
    {"url":"https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80","caption":"Room with romantic decor"},
    {"url":"https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80","caption":"Bathtub for two with rose petals"},
    {"url":"https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=800&q=80","caption":"View of the zen garden"},
    {"url":"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80","caption":"Private dinner included"},
    {"url":"https://images.unsplash.com/photo-1602524816235-73b77daba576?w=800&q=80","caption":"Champagne and welcome amenities"}
  ]'::jsonb
where legacy_id = 105;

-- 3) floor_en — simples o suficiente para gerar via SQL (troca "andar" por "floor")
update public.rooms set floor_en =
  regexp_replace(floor, 'º andar', 'th floor')
where floor_en is null;

-- Nota: para novos quartos que você cadastrar depois, lembre de preencher
-- também as colunas _en — senão o fallback (ver auth.js/luxe.js) mostra o
-- conteúdo em português mesmo com o app em inglês.
