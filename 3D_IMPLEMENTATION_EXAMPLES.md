// PRACTICAL EXAMPLES: How to Add 3D Effects to Your Components
// Copy and paste these examples into your GalleryPage.tsx and InvitePage.tsx

// ============================================
// EXAMPLE 1: Add 3D to Video Card (GalleryPage)
// ============================================

// BEFORE:
/*
<Card
  sx={{
    mb: 6,
    bgcolor: 'rgba(255, 246, 238, 0.98)',
    borderRadius: 3,
    boxShadow: '0 16px 48px rgba(201, 162, 77, 0.2)',
  }}
>
*/

// AFTER: Just add className="card-3d"
<Card
  className="card-3d"
  sx={{
    mb: 6,
    bgcolor: 'rgba(255, 246, 238, 0.98)',
    borderRadius: 3,
    boxShadow: '0 16px 48px rgba(201, 162, 77, 0.2)',
  }}
>

// ============================================
// EXAMPLE 2: Add 3D to Gallery Photo Cards
// ============================================

// If you have photo cards in GalleryPage:
<Card className="image-3d" sx={{ /* ...existing styles */ }}>
  <img 
    className="image-3d"
    src={photo.url} 
    alt={photo.title}
    style={{ width: '100%', height: 'auto' }}
  />
  <CardContent>{/* content */}</CardContent>
</Card>

// ============================================
// EXAMPLE 3: Add 3D to Event Details (InvitePage)
// ============================================

// Event card with 3D tilt effect:
<Paper 
  className="card-3d"
  sx={{
    p: 3,
    borderLeft: '4px solid #C9A24D',
    borderRadius: 2,
  }}
>
  <Box sx={{ display: 'flex', gap: 2 }}>
    <EventIcon sx={{ color: '#C9A24D' }} />
    <Box>
      <Typography variant="h6">Date & Time</Typography>
      <Typography variant="body2" color="textSecondary">
        {/* date info */}
      </Typography>
    </Box>
  </Box>
</Paper>

// ============================================
// EXAMPLE 4: Add 3D to Location Card (InvitePage)
// ============================================

<Paper 
  className="card-3d"
  sx={{
    p: 3,
    borderLeft: '4px solid #C9A24D',
    borderRadius: 2,
  }}
>
  <Box sx={{ display: 'flex', gap: 2 }}>
    <LocationOnIcon sx={{ color: '#C9A24D' }} />
    <Box>
      <Typography variant="h6">Venue</Typography>
      <Typography variant="body2" color="textSecondary">
        {/* location info */}
      </Typography>
    </Box>
  </Box>
</Paper>

// ============================================
// EXAMPLE 5: Add 3D to RSVP Button (InvitePage)
// ============================================

// BEFORE:
/*
<Button
  variant="contained"
  sx={{
    fontSize: '1rem',
    fontWeight: 700,
    padding: '12px 32px',
    background: 'linear-gradient(135deg, #C9A24D 0%, #D4AF37 100%)',
    boxShadow: '0 8px 24px rgba(201, 162, 77, 0.4)',
  }}
>
  RSVP Now
</Button>
*/

// AFTER: Add className="button-3d"
<Button
  className="button-3d"
  variant="contained"
  sx={{
    fontSize: '1rem',
    fontWeight: 700,
    padding: '12px 32px',
    background: 'linear-gradient(135deg, #C9A24D 0%, #D4AF37 100%)',
    boxShadow: '0 8px 24px rgba(201, 162, 77, 0.4)',
  }}
>
  RSVP Now
</Button>

// ============================================
// EXAMPLE 6: Add 3D to Countdown Boxes
// ============================================

// Each countdown number box:
<Paper 
  className="paper-3d"
  sx={{
    p: 2,
    textAlign: 'center',
    borderRadius: 2,
    bgcolor: 'rgba(201, 162, 77, 0.1)',
    border: '2px solid #C9A24D',
  }}
>
  <Typography variant="h5" sx={{ color: '#C9A24D', fontWeight: 700 }}>
    {days}
  </Typography>
  <Typography variant="caption" sx={{ color: '#C9A24D' }}>
    Days
  </Typography>
</Paper>

// ============================================
// EXAMPLE 7: Add 3D to Timeline Items (InvitePage)
// ============================================

// Wrap each timeline item:
<TimelineItem className="depth-layer-1">
  <TimelineSeparator>
    <TimelineDot sx={{ bgcolor: '#C9A24D' }} />
    <TimelineConnector sx={{ bgcolor: '#C9A24D' }} />
  </TimelineSeparator>
  <TimelineContent>
    <Paper 
      className="card-3d"
      elevation={0}
      sx={{ p: 2, bgcolor: 'transparent' }}
    >
      <Typography variant="h6">{/* title */}</Typography>
      <Typography variant="body2">{/* time */}</Typography>
    </Paper>
  </TimelineContent>
</TimelineItem>

// ============================================
// EXAMPLE 8: Add 3D to Text Heading (InvitePage)
// ============================================

<Typography
  className="text-3d"
  variant="h1"
  sx={{
    fontSize: { xs: '2.5rem', sm: '3.5rem' },
    mb: 2,
    color: '#FFF6EE',
    fontWeight: 800,
    textShadow: '0 8px 32px rgba(201, 162, 77, 0.2)',
  }}
>
  Amarjit & Anju
</Typography>

// ============================================
// EXAMPLE 9: Add Multi-Layer 3D Depth
// ============================================

// Create layered cards for depth effect:
<Box className="depth-layer-1">
  <Paper className="card-3d" sx={{ p: 3, mb: 2 }}>
    {/* Foreground content */}
  </Paper>
</Box>

<Box className="depth-layer-2">
  <Paper className="paper-3d" sx={{ p: 3, mb: 2 }}>
    {/* Middle content */}
  </Paper>
</Box>

<Box className="depth-layer-3">
  <Paper sx={{ p: 3 }}>
    {/* Background content */}
  </Paper>
</Box>

// ============================================
// EXAMPLE 10: Combine Multiple 3D Classes
// ============================================

// Add multiple classes for combined effects:
<Card className="card-3d depth-layer-1">
  <Box className="image-3d">
    <img src={wedding.jpg} alt="Wedding" style={{ width: '100%' }} />
  </Box>
  <CardContent>
    <Typography className="text-3d" variant="h6">
      Photo Title
    </Typography>
    <Button 
      className="button-3d"
      variant="outlined"
      sx={{ mt: 2 }}
    >
      Learn More
    </Button>
  </CardContent>
</Card>

// ============================================
// COMPLETE EXAMPLE: Enhanced GalleryPage Card
// ============================================

<motion.div
  variants={fadeLift}
  initial="hidden"
  whileInView="visible"
  viewport={sectionViewport}
  whileHover={{ translateY: -6 }}
  transition={{ type: 'spring', stiffness: 90, damping: 14 }}
>
  <Card
    className="card-3d"  // ← ADD THIS
    sx={{
      mb: 6,
      bgcolor: 'rgba(255, 246, 238, 0.98)',
      borderRadius: 3,
      boxShadow: '0 16px 48px rgba(201, 162, 77, 0.2)',
    }}
  >
    <CardContent sx={{ p: { xs: 3, sm: 4 }, textAlign: 'center' }}>
      <Typography
        className="text-3d"  // ← ADD THIS
        variant="h4"
        sx={{
          mb: 3,
          color: 'secondary.main',
          fontWeight: 700,
        }}
      >
        🎬 Wedding Invite Video
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: 'text.secondary',
          mb: 4,
          fontSize: '1.1rem',
          lineHeight: 1.8,
        }}
      >
        Watch our beautiful wedding invitation video. A moment of elegance and joy!
      </Typography>

      <Button
        className="button-3d"  // ← ADD THIS
        variant="contained"
        sx={{
          fontSize: '1rem',
          fontWeight: 700,
          padding: '12px 32px',
          background: 'linear-gradient(135deg, #C9A24D 0%, #D4AF37 100%)',
        }}
      >
        Watch Video
      </Button>
    </CardContent>
  </Card>
</motion.div>

// ============================================
// HOW TO APPLY: 3-STEP PROCESS
// ============================================

/*
1. Find a component you want to enhance (Card, Paper, Button, img, etc.)

2. Add the appropriate className:
   - Card/Paper → className="card-3d"
   - Button → className="button-3d"
   - Image → className="image-3d"
   - Text → className="text-3d"

3. Test:
   - Run: npm run dev
   - Toggle 3D ON/OFF in Navbar
   - Hover over element to see effect
   - Check mobile responsiveness

That's it! The 3D effect will automatically work based on toggle state.
*/
