#!/bin/bash

# Auto Git Push Script
# This script commits and pushes all changes to GitHub

echo "🔄 Auto-committing changes..."

# Add all changes
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
  echo "✅ No changes to commit"
  exit 0
fi

# Commit with timestamp
TIMESTAMP=$(date "+%Y-%m-%d %H:%M:%S")
git commit -m "Auto-save: $TIMESTAMP"

# Push to remote
echo "📤 Pushing to GitHub..."
git push origin main

if [ $? -eq 0 ]; then
  echo "✅ Successfully pushed to GitHub!"
else
  echo "❌ Failed to push to GitHub"
  exit 1
fi
