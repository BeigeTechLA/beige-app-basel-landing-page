#!/bin/bash

# Quick Deploy Script (no version bump, no prompts)
# For fast deployments without version changes

set -e

# Configuration
PEM_FILE="../beigeapp.pem"
SERVER_IP="16.171.208.166"
SERVER_USER="ubuntu"
REMOTE_DIR="/home/ubuntu/beige-app-basel-landing-page"

# Colors
GREEN='\033[0;32m'
NC='\033[0m'

echo -e "${GREEN}[QUICK DEPLOY]${NC} Starting fast deployment..."

# Sync files
echo "→ Syncing files..."
rsync -az \
    -e "ssh -i $PEM_FILE -o StrictHostKeyChecking=no" \
    --exclude 'node_modules' \
    --exclude '.next' \
    --exclude '.git' \
    --exclude '*.sh' \
    --exclude '.env.local' \
    ./ $SERVER_USER@$SERVER_IP:$REMOTE_DIR/

# Build and restart
echo "→ Building and restarting..."
ssh -i $PEM_FILE $SERVER_USER@$SERVER_IP << 'ENDSSH'
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
cd /home/ubuntu/beige-app-basel-landing-page
npm install --production=false 2>&1 | tail -5
npm run build 2>&1 | tail -10
pm2 restart beige-landing
pm2 save
ENDSSH

echo -e "${GREEN}✓${NC} Deployed to https://book.beige.app"
