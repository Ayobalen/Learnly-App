
# Base image
FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Copy the .env and .env.development files
COPY .env  ./

# Creates a "dist" folder with the production build
RUN npm run build

# Expose the port on which the app will run
EXPOSE 6500

# Start the server using the production build
CMD ["npm", "run", "start:prod"]
# # Use an official Node.js runtime as the base image
# FROM node:alpine

# # Set the working directory in the container
# WORKDIR /app

# # Copy package.json and package-lock.json to the working directory
# COPY package*.json ./

# # Copy the compiled NestJS application (from the dist directory) into the container
# COPY ./dist ./dist

# # Expose the port your application will run on (adjust this port to match your NestJS app)
# EXPOSE 6500

# # Define the command to start your NestJS application
# CMD ["node", "dist/main.js"]