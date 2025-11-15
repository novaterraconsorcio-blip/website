create extension if not exists pgcrypto;

create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique,
  whatsapp text,
  role text not null check (role in ('admin','corretor')),
  is_active boolean not null default true,
  created_at timestamp with time zone not null default now()
);

create table if not exists cotas (
  id bigserial primary key,
  tipo text not null check (tipo in ('automovel','moto','imovel','servicos')),
  codigo text not null unique,
  valor_bem numeric not null,
  prazo_meses integer not null check (prazo_meses > 0),
  taxa numeric,
  status text not null default 'disponivel' check (status in ('disponivel','reservada','vendida','inativa')),
  reserved_until timestamp with time zone,
  created_at timestamp with time zone not null default now()
);
create index if not exists cotas_status_idx on cotas(status);
create index if not exists cotas_tipo_idx on cotas(tipo);

create table if not exists clientes (
  id uuid primary key default gen_random_uuid(),
  cpf text unique,
  nome text not null,
  endereco jsonb,
  corretor_id uuid references profiles(id),
  email text,
  whatsapp text,
  nascimento date,
  created_at timestamp with time zone not null default now()
);
create index if not exists clientes_corretor_idx on clientes(corretor_id);

create table if not exists vendas (
  id uuid primary key default gen_random_uuid(),
  cota_id bigint not null references cotas(id),
  cliente_id uuid not null references clientes(id),
  status text not null default 'aguardando' check (status in ('aguardando','em_analise','aprovada','rejeitada','finalizada')),
  documentos_urls jsonb,
  created_at timestamp with time zone not null default now()
);
create index if not exists vendas_status_idx on vendas(status);

create table if not exists status_history (
  id bigserial primary key,
  venda_id uuid not null references vendas(id) on delete cascade,
  status text not null,
  reason text,
  created_at timestamp with time zone not null default now()
);
create index if not exists status_history_venda_idx on status_history(venda_id);

create table if not exists interacoes (
  id bigserial primary key,
  cliente_id uuid not null references clientes(id) on delete cascade,
  tipo text,
  nota text,
  agendar_em timestamp with time zone,
  created_at timestamp with time zone not null default now()
);
create index if not exists interacoes_cliente_idx on interacoes(cliente_id);

create table if not exists comissoes (
  id bigserial primary key,
  venda_id uuid not null references vendas(id) on delete cascade,
  corretor_id uuid not null references profiles(id),
  percent numeric,
  valor numeric,
  status text not null default 'pendente' check (status in ('pendente','paga')),
  created_at timestamp with time zone not null default now()
);
create index if not exists comissoes_corretor_idx on comissoes(corretor_id);

create table if not exists leads (
  id bigserial primary key,
  nome text,
  email text,
  whatsapp text,
  interesse text,
  created_at timestamp with time zone not null default now()
);

alter table leads enable row level security;

create or replace function is_admin() returns boolean language sql stable as $$
  select exists (
    select 1 from profiles p where p.id = auth.uid() and p.role = 'admin'
  );
$$;

create policy leads_insert_anon on leads
  for insert
  to anon
  with check (true);

create policy leads_select_admin on leads
  for select
  to authenticated
  using (is_admin());

comment on table leads is 'Leads da landing page';
comment on table cotas is 'Cotas disponíveis para venda';
comment on table vendas is 'Registro de vendas e status';
comment on table comissoes is 'Comissões de corretores';