#!/bin/bash
# Script to push to GitHub repository

# Initialize git repository if not already initialized
if [ ! -d .git ]; then
  git init
  echo "Git repository initialized."
fi

# Add all files to staging
git add .
echo "Files added to staging."

# Commit changes
git commit -m "Update portfolio site"
echo "Changes committed."

# Rename default branch to main if it's not already
CURRENT_BRANCH=$(git symbolic-ref --short HEAD)
if [ "$CURRENT_BRANCH" != "main" ]; then
  git branch -M main
  echo "Branch renamed to main."
fi

# Add or update remote origin
git remote -v | grep -q "origin" && git remote remove origin
git remote add origin https://github.com/PolojuPoornachandar/cloud-data-portfolio-hub.git
echo "Remote origin set."

# Push to GitHub
git push -u origin main --force
echo "Changes pushed to GitHub."

echo "Deployment complete! GitHub Actions will now build and deploy your site."