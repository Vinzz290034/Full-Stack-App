#!/bin/bash

# Set PATH for Node.js
export PATH=/opt/buildhome/.nvm/versions/node/v18.x.x/bin:$PATH

# Ensure we're in the correct directory
echo "Changing to Frontend directory..."
cd "$1" || { echo "Failed to change directory"; exit 1; }

# Install dependencies
echo "Installing dependencies..."
npm install || { echo "Failed to install dependencies"; exit 1; }

# Build the application
echo "Building Angular application..."
npm run build -- --configuration production || { echo "Failed to build application"; exit 1; }

# Copy build output to root dist directory
echo "Copying build output to root dist directory..."
rm -rf ../dist || { echo "Failed to remove existing dist directory"; exit 1; }
mkdir -p ../dist || { echo "Failed to create dist directory"; exit 1; }
cp -r dist/* ../dist/ || { echo "Failed to copy build output"; exit 1; }

echo "Build completed successfully!"
