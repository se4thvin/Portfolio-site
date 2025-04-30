#!/bin/bash

# Print versions for debugging
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"

# Debug directory structure
echo "Current directory structure:"
ls -la
echo "------------------------------"

# Make sure required dependencies are installed
echo "Installing dependencies..."
npm install --save-dev autoprefixer @tailwindcss/typography

# Show the working directory
echo "Working directory: $(pwd)"
echo "Contents of root directory:"
ls -la

# Confirm Next.js config file
echo "Next.js config file:"
cat next.config.js

# Confirm PostCSS config
echo "PostCSS config file:"
cat postcss.config.js

# Run debug script
echo "Running debug script..."
node debug-build.js

# Build the application
echo "Building application..."
next build

# After build, check for routes-manifest
echo "Checking for routes-manifest after build..."
ls -la .next || echo ".next directory not found"
ls -la .next/routes-manifest.json || echo "routes-manifest.json not found"

# If routes-manifest doesn't exist, try to create it manually
if [ ! -f .next/routes-manifest.json ]; then
  echo "Creating routes-manifest.json manually..."
  mkdir -p .next
  cp -f .next/routes-manifest.json .next/routes-manifest.json || echo "Failed to copy routes-manifest"
fi

echo "Build process completed!" 