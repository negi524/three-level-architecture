# Use the official Node.js image as the base image
FROM node:23 AS development

# Set the working directory inside the container
WORKDIR /usr/workspace

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock .yarnrc.yml ./

# Install the application dependencies
RUN corepack enable && yarn install --immutable

# Copy the rest of the application files
COPY . .

# # Build the NestJS application
# RUN yarn run build

# Expose the application port
EXPOSE 3020

# Command to run the application
CMD ["yarn", "run", "start:dev"]
