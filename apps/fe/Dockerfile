# Use the official Node.js image as the base image
FROM node:23 AS development

# Set the working directory inside the container
WORKDIR /usr/src

RUN apt-get update && apt-get install -y vim

# Copy setting files
COPY package.json yarn.lock .yarnrc.yml ./

# Install the application dependencies
RUN corepack enable && yarn install --immutable

# Copy the application files
COPY . .

# Expose the application port
EXPOSE 3010

# Command to run the application
CMD ["yarn", "run", "dev"]


FROM node:23-slim AS production

WORKDIR /usr/src

# Copy the application files
COPY . .

# Install the application dependencies
RUN corepack enable && \
  yarn install --immutable && \
  yarn run build

# Expose the application port
EXPOSE 3010

CMD ["yarn", "run", "start"]
