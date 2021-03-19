# EPM UI website

# Use an official Node runtime as a parent image
FROM node:alpine

# Set the working directory to /app
WORKDIR /testApp

# Copy the current directory contents into the container at /app
COPY package.json ./

RUN npm install

COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run npm start when the container launches
CMD npm start
