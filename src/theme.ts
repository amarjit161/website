import { createTheme } from '@mui/material/styles';

export const weddingTheme = createTheme({
  palette: {
    primary: {
      main: '#D4A5A5', // Blush pink
      light: '#E8C4C4',
      dark: '#B88A8A',
    },
    secondary: {
      main: '#D4B5E8', // Lavender
      light: '#E8D1F0',
      dark: '#B89AD0',
    },
    background: {
      default: '#FEF9F6', // Ivory
      paper: '#FFFBF8',
    },
    text: {
      primary: '#5A4A4A',
      secondary: '#8B7B7B',
    },
    success: {
      main: '#D4AF37', // Gold accents
    },
    error: {
      main: '#2F1B2B', // Deep Plum
    },
    warning: {
      main: '#3A1E25', // Wine Maroon
    },
    info: {
      main: '#2A2344', // Midnight Purple
    },
  },
  typography: {
    fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: "'Transeity', 'Playfair Display', 'Georgia', serif",
      fontSize: '3.5rem',
      fontWeight: 700,
      letterSpacing: '0.5px',
      '@media (max-width:600px)': {
        fontSize: '2.2rem',
      },
    },
    h2: {
      fontFamily: "'Transeity', 'Playfair Display', 'Georgia', serif",
      fontSize: '2.5rem',
      fontWeight: 700,
      '@media (max-width:600px)': {
        fontSize: '1.8rem',
      },
    },
    h3: {
      fontFamily: "'Transeity', 'Playfair Display', 'Georgia', serif",
      fontSize: '1.8rem',
      fontWeight: 700,
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      fontFamily: '"Playfair Display", "Georgia", serif',
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Playfair Display", "Georgia", serif',
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: '1rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.95rem',
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '1rem',
          borderRadius: 12,
          padding: '12px 32px',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        },
        contained: {
          boxShadow: '0 6px 20px rgba(212, 165, 165, 0.3)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
          border: '1px solid rgba(212, 165, 165, 0.2)',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundImage: 'none',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
        },
        indicator: {
          height: 4,
          borderRadius: '4px 4px 0 0',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '1rem',
          '&.Mui-selected': {
            fontWeight: 700,
          },
        },
      },
    },
  },
});
