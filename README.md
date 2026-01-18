# Amarjit & Anju - Royal Wedding Website

A luxurious, elegant wedding website built with React, TypeScript, Vite, and Material UI. Featuring a countdown timer, wedding details, family information, event timeline, and auto-updating photo gallery.

## ✨ Features

### Invite Page
- **Couple Names & Welcome Message** - Elegant header with couple names and wedding invitation text
- **Live Countdown Timer** - Days | Hours | Minutes | Seconds (updates every second)
- **Wedding Ceremony Details** - Date, time, and venue information
- **Family Details** - Groom and bride family names and parents' names
- **Events Timeline** - Mandva, Haldi, and Wedding ceremony with dates
- **Reception Details** - Separate reception date, time, and venue
- **Action Buttons** - View PDF, Download PDF, Watch Video

### Gallery Page
- **Google Photos Album** - Embedded view-only gallery
- **Auto-Updates** - New photos appear automatically when added to album
- **Mobile Optimized** - Beautiful, responsive gallery view

### Design
- **Royal Aesthetic** - Soft blush pink, ivory, lavender, and gold accents
- **Typography** - Playfair Display (headings), Poppins (body)
- **Material UI Components** - Cards, buttons, tabs, timeline, grids
- **Responsive** - Mobile-first, works perfectly on all devices
- **Smooth Animations** - Hover effects, transitions, professional feel

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Update Wedding Details

Edit `src/config.ts`:

```typescript
export const weddingConfig = {
  brideName: "Anju",
  groomName: "Amarjit",
  
  ceremony: {
    date: "Wednesday, 25 February 2026",
    time: "8:00 PM",
    venue: "Kanchrapara, Kolkata, West Bengal",
  },
  
  reception: {
    date: "Friday, 27 February 2026",
    time: "8:00 PM",
    venue: "Shiv Shakti Marriage Hall, Sarbari More, Madhukunda Road, West Bengal",
  },
  
  countdownDate: new Date("2026-02-25T20:00:00+05:30").toISOString(),
  
  groom: {
    name: "Amarjit",
    motherName: "Smt. Neelam Sharma",
    fatherName: "Shri Ashok Sharma",
  },
  
  bride: {
    name: "Anju",
    motherName: "Smt. Rekha Devi Sharma",
    fatherName: "Shri Prakash Sharma",
  },
  
  events: [
    { title: "Mandva, Matkor, Mandap & Lagan", date: "Monday, 23 February 2026" },
    { title: "Haldi Kalash & Gritdhari Poojan", date: "Tuesday, 24 February 2026" },
    { title: "Auspicious Wedding Ceremony", date: "Wednesday, 25 February 2026" },
  ],
  
  invitationPdfUrl: "https://drive.google.com/file/d/YOUR_PDF_ID/view",
  invitationVideoUrl: "https://drive.google.com/file/d/YOUR_VIDEO_ID/preview",
  googlePhotosAlbumUrl: "https://photos.app.goo.gl/YOUR_ALBUM_ID",
};
```

### 3. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5174` and see your website live!

### 4. Build for Production

```bash
npm run build
npm run preview
```

## 📝 Configuration Guide

### Getting Your Links

#### PDF Invitation
1. Create your wedding invitation PDF
2. Upload to Google Drive
3. Right-click → Share → "Anyone with the link"
4. Copy link: `https://drive.google.com/file/d/FILE_ID/view`

#### Video Invitation
1. Upload video to Google Drive
2. Right-click → Share → "Anyone with the link"
3. Change `/view` to `/preview` at the end
4. Example: `https://drive.google.com/file/d/VIDEO_ID/preview`

#### Google Photos Album
1. Create album in Google Photos
2. Click Share → "Create link"
3. Ensure "Anyone with the link" is enabled
4. Copy link: `https://photos.app.goo.gl/ALBUM_ID`

### Customizing the Countdown
Edit the date in `src/config.ts`:

```typescript
countdownDate: new Date("2026-02-25T20:00:00+05:30").toISOString(),
// Change to your wedding date/time (IST timezone example above)
```

### Customizing Colors (Theme)
Edit `src/theme.ts`:

```typescript
palette: {
  primary: {
    main: '#D4A5A5', // Blush pink - change here
  },
  secondary: {
    main: '#D4B5E8', // Lavender - change here
  },
}
```

## 🌐 Deployment

### Vercel (Recommended)
```bash
# Push to GitHub first
git push origin main

# Then:
# 1. Go to https://vercel.com
# 2. Click "New Project"
# 3. Import your repository
# 4. Click "Deploy"
```

### Netlify
```bash
npm run build
# Drag & drop the 'dist' folder to Netlify
```

### GitHub Pages
```bash
# Update vite.config.ts
export default defineConfig({
  plugins: [react()],
  base: '/repo-name/',
})

npm run build
# Deploy dist folder to gh-pages branch
```

## 📱 Mobile & Sharing

- **WhatsApp Compatible** - Full responsive design for mobile
- **Fast Loading** - Optimized for mobile networks
- **Share Preview** - Beautiful preview in WhatsApp and other apps
- **Touch Friendly** - Large buttons, easy navigation

## 🎨 Theme Colors

The website uses an elegant royal color palette:

- **Primary (Blush Pink)**: #D4A5A5 - Main headings and accents
- **Secondary (Lavender)**: #D4B5E8 - Countdown timer and highlights
- **Background (Ivory)**: #FEF9F6 - Page background
- **Gold Accents**: #D4AF37 - Premium touches

## 📦 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx         # Navigation tabs
│   ├── PdfViewer.tsx      # PDF viewer component
│   ├── VideoEmbed.tsx     # Video embed component
│   └── GooglePhotosAlbum.tsx
├── pages/
│   ├── InvitePage.tsx     # Main invitation page with all details
│   └── GalleryPage.tsx    # Photo gallery page
├── config.ts              # ⭐ ALL SETTINGS HERE ⭐
├── theme.ts               # Material UI theme configuration
├── App.tsx                # Main app with theme provider
└── main.tsx               # Entry point
```

## 🔧 Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Lightning-fast build tool
- **Material UI** - Professional component library
- **Emotion** - CSS-in-JS styling
- **Google Fonts** - Playfair Display & Poppins

## 💡 Features Explained

### Countdown Timer
- Updates live every second
- Displays Days | Hours | Minutes | Seconds
- Stops when wedding date arrives
- Perfect for building excitement!

### Timeline Component
- Shows all wedding events chronologically
- Alternating colors (pink and lavender)
- Clean, vertical layout
- Mobile responsive

### Responsive Design
- **Mobile** (< 600px) - Stacked, single column
- **Tablet** (600-960px) - Two columns where appropriate
- **Desktop** (> 960px) - Full layout with spacing

## 🆘 Troubleshooting

**Dev server not starting?**
```bash
# Kill existing process and retry
npm run dev
```

**PDF not opening?**
- Verify Google Drive sharing is enabled
- Check link format: `https://drive.google.com/file/d/FILE_ID/view`
- Try in incognito mode

**Video not playing?**
- Ensure link ends with `/preview` not `/view`
- Check "Anyone with the link" is enabled
- Test link separately in browser

**Photos not showing?**
- Verify Google Photos album is public
- Use share link, not embed code
- Check album link format: `https://photos.app.goo.gl/...`

**Countdown not updating?**
- Check date format in config.ts
- Ensure countdown date is in future
- Verify timezone is correct (IST example: +05:30)

## 📞 Support

For issues:
1. Check configuration in `src/config.ts`
2. Verify all links are correct
3. Test each link in browser separately
4. Clear browser cache (Ctrl+Shift+Del)
5. Restart dev server

## 🎉 Ready to Go!

Your royal wedding website is ready to share! 

**Next steps:**
1. ✅ Update `src/config.ts` with your details
2. ✅ Test locally at http://localhost:5174
3. ✅ Deploy to Vercel/Netlify
4. ✅ Share the link with guests!

---

**Made with ❤️ for your special day**

`Amarjit & Anju - February 25, 2026`
