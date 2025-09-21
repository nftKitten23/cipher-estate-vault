# Vercel Deployment Guide for Cipher Estate Vault

## 🚀 Step-by-Step Vercel Deployment Instructions

### Prerequisites
- GitHub account with access to the repository
- Vercel account (free tier available)
- Node.js 18+ installed locally (for testing)

### Step 1: Prepare Your Repository
1. Ensure all code is committed and pushed to GitHub
2. Verify the main branch contains all necessary files
3. Check that `.env` file is properly configured (will be set in Vercel)

### Step 2: Connect to Vercel

#### Option A: Import from GitHub
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"New Project"**
3. Click **"Import Git Repository"**
4. Search for `nftKitten23/cipher-estate-vault`
5. Click **"Import"**

#### Option B: Deploy via Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Navigate to project directory
cd /path/to/cipher-estate-vault

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name: cipher-estate-vault
# - Directory: ./
# - Override settings? No
```

### Step 3: Configure Environment Variables

In Vercel Dashboard:
1. Go to your project dashboard
2. Click **"Settings"** tab
3. Click **"Environment Variables"** in the left sidebar
4. Add the following variables:

```
NEXT_PUBLIC_CHAIN_ID = 11155111
NEXT_PUBLIC_RPC_URL = https://sepolia.infura.io/v3/b18fb7e6ca7045ac83c41157ab93f990
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID = 2ec9743d0d0cd7fb94dee1a7e6d33475
NEXT_PUBLIC_INFURA_API_KEY = b18fb7e6ca7045ac83c41157ab93f990
```

5. Click **"Save"** for each variable
6. Make sure to select **"Production"**, **"Preview"**, and **"Development"** for each variable

### Step 4: Configure Build Settings

In Vercel Dashboard:
1. Go to **"Settings"** → **"General"**
2. Set the following:
   - **Framework Preset**: Vite
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### Step 5: Deploy

#### Automatic Deployment
- Push to main branch will trigger automatic deployment
- Vercel will build and deploy automatically

#### Manual Deployment
```bash
# In project directory
vercel --prod
```

### Step 6: Verify Deployment

1. Check the deployment URL provided by Vercel
2. Test wallet connection functionality
3. Verify environment variables are loaded correctly
4. Test responsive design on different devices

### Step 7: Custom Domain (Optional)

1. Go to **"Settings"** → **"Domains"**
2. Add your custom domain
3. Configure DNS records as instructed by Vercel
4. Wait for SSL certificate to be issued

### Step 8: Monitoring and Analytics

1. **Analytics**: Enable in **"Settings"** → **"Analytics"**
2. **Speed Insights**: Enable in **"Settings"** → **"Speed Insights"**
3. **Web Vitals**: Monitor performance metrics

## 🔧 Troubleshooting

### Common Issues:

#### Build Failures
```bash
# Check build logs in Vercel dashboard
# Common fixes:
npm install --legacy-peer-deps
# or
npm ci
```

#### Environment Variables Not Loading
- Ensure variables are prefixed with `NEXT_PUBLIC_` for client-side access
- Check variable names match exactly (case-sensitive)
- Redeploy after adding new variables

#### Wallet Connection Issues
- Verify WalletConnect Project ID is correct
- Check RPC URL is accessible
- Ensure chain ID matches Sepolia (11155111)

#### Performance Issues
- Enable Vercel's Edge Functions
- Use Vercel's Image Optimization
- Implement proper caching strategies

### Build Optimization:

```bash
# Add to package.json scripts:
"build:analyze": "vite build --mode analyze"
"build:prod": "vite build --mode production"
```

## 📊 Post-Deployment Checklist

- [ ] Website loads without errors
- [ ] Wallet connection works
- [ ] All environment variables are set
- [ ] HTTPS is enabled
- [ ] Custom domain is configured (if applicable)
- [ ] Analytics are tracking
- [ ] Performance is optimized
- [ ] Mobile responsiveness is working
- [ ] All features are functional

## 🔄 Continuous Deployment

### Automatic Deployments:
- **Main branch**: Production deployments
- **Feature branches**: Preview deployments
- **Pull requests**: Preview deployments

### Manual Deployments:
```bash
# Deploy specific branch
vercel --target production

# Deploy with specific environment
vercel --env production
```

## 📈 Performance Optimization

### Vercel-Specific Optimizations:
1. **Edge Functions**: Move API routes to Edge Runtime
2. **Image Optimization**: Use Vercel's built-in image optimization
3. **Caching**: Implement proper cache headers
4. **CDN**: Leverage Vercel's global CDN

### Recommended Settings:
```javascript
// vercel.json
{
  "functions": {
    "src/pages/api/**/*.ts": {
      "runtime": "edge"
    }
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}
```

## 🎯 Final Deployment URL

After successful deployment, your application will be available at:
- **Production**: `https://cipher-estate-vault.vercel.app`
- **Preview**: `https://cipher-estate-vault-git-[branch].vercel.app`

## 📞 Support

If you encounter issues:
1. Check Vercel's deployment logs
2. Verify all environment variables
3. Test locally with `npm run build && npm run preview`
4. Contact Vercel support if needed

---

**Deployment completed successfully! 🎉**

Your FHE-powered real estate platform is now live on Vercel with full wallet integration and secure environment configuration.
