# Transcity Font Setup Guide

## Steps to Install Transcity Font

### 1. Download Transcity Font
- Visit: https://www.1001fonts.com/transcity-font.html
- Download the font (TTF format)
- Extract if needed

### 2. Add Font Files
Place the font files in this directory (`public/fonts/`):
- `Transcity.ttf` - Regular weight
- `Transcity-Bold.ttf` - Bold weight (optional)

### 3. Verify Setup
The @font-face declarations in `src/index.css` will automatically:
- Load the fonts from `public/fonts/`
- Apply to `.couple-name` elements
- Work on Vercel free tier (fonts served as static assets)

### 4. Why This Works on Vercel
- Fonts are in `public/` folder → served as static assets
- No CDN required → no external API calls
- Vercel automatically optimizes static assets
- Works offline and on any hosting platform

## Font File Naming Convention
- Regular: `Transcity.ttf`
- Bold: `Transcity-Bold.ttf`
- Italic: `Transcity-Italic.ttf`
- BoldItalic: `Transcity-BoldItalic.ttf`

## Current Status
⏳ Waiting for font files to be added to `public/fonts/`

Once added, the hero title will automatically:
✨ Display in elegant Transcity font
✨ Use responsive sizing with clamp()
✨ Have subtle text shadow for depth
✨ Show proper letter spacing
✨ Match the maroon + gold wedding theme
