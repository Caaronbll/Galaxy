-- create_tables.sql

CREATE TABLE IF NOT EXISTS planets (
    id SERIAL PRIMARY KEY,
    title TEXT,
    colors JSONB,
    color_hex JSONB,
    subjects JSONB,
    planets TEXT
);