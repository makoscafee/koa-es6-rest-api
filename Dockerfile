FROM node:10-alpine

# File Author / Maintainer
LABEL authors="Barnabas Makonda <barnabasmakonda@gmail.com>"

# Create a directory where our app will be placed
RUN mkdir -p /app

# Change directory so that our commands run inside this new directory
WORKDIR /app

# Copy dependency definitions
COPY package*.json yarn.lock /app/

# Install dependecies
RUN yarn install

# Get all the code needed to run the app
COPY . /app/

# Expose the port the app runs in
EXPOSE 3000

# Serve the app
CMD ["yarn", "start"]