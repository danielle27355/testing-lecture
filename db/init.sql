create table admins (
    id serial primary key,
    username text,
    email text,
    photos text,
    created_at date not null default current_date
);