-- Deploy localet:init to pg

BEGIN;

CREATE TABLE client (
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
    latitude float NOT NULL,
    longitude float NULL NULL,
    website text,
    agenda text NOT NULL,
    price float,
    client_id int NOT NULL REFERENCES client(id),
    category_id int NOT NULL REFERENCES category(id)
);

COMMIT;
