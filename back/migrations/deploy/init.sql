-- Deploy localet:init to pg

BEGIN;

CREATE TABLE user (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    email text NOT NULL UNIQUE,
    password text NOT NULL,
    pseudo text NOT NULL UNIQUE
);

CREATE TABLE category (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    type text NOT NULL
);

CREATE TABLE curioset (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title text NOT NULL,
    description text NOT NULL,
    address text NOT NULL,
    posx float NOT NULL,
    posy float NULL NULL,
    website text,
    agenda text NOT NULL,
    price float,
    user_id int REFERENCES user(id),
    category_id int REFERENCES category(id)
);

COMMIT;
