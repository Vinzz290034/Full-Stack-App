#!/bin/bash

# Ensure we're in the correct directory
cd "$1" || exit 1

# Install dependencies
echo "Installing dependencies..."
npm install || exit 1

# Build the application
echo "Building Angular application..."
npm run build -- --configuration production || exit 1

# Copy build output to root dist directory
echo "Copying build output..."
rm -rf ../dist
mkdir -p ../dist
cp -r dist/* ../dist/ || exit 1

echo "Build completed successfully!"
