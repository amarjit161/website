import { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Navbar from './components/Navbar'
import InvitePage from './pages/InvitePage'
import GalleryPage from './pages/GalleryPage'
import { weddingTheme } from './theme'
import { ThreeDProvider } from './context/ThreeDContext'
import { useGsapInit, useGsapAutoAnimate } from './hooks/useGsapInit'
import './App.css'
import './styles/threeD.css'
import './styles/refinement.css'
import './styles/typography.css'
import './styles/gsap.css'
import './styles/premium.css'

function App() {
  const [currentPage, setCurrentPage] = useState<'invite' | 'gallery'>('invite')
  const currentYear = new Date().getFullYear()

  // Initialize GSAP ScrollTrigger
  useGsapInit()
  useGsapAutoAnimate()

  return (
    <ThreeDProvider>
      <ThemeProvider theme={weddingTheme}>
        <CssBaseline />
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
          <Box component="main" sx={{ flex: 1 }}>
            {/* Hybrid Scroll Flow: Show both pages in sequence for continuous wedding journey */}
            {currentPage === 'invite' ? (
              <Box>
                <InvitePage />
                <GalleryPage />
              </Box>
            ) : (
              <GalleryPage />
            )}
          </Box>

          {/* Copyright Footer */}
          <Box
            component="footer"
            sx={{
              bgcolor: '#FFE4F0',
              backgroundImage: 'linear-gradient(135deg, rgba(255, 228, 240, 0.95) 0%, rgba(255, 240, 247, 0.95) 100%)',
              borderTop: '2px solid rgba(255, 150, 178, 0.2)',
              py: { xs: 4, sm: 5 },
              px: 2,
              textAlign: 'center',
              position: 'relative',
              overflow: 'visible',
              width: '100%',
              zIndex: 10,
            }}
          >
            <Box sx={{ position: 'relative', zIndex: 1, maxWidth: '600px', mx: 'auto' }}>
              {/* Warm Closing Message */}
              <Typography
                sx={{
                  fontSize: { xs: '0.95rem', sm: '1.1rem' },
                  color: '#C9A24D',
                  fontStyle: 'italic',
                  mb: 2,
                  lineHeight: 1.6,
                  fontFamily: "'Playfair Display', 'Fraunces', serif",
                  fontWeight: 500,
                }}
              >
                With love and gratitude, we invite you to share in our joy.
              </Typography>

              {/* Divider */}
              <Box
                sx={{
                  width: '60px',
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, #C9A24D, transparent)',
                  margin: '16px auto',
                }}
              />

              {/* Copyright */}
              <Typography
                sx={{
                  color: 'rgba(107, 76, 107, 0.95)',
                  fontSize: { xs: '0.8rem', sm: '0.9rem' },
                  mb: 1.5,
                  letterSpacing: '0.3px',
                  fontWeight: 500,
                }}
              >
                © {currentYear} Amarjit Sharma — Crafted with love
              </Typography>

              {/* Footer Note */}
              <Typography
                sx={{
                  color: 'rgba(255, 150, 178, 0.7)',
                  fontSize: { xs: '0.75rem', sm: '0.8rem' },
                  fontStyle: 'italic',
                  letterSpacing: '0.2px',
                }}
              >
                All Rights Reserved
              </Typography>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </ThreeDProvider>
  )
}

export default App
