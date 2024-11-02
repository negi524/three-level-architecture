# Use the official Node.js image as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the application files
COPY . .

# Install the application dependencies
RUN corepack enable && yarn install --immutable

# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["yarn", "run", "dev"]
