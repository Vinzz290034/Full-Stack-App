#!/bin/bash

echo "Starting build process..."

cd Frontend || {
    echo "Failed to change directory to Frontend"
    exit 1
}

echo "Installing dependencies..."
npm install || {
    echo "Failed to install dependencies"
    exit 1
}

echo "Building Angular application..."
npm run build -- --prod || {
    echo "Failed to build application"
    exit 1
}

echo "Build completed successfully!"
