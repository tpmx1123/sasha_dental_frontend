# Vercel Deployment Guide

## Important: Root Directory Configuration

Since your project has both `Frontend` and `Backend` folders, you need to configure Vercel to use the `Frontend` folder as the root directory.

## Steps to Fix the Build Error

### Option 1: Configure in Vercel Dashboard (Recommended)

1. Go to your Vercel project settings
2. Navigate to **Settings** → **General**
3. Under **Root Directory**, click **Edit**
4. Set the root directory to: `Frontend`
5. Save the changes
6. Redeploy your project

### Option 2: Use Vercel CLI

If you're using Vercel CLI, you can specify the root directory:

```bash
vercel --cwd Frontend
```

Or set it in `vercel.json` (already configured in this project).

## Build Configuration

The `vercel.json` file is already configured with:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Framework**: `vite`

## Common Issues

### Issue: "vite: command not found"

**Cause**: Vercel is trying to run `vite` directly instead of using npm scripts, or dependencies aren't installed.

**Solution**: 
1. Make sure the **Root Directory** is set to `Frontend` in Vercel dashboard
2. Ensure `package.json` has the correct build script: `"build": "vite build"`
3. Check that `node_modules` are being installed (Vercel should do this automatically)

### Issue: Build fails with dependency errors

**Solution**:
1. Make sure `package-lock.json` is committed to the repository
2. Check that all dependencies in `package.json` are valid
3. Try clearing Vercel's build cache and redeploying

## Environment Variables

If your app uses environment variables, add them in:
**Vercel Dashboard** → **Settings** → **Environment Variables**

For example:
- `VITE_API_URL` - Your backend API URL

## Verification

After configuring the root directory, your build should:
1. Install dependencies from `Frontend/package.json`
2. Run `npm run build` which executes `vite build`
3. Output the build to `Frontend/dist`
4. Deploy the `dist` folder

## Current Configuration

- ✅ `vercel.json` is in `Frontend/` directory
- ✅ Build command: `npm run build`
- ✅ Output directory: `dist`
- ⚠️ **Root Directory must be set to `Frontend` in Vercel dashboard**

