import { useState } from 'react';
import {
  Box,
  CircularProgress,
  Typography,
  IconButton,
  Tooltip,
  Stack,
  Button,
} from '@mui/material';
import {
  ZoomIn,
  ZoomOut,
  Fullscreen,
  OpenInNew,
} from '@mui/icons-material';

interface EmbeddedPdfViewerProps {
  pdfUrl: string;
  title?: string;
}

export default function EmbeddedPdfViewer({ pdfUrl, title = 'Wedding Invitation' }: EmbeddedPdfViewerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [scale, setScale] = useState(100);
  const [error, setError] = useState(false);

  // Convert view URL to preview URL for embedding
  const previewUrl = pdfUrl.includes('/preview')
    ? pdfUrl
    : pdfUrl.replace('/view', '/preview');

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 10, 200));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 10, 50));
  };

  const handleFullscreen = () => {
    const element = document.getElementById('pdf-viewer-container');
    if (element?.requestFullscreen) {
      element.requestFullscreen();
    }
  };

  const handleOpenInNewTab = () => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <Box>
      {/* Control Toolbar */}
      <Stack
        direction="row"
        spacing={1}
        sx={{
          mb: 2,
          p: 1.5,
          bgcolor: 'rgba(212, 165, 165, 0.05)',
          borderRadius: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 1,
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: 'text.secondary',
            fontSize: '0.85rem',
            fontStyle: 'italic',
          }}
        >
          {title}
        </Typography>

        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
          {/* Zoom Controls */}
          <Stack direction="row" spacing={0.5}>
            <Tooltip title="Zoom In">
              <IconButton
                size="small"
                onClick={handleZoomIn}
                disabled={scale >= 200}
                sx={{
                  color: 'primary.main',
                  '&:hover': { bgcolor: 'rgba(212, 165, 165, 0.1)' },
                }}
              >
                <ZoomIn fontSize="small" />
              </IconButton>
            </Tooltip>

            <Tooltip title="Zoom Out">
              <IconButton
                size="small"
                onClick={handleZoomOut}
                disabled={scale <= 50}
                sx={{
                  color: 'primary.main',
                  '&:hover': { bgcolor: 'rgba(212, 165, 165, 0.1)' },
                }}
              >
                <ZoomOut fontSize="small" />
              </IconButton>
            </Tooltip>

            <Tooltip title={`${scale}%`}>
              <Typography
                variant="caption"
                sx={{
                  px: 1,
                  py: 0.5,
                  minWidth: '45px',
                  textAlign: 'center',
                  color: 'text.secondary',
                  fontSize: '0.8rem',
                }}
              >
                {scale}%
              </Typography>
            </Tooltip>

            <Tooltip title="Fullscreen">
              <IconButton
                size="small"
                onClick={handleFullscreen}
                sx={{
                  color: 'primary.main',
                  '&:hover': { bgcolor: 'rgba(212, 165, 165, 0.1)' },
                }}
              >
                <Fullscreen fontSize="small" />
              </IconButton>
            </Tooltip>
          </Stack>

          {/* Secondary Action Button */}
          <Tooltip title="Open in a new window">
            <Button
              size="small"
              onClick={handleOpenInNewTab}
              endIcon={<OpenInNew />}
              sx={{
                color: 'primary.main',
                borderColor: 'primary.main',
                border: '1px solid',
                textTransform: 'none',
                fontSize: '0.8rem',
                py: 0.75,
                px: 1.5,
                '&:hover': {
                  bgcolor: 'rgba(212, 165, 165, 0.1)',
                  borderColor: 'primary.main',
                },
              }}
              variant="outlined"
            >
              Full View
            </Button>
          </Tooltip>
        </Stack>
      </Stack>

      {/* PDF Viewer Container - Outer Wrapper with Vignette */}
      <Box
        id="pdf-viewer-container"
        sx={{
          width: '100%',
          height: { xs: '500px', sm: '650px', md: '800px' },
          borderRadius: 2,
          overflow: 'hidden',
          boxShadow: '0 8px 24px rgba(193, 154, 199, 0.25)',
          border: '2px solid rgba(255, 150, 178, 0.2)',
          bgcolor: '#fff5f9',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          // Soft vignette effect - subtle fade at edges
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: 2,
            pointerEvents: 'none',
            background: `
              radial-gradient(
                ellipse at center,
                rgba(255, 245, 249, 0) 0%,
                rgba(255, 245, 249, 0.2) 70%,
                rgba(255, 245, 249, 0.4) 100%
              )
            `,
            zIndex: 1,
          },
        }}
      >
        {/* Inner Content Wrapper - Scrollable */}
        <Box
          sx={{
            width: '100%',
            height: '100%',
            overflow: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            // Smooth scrolling
            scrollBehavior: 'smooth',
            // Custom scrollbar styling for elegance
            '&::-webkit-scrollbar': {
              width: '8px',
              height: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background: 'rgba(255, 150, 178, 0.05)',
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'rgba(255, 150, 178, 0.3)',
              borderRadius: '4px',
              '&:hover': {
                background: 'rgba(255, 150, 178, 0.5)',
              },
            },
          }}
        >
          {error ? (
            <Box sx={{ textAlign: 'center', p: 4, zIndex: 2, position: 'relative' }}>
              <Typography color="error" sx={{ mb: 2 }}>
                Unable to load invitation. Please try opening in full view.
              </Typography>
              <Button
                onClick={handleOpenInNewTab}
                endIcon={<OpenInNew />}
                variant="contained"
                sx={{
                  bgcolor: 'primary.main',
                  color: 'white',
                  '&:hover': { bgcolor: 'primary.dark' },
                }}
              >
                Open Full View
              </Button>
            </Box>
          ) : (
            <Box
              sx={{
                width: { xs: '95%', sm: '90%', md: '85%' },
                maxWidth: { xs: '100%', sm: '100%', md: '900px' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                zIndex: 0,
              }}
            >
              <iframe
                src={previewUrl}
                title={title}
                allow="autoplay"
                style={{
                  width: '100%',
                  aspectRatio: '8.5 / 11',
                  border: 'none',
                  display: 'block',
                  borderRadius: '6px',
                  transform: `scale(${scale / 100})`,
                  transformOrigin: 'center',
                  transition: 'transform 0.2s ease-out',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                  backgroundColor: '#fff',
                }}
                onLoad={() => setIsLoading(false)}
                onError={() => {
                  setIsLoading(false);
                  setError(true);
                }}
              />
            </Box>
          )}

          {isLoading && (
            <Box
              sx={{
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                bgcolor: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(2px)',
                borderRadius: 2,
                zIndex: 10,
              }}
            >
              <CircularProgress
                sx={{
                  color: 'primary.main',
                }}
              />
            </Box>
          )}
        </Box>
      </Box>

      {/* Helper Text */}
      <Typography
        variant="caption"
        sx={{
          display: 'block',
          mt: 2,
          textAlign: 'center',
          color: 'text.secondary',
          fontStyle: 'italic',
          fontSize: '0.85rem',
        }}
      >
        Swipe or scroll to explore the invitation • Use zoom to adjust size • Click "Full View" to open in a new window
      </Typography>
    </Box>
  );
}
