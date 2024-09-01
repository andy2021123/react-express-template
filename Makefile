ifneq ($(wildcard .env),) 
	include .env
endif

CLIENT_PORT ?= 3000
SERVER_PORT ?= 5000
DATABASE_PORT ?= 5432
PG_USER ?= postgres
PG_DATABASE ?= database

environment := development

.PHONY: up down logs build deploy dump psql setup

up:
	docker compose up development-client -d
	make logs

down:
	docker compose down

logs:
	docker compose logs --follow --tail 10

build:
	docker compose build production

deploy:
	docker compose up production -d
	@echo listening at: http://localhost:$(CLIENT_PORT)
	make logs

dump:
	docker exec -it $(environment)-database pg_dump -U $(PG_USER) $(PG_DATABASE) > database/dump/$(environment).sql

psql:
	docker exec -it $(environment)-database psql -U $(PG_USER) -d $(PG_DATABASE)

pgadmin:
	docker compose up pgadmin -d
	@echo pgAdmin is running.
	@echo     Local: http://localhost:8000

setup:
	@chmod +x .setup/setup.sh
	@./.setup/setup.sh