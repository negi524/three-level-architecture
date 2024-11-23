# Start dev container (hot reload)
dev: ./apps/be/.env
	docker compose -f ./docker-compose.yml up -w

# Delete containers
dev-delete-container:
	docker compose down --rmi all

# Delete containers and volumes
dev-delete-all:
	docker compose down -v --rmi all

# Start prod container
prod:
	docker compose -f ./docker-compose-prod.yml up -d

# Delete container
prod-delete-contaner:
	docker compose -f ./docker-compose-prod.yml down --rmi all

# Delete containers and volumes
prod-delete-all:
	docker compose -f ./docker-compose-prod.yml down -v --rmi all
