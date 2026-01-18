# 💍 Wedding Invitation & Gallery Website

A beautiful, responsive wedding website built with React, Vite, and Material-UI. Features video playback, PDF invitation downloads, and Google Photos gallery integration.

## ✨ Features

- **Responsive Design** - Mobile-first, works perfectly on all devices
- **Wedding Invitation Video** - Embed and play wedding announcement videos
- **PDF Invitation Download** - Easy digital invitation downloads from Google Drive
- **Google Photos Gallery** - Seamless photo album integration
- **Elegant UI** - Custom Material-UI theme with wedding colors
- **Countdown Timer** - Real-time countdown to the wedding day
- **Event Timeline** - Display all pre-wedding events
- **Venue Information** - Interactive Google Maps integration
- **Fast Performance** - Built with Vite for lightning-fast load times
- **Easy to Deploy** - Compatible with Vercel and GitHub Pages

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm

### Installation

1. **Navigate to project directory:**
```bash
cd website
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```

The website will open at `http://localhost:5173`

## 📝 Configuration

Edit `src/config.ts` to customize your wedding details:

```typescript
export const weddingConfig = {
  brideName: "Your Name",
  groomName: "Partner's Name",
  
  ceremony: {
    date: "Your Ceremony Date",
    time: "Your Ceremony Time",
    venue: "Your Venue",
  },
  
  reception: {
    date: "Your Reception Date",
    time: "Your Reception Time",
    venue: "Your Venue",
  },
  
  countdownDate: "ISO date string",
  
  // Google Drive file IDs
  invitationPdfUrl: "https://drive.google.com/file/d/PDF_ID/view",
  invitationVideoUrl: "https://drive.google.com/file/d/VIDEO_ID/preview",
  
  // Google Photos album
  googlePhotosAlbumUrl: "https://photos.app.goo.gl/ALBUM_ID",
  
  // Family details
  groom: { name, motherName, fatherName },
  bride: { name, motherName, fatherName },
  
  // Pre-wedding events
  events: [...]
};
```

## 🎨 Theme & Colors

The website uses an elegant wedding theme with:
- **Primary**: Blush Pink (#D4A5A5)
- **Secondary**: Lavender (#D4B5E8)
- **Accent**: Gold (#D4AF37)
- **Dark**: Wine Maroon & Midnight Purple

Customize colors in `src/theme.ts`

## 📱 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Navigation tabs
│   ├── VideoEmbed.tsx      # Video player component
│   ├── PdfViewer.tsx       # PDF viewer component
│   └── GooglePhotosAlbum.tsx # Gallery component
├── pages/
│   ├── InvitePage.tsx      # Main invitation page
│   └── GalleryPage.tsx     # Photo gallery page
├── config.ts               # Wedding configuration
├── theme.ts                # Material-UI theme
├── App.tsx                 # Main app component
└── main.tsx                # Entry point
```

## 🔗 External Links Setup

### 1. Google Drive Files

**For PDF Invitation:**
1. Upload PDF to Google Drive
2. Right-click → Share → Change to "Anyone with link can view"
3. Copy file ID from URL: `https://drive.google.com/file/d/FILE_ID/view`
4. Use: `https://drive.google.com/file/d/FILE_ID/view` (for preview)
5. Use: `https://drive.google.com/file/d/FILE_ID/download` (for download)

**For Video:**
1. Upload video to Google Drive
2. Make shareable
3. Copy file ID
4. Use: `https://drive.google.com/file/d/VIDEO_ID/preview`

### 2. Google Photos Album

1. Create album in Google Photos
2. Click share → Get link
3. Copy the full URL: `https://photos.app.goo.gl/XXXXX`
4. Paste in config

### 3. Google Maps

Update the venue coordinates in InvitePage.tsx (line 533):
```
https://www.google.com/maps/embed?pb=...
```

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel automatically deploys on push

### Deploy to GitHub Pages
1. Update `vite.config.ts` with your repo name
2. Run `npm run build`
3. Push `dist` folder to `gh-pages` branch

## 🛠️ Development

### Available Scripts

```bash
npm run dev      # Start dev server with HMR
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

### Adding New Sections

1. Create component in `src/components/`
2. Import and use in page components
3. Add navigation link in `Navbar.tsx` if needed

## 🎯 Customization Tips

- **Fonts**: Edit `src/theme.ts` - uses Playfair Display (serif) and Poppins (sans-serif)
- **Colors**: Update palette in `src/theme.ts`
- **Images**: Add to `public/` folder and reference in JSX
- **Metadata**: Edit `index.html` for SEO

## 🚀 Performance

- **Fast Load Times**: Vite provides instant HMR and optimized builds
- **Code Splitting**: Automatic route-based code splitting
- **Image Optimization**: Use WebP format where possible
- **Minification**: Automatic in production builds

## 💡 Tips

- Keep `config.ts` updated with latest information
- Test on mobile devices before sharing
- Use high-quality images for gallery
- Test video playback on different browsers
- Add custom font weights by editing `index.html`

## 📄 License

Free to use for your wedding website!

## ❓ Support

For issues or questions:
1. Check configuration in `src/config.ts`
2. Verify external links (PDF, Video, Photos)
3. Test on different browsers
4. Check browser console for errors

---

**Made with 💕 for your special day!**
