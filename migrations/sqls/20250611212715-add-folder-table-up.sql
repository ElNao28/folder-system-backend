SET search_path to public;

CREATE TABLE IF NOT EXISTS folder(
    id SERIAL PRIMARY KEY NOT NULL,
    name varchar(255) NOT NULL,
    path varchar(255) NOT NULL,
    idFather INTEGER
);