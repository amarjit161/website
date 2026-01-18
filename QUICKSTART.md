# 🎊 Royal Wedding Website - Live Now!

## ✨ What's Ready

Your elegant wedding website with Material UI design is complete and running!

### ✅ What's Included

**Invite Page Features:**
- ✅ Elegant header with couple names
- ✅ Live countdown timer (Days | Hours | Minutes | Seconds)
- ✅ Wedding ceremony details section
- ✅ Family details (groom & bride parents)
- ✅ Events timeline (Mandva, Haldi, Wedding)
- ✅ Reception details
- ✅ View/Download PDF buttons
- ✅ Watch video button

**Gallery Page Features:**
- ✅ Google Photos album embed
- ✅ Auto-updates when photos are added
- ✅ View-only (secure)
- ✅ Mobile optimized

**Design Features:**
- ✅ Royal color palette (blush pink, lavender, ivory, gold)
- ✅ Playfair Display headings + Poppins body
- ✅ Material UI components
- ✅ Smooth animations & transitions
- ✅ Mobile-first responsive
- ✅ WhatsApp preview friendly

## 🚀 Server Status

Your dev server is running at: **http://localhost:5174/**

Visit that URL now to see your website!

## 📝 Next Steps (In Order)

### 1️⃣ Edit `src/config.ts` (REQUIRED)
This is where ALL your wedding details go:

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
  
  invitationPdfUrl: "YOUR_GOOGLE_DRIVE_PDF_LINK",
  invitationVideoUrl: "YOUR_GOOGLE_DRIVE_VIDEO_LINK",
  googlePhotosAlbumUrl: "YOUR_GOOGLE_PHOTOS_ALBUM_LINK",
};
```

### 2️⃣ Get Your Links
See **SETUP.md** for detailed instructions on:
- Getting PDF from Google Drive
- Getting video from Google Drive (with `/preview`)
- Getting Google Photos album link

### 3️⃣ Reload Browser
After editing `config.ts`, your browser should auto-refresh!

### 4️⃣ Test Everything
Visit http://localhost:5174 and test:
- Countdown timer updates
- PDF opens/downloads
- Video plays
- Gallery shows
- All text is correct

### 5️⃣ Deploy
When ready to go live:
```bash
npm run build
```

Then deploy `dist` folder to:
- **Vercel** (easiest)
- **Netlify**
- **GitHub Pages**

See **README.md** for deployment details.

## 📱 Current Features

### Colors
- **Primary (Blush Pink)**: #D4A5A5
- **Secondary (Lavender)**: #D4B5E8
- **Background (Ivory)**: #FEF9F6
- **Gold Accents**: #D4AF37

### Fonts
- **Headings**: Playfair Display (elegant serif)
- **Body**: Poppins (modern sans-serif)

### Components
- Material UI Tabs for navigation
- Card-based layout
- Timeline for events
- Live countdown timer
- Responsive grid system

## 🎨 Files to Know

```
src/
├── config.ts          ⭐ UPDATE THIS FIRST
├── theme.ts          → Colors & fonts (edit to customize theme)
├── App.tsx           → Main app with ThemeProvider
├── components/       → Navbar (tabs)
├── pages/
│   ├── InvitePage.tsx    → Main page with all details
│   └── GalleryPage.tsx   → Photo gallery
```

## 💡 Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check for errors
npm run lint
```

## ✅ Customization Options

### Change Countdown Date
Edit in `src/config.ts`:
```typescript
countdownDate: new Date("2026-02-25T20:00:00+05:30").toISOString(),
```

### Change Colors
Edit in `src/theme.ts`:
```typescript
primary: { main: '#D4A5A5' },  // Blush pink
secondary: { main: '#D4B5E8' }, // Lavender
```

### Add/Remove Events
Edit in `src/config.ts`:
```typescript
events: [
  { title: "Event Name", date: "Day, DD Month YYYY" },
]
```

## 🎯 Development Workflow

1. **Edit** `src/config.ts` → Changes appear instantly
2. **Save** file → Browser auto-refreshes
3. **Test** at http://localhost:5174
4. **Deploy** when ready

## 📊 Project Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Material UI** - Component library
- **Emotion** - CSS-in-JS
- **Google Fonts** - Playfair Display & Poppins

## 🆘 Common Issues

**"Countdown not starting"**
- Verify date in config.ts is in the future
- Check timezone format (+05:30 for IST)

**"Video not playing"**
- Ensure link ends with `/preview` not `/view`
- Check Google Drive sharing is ON

**"PDF not opening"**
- Verify Google Drive sharing is ON
- Check link ends with `/view`

**"Photos not showing"**
- Make sure Google Photos album is PUBLIC
- Use share link, not embed code

## 🎉 You're Ready!

Everything is set up! Just edit `src/config.ts` with your details and your royal wedding website is ready to share!

### Quick Checklist
- [ ] Open `src/config.ts`
- [ ] Update couple names
- [ ] Update dates & venues
- [ ] Update family names
- [ ] Update events (optional)
- [ ] Add PDF, video, album links
- [ ] Visit http://localhost:5174
- [ ] Test all buttons
- [ ] Deploy to Vercel/Netlify
- [ ] Share with guests! 💍✨

---

**Website is running at:** http://localhost:5174/

**Happy Wedding!** 🎊💕
