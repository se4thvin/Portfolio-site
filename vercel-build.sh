#!/bin/bash

# Print versions for debugging
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"

# Clean install dependencies
echo "Installing dependencies..."
npm ci

# Setup symlinks for path resolution
echo "Setting up module path resolution..."
NODE_MODULES_DIR="./node_modules"
SRC_DIR="./src"

# Create @ directory in node_modules if it doesn't exist
mkdir -p "${NODE_MODULES_DIR}/@"

# Create symlinks for important directories
ln -sf "$(pwd)/${SRC_DIR}" "${NODE_MODULES_DIR}/@/src"
ln -sf "$(pwd)/${SRC_DIR}/components" "${NODE_MODULES_DIR}/@/components" 
ln -sf "$(pwd)/${SRC_DIR}/data" "${NODE_MODULES_DIR}/@/data"
ln -sf "$(pwd)/${SRC_DIR}/lib" "${NODE_MODULES_DIR}/@/lib"

# Verify Next.js installation
echo "Checking for Next.js installation..."
npx next -v

# Build the application
echo "Building application..."
npm run build

echo "Build process completed!" 