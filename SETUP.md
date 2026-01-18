# Wedding Website - Quick Setup Guide

Your royal wedding website is ready! Follow these simple steps to customize and deploy it.

## 🎯 Step 1: Customize Your Wedding Details (5 minutes)

Open `src/config.ts` and update:

### A. Couple Names
```typescript
brideName: "Anju",
groomName: "Amarjit",
```

### B. Wedding Ceremony Details
```typescript
ceremony: {
  date: "Wednesday, 25 February 2026",
  time: "8:00 PM",
  venue: "Kanchrapara, Kolkata, West Bengal",
}
```

### C. Countdown Date & Time
```typescript
countdownDate: new Date("2026-02-25T20:00:00+05:30").toISOString(),
// Change 2026-02-25T20:00:00+05:30 to your wedding date/time
// Format: YYYY-MM-DDTHH:MM:SS+HH:MM (IST is +05:30)
```

### D. Family Details
```typescript
groom: {
  name: "Amarjit",
  motherName: "Smt. Neelam Sharma",
  fatherName: "Shri Ashok Sharma",
},

bride: {
  name: "Anju",
  motherName: "Smt. Rekha Devi Sharma",
  fatherName: "Shri Prakash Sharma",
}
```

### E. Events Timeline
```typescript
events: [
  { title: "Mandva, Matkor, Mandap & Lagan", date: "Monday, 23 February 2026" },
  { title: "Haldi Kalash & Gritdhari Poojan", date: "Tuesday, 24 February 2026" },
  { title: "Auspicious Wedding Ceremony", date: "Wednesday, 25 February 2026" },
]
```

### F. Reception Details
```typescript
reception: {
  date: "Friday, 27 February 2026",
  time: "8:00 PM",
  venue: "Shiv Shakti Marriage Hall, Sarbari More, Madhukunda Road, West Bengal",
}
```

### G. External Links (PDF, Video, Photos)
```typescript
invitationPdfUrl: "YOUR_GOOGLE_DRIVE_PDF_LINK",
invitationVideoUrl: "YOUR_GOOGLE_DRIVE_VIDEO_LINK",
googlePhotosAlbumUrl: "YOUR_GOOGLE_PHOTOS_ALBUM_LINK",
```

## 📥 Step 2: Get Your External Links (10 minutes)

### Wedding Invitation PDF
1. Create your invitation PDF (use Canva, Adobe, etc.)
2. Upload to Google Drive
3. Right-click → **Share** → Make it "Anyone with the link"
4. Click "Share" button
5. Copy the link (looks like: `https://drive.google.com/file/d/ABC123XYZ/view`)
6. Paste in `config.ts` as `invitationPdfUrl`

### Wedding Video
1. Record or create your invitation video
2. Upload to Google Drive
3. Right-click → **Share** → "Anyone with the link"
4. Copy the link
5. **IMPORTANT**: Change the end of the link from `/view` to `/preview`
   - Before: `https://drive.google.com/file/d/ABC123XYZ/view`
   - After: `https://drive.google.com/file/d/ABC123XYZ/preview`
6. Paste in `config.ts` as `invitationVideoUrl`

### Google Photos Album
1. Open Google Photos (photos.google.com)
2. Create a **new album** or use existing one
3. Add photos to the album
4. Click the **Share** icon (arrow)
5. Enable **"Link sharing"**
6. Make sure "Anyone with the link" is selected
7. Copy the link (looks like: `https://photos.app.goo.gl/ABC123`)
8. Paste in `config.ts` as `googlePhotosAlbumUrl`

## 💻 Step 3: Test Locally (5 minutes)

```bash
# Open terminal in project folder

# Install dependencies (first time only)
npm install

# Start development server
npm run dev
```

Open your browser to the URL shown (usually `http://localhost:5174`)

### Test Checklist
- ✓ Couple names display correctly
- ✓ Countdown timer is updating
- ✓ All dates and venues are correct
- ✓ Family names are correct
- ✓ Timeline shows all events
- ✓ "View Invitation" button opens PDF
- ✓ "Download PDF" button downloads file
- ✓ "Watch Invite Video" button plays video
- ✓ Gallery page shows album link

## 🌐 Step 4: Deploy to Internet (5 minutes)

### Option A: Vercel (Easiest - Recommended)

```bash
# First, push your code to GitHub
git init
git add .
git commit -m "Initial wedding website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/wedding-website
git push -u origin main
```

Then:
1. Go to https://vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Click "Deploy"
5. Your website is live! 🎉

### Option B: Netlify

```bash
npm run build
```

1. Go to https://netlify.com
2. Drag and drop the `dist` folder
3. Your website is live! 🎉

### Option C: GitHub Pages

1. Update `vite.config.ts`:
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/wedding-website/', // Change to your repo name
})
```

2. Build and deploy:
```bash
npm run build
npm run build && git add dist -f && git commit -m "Deploy" && git push origin `git subtree split --prefix dist main`:gh-pages --force
```

## 📱 Step 5: Share with Guests

1. Copy your website URL
2. Test it on your phone
3. Share via:
   - WhatsApp - paste link directly
   - Email - with a nice message
   - SMS - use URL shortener (bit.ly)
   - Social media - Facebook, Instagram

### WhatsApp Tip
The website has a beautiful preview in WhatsApp! Just paste the link and it will show your wedding info.

## 🎨 Step 6 (Optional): Customize Colors

If you want to change the colors, edit `src/theme.ts`:

```typescript
palette: {
  primary: {
    main: '#D4A5A5', // Blush pink - change this color
  },
  secondary: {
    main: '#D4B5E8', // Lavender - change this color
  },
}
```

Some color ideas:
- Gold: `#D4AF37`
- Rose: `#E75480`
- Peach: `#FFB6A3`
- Purple: `#B4A7D6`

## ✅ Checklist

Before sharing with guests:

- [ ] All couple names updated
- [ ] All dates are correct
- [ ] All venues are correct
- [ ] Family names are correct
- [ ] PDF link is valid and shareable
- [ ] Video link is valid and shareable
- [ ] Google Photos album is public and has photos
- [ ] Tested on mobile phone
- [ ] Countdown timer is working
- [ ] All buttons work
- [ ] Website is deployed and live

## 🆘 Quick Troubleshooting

**"npm: command not found"**
- Install Node.js from https://nodejs.org

**"Port already in use"**
- Dev server will automatically try another port
- Or kill existing process: `npx fkill 5173`

**"PDF not opening"**
- Check Google Drive sharing is ON
- Verify link ends with `/view`

**"Video not playing"**
- Check link ends with `/preview` NOT `/view`
- Check Google Drive sharing is ON

**"Photos not showing"**
- Verify Google Photos album is PUBLIC
- Check album link format: `https://photos.app.goo.gl/...`

## 📞 Need Help?

Check the full README.md for detailed documentation!

---

## 🎉 You're All Set!

Your elegant wedding website is ready to share with the world!

**Next step:** Open `src/config.ts` and update your details! 💍✨
