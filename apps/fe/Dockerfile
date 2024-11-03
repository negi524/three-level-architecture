# Use the official Node.js image as the base image
FROM node:23 AS development

# Set the working directory inside the container
WORKDIR /usr/src

RUN apt-get update && apt-get install -y vim

# Copy the application files
COPY package.json yarn.lock .yarnrc.yml ./

# Install the application dependencies
RUN corepack enable && yarn install --immutable

COPY . .

# Expose the application port
EXPOSE 3010

# Command to run the application
CMD ["yarn", "run", "dev"]


FROM node:23 AS prod-builder
# Set the working directory inside the container
WORKDIR /usr/src

COPY . .

# Install the application dependencies
RUN corepack enable && \
  yarn install --immutable && \
  yarn run build

FROM node:23 AS production

WORKDIR /usr/src

COPY --from=prod-builder /usr/src/build .

# Expose the application port
EXPOSE 3010

CMD ["yarn", "run", "prod"]
