# Build stage
FROM node:18-alpine as builder

# Set working directory
WORKDIR /app

# Install yarn and other necessary dependencies
RUN apk add --no-cache yarn python3 make g++

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies with frozen lockfile for consistency
RUN yarn install --frozen-lockfile

# Copy source files
COPY . .

# Build the application
RUN yarn build

# Production stage
FROM nginx:alpine

# Copy build files to nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Create nginx configuration
RUN echo 'server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]