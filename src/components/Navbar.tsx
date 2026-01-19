import { Box, Tabs, Tab, Container, Stack } from '@mui/material';
import ThreeDToggle from './ThreeDToggle';

interface NavbarProps {
  currentPage: 'invite' | 'gallery';
  onNavigate: (page: 'invite' | 'gallery') => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    onNavigate(newValue as 'invite' | 'gallery');
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #FEF9F6 0%, #FFFBF8 100%)',
        borderBottom: '2px solid rgba(212, 165, 165, 0.2)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ py: 1, px: 1 }}
        >
          <Tabs
            value={currentPage}
            onChange={handleChange}
            sx={{
              flex: 1,
              '& .MuiTab-root': {
                fontSize: '1.1rem',
                fontWeight: 600,
              },
            }}
            centered
          >
            <Tab label="Invite" value="invite" />
            <Tab label="Gallery" value="gallery" />
          </Tabs>
          <ThreeDToggle />
        </Stack>
      </Container>
    </Box>
  );
}
