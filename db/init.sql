drop table if exists users;

create table users(
    user_id serial primary key,
    username text,
    password text,
    last_logged_in date default now()
)