#!/bin/bash

# Server Status Check Script
# Quickly check the health of the deployed app

PEM_FILE="beigeapp.pem"
SERVER_HOST="ec2-16-171-226-170.eu-north-1.compute.amazonaws.com"
SERVER_USER="ubuntu"

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${GREEN}Checking server status...${NC}"
echo ""

# Check PM2 status
echo "PM2 Process Status:"
echo "-------------------"
ssh -i $PEM_FILE $SERVER_USER@$SERVER_HOST << 'ENDSSH'
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
pm2 list
ENDSSH

echo ""
echo "Recent Logs (last 20 lines):"
echo "----------------------------"
ssh -i $PEM_FILE $SERVER_USER@$SERVER_HOST << 'ENDSSH'
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
pm2 logs beige-landing --lines 20 --nostream
ENDSSH

echo ""
echo "App Version:"
echo "------------"
ssh -i $PEM_FILE $SERVER_USER@$SERVER_HOST << 'ENDSSH'
cd /home/ubuntu/beige-app-basel-landing-page
node -p "require('./package.json').version"
ENDSSH

echo ""
echo "Nginx Status:"
echo "-------------"
ssh -i $PEM_FILE $SERVER_USER@$SERVER_HOST 'sudo systemctl status nginx --no-pager | grep Active'

echo ""
echo "SSL Certificate:"
echo "----------------"
ssh -i $PEM_FILE $SERVER_USER@$SERVER_HOST 'sudo certbot certificates 2>/dev/null | grep -A 5 "book.beige.app" | grep "Expiry Date"'

echo ""
echo -e "${GREEN}Site URL:${NC} https://book.beige.app"
