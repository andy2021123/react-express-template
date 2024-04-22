include .env
export

CLIENT_PORT ?= 3000
SERVER_PORT ?= 5000
DATABASE_PORT ?= 5432
PG_USER ?= postgres
PG_DATABASE ?= database

environment := development

.PHONY: up down logs build deploy dump psql

up:
	docker compose up development-client -d
	make logs

down:
	docker compose down

logs:
	docker compose logs --follow --tail 10

build:
	docker compose build production-client

deploy:
	docker compose up production-client -d
	@echo client: http://localhost:$(CLIENT_PORT)
	@echo server: http://localhost:$(SERVER_PORT)
	@echo database: http://localhost:$(DATABASE_PORT)

dump:
	docker exec -it $(environment)-database pg_dump -U $(PG_USER) $(PG_DATABASE) > database/dump/$(environment).sql

psql:
	docker exec -it $(environment)-database psql -U $(PG_USER) -d $(PG_DATABASE)