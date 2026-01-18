import { Box, Container, Typography, Card, CardContent, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config';
import LikeButton from '../components/LikeButton';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function GalleryPage() {
  const handleOpenAlbum = () => {
    window.open(weddingConfig.googlePhotosAlbumUrl, '_blank');
  };

  const fadeLift = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9 },
    },
  };

  const sectionViewport = { once: true, amount: 0.25 };

  return (
    <Box sx={{ minHeight: '100vh' }}>
      {/* Ganesh Shloka Section */}
      <Box
        sx={{
          bgcolor: '#3A1E25',
          backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(201, 162, 77, 0.1) 0%, transparent 50%)',
          py: 3,
          textAlign: 'center',
          borderBottom: '2px solid #C9A24D',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: '#C9A24D',
            fontWeight: 700,
            fontSize: { xs: '1.8rem', sm: '2.2rem' },
            letterSpacing: '2px',
          }}
        >
          ॐ गं गणपतये नमः
        </Typography>
      </Box>

      {/* Gallery Content with Midnight Purple */}
      <Box
        sx={{
          bgcolor: '#2A2344',
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(201, 162, 77, 0.08) 0%, transparent 60%)',
          minHeight: 'calc(100vh - 80px)',
          py: 6,
        }}
      >
        <Container maxWidth="lg">
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem' },
                mb: 2,
                color: '#FFF6EE',
                fontWeight: 800,
                textShadow: '0 8px 32px rgba(201, 162, 77, 0.2)',
              }}
            >
              Wedding Memories
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1rem', sm: '1.3rem' },
                color: '#C9A24D',
                fontStyle: 'italic',
                fontWeight: 400,
              }}
            >
              Relive our special day through photos and videos
            </Typography>
          </Box>

          {/* Cloudinary Wedding Video Section */}
          <motion.div
            variants={fadeLift}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            whileHover={{ translateY: -6 }}
            transition={{ type: 'spring', stiffness: 90, damping: 14 }}
          >
            <Card
              sx={{
                mb: 6,
                bgcolor: 'rgba(255, 246, 238, 0.98)',
                borderRadius: 3,
                boxShadow: '0 16px 48px rgba(201, 162, 77, 0.2)',
              }}
            >
              <CardContent sx={{ p: { xs: 3, sm: 4 }, textAlign: 'center' }}>
              <Typography
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

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  maxWidth: '380px',
                  mx: 'auto',
                  p: 3,
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, #D4AF37 0%, #C9A24D 50%, #2F1B2B 100%)',
                  boxShadow: '0 12px 40px rgba(201, 162, 77, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    aspectRatio: '9 / 16',
                    borderRadius: 2,
                    overflow: 'hidden',
                    bgcolor: '#000',
                    boxShadow: 'inset 0 0 12px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  <iframe
                    src="https://player.cloudinary.com/embed/?cloud_name=djfslppsg&public_id=IMG_8079_qjskeh&autoplay=true&muted=true&loop=true&hideShowLogo=true&controls=true&preload=auto"
                    width="100%"
                    height="100%"
                    title="Wedding Invite Video"
                    allow="autoplay; muted"
                    style={{
                      border: 'none',
                      display: 'block',
                    }}
                  />
                </Box>
              </Box>
              </CardContent>
            </Card>
          </motion.div>

          {/* Second Wedding Invite Video */}
          <motion.div
            variants={fadeLift}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            whileHover={{ translateY: -6 }}
            transition={{ type: 'spring', stiffness: 90, damping: 14 }}
          >
            <Card
              sx={{
                mb: 6,
                bgcolor: 'rgba(255, 246, 238, 0.98)',
                borderRadius: 3,
                boxShadow: '0 16px 48px rgba(201, 162, 77, 0.2)',
              }}
            >
              <CardContent sx={{ p: { xs: 3, sm: 4 }, textAlign: 'center' }}>
              <Typography
                variant="h4"
                sx={{
                  mb: 3,
                  color: 'secondary.main',
                  fontWeight: 700,
                }}
              >
                🎬 Wedding Invite Video 2
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
                Another beautiful moment from our wedding celebration!
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  maxWidth: '380px',
                  mx: 'auto',
                  p: 3,
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, #D4AF37 0%, #C9A24D 50%, #2F1B2B 100%)',
                  boxShadow: '0 12px 40px rgba(201, 162, 77, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    aspectRatio: '9 / 16',
                    borderRadius: 2,
                    overflow: 'hidden',
                    bgcolor: '#000',
                    boxShadow: 'inset 0 0 12px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  <iframe
                    src="https://player.cloudinary.com/embed/?cloud_name=djfslppsg&public_id=VID-20260118-WA0021_fpak8q&autoplay=true&muted=true&loop=true&hideShowLogo=true&controls=true&preload=auto"
                    width="100%"
                    height="100%"
                    title="Wedding Invite Video 2"
                    allow="autoplay; muted"
                    style={{
                      border: 'none',
                      display: 'block',
                    }}
                  />
                </Box>
              </Box>
              </CardContent>
            </Card>
          </motion.div>

          {/* Gallery Card */}
          <Card
            sx={{
              mb: 6,
              bgcolor: 'rgba(255, 246, 238, 0.98)',
              borderRadius: 3,
              boxShadow: '0 16px 48px rgba(201, 162, 77, 0.2)',
            }}
          >
          <CardContent sx={{ p: { xs: 3, sm: 4 }, textAlign: 'center' }}>
            <Typography
              variant="h4"
              sx={{
                mb: 3,
                color: 'secondary.main',
                fontWeight: 700,
              }}
            >
              📸 Photo Album
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
              View and enjoy our wedding photos! New photos are added regularly as we celebrate with our loved ones. The album updates automatically when new memories are shared.
            </Typography>

            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleOpenAlbum}
              endIcon={<OpenInNewIcon />}
              sx={{
                mb: 3,
                boxShadow: '0 8px 24px rgba(212, 165, 165, 0.3)',
              }}
            >
              Open Photo Album
            </Button>

            <Paper
              elevation={0}
              sx={{
                bgcolor: 'rgba(212, 165, 165, 0.1)',
                border: '1px solid rgba(212, 165, 165, 0.3)',
                p: 2,
                borderRadius: 2,
              }}
            >
              <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
                This will open in Google Photos. The album updates automatically when new photos are added. Only the album owner can upload new memories.
              </Typography>
            </Paper>
          </CardContent>
        </Card>

        {/* Footer Note */}
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Typography variant="body1" sx={{ color: '#C9A24D', fontSize: '1.1rem' }}>
            ✨ New photos coming soon! Check back regularly for updates ✨
          </Typography>
        </Box>

        {/* Cloudinary Wedding Video Section - REMOVED */}

        {/* Like Button Section with Message */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 6, mb: 4 }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <Typography
              sx={{
                textAlign: 'center',
                color: '#C9A24D',
                fontSize: { xs: '1rem', sm: '1.2rem' },
                fontStyle: 'italic',
                fontWeight: 500,
                mb: 3,
                maxWidth: '400px',
                lineHeight: 1.8,
                letterSpacing: '0.5px',
              }}
            >
              If these moments made you smile, send us some love ❤️
            </Typography>
          </motion.div>

          <Box sx={{ maxWidth: '280px' }}>
            <LikeButton />
          </Box>
        </Box>

        </Container>
      </Box>
    </Box>
  );
}

