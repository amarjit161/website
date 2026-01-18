# Configuration Template - Copy & Paste Into src/config.ts

This file shows you exactly what to put in `src/config.ts` for your wedding.

## Full Configuration Template

```typescript
// Wedding Website Configuration
// Update all details below

export const weddingConfig = {
  // ========================================
  // COUPLE NAMES
  // ========================================
  brideName: "Anju",
  groomName: "Amarjit",

  // ========================================
  // WEDDING CEREMONY
  // ========================================
  ceremony: {
    date: "Wednesday, 25 February 2026",
    time: "8:00 PM",
    venue: "Kanchrapara, Kolkata, West Bengal",
  },

  // ========================================
  // RECEPTION
  // ========================================
  reception: {
    date: "Friday, 27 February 2026",
    time: "8:00 PM",
    venue: "Shiv Shakti Marriage Hall, Sarbari More, Madhukunda Road, West Bengal",
  },

  // ========================================
  // COUNTDOWN TIMER
  // ========================================
  // Format: new Date("YYYY-MM-DDTHH:MM:SS+HH:MM").toISOString()
  // For IST (India): +05:30
  // Examples:
  //   8:00 PM on Feb 25, 2026: "2026-02-25T20:00:00+05:30"
  //   10:00 AM on Jan 1, 2026: "2026-01-01T10:00:00+05:30"
  countdownDate: new Date("2026-02-25T20:00:00+05:30").toISOString(),

  // ========================================
  // FAMILY DETAILS - GROOM
  // ========================================
  groom: {
    name: "Amarjit",
    motherName: "Smt. Neelam Sharma",
    fatherName: "Shri Ashok Sharma",
  },

  // ========================================
  // FAMILY DETAILS - BRIDE
  // ========================================
  bride: {
    name: "Anju",
    motherName: "Smt. Rekha Devi Sharma",
    fatherName: "Shri Prakash Sharma",
  },

  // ========================================
  // EVENTS TIMELINE
  // ========================================
  events: [
    {
      title: "Mandva, Matkor, Mandap & Lagan",
      date: "Monday, 23 February 2026",
    },
    {
      title: "Haldi Kalash & Gritdhari Poojan",
      date: "Tuesday, 24 February 2026",
    },
    {
      title: "Auspicious Wedding Ceremony",
      date: "Wednesday, 25 February 2026",
    },
  ],

  // ========================================
  // EXTERNAL LINKS
  // ========================================
  // PDF Invitation - Google Drive link ending with /view
  invitationPdfUrl: "https://drive.google.com/file/d/YOUR_PDF_FILE_ID/view",

  // Video Invitation - Google Drive link ending with /preview (NOT /view)
  invitationVideoUrl: "https://drive.google.com/file/d/YOUR_VIDEO_ID/preview",

  // Google Photos Album - Share link
  googlePhotosAlbumUrl: "https://photos.app.goo.gl/YOUR_ALBUM_ID",

  // Optional: Direct embed URL if you have it
  googlePhotosEmbedUrl: "",
};
```

---

## How to Fill Each Field

### 1. Couple Names
```typescript
brideName: "Anju",        // Bride's first name
groomName: "Amarjit",     // Groom's first name
```

### 2. Wedding Ceremony
```typescript
ceremony: {
  date: "Wednesday, 25 February 2026",    // Full date with day
  time: "8:00 PM",                        // Time in 12-hour format
  venue: "Kanchrapara, Kolkata, West Bengal",  // Full venue address
}
```

### 3. Reception
```typescript
reception: {
  date: "Friday, 27 February 2026",       // Full date with day
  time: "8:00 PM",                        // Time in 12-hour format
  venue: "Shiv Shakti Marriage Hall, ...",// Full venue address
}
```

### 4. Countdown Date & Time
```typescript
// Format: "YYYY-MM-DDTHH:MM:SS+05:30"
// YYYY = Year (4 digits)
// MM = Month (01-12)
// DD = Day (01-31)
// HH = Hour (00-23, in 24-hour format)
// MM = Minutes (00-59)
// SS = Seconds (00-59)
// +05:30 = IST timezone (don't change this for India)

Examples:
  "2026-02-25T20:00:00+05:30"  // 8:00 PM
  "2026-02-25T14:30:00+05:30"  // 2:30 PM
  "2026-02-25T09:00:00+05:30"  // 9:00 AM

Your ceremony time:
  new Date("2026-02-25T20:00:00+05:30").toISOString()
```

### 5. Family Details
```typescript
groom: {
  name: "Amarjit",                    // Groom's name
  motherName: "Smt. Neelam Sharma",   // Mother's name (with title)
  fatherName: "Shri Ashok Sharma",    // Father's name (with title)
}

bride: {
  name: "Anju",                       // Bride's name
  motherName: "Smt. Rekha Devi Sharma",  // Mother's name
  fatherName: "Shri Prakash Sharma",     // Father's name
}
```

### 6. Events Timeline
```typescript
events: [
  {
    title: "Event Name Here",           // What event (Mandva, Haldi, etc)
    date: "Monday, 23 February 2026",   // Full date with day
  },
  // Add as many events as you want!
]
```

### 7. External Links

#### PDF Link
```typescript
// 1. Upload PDF to Google Drive
// 2. Right-click → Share → "Anyone with the link"
// 3. Get the share link
// 4. Copy and paste here (must end with /view)

invitationPdfUrl: "https://drive.google.com/file/d/ABC123XYZ789/view"
                                                             ^^^^
                                                         Must end with /view
```

#### Video Link
```typescript
// 1. Upload video to Google Drive
// 2. Right-click → Share → "Anyone with the link"
// 3. Get the share link
// 4. CHANGE /view to /preview at the end
// 5. Copy and paste here

invitationVideoUrl: "https://drive.google.com/file/d/ABC123XYZ789/preview"
                                                              ^^^^^^^
                                                          Must end with /preview
```

#### Google Photos Link
```typescript
// 1. Create album in Google Photos
// 2. Click Share button
// 3. Enable "Link sharing"
// 4. Make sure "Anyone with the link" is selected
// 5. Copy the link
// 6. Paste here (looks like https://photos.app.goo.gl/ABC123)

googlePhotosAlbumUrl: "https://photos.app.goo.gl/XyZ123AbC456"
```

---

## Real Example (Filled Out)

```typescript
export const weddingConfig = {
  brideName: "Priya",
  groomName: "Rajesh",

  ceremony: {
    date: "Saturday, 15 March 2026",
    time: "6:00 PM",
    venue: "Grand Palace Hotel, Sector 5, Delhi - 110001",
  },

  reception: {
    date: "Sunday, 16 March 2026",
    time: "7:30 PM",
    venue: "Taj Convention Center, Connaught Place, New Delhi - 110001",
  },

  countdownDate: new Date("2026-03-15T18:00:00+05:30").toISOString(),

  groom: {
    name: "Rajesh",
    motherName: "Smt. Sunita Singh",
    fatherName: "Shri Ramesh Singh",
  },

  bride: {
    name: "Priya",
    motherName: "Smt. Anita Sharma",
    fatherName: "Shri Vinod Sharma",
  },

  events: [
    {
      title: "Mehendi Ceremony",
      date: "Thursday, 13 March 2026",
    },
    {
      title: "Haldi & Bachelorette",
      date: "Friday, 14 March 2026",
    },
    {
      title: "Wedding Ceremony",
      date: "Saturday, 15 March 2026",
    },
  ],

  invitationPdfUrl: "https://drive.google.com/file/d/1Ab2Cd3Ef4Gh5Ij6Kl7Mn8Op9Qr0Ts1Uv/view",
  invitationVideoUrl: "https://drive.google.com/file/d/2Xy3Za4Bc5De6Fg7Hi8Jk9Lm0No1Pq2Rs/preview",
  googlePhotosAlbumUrl: "https://photos.app.goo.gl/aBcDeFgHiJkLmNoPqRsTu",
  googlePhotosEmbedUrl: "",
};
```

---

## Tips & Tricks

### Time Conversion (12-hour to 24-hour)
```
12:00 AM (midnight) = 00:00
1:00 AM             = 01:00
6:00 AM             = 06:00
12:00 PM (noon)     = 12:00
1:00 PM             = 13:00
6:00 PM             = 18:00
8:00 PM             = 20:00
11:59 PM            = 23:59
```

### Common Formatting Issues

❌ Wrong:
```typescript
date: "25 February",           // Missing day name and year
time: "08:00 PM",              // Wrong format (needs 8:00 PM)
venue: "Kolkata",              // Too vague (needs full address)
countdownDate: "2026-02-25"    // Missing time
```

✅ Correct:
```typescript
date: "Wednesday, 25 February 2026",
time: "8:00 PM",
venue: "Kanchrapara, Kolkata, West Bengal",
countdownDate: new Date("2026-02-25T20:00:00+05:30").toISOString()
```

---

## Quick Copy-Paste Template

Use this blank template and fill in your details:

```typescript
export const weddingConfig = {
  brideName: "",
  groomName: "",

  ceremony: {
    date: "",
    time: "",
    venue: "",
  },

  reception: {
    date: "",
    time: "",
    venue: "",
  },

  countdownDate: new Date("").toISOString(),

  groom: {
    name: "",
    motherName: "",
    fatherName: "",
  },

  bride: {
    name: "",
    motherName: "",
    fatherName: "",
  },

  events: [
    { title: "", date: "" },
    { title: "", date: "" },
    { title: "", date: "" },
  ],

  invitationPdfUrl: "",
  invitationVideoUrl: "",
  googlePhotosAlbumUrl: "",
  googlePhotosEmbedUrl: "",
};
```

---

## Need Help?

- **Countdown date format?** See "Time Conversion" section
- **Can't get link?** See SETUP.md
- **Link not working?** Check file format (view vs preview)
- **Still stuck?** Check README.md troubleshooting

---

**That's it!** Fill in all fields and your website is ready! 💍✨
