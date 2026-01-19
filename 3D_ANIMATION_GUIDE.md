# 3D Animation Toggle - Implementation Guide

## Overview
Your wedding website now has a **3D Animation Toggle** that allows visitors to enable/disable smooth 3D effects on free hosting platforms (Vercel, GitHub Pages).

## Features ✨

✅ **Toggle Switch** in Navbar - Elegant 3D/2D toggle  
✅ **LocalStorage Persistence** - User preference saved across sessions  
✅ **CSS-Only 3D Effects** - No expensive libraries or server logic  
✅ **Mobile Optimized** - Responsive and performance-friendly  
✅ **Accessibility** - Keyboard navigation and ARIA labels  
✅ **Reduced Motion Support** - Respects user preferences  
✅ **Free Hosting Compatible** - Works on Vercel & GitHub Pages  

---

## How It Works

### 1. Global 3D State Management
The app uses **React Context** (`ThreeDContext.tsx`) to manage 3D state globally:
- Stores `is3DEnabled` boolean
- Auto-saves to `localStorage` (key: `threeD_enabled`)
- Applies `threeD-enabled` class to `<html>` element for CSS access

### 2. Toggle Switch Component
**Location:** `src/components/ThreeDToggle.tsx`
- Displays in Navbar on the right
- Shows "3D" when enabled, "2D" when disabled
- Keyboard accessible (Enter/Space to toggle)
- Fully accessible with ARIA labels

### 3. CSS-Based 3D Effects
**Location:** `src/styles/threeD.css`

#### Available 3D Classes

You can apply 3D effects to any component using these CSS classes:

| Class | Effect |
|-------|--------|
| `card-3d` or `threeD-card` | Tilt + lift on hover (like MUI Cards) |
| `paper-3d` or `threeD-paper` | Subtle lift + depth |
| `button-3d` or `threeD-button` | Punch effect on hover/click |
| `image-3d` or `threeD-image` | 3D rotation on hover |
| `text-3d` or `threeD-text` | Subtle lift + scale |
| `depth-layer-1/2/3` | Multi-layer depth effects |

---

## Quick Implementation Examples

### Example 1: Add 3D to a Card Component

```tsx
// Before (flat)
<Card>
  <CardContent>
    {/* content */}
  </CardContent>
</Card>

// After (3D enabled/disabled)
<Card className="card-3d">
  <CardContent>
    {/* content */}
  </CardContent>
</Card>
```

### Example 2: Add 3D to Buttons

```tsx
<Button
  variant="contained"
  className="button-3d"
  sx={{ /* existing styles */ }}
>
  Click Me
</Button>
```

### Example 3: Add 3D to Images

```tsx
<img 
  src="photo.jpg" 
  alt="Wedding photo"
  className="image-3d"
/>
```

### Example 4: Add 3D to MUI Paper

```tsx
<Paper className="paper-3d">
  {/* content */}
</Paper>
```

---

## Where to Add 3D Effects in Your Site

### InvitePage.tsx
Add 3D effects to:
- Event details cards → Add `className="card-3d"`
- Location card → Add `className="card-3d"`
- Timeline items → Add `className="depth-layer-1"`
- RSVP button → Add `className="button-3d"`
- Countdown boxes → Add `className="paper-3d"`

### GalleryPage.tsx
Add 3D effects to:
- Gallery cards → Add `className="card-3d"`
- Photo containers → Add `className="image-3d"`
- Section headings → Add `className="text-3d"`
- Open album button → Add `className="button-3d"`

---

## CSS Variables (Customizable)

Edit `src/styles/threeD.css` to adjust effect intensity:

```css
:root {
  --perspective-depth: 1200px;    /* Reduce for more dramatic tilt */
  --tilt-angle: 5deg;             /* Adjust hover rotation angle */
  --lift-distance: 8px;           /* Adjust lift height */
  --rotation-speed: 0.6s;         /* Adjust animation speed */
}
```

### Recommended Settings by Device

**Desktop (powerful):**
```css
--tilt-angle: 5deg;
--lift-distance: 8px;
```

**Tablet (moderate):**
```css
--tilt-angle: 3deg;
--lift-distance: 6px;
```

**Mobile (conservative):**
```css
--tilt-angle: 2deg;
--lift-distance: 4px;
```

---

## Performance Optimization

✅ **GPU Acceleration:** Uses `will-change` and `backface-visibility`  
✅ **Transform 3D Only:** No opacity/color animations (fast)  
✅ **Reduced Motion:** Automatically disables for users who prefer reduced motion  
✅ **Mobile Throttling:** Lighter effects on small screens  
✅ **CSS-Only:** Zero JavaScript overhead for animations  

---

## Testing Checklist

- [ ] Toggle works in Navbar
- [ ] Toggle state persists on refresh
- [ ] 3D effects visible when enabled
- [ ] Flat view when disabled
- [ ] Mobile looks good (smaller effects)
- [ ] Keyboard navigation works (Tab + Enter)
- [ ] Reduced motion users see flat view
- [ ] Performance is smooth on low-end devices
- [ ] Works on Vercel preview
- [ ] Works on GitHub Pages

---

## How to Apply to Existing Components

### Step 1: Import and identify component
```tsx
import { Card, CardContent, Paper, Button } from '@mui/material';
```

### Step 2: Add className
```tsx
<Card className="card-3d">
  {/* content */}
</Card>
```

### Step 3: Test
- Toggle 3D on/off
- Verify effects on desktop and mobile
- Check reduced motion mode

---

## Browser Compatibility

| Browser | Support |
|---------|---------|
| Chrome | ✅ Full |
| Firefox | ✅ Full |
| Safari | ✅ Full |
| Edge | ✅ Full |
| Mobile Safari | ✅ Full (optimized) |
| Chrome Mobile | ✅ Full (optimized) |

---

## No Additional Dependencies Required ✅

This implementation uses **ONLY**:
- React (already in your project)
- CSS 3D Transforms (browser native)
- localStorage (browser native)
- No: Babylon.js, Three.js, Gsap, or other 3D libraries

---

## Deployment

### Vercel
```bash
npm run build
# Deploy as usual - 3D toggle works on free plan ✅
```

### GitHub Pages
```bash
npm run build
# Upload dist/ folder - 3D toggle works ✅
```

---

## Troubleshooting

**Problem:** 3D effects not showing?
- Verify `className="card-3d"` is applied
- Check toggle is ON (toggle should show "3D")
- Check browser DevTools: `<html>` should have `class="threeD-enabled"`

**Problem:** Effects too strong/weak?
- Adjust CSS variables in `src/styles/threeD.css`
- Change `--tilt-angle` or `--lift-distance`

**Problem:** Performance issues on mobile?
- Effects are already reduced on mobile by CSS media queries
- CSS media query at 768px reduces effects further
- Ultra-low power devices (480px) use minimal effects

---

## Next Steps

1. ✅ **Implementation:** Done - Toggle is ready to use
2. 📝 **Add 3D classes** to your cards, buttons, and images
3. 🧪 **Test on devices** (desktop, tablet, mobile)
4. 🚀 **Deploy to Vercel** - Works on free tier!
5. 📱 **Test on GitHub Pages** - If using that as backup

---

## Questions?

The 3D toggle is completely CSS + React based, so:
- It works offline
- It doesn't require any backend
- It doesn't increase your Vercel bandwidth
- It's completely free to use
