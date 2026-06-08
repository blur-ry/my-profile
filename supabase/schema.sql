-- Supabase schema for portfolio website

create table profile (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  headline text,
  summary text,
  avatar_url text,
  created_at timestamp with time zone default now()
);

create table education (
  id uuid primary key default uuid_generate_v4(),
  institution text not null,
  degree text not null,
  period text not null,
  description text,
  order_rank int default 0,
  created_at timestamp with time zone default now()
);

create table skills (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  category text,
  created_at timestamp with time zone default now()
);

create table projects (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  description text,
  url text,
  repository_url text,
  created_at timestamp with time zone default now()
);

create table contact_messages (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamp with time zone default now()
);
