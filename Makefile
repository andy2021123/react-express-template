ifneq ($(wildcard .env),) 
	include .env
	export
endif

PG_USER ?= postgres
PG_DATABASE ?= database

.PHONY: up down logs build deploy dump psql setup

up:
	@docker compose -f docker-compose-dev.yml up -d
	@make logs

down:
	@docker compose -f docker-compose-dev.yml down
	@docker compose down

logs:
	@docker compose -f docker-compose-dev.yml logs -f
	@docker compose logs -f

build:
	@docker compose build

deploy:
	@docker compose up -d
	@make logs

dump:
	@docker exec -it database pg_dump -U $(PG_USER) $(PG_DATABASE) > data/dump.sql

setup:
	@chmod +x setup.sh
	@./setup.sh