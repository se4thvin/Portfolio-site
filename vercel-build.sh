#!/bin/bash

# Print versions for debugging
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"

# Clean install dependencies
echo "Installing dependencies..."
npm ci

# Verify Next.js installation
echo "Checking for Next.js installation..."
npx next -v

# Build the application
echo "Building application..."
npm run build

echo "Build process completed!" 