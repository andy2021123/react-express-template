SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET search_path = public, pg_catalog;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; -- Ensure uuid-ossp extension is available

CREATE TABLE public.users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL
);

-- example values
INSERT INTO public.users (id, username, email) VALUES
(uuid_generate_v4(), 'user1', 'user1@example.com'),
(uuid_generate_v4(), 'user2', 'user2@example.com');