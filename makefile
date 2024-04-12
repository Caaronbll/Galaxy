# Makefile for MongoDB Docker setup

# Docker image and container name
IMAGE_NAME := my-mongodb
CONTAINER_NAME := my-mongodb-container

# MongoDB port
MONGODB_PORT := 27017

# MongoDB data directory (for persistence)
MONGODB_DATA_DIR := $(shell pwd)/data

# Docker run command for MongoDB
DOCKER_RUN := docker run -d --name $(CONTAINER_NAME) -p $(MONGODB_PORT):$(MONGODB_PORT) -v $(MONGODB_DATA_DIR):/data/db $(IMAGE_NAME)

# Build MongoDB Docker image
build:
    docker build -t $(IMAGE_NAME) .

# Run MongoDB Docker container
run:
    $(DOCKER_RUN)

# Stop MongoDB Docker container
stop:
    docker stop $(CONTAINER_NAME)

# Remove MongoDB Docker container
clean:
    docker rm -f $(CONTAINER_NAME)

# Remove MongoDB Docker image
clean-image:
    docker rmi -f $(IMAGE_NAME)

# Help command
help:
    @echo "Available commands:"
    @echo "  make build          - Build MongoDB Docker image"
    @echo "  make run            - Run MongoDB Docker container"
    @echo "  make stop           - Stop MongoDB Docker container"
    @echo "  make clean          - Remove MongoDB Docker container"
    @echo "  make clean-image    - Remove MongoDB Docker image"
    @echo "  make help           - Show this help message"
