# Deployment Guide

Deployment scripts for beige-app-basel-landing-page to AWS EC2.

## Prerequisites

- PEM file: `../beigeapp.pem` (one directory up)
- Server: `16.171.208.166`
- SSH access configured

## Quick Start

### Option 1: Quick Deploy (Recommended for most updates)

Fast deployment without version bump or prompts:

```bash
./quick-deploy.sh
```

**Use when:**
- Quick content/UI changes
- Bug fixes
- Small updates that don't need version tracking

### Option 2: Full Deploy (With version management)

Interactive deployment with version bump:

```bash
./deploy.sh
```

**Prompts you for:**
1. Version bump (patch/minor/major/skip)
2. Open browser after deployment

**Use when:**
- Feature releases
- Need version tracking in package.json
- Want to review deployment summary

## What Each Script Does

### `deploy.sh`
1. ✅ Checks PEM file exists
2. ✅ Optional version bump (patch/minor/major)
3. ✅ Syncs files via rsync (excludes node_modules, .next, .git)
4. ✅ Installs dependencies on server
5. ✅ Builds Next.js app
6. ✅ Restarts PM2 process
7. ✅ Shows PM2 logs for verification
8. ✅ Optional browser open

### `quick-deploy.sh`
1. ✅ Syncs files quickly
2. ✅ Installs deps + builds
3. ✅ Restarts PM2
4. ✅ Minimal output

## Manual Deployment Commands

If you need to run steps manually:

### 1. Sync Files Only
```bash
rsync -avz \
  -e "ssh -i ../beigeapp.pem" \
  --exclude 'node_modules' \
  --exclude '.next' \
  --exclude '.git' \
  ./ ubuntu@16.171.208.166:/home/ubuntu/beige-app-basel-landing-page/
```

### 2. Build on Server
```bash
ssh -i ../beigeapp.pem ubuntu@16.171.208.166 \
  'cd ~/beige-app-basel-landing-page && \
   export NVM_DIR="$HOME/.nvm" && \
   [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && \
   npm install && \
   npm run build'
```

### 3. Restart PM2
```bash
ssh -i ../beigeapp.pem ubuntu@16.171.208.166 \
  'export NVM_DIR="$HOME/.nvm" && \
   [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && \
   pm2 restart beige-landing && \
   pm2 save'
```

### 4. Check Logs
```bash
ssh -i ../beigeapp.pem ubuntu@16.171.208.166 \
  'export NVM_DIR="$HOME/.nvm" && \
   [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && \
   pm2 logs beige-landing --lines 50'
```

## Version Bumping

When using `deploy.sh`, you'll be asked to bump version:

- **patch** (0.1.0 → 0.1.1): Bug fixes, small changes
- **minor** (0.1.0 → 0.2.0): New features, backwards compatible
- **major** (0.1.0 → 1.0.0): Breaking changes
- **skip**: No version change

## Troubleshooting

### Script can't find PEM file
```bash
# Check PEM location
ls -la ../beigeapp.pem

# If elsewhere, update PEM_FILE variable in scripts
```

### Permission denied
```bash
# Make scripts executable
chmod +x deploy.sh quick-deploy.sh
```

### PM2 process not found
```bash
# SSH into server and check PM2
ssh -i ../beigeapp.pem ubuntu@16.171.208.166
pm2 list

# Restart if needed
pm2 restart beige-landing
# or start fresh
pm2 start npm --name "beige-landing" -- start
```

### Build fails on server
```bash
# SSH and check logs
ssh -i ../beigeapp.pem ubuntu@16.171.208.166
cd ~/beige-app-basel-landing-page
npm run build

# Check for errors in code or missing dependencies
```

### Site not updating
```bash
# Hard restart PM2
ssh -i ../beigeapp.pem ubuntu@16.171.208.166 \
  'pm2 delete beige-landing && \
   cd ~/beige-app-basel-landing-page && \
   pm2 start npm --name "beige-landing" -- start && \
   pm2 save'

# Clear browser cache
# Wait 30 seconds for app to fully restart
```

## Server Details

- **Server IP**: 16.171.208.166
- **Domain**: https://book.beige.app
- **App Directory**: `/home/ubuntu/beige-app-basel-landing-page`
- **PM2 Process**: `beige-landing`
- **Port**: 3000 (proxied via nginx)
- **SSL**: Let's Encrypt (auto-renews)

## Post-Deployment Checks

1. **Check site loads**: https://book.beige.app
2. **Check PM2 status**: `ssh -i ../beigeapp.pem ubuntu@16.171.208.166 pm2 list`
3. **Check nginx**: Site should be accessible via HTTPS
4. **Check logs**: Look for any errors in PM2 logs

## Rollback

If deployment breaks the site:

```bash
# SSH into server
ssh -i ../beigeapp.pem ubuntu@16.171.208.166

# Check PM2 logs for errors
pm2 logs beige-landing

# Restart PM2
pm2 restart beige-landing

# If that doesn't work, redeploy previous version from local git
git checkout <previous-commit>
./deploy.sh
```

## Environment Variables

If you need environment variables:

1. Create `.env.local` on server (not synced by deploy scripts)
2. SSH into server and edit:
```bash
ssh -i ../beigeapp.pem ubuntu@16.171.208.166
cd ~/beige-app-basel-landing-page
nano .env.local
```
3. Restart PM2 after changes:
```bash
pm2 restart beige-landing
```

## Best Practices

1. ✅ Test locally before deploying: `npm run build && npm start`
2. ✅ Use `quick-deploy.sh` for minor updates
3. ✅ Use `deploy.sh` with version bump for releases
4. ✅ Always check PM2 logs after deployment
5. ✅ Keep PEM file secure and never commit it
6. ✅ Use git tags to match deployed versions
