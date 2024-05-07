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
  first VARCHAR(255) NOT NULL,
  last VARCHAR(255) NOT NULL,
  address1 VARCHAR(255) NOT NULL,
  address2 VARCHAR(255),
  ts TIMESTAMP NOT NULL DEFAULT (current_timestamp)
);

-- example values
INSERT INTO public.users (first, last, address1, address2) VALUES
('first1', 'last1', '101 example st', NULL),
('first2', 'last2', '102 example st', 'apt 1');