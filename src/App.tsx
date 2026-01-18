import { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Navbar from './components/Navbar'
import InvitePage from './pages/InvitePage'
import GalleryPage from './pages/GalleryPage'
import { weddingTheme } from './theme'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState<'invite' | 'gallery'>('invite')
  const currentYear = new Date().getFullYear()

  return (
    <ThemeProvider theme={weddingTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
        <Box component="main" sx={{ flex: 1 }}>
          {currentPage === 'invite' ? <InvitePage /> : <GalleryPage />}
        </Box>

        {/* Copyright Footer */}
        <Box
          sx={{
            bgcolor: '#2F1B2B',
            backgroundImage: 'linear-gradient(180deg, rgba(47, 27, 43, 0.8) 0%, rgba(38, 14, 36, 1) 100%)',
            borderTop: '2px solid #C9A24D',
            py: 4,
            px: 2,
            textAlign: 'center',
            mt: 'auto',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: '#C9A24D',
              fontWeight: 600,
              fontSize: { xs: '0.9rem', sm: '1rem' },
              mb: 1,
            }}
          >
            © {currentYear} Amarjit & Anju. All Rights Reserved.
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(201, 162, 77, 0.7)',
              fontSize: { xs: '0.85rem', sm: '0.9rem' },
              fontStyle: 'italic',
            }}
          >
            Designed with ❤️
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
