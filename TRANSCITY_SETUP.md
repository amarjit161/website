# 🎨 Transcity Font Setup - Action Required

## Current Status
✅ Code is ready and waiting for font files  
⏳ Needs: Transcity TTF files to be added to `public/fonts/`

---

## Step 1: Download Transcity Font

1. Visit: **https://www.1001fonts.com/transcity-font.html**
2. Click **"Download"** button
3. Extract the ZIP file
4. You should have these files:
   - `Transcity.ttf` (or similar naming)
   - Possibly other variants (Bold, Italic, etc.)

---

## Step 2: Add Font Files to Project

Add the TTF files to: `public/fonts/`

### Files to Add:
- ✅ `Transcity.ttf` - **REQUIRED** (regular weight)
- ⚠️ `Transcity-Bold.ttf` - Optional (will fall back to regular)
- ⚠️ `Transcity-Italic.ttf` - Optional (will fall back to regular)
- ⚠️ `Transcity-BoldItalic.ttf` - Optional (will fall back to regular)

**At minimum, rename and add the main font as `Transcity.ttf`**

---

## Step 3: Verify It Works

1. **Refresh browser** (hard refresh: `Ctrl+Shift+R` or `Cmd+Shift+R`)
2. **Look at hero title**: "Amarjit & Anju"
3. **Should see**: Elegant, flowing Transcity font
4. **Check DevTools** (F12) → Network tab → Look for `Transcity.ttf` (should be 200-400 KB)

---

## What's Already Set Up

✅ **@font-face declarations** in `src/index.css`  
✅ **Premium typography CSS** in `src/styles/typography.css`  
✅ **Hero classes** applied in `src/pages/InvitePage.tsx`  
✅ **Import statements** in `src/App.tsx`  

### Premium Features Included:
- 🎯 **Responsive sizing**: `clamp(2.2rem, 5vw, 4.2rem)` (Mobile → Desktop)
- 📝 **Elegant letter spacing**: `0.08em` for luxury feel
- ✨ **Layered text shadow**: Depth effect with gold glow
- 🎪 **Graceful fallback**: Playfair Display → Fraunces → Georgia (if font fails)
- 📱 **Mobile optimized**: Reduced shadow intensity on small screens
- ♿ **Accessibility**: Respects `prefers-reduced-motion` 
- 🎨 **3D toggle compatible**: Enhanced glow when 3D is enabled

---

## File Structure

```
website/
├── public/
│   └── fonts/           ← ADD FILES HERE
│       ├── Transcity.ttf
│       ├── Transcity-Bold.ttf
│       ├── Transcity-Italic.ttf
│       └── Transcity-BoldItalic.ttf
├── src/
│   ├── index.css        ← @font-face declarations (✅ updated)
│   ├── App.tsx          ← Imports typography.css (✅ updated)
│   ├── styles/
│   │   └── typography.css   ← NEW (✅ created)
│   └── pages/
│       └── InvitePage.tsx   ← Uses classes (✅ updated)
```

---

## Why This Approach Works on Vercel

✅ **Static asset delivery** - Fonts in `public/` = served by CDN  
✅ **No external APIs** - Fonts loaded locally, not from Google/CDN  
✅ **Zero latency** - Fonts cache after first load  
✅ **Works offline** - No dependency on internet connectivity  
✅ **Vercel free tier** - No premium features needed  
✅ **Fast performance** - Uses `font-display: swap` for non-blocking loads  

---

## Troubleshooting

### Font Not Showing?
**Solution:**
1. Make sure file is named exactly: `Transcity.ttf`
2. Make sure file is in: `public/fonts/` (not `src/fonts/`)
3. Hard refresh: `Ctrl+Shift+R`
4. Check DevTools console for errors

### Font Looks Blurry?
**Solution:**
1. This is normal during font load
2. Page should render fallback (Playfair Display) first
3. Transcity appears after 200ms
4. Check DevTools → Network → Font should be ~200-400 KB

### Font Still Not Loading?
**Check:**
1. Is file actually in `public/fonts/`?
2. Is filename exactly `Transcity.ttf`? (case-sensitive on Linux/Vercel)
3. Run: `dir public\fonts` in terminal to verify
4. Restart dev server: `npm run dev`

---

## Before & After

### BEFORE (Generic Serif)
```
Amarjit & Anju
(Using system font, less elegant)
```

### AFTER (Transcity Font)
```
Amarjit & Anju
(Flowing, elegant, luxury wedding style)
- Graceful curves
- Premium feel
- Invitation-style
- 0.08em letter spacing for elegance
- Gold-tinted text shadow
- Responsive sizing
```

---

## Next Steps

1. **Download Transcity font** from 1001 Fonts
2. **Add `.ttf` file(s)** to `public/fonts/`
3. **Refresh browser** to see changes
4. **Test on mobile** - responsive sizing should adapt
5. **Toggle 3D** - enhanced glow when enabled
6. **Deploy to Vercel** - should work immediately

---

## Support

If fonts aren't working after adding files:
1. Check DevTools console for CORS/loading errors
2. Verify file paths match exactly (case-sensitive)
3. Try hard refresh: `Ctrl+Shift+R`
4. Restart dev server: `npm run dev`
5. Check that font file is valid TTF format

All code is ready - just needs the font file! 💍✨
