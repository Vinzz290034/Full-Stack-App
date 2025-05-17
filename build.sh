#!/bin/bash

echo "Starting build process..."

cd Frontend || exit
echo "Installing dependencies..."
npm install
echo "Building Angular application..."
npm run build -- --prod
echo "Build completed successfully!"
