# Variables
DOCKER_IMAGE=carrieremap-router
DOCKER_TAG=latest

.PHONY: help build run stop clean logs

help: ## Affiche cette aide
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'

build: ## Construit l'image Docker
	docker-compose build

run: ## Lance l'application en arrière-plan
	docker-compose up -d

stop: ## Arrête l'application
	docker-compose down

logs: ## Affiche les journaux de l'application
	docker-compose logs -f

clean: ## Supprime les conteneurs et les images inutilisées
	docker system prune -f

dev: ## Lance l'environnement de développement local
	npm run dev
