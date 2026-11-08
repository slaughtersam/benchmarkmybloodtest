-- Profiles: one row per user. Holds only the random username; no PII ever.
create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  username text not null unique check (username ~ '^[a-z]+-[a-z]+-[0-9]{4}$'),
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

-- Usernames are public within the site (shown on benchmark charts for messaging),
-- but only to signed-in users.
create policy "profiles readable by authenticated users"
  on public.profiles for select
  to authenticated
  using (true);

-- No insert/update/delete policies: rows are created only by the trigger below,
-- and usernames are immutable.

create function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (id, username)
  values (new.id, new.raw_user_meta_data ->> 'username');
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
