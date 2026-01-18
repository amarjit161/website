# 🎊 Amarjit & Anju Wedding Website - Complete Overview

## What's Been Built

Your royal wedding website is complete with Material UI design, featuring an elegant, premium look perfect for sharing with guests.

### 🎨 Design Highlights

**Color Palette:**
- **Blush Pink** (#D4A5A5) - Primary color for headings and accents
- **Lavender** (#D4B5E8) - Secondary color for highlights
- **Ivory** (#FEF9F6) - Soft background
- **Gold** (#D4AF37) - Premium accents

**Typography:**
- **Playfair Display** - Elegant serif for all headings
- **Poppins** - Modern sans-serif for body text

**Components:**
- Material UI tabs for navigation
- Card-based sections with soft shadows
- Timeline component for events
- Live countdown timer
- Responsive grid layouts

### 📄 Pages Included

#### 1. Invite Page
- **Header Section**
  - Couple names (Amarjit & Anju)
  - Welcome message: "Together with their families, invite you to celebrate their wedding"
  
- **Countdown Timer**
  - Live updates every second
  - Shows Days | Hours | Minutes | Seconds
  - Updates dynamically until wedding day
  
- **Wedding Ceremony Card**
  - Date: Wednesday, 25 February 2026
  - Time: 8:00 PM
  - Venue: Kanchrapara, Kolkata, West Bengal
  - Groom details (name, mother, father)
  - Bride details (name, mother, father)
  
- **Events Timeline**
  - Mandva, Matkor, Mandap & Lagan (Monday, 23 February 2026)
  - Haldi Kalash & Gritdhari Poojan (Tuesday, 24 February 2026)
  - Auspicious Wedding Ceremony (Wednesday, 25 February 2026)
  
- **Reception Card**
  - Date: Friday, 27 February 2026
  - Time: 8:00 PM
  - Venue: Shiv Shakti Marriage Hall, Sarbari More, Madhukunda Road, West Bengal
  
- **Action Buttons**
  - View Wedding Invitation (PDF)
  - Download PDF
  - Watch Invite Video

#### 2. Gallery Page
- **Photo Album Section**
  - Link to Google Photos album
  - Auto-updates when new photos added
  - View-only for guests
  - Mobile optimized viewing

#### 3. Navigation
- Material UI Tabs at top
- Easy switching between Invite and Gallery pages
- Sticky navigation for easy access

## 📁 Project Structure

```
website/
├── src/
│   ├── config.ts              ⭐ ALL SETTINGS HERE
│   ├── theme.ts               → Colors & fonts
│   ├── App.tsx                → Main app with ThemeProvider
│   ├── index.css              → Global styles
│   ├── App.css                → App container styles
│   │
│   ├── components/
│   │   ├── Navbar.tsx         → Material UI Tabs navigation
│   │   ├── PdfViewer.tsx      → PDF view/download
│   │   ├── VideoEmbed.tsx     → Video player
│   │   └── GooglePhotosAlbum.tsx
│   │
│   ├── pages/
│   │   ├── InvitePage.tsx     → Complete invitation page
│   │   └── GalleryPage.tsx    → Photo gallery page
│   │
│   ├── main.tsx               → Entry point
│   └── assets/                → Images/SVGs
│
├── public/                    → Static files
├── index.html                 → HTML template
├── package.json               → Dependencies
├── vite.config.ts             → Build config
├── tsconfig.json              → TypeScript config
│
├── README.md                  → Full documentation
├── SETUP.md                   → Step-by-step setup guide
└── QUICKSTART.md              → Quick reference

```

## 🚀 Current Status

**Development Server Running:**
- URL: http://localhost:5174/
- Status: ✅ Active
- Hot Reload: ✅ Enabled
- Vite: ✅ v7.3.1

## ⚡ Quick Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check for lint errors
npm run lint
```

## 🔧 What You Need to Do

### Step 1: Update `src/config.ts`
This is the ONLY file you need to edit to customize your wedding!

Replace placeholders with:
- Couple names
- Wedding dates and venues
- Family details
- External links (PDF, video, photos)
- Events timeline

### Step 2: Get Your Links
- **PDF**: Upload to Google Drive, share link
- **Video**: Upload to Google Drive, change `/view` to `/preview`
- **Photos**: Create Google Photos album, share link

### Step 3: Test Locally
Visit http://localhost:5174 and verify everything works

### Step 4: Deploy
Build with `npm run build` and deploy `dist` folder to:
- Vercel (easiest)
- Netlify
- GitHub Pages

## 🎨 Customization Options

### Colors
Edit `src/theme.ts` palette section

### Fonts
Fonts already imported from Google Fonts:
- Playfair Display
- Poppins

### Layout
Edit component files in `src/pages/` and `src/components/`

### Content
Edit `src/config.ts` for all text content

## 📱 Features

✅ Live countdown timer
✅ Complete wedding details
✅ Family information
✅ Events timeline
✅ Responsive design (mobile-first)
✅ WhatsApp shareable
✅ Auto-updating gallery
✅ No backend required
✅ Fast loading
✅ Beautiful animations

## 🌟 Design Principles

1. **Elegant & Romantic** - Royal aesthetic with soft colors
2. **User-Friendly** - Simple navigation, clear information
3. **Mobile-First** - Works perfectly on phones
4. **Shareable** - Beautiful preview in WhatsApp/SMS
5. **Accessible** - Good contrast, readable fonts
6. **Professional** - Premium feel throughout

## 🎯 Use Cases

✅ Share with guests before wedding
✅ Send via WhatsApp/Email
✅ Display at wedding venue
✅ Wedding memories after event
✅ Archive for posterity

## 📊 Tech Stack Details

**Frontend:**
- React 19 (latest)
- TypeScript (type-safe)
- Vite (fast build)

**UI Components:**
- Material UI (professional)
- Emotion (CSS-in-JS)

**Typography:**
- Google Fonts (Playfair Display, Poppins)

**Hosting:**
- No backend required
- Static site
- Works on Vercel, Netlify, GitHub Pages

## 🔐 Security & Privacy

✅ No database
✅ No user authentication
✅ No cookies/tracking
✅ External links only (PDF, video, photos)
✅ All links managed in config file
✅ Guest read-only access

## ✨ Special Features

1. **Live Countdown** - Updates every second
2. **Timeline Layout** - Alternating colors for events
3. **Responsive Grid** - Adapts to all screen sizes
4. **Material Design** - Professional component library
5. **Smooth Animations** - Hover effects and transitions
6. **Auto-Updating** - Photos update when added to album

## 📞 Getting Help

1. **Quick answers**: Check QUICKSTART.md
2. **Step-by-step**: Read SETUP.md
3. **Full documentation**: See README.md
4. **Issues**: Check troubleshooting sections

## 🎉 Next Steps

1. ✅ Edit `src/config.ts` with your details
2. ✅ Get your links (PDF, video, photos)
3. ✅ Test at http://localhost:5174
4. ✅ Deploy to Vercel/Netlify
5. ✅ Share with guests!

## 📈 Timeline

- **Before Event**: Update details, share website
- **During Event**: Keep adding photos to album
- **After Event**: Website auto-updates with photos
- **Forever**: Archive of wedding memories

---

## 🎊 Summary

Your elegant royal wedding website is **complete and ready to use**!

- ✅ Material UI design complete
- ✅ All pages built
- ✅ Countdown timer working
- ✅ Dev server running
- ✅ Mobile responsive
- ✅ Ready to customize

**Everything you need is in `src/config.ts`**

### Files to Read:
1. **QUICKSTART.md** - 5-minute overview
2. **SETUP.md** - Step-by-step guide
3. **README.md** - Full documentation

### Where to Start:
👉 Edit `src/config.ts` with your wedding details!

---

**Your website is running at: http://localhost:5174/**

**Made with ❤️ for Amarjit & Anju** 💍✨
