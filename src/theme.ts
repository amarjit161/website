import { createTheme } from '@mui/material/styles';

export const weddingTheme = createTheme({
  palette: {
    primary: {
      main: '#5AA0D6', // Picton Blue - buttons, secondary accents
      light: '#7FB3E3',
      dark: '#4682B8',
    },
    secondary: {
      main: '#C19AC7', // Lilac - headings, badges, highlights
      light: '#D4B3D8',
      dark: '#A878A9',
    },
    background: {
      default: '#FFE4F0', // Pale Rose - main background, cards
      paper: '#FFF0F7',   // Lighter Pale Rose for papers
    },
    text: {
      primary: '#6B4C6B',   // Soft dark purple for readability
      secondary: '#8B6B8B', // Lighter purple-gray
    },
    success: {
      main: '#FF96B2', // Flamingo - highlights, glow, active states
    },
    error: {
      main: '#9B6BA6', // Deep lilac for errors
    },
    warning: {
      main: '#FF96B2', // Flamingo for warnings
    },
    info: {
      main: '#C19AC7', // Lilac for info
    },
  },
  typography: {
    fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: "'Transeity', 'Playfair Display', 'Georgia', serif",
      fontSize: '3.5rem',
      fontWeight: 700,
      letterSpacing: '0.5px',
      color: '#C19AC7', // Lilac headings
      '@media (max-width:600px)': {
        fontSize: '2.2rem',
      },
    },
    h2: {
      fontFamily: "'Transeity', 'Playfair Display', 'Georgia', serif",
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#C19AC7', // Lilac headings
      '@media (max-width:600px)': {
        fontSize: '1.8rem',
      },
    },
    h3: {
      fontFamily: "'Transeity', 'Playfair Display', 'Georgia', serif",
      fontSize: '1.8rem',
      fontWeight: 700,
      color: '#C19AC7', // Lilac headings
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      fontFamily: '"Playfair Display", "Georgia", serif',
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#C19AC7', // Lilac headings
    },
    h5: {
      fontFamily: '"Playfair Display", "Georgia", serif',
      fontSize: '1.25rem',
      fontWeight: 600,
      color: '#C19AC7', // Lilac headings
    },
    h6: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: '1rem',
      fontWeight: 600,
      color: '#C19AC7', // Lilac headings
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: '#6B4C6B', // Soft dark text
    },
    body2: {
      fontSize: '0.95rem',
      lineHeight: 1.6,
      color: '#6B4C6B', // Soft dark text
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
          boxShadow: '0 6px 20px rgba(90, 160, 214, 0.3)',
          backgroundColor: '#5AA0D6', // Picton Blue
          color: '#fff',
          '&:hover': {
            backgroundColor: '#FF96B2', // Flamingo on hover
            boxShadow: '0 8px 25px rgba(255, 150, 178, 0.4)',
          },
        },
        outlined: {
          borderColor: '#5AA0D6', // Picton Blue border
          color: '#5AA0D6',
          '&:hover': {
            borderColor: '#FF96B2',
            color: '#FF96B2',
            backgroundColor: 'rgba(255, 150, 178, 0.08)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundColor: '#FFF0F7', // Pale Rose
          boxShadow: '0 8px 32px rgba(193, 154, 199, 0.12)',
          border: '1px solid rgba(255, 150, 178, 0.15)',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 12px 40px rgba(193, 154, 199, 0.18)',
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
          backgroundColor: '#FFF0F7', // Pale Rose
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 10px rgba(193, 154, 199, 0.08)',
        },
        indicator: {
          height: 4,
          borderRadius: '4px 4px 0 0',
          backgroundColor: '#FF96B2', // Flamingo indicator
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '1rem',
          color: '#8B6B8B',
          '&.Mui-selected': {
            fontWeight: 700,
            color: '#FF96B2', // Flamingo for selected
          },
        },
      },
    },
  },
});
