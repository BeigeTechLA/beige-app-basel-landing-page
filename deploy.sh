#!/bin/bash

# Deployment Script for beige-app-basel-landing-page
# Deploys Next.js app to AWS EC2 server

set -e  # Exit on error

# Configuration
PEM_FILE="../beigeapp.pem"
SERVER_IP="16.171.208.166"
SERVER_USER="ubuntu"
APP_NAME="beige-landing"
REMOTE_DIR="/home/ubuntu/beige-app-basel-landing-page"
LOCAL_DIR="."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Functions
log_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if PEM file exists
if [ ! -f "$PEM_FILE" ]; then
    log_error "PEM file not found at: $PEM_FILE"
    exit 1
fi

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    log_error "package.json not found. Are you in the project root?"
    exit 1
fi

log_info "Starting deployment to $SERVER_IP"

# Step 1: Version bump (optional - ask user)
read -p "Do you want to bump the version? (patch/minor/major/skip) [skip]: " VERSION_BUMP
VERSION_BUMP=${VERSION_BUMP:-skip}

if [ "$VERSION_BUMP" != "skip" ]; then
    log_info "Bumping version: $VERSION_BUMP"
    npm version $VERSION_BUMP --no-git-tag-version
    NEW_VERSION=$(node -p "require('./package.json').version")
    log_info "New version: $NEW_VERSION"
fi

# Step 2: Sync files to server
log_info "Syncing files to server..."
rsync -avz --progress \
    -e "ssh -i $PEM_FILE -o StrictHostKeyChecking=no" \
    --exclude 'node_modules' \
    --exclude '.next' \
    --exclude '.git' \
    --exclude 'deploy.sh' \
    --exclude '.env.local' \
    $LOCAL_DIR/ $SERVER_USER@$SERVER_IP:$REMOTE_DIR/

if [ $? -eq 0 ]; then
    log_info "Files synced successfully"
else
    log_error "File sync failed"
    exit 1
fi

# Step 3: Install dependencies, build, and restart on server
log_info "Running remote deployment commands..."
ssh -i $PEM_FILE $SERVER_USER@$SERVER_IP << 'ENDSSH'
set -e

# Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Navigate to app directory
cd /home/ubuntu/beige-app-basel-landing-page

echo "[REMOTE] Installing dependencies..."
npm install --production=false

echo "[REMOTE] Building Next.js application..."
npm run build

echo "[REMOTE] Restarting PM2 process..."
pm2 restart beige-landing

echo "[REMOTE] Checking PM2 status..."
pm2 list

echo "[REMOTE] Saving PM2 configuration..."
pm2 save

echo "[REMOTE] Deployment completed successfully!"
ENDSSH

if [ $? -eq 0 ]; then
    log_info "Remote deployment completed successfully"
else
    log_error "Remote deployment failed"
    exit 1
fi

# Step 4: Verify deployment
log_info "Verifying deployment..."
sleep 3

ssh -i $PEM_FILE $SERVER_USER@$SERVER_IP << 'ENDSSH'
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

pm2 logs beige-landing --lines 10 --nostream
ENDSSH

log_info "============================================"
log_info "Deployment Summary:"
log_info "  Server: $SERVER_IP"
log_info "  App: $APP_NAME"
log_info "  URL: https://book.beige.app"
log_info "============================================"
log_info "Deployment completed successfully! 🚀"

# Optional: Open site in browser
read -p "Open site in browser? (y/n) [n]: " OPEN_BROWSER
OPEN_BROWSER=${OPEN_BROWSER:-n}

if [ "$OPEN_BROWSER" = "y" ]; then
    if [[ "$OSTYPE" == "darwin"* ]]; then
        open https://book.beige.app
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        xdg-open https://book.beige.app
    fi
fi
