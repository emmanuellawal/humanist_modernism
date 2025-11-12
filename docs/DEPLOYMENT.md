# GitHub Pages Deployment Guide

This repository is configured to automatically deploy to GitHub Pages using GitHub Actions.

## Setup Instructions

### 1. Enable GitHub Pages

1. Go to your repository settings: `Settings` → `Pages`
2. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
   - This will use the workflow defined in `.github/workflows/deploy.yml`

### 2. Trigger Deployment

Deployment happens automatically when you push to the `main` branch:

```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

### 3. Monitor Deployment

1. Go to the `Actions` tab in your GitHub repository
2. You should see the "Deploy to GitHub Pages" workflow running
3. Once complete, your site will be live at:
   - **URL**: `https://emmanuellawal.github.io/humanist_modernism/`

### 4. Verify Site

After deployment completes:
- Visit your site URL
- Test all pages and navigation
- Verify CSS and assets load correctly
- Check responsive design on mobile

## Workflow Details

The GitHub Actions workflow (`.github/workflows/deploy.yml`):

1. **Triggers** on every push to `main` branch
2. **Node.js 18** environment with npm caching
3. **Installs** dependencies with `npm ci`
4. **Builds** the site with `npm run build` (production mode)
5. **Uploads** the `_site` directory as a Pages artifact
6. **Deploys** to GitHub Pages automatically

## Manual Deployment

You can also trigger deployment manually:

1. Go to `Actions` tab
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"
4. Select `main` branch
5. Click "Run workflow"

## Build Status Badge

Add this badge to your README to show deployment status:

```markdown
![Deploy to GitHub Pages](https://github.com/emmanuellawal/humanist_modernism/actions/workflows/deploy.yml/badge.svg)
```

## Troubleshooting

### Build Fails

If the build fails in GitHub Actions:

1. Check the Actions logs for error messages
2. Verify dependencies are correct in `package.json`
3. Ensure `package-lock.json` is committed
4. Test build locally: `npm run build`

### Site Not Updating

If changes don't appear on the live site:

1. Check Actions tab to confirm deployment completed
2. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
3. Clear browser cache
4. Wait a few minutes for GitHub's CDN to update

### 404 Errors

If you get 404 errors:

1. Verify GitHub Pages is enabled in repository settings
2. Check that Pages source is set to "GitHub Actions"
3. Ensure the workflow completed successfully
4. Verify the base URL in `src/_data/site.json` matches your GitHub Pages URL

## Local Testing Before Deployment

Always test locally before pushing:

```bash
# Development server with hot reload
npm run dev

# Production build test
npm run build
# Then serve the _site folder with a local server
```

## Performance Considerations

The workflow uses:
- **npm ci** for faster, reproducible installs
- **npm caching** to speed up subsequent builds
- **Production mode** for minified CSS and optimized output
- **Concurrent deployment prevention** to avoid conflicts

Expected build time: 1-2 minutes

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to `src/` with your domain:
   ```
   yourdomain.com
   ```

2. Add passthrough copy in `.eleventy.js`:
   ```javascript
   eleventyConfig.addPassthroughCopy("src/CNAME");
   ```

3. Configure DNS records with your domain provider:
   - Add CNAME record pointing to `emmanuellawal.github.io`
   - Wait for DNS propagation (up to 24 hours)

4. In GitHub Pages settings, enter your custom domain

---

**Site URL:** https://emmanuellawal.github.io/humanist_modernism/  
**Repository:** https://github.com/emmanuellawal/humanist_modernism  
**Deployment:** Automated via GitHub Actions
