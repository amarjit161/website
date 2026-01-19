import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { keyframes } from '@emotion/react';

const gentleFloat = keyframes`
  0% { transform: translateY(0); opacity: 0.6; }
  50% { transform: translateY(4px); opacity: 0.9; }
  100% { transform: translateY(0); opacity: 0.6; }
`;

export default function ScrollTransition() {
  return (
    <Box
      sx={{
        bgcolor: '#FFE4F0',
        backgroundImage: 'linear-gradient(135deg, rgba(255, 228, 240, 0.95) 0%, rgba(255, 240, 247, 0.95) 100%)',
        py: { xs: 8, sm: 12 },
        px: 2,
        textAlign: 'center',
        position: 'relative',
        overflow: 'visible',
      }}
    >
      {/* Subtle Top Divider */}
      <Box
        sx={{
          width: '100%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(193, 154, 199, 0.3), transparent)',
          mb: { xs: 6, sm: 8 },
        }}
      />

      {/* Emotional Messaging */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Typography
          sx={{
            fontSize: { xs: '1.3rem', sm: '1.6rem' },
            color: '#C19AC7',
            fontStyle: 'italic',
            fontWeight: 400,
            mb: 3,
            letterSpacing: '0.5px',
            fontFamily: "'Playfair Display', 'Georgia', serif",
          }}
        >
          ✨ Moments from our special day ✨
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: '0.95rem', sm: '1.1rem' },
            color: '#6B4C6B',
            lineHeight: 1.8,
            mb: 2,
            maxWidth: '500px',
            mx: 'auto',
            fontWeight: 300,
          }}
        >
          With every smile, every embrace, and every glance, our love story continues to unfold.
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: '0.9rem', sm: '1rem' },
            color: '#8B6B8B',
            fontStyle: 'italic',
            fontWeight: 300,
          }}
        >
          Scroll to explore memories we treasure
        </Typography>
      </motion.div>

      {/* Gentle Scroll Cue */}
      <Box
        sx={{
          mt: { xs: 6, sm: 8 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Box
          sx={{
            animation: `${gentleFloat} 3s ease-in-out infinite`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: '#C19AC7',
            opacity: 0.7,
          }}
        >
          <Typography sx={{ fontSize: '0.75rem', mb: 1 }}>scroll</Typography>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity: 0.7 }}
          >
            <path
              d="M12 5v14M19 17l-7 7-7-7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Box>
      </Box>

      {/* Subtle Bottom Divider */}
      <Box
        sx={{
          width: '100%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(193, 154, 199, 0.3), transparent)',
          mt: { xs: 6, sm: 8 },
        }}
      />
    </Box>
  );
}
