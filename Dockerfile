# Build stage
FROM --platform=linux/amd64 node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (using npm install instead of npm ci for lock file flexibility)
RUN npm install

# Copy source code
COPY . .

# Build argument for password (passed at build time)
ARG VITE_APP_PASSWORD
ENV VITE_APP_PASSWORD=$VITE_APP_PASSWORD

# Build the application
RUN npm run build

# Production stage
FROM --platform=linux/amd64 node:20-alpine

WORKDIR /app

# Install serve to run the static site
RUN npm install -g serve

# Copy built files from builder
COPY --from=builder /app/dist ./dist

# Expose port (Render will auto-detect)
EXPOSE 3000

# Run serve on the dist folder
CMD ["serve", "-s", "dist", "-l", "3000"]