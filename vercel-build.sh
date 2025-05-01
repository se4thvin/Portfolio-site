#!/bin/bash

# Print versions for debugging
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"

# Debug directory structure
echo "Current directory structure:"
ls -la
echo "------------------------------"

# Make sure tailwindcss typography is installed
echo "Installing dependencies..."
npm install --save-dev @tailwindcss/typography

# Show the working directory and key directories
echo "Working directory: $(pwd)"
echo "Contents of src/app:"
ls -la src/app
echo "Contents of root directory:"
ls -la
echo "Contents of .next directory (if it exists):"
ls -la .next 2>/dev/null || echo ".next directory not found yet - it will be created during build"
echo "Note: .next directory and its contents will be generated during 'next build' command"


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