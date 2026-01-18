# 🚀 Deployment Guide

## Quick Deployment Options

### Option 1: Vercel (Recommended - Easiest)

**Vercel is perfect for wedding websites - free tier supports unlimited traffic spikes!**

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Wedding website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/wedding-website.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Select your repository
   - Click Deploy
   - Your site is live instantly!

3. **Custom Domain**
   - In Vercel dashboard → Settings → Domains
   - Add your custom domain
   - Follow DNS instructions

**Benefits:**
- ✅ Free hosting with automatic SSL
- ✅ Automatic deployments on every git push
- ✅ Global CDN for fast loading
- ✅ Preview links for each branch

---

### Option 2: GitHub Pages (Free Alternative)

1. **Update vite.config.ts** for GitHub Pages:
```typescript
export default {
  base: '/your-repo-name/',
  // ... rest of config
}
```

2. **Build and Deploy**
```bash
npm run build
git add .
git commit -m "build: update for GitHub Pages"
git push origin main
```

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: main, folder: /root
   - Save

4. **Access your site**
   - URL: `https://YOUR_USERNAME.github.io/wedding-website`

---

### Option 3: Netlify (Free with Extras)

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect GitHub
   - Select repository

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Deploy**
   - Click Deploy
   - Your site is live!

**Benefits:**
- ✅ Form handling (if you add contact form)
- ✅ Environment variables
- ✅ Serverless functions support

---

## Pre-Deployment Checklist

Before deploying, ensure:

- [ ] Update `src/config.ts` with your wedding details
- [ ] Add valid Google Drive links for PDF and video
- [ ] Set correct countdown date (with timezone)
- [ ] Test all links work (PDF download, video playback, photos)
- [ ] Test on mobile devices
- [ ] Update Google Maps embed with correct venue
- [ ] Test in multiple browsers (Chrome, Safari, Firefox)
- [ ] Check images load properly
- [ ] Verify all text is correct and spelled properly

## Google Drive Setup

### Share PDF Invitation

1. Upload PDF to Google Drive
2. Right-click PDF → "Share"
3. Change permissions to "Viewer - Anyone with the link"
4. Copy share link: `https://drive.google.com/file/d/FILE_ID/view`
5. Update `config.ts`:
```typescript
invitationPdfUrl: "https://drive.google.com/file/d/FILE_ID/view"
```

**For direct download:**
```typescript
// Add to config
invitationPdfDownloadUrl: "https://drive.google.com/file/d/FILE_ID/download"
```

### Share Invitation Video

1. Upload video to Google Drive
2. Share with "Anyone with the link"
3. Copy link: `https://drive.google.com/file/d/VIDEO_ID/preview`
4. Update `config.ts`:
```typescript
invitationVideoUrl: "https://drive.google.com/file/d/VIDEO_ID/preview"
```

### Google Photos Album

1. Create album in Google Photos
2. Go to album → Click share icon (⤴️)
3. Click "Create link"
4. Copy full link: `https://photos.app.goo.gl/XXXXXXX`
5. Update `config.ts`:
```typescript
googlePhotosAlbumUrl: "https://photos.app.goo.gl/XXXXXXX"
```

## Performance Optimization

### Image Optimization

```bash
# Install image optimizer
npm install --save-dev sharp

# Optimize images before deployment
npx sharp -i ./public/images -o ./public/images-optimized
```

### Build Size Check

```bash
npm run build
# Check dist/ folder size
```

Target: Keep under 1MB for fast loading

## Custom Domain Setup

### Using Vercel + Custom Domain

1. Purchase domain (Namecheap, GoDaddy, Route53)
2. In Vercel Dashboard → Settings → Domains
3. Enter your domain name
4. Update DNS records as shown
5. Wait 24-48 hours for DNS to propagate

### Using GitHub Pages + Custom Domain

1. Create `CNAME` file in public folder:
```
yourdomain.com
```

2. Update DNS records to point to GitHub Pages
3. Enable custom domain in repository Settings

## Sharing Your Website

### Share via WhatsApp/Message
```
📩 You're invited!
🎉 https://your-wedding-website.com
```

### Share via Email
```
Subject: 🎊 You're Invited to Our Wedding! 🎊

Dear Guests,

We're delighted to share our wedding details with you.

Visit our wedding website: https://your-wedding-website.com

💕 Thank you for being part of our special day!
```

### QR Code
Generate QR code for your website URL:
- Use [qr-code-generator.com](https://www.qr-code-generator.com)
- Print on invitations
- Guests scan to visit website

## Troubleshooting

### PDF Not Loading
- Check file is shared publicly
- Verify FILE_ID is correct
- Try `/preview` instead of `/view`

### Video Not Playing
- Ensure VIDEO_ID is correct
- Video must be uploaded to Google Drive
- Check sharing permissions

### Photos Not Showing
- Verify album link is correct
- Album must be public or shared
- Test link in different browser

### Slow Loading
- Optimize images
- Check network tab in DevTools
- Ensure CDN is being used (Vercel/Netlify)

### DNS Issues
- Wait 48 hours after DNS change
- Flush DNS cache on your computer
- Clear browser cache

## Analytics

### Add Google Analytics

1. Create Google Analytics account
2. Get tracking ID
3. Add to `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Track:
- Page views
- Video plays
- PDF downloads
- Photos viewed

## Maintenance

### Regular Updates
- Keep dependencies updated: `npm update`
- Check for security issues: `npm audit`
- Update wedding details as needed

### Backup Strategy
- Push to GitHub regularly
- Keep PDF/Video backups
- Document all configuration

---

**Your website is now live! 🎉**

Share the link with your guests and celebrate your special day! 💍✨
