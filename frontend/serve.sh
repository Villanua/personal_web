#!/bin/bash

# Simple HTTP Server Script for Frontend Development

echo "🚀 Starting local development server..."
echo ""
echo "📁 Serving files from: $(pwd)"
echo "🌐 Server will be available at: http://localhost:8080"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    python3 -m http.server 8080
elif command -v python &> /dev/null; then
    python -m http.server 8080
else
    echo "❌ Error: Python is not installed"
    echo "Please install Python or use another method to serve the files"
    exit 1
fi
