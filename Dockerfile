# Stage 1: Build the React application
FROM node:18-alpine as build-stage

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN yarn install

# Copy the application code
COPY . .

# Build the application
RUN yarn run build

# Stage 2: Serve the application using Nginx
FROM nginx:alpine as production-stage

# Copy the built React app from the build stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY --from=build-stage /app/node_modules /usr/share/nginx/html

# Copy Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port used by Nginx
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]