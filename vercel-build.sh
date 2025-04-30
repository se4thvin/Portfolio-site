#!/bin/bash

# Print versions for debugging
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"

# Make sure tailwindcss typography is installed
echo "Installing dependencies..."
npm install --save-dev @tailwindcss/typography

# Build the application
echo "Building application..."
next build

echo "Build process completed!" 