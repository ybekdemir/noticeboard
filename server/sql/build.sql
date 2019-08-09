SET timezone = 'utc';

CREATE TABLE notices (
  id          SERIAL PRIMARY KEY,
  title       TEXT NOT NULL,
  content     TEXT NULL,
  created_at  TIMESTAMP
);
