import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { keyframes } from '@emotion/react';
import {
  Box,
  Typography,
  Paper,
  Container,
  Card,
  CardContent,
  Button,
  Divider,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import { weddingConfig } from '../config';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CloseIcon from '@mui/icons-material/Close';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const fadeLift = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9 },
  },
};

const sectionViewport = { once: true, amount: 0.25 };

const floatHero = keyframes`
  0% { transform: translateY(0) rotateX(0deg) rotateY(0deg); }
  50% { transform: translateY(-6px) rotateX(1deg) rotateY(-1deg); }
  100% { transform: translateY(0) rotateX(0deg) rotateY(0deg); }
`;

const pulseGlow = keyframes`
  0% { box-shadow: 0 8px 24px rgba(201, 162, 77, 0.18); transform: translateY(0); }
  50% { box-shadow: 0 12px 32px rgba(201, 162, 77, 0.32); transform: translateY(-2px); }
  100% { box-shadow: 0 8px 24px rgba(201, 162, 77, 0.18); transform: translateY(0); }
`;

export default function InvitePage() {
  const [countdown, setCountdown] = useState<CountdownState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mapDialogOpen, setMapDialogOpen] = useState(false);

  useEffect(() => {
    const calculateCountdown = () => {
      const target = new Date(weddingConfig.countdownDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleViewPDF = () => {
    window.open(weddingConfig.invitationPdfUrl, '_blank');
  };

  return (
    <Box>
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
          {weddingConfig.ganeshShloka}
        </Typography>
      </Box>

      {/* Main Content */}
      <Box sx={{ bgcolor: 'background.default', py: 6 }}>
        <Container maxWidth="lg">
          {/* Hero Section with Deep Plum Background */}
          <motion.div
            variants={fadeLift}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            whileHover={{ rotateX: -2, rotateY: 2, translateY: -4 }}
            transition={{ type: 'spring', stiffness: 80, damping: 14 }}
          >
            <Box
              sx={{
                bgcolor: '#2f1726',
                backgroundImage:
                  'linear-gradient(135deg, rgba(74, 26, 45, 0.95) 0%, rgba(56, 21, 48, 0.95) 45%, rgba(38, 14, 36, 0.96) 100%)',
                borderRadius: 3,
                p: { xs: 4, sm: 6 },
                mb: 6,
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                perspective: '1200px',
                transformStyle: 'preserve-3d',
                animation: `${floatHero} 14s ease-in-out infinite`,
                willChange: 'transform',
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.06), 0 18px 60px rgba(32, 7, 25, 0.55)',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(201, 162, 77, 0.05) 0%, transparent 55%)',
                  pointerEvents: 'none',
                },
              }}
            >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem' },
                mb: 2,
                color: '#FFF6EE',
                fontWeight: 800,
                position: 'relative',
                zIndex: 1,
                textShadow: '0 8px 32px rgba(201, 162, 77, 0.2)',
                fontFamily: "'Transeity', 'Playfair Display', serif",
              }}
            >
              {weddingConfig.groomName} & {weddingConfig.brideName}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1rem', sm: '1.3rem' },
                color: '#C9A24D',
                fontStyle: 'italic',
                fontWeight: 400,
                position: 'relative',
                zIndex: 1,
              }}
            >
              Together with their families, invite you to celebrate their wedding
            </Typography>
            </Box>
          </motion.div>

        {/* Countdown Timer */}
        <motion.div variants={fadeLift} initial="hidden" whileInView="visible" viewport={sectionViewport}>
          <Paper
            elevation={0}
            sx={{
              bgcolor: '#301828',
              backgroundImage:
                'linear-gradient(145deg, rgba(78, 29, 50, 0.95) 0%, rgba(54, 22, 45, 0.95) 50%, rgba(36, 13, 36, 0.97) 100%)',
              border: '2px solid #C9A24D',
              borderRadius: 4,
              p: 4,
              mb: 6,
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              transformStyle: 'preserve-3d',
              boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 18px 60px rgba(32, 7, 25, 0.5)',
            }}
          >
          <Typography variant="h4" sx={{ mb: 3, color: '#C9A24D', position: 'relative', zIndex: 1 }}>
            ⏳ Countdown to the Big Day
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(3, minmax(0, 1fr))',
                md: 'repeat(4, minmax(0, 1fr))',
              },
              gap: { xs: 1.5, sm: 2 },
              maxWidth: { xs: '420px', sm: '680px', md: '900px' },
              mx: 'auto',
            }}
          >
            {[
              { label: 'Days', value: countdown.days },
              { label: 'Hours', value: countdown.hours },
              { label: 'Minutes', value: countdown.minutes },
              { label: 'Seconds', value: countdown.seconds },
            ].map((item, index) => (
              <Box
                key={item.label}
                sx={{
                  gridColumn: {
                    xs: index === 3 ? '2 / 3' : 'auto',
                    md: 'auto',
                  },
                  justifySelf: {
                    xs: index === 3 ? 'center' : 'stretch',
                    md: 'stretch',
                  },
                }}>

                <Box
                  sx={{
                    bgcolor: 'rgba(255, 246, 238, 0.95)',
                    borderRadius: 2,
                    p: 2,
                    boxShadow: '0 8px 24px rgba(201, 162, 77, 0.2)',
                    border: '1px solid #C9A24D',
                    position: 'relative',
                    zIndex: 1,
                    animation: `${pulseGlow} 6s ease-in-out infinite`,
                    willChange: 'transform, box-shadow',
                    transform: 'translateZ(0)',
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      color: '#D4B5E8',
                      fontWeight: 700,
                      fontSize: { xs: '1.8rem', sm: '2.5rem' },
                    }}
                  >
                    {String(item.value).padStart(2, '0')}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#C9A24D', mt: 1, fontWeight: 600 }}>
                    {item.label}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
          </Paper>
        </motion.div>

        {/* Wedding Ceremony Card */}
        <motion.div
          variants={fadeLift}
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          whileHover={{ translateY: -6 }}
          transition={{ type: 'spring', stiffness: 90, damping: 14 }}
        >
          <Card sx={{ mb: 4, overflow: 'visible' }}>
          <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
            <Typography
              variant="h3"
              sx={{
                mb: 3,
                color: 'primary.main',
                textAlign: 'center',
              }}
            >
              💍 Wedding Ceremony
            </Typography>

            <Stack spacing={3} sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <EventIcon sx={{ color: 'secondary.main', mt: 0.5 }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    Date & Time
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {weddingConfig.ceremony.date}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {weddingConfig.ceremony.time}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <LocationOnIcon sx={{ color: 'secondary.main', mt: 0.5 }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    Venue
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {weddingConfig.ceremony.venue}
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </CardContent>
          </Card>
        </motion.div>

        {/* Family Details */}
        <motion.div
          variants={fadeLift}
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          whileHover={{ translateY: -6 }}
          transition={{ type: 'spring', stiffness: 90, damping: 14 }}
        >
          <Card sx={{ mb: 4 }}>
            <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
            <Typography
              variant="h3"
              sx={{
                mb: 4,
                color: 'primary.main',
                textAlign: 'center',
              }}
            >
              👨‍👩‍👧‍👦 Family Details
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                gap: 4,
              }}
            >
              <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: 'primary.main',
                      mb: 2,
                      fontWeight: 700,
                    }}
                  >
                    Groom
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'text.primary',
                      mb: 2,
                      fontWeight: 600,
                      fontFamily: "'Transeity', 'Playfair Display', serif",
                    }}
                  >
                    {weddingConfig.groom.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                    Son of
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.primary', mb: 0.5 }}>
                    {weddingConfig.groom.motherName}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.primary' }}>
                    {weddingConfig.groom.fatherName}
                  </Typography>
              </Box>

              <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: 'secondary.main',
                      mb: 2,
                      fontWeight: 700,
                    }}
                  >
                    Bride
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'text.primary',
                      mb: 2,
                      fontWeight: 600,
                      fontFamily: "'Transeity', 'Playfair Display', serif",
                    }}
                  >
                    {weddingConfig.bride.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                    Daughter of
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.primary', mb: 0.5 }}>
                    {weddingConfig.bride.motherName}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.primary' }}>
                    {weddingConfig.bride.fatherName}
                  </Typography>
              </Box>
            </Box>
          </CardContent>
          </Card>
        </motion.div>

        {/* Events Timeline */}
        <motion.div
          variants={fadeLift}
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          whileHover={{ translateY: -6 }}
          transition={{ type: 'spring', stiffness: 90, damping: 14 }}
        >
          <Card sx={{ mb: 4 }}>
          <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
            <Typography
              variant="h3"
              sx={{
                mb: 4,
                color: 'primary.main',
                textAlign: 'center',
              }}
            >
              📅 Events Timeline
            </Typography>

            <Timeline position="alternate">
              {weddingConfig.events.map((event, index) => (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot
                      sx={{
                        bgcolor: index % 2 === 0 ? 'primary.main' : 'secondary.main',
                        width: 16,
                        height: 16,
                      }}
                    />
                    {index < weddingConfig.events.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent sx={{ pb: 4 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: 'text.primary',
                        fontWeight: 600,
                        mb: 0.5,
                      }}
                    >
                      {event.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {event.date}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
            </CardContent>
          </Card>
        </motion.div>

        {/* Reception Card */}
        <motion.div
          variants={fadeLift}
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          whileHover={{ translateY: -6 }}
          transition={{ type: 'spring', stiffness: 90, damping: 14 }}
        >
          <Card sx={{ mb: 4 }}>
            <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
            <Typography
              variant="h3"
              sx={{
                mb: 3,
                color: 'primary.main',
                textAlign: 'center',
              }}
            >
              🎉 Reception
            </Typography>

            <Stack spacing={3}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <EventIcon sx={{ color: 'secondary.main', mt: 0.5 }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    Date & Time
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {weddingConfig.reception.date}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {weddingConfig.reception.time}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <LocationOnIcon sx={{ color: 'secondary.main', mt: 0.5 }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    Venue
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {weddingConfig.reception.venue}
                  </Typography>
                </Box>
              </Box>
             </Stack>

             <Divider sx={{ my: 3 }} />

             <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
              <motion.div
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98, y: 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                style={{ display: 'inline-flex' }}
              >
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: 'secondary.main',
                    color: 'white',
                    px: 3,
                    '&:hover': {
                      bgcolor: 'secondary.dark',
                    },
                  }}
                  onClick={() => setMapDialogOpen(true)}
                >
                  📍 View Location
                </Button>
              </motion.div>
             </Box>
           </CardContent>
         </Card>
        </motion.div>

        {/* Action Buttons */}
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', my: 6 }}>
          <motion.div
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98, y: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            style={{ display: 'inline-flex' }}
          >
            <Button
              component="a"
              href="https://drive.google.com/file/d/1Bloyc-3n6QkcWeblikBZTwcdSjaXtY9S/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              color="secondary"
              size="large"
              sx={{
                boxShadow: '0 10px 28px rgba(212, 165, 55, 0.28)',
              }}
            >
              Download Wedding Invitation (PDF)
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98, y: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            style={{ display: 'inline-flex' }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleViewPDF}
              sx={{
                boxShadow: '0 8px 24px rgba(212, 165, 165, 0.3)',
              }}
            >
              View Wedding Invitation
            </Button>
          </motion.div>
        </Box>

        {/* PDF Viewer Section */}
        <motion.div
          variants={fadeLift}
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
        >
          <Card
            sx={{
              mb: 6,
              bgcolor: 'rgba(255, 246, 238, 0.98)',
              borderRadius: 3,
              boxShadow: '0 16px 48px rgba(201, 162, 77, 0.2)',
              overflow: 'hidden',
            }}
          >
            <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
            <Typography
              variant="h4"
              sx={{
                mb: 3,
                textAlign: 'center',
                color: 'secondary.main',
                fontWeight: 700,
              }}
            >
              📄 Wedding Invitation
            </Typography>

            <Box
              sx={{
                width: '100%',
                height: { xs: '500px', sm: '700px', md: '800px' },
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(201, 162, 77, 0.3)',
                border: '2px solid #C9A24D',
                bgcolor: '#fff',
              }}
            >
              <iframe
                src="https://drive.google.com/file/d/1Bloyc-3n6QkcWeblikBZTwcdSjaXtY9S/preview"
                width="100%"
                height="100%"
                title="Wedding Invitation PDF"
                allow="autoplay"
                style={{
                  border: 'none',
                  display: 'block',
                }}
              />
            </Box>
            </CardContent>
          </Card>
        </motion.div>

        {/* Google Maps Dialog */}
        <Dialog
          open={mapDialogOpen}
          onClose={() => setMapDialogOpen(false)}
          maxWidth="sm"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: 3,
              bgcolor: 'background.default',
              boxShadow: '0 12px 40px rgba(212, 165, 165, 0.25)',
            },
          }}
        >
          <DialogTitle
            sx={{
              color: 'primary.main',
              fontWeight: 700,
              fontSize: '1.3rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              pb: 2,
            }}
          >
            📍 Reception Location
            <IconButton
              onClick={() => setMapDialogOpen(false)}
              sx={{
                color: 'success.main',
                '&:hover': {
                  bgcolor: 'rgba(212, 175, 55, 0.1)',
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>

          <DialogContent sx={{ p: 0 }}>
            <Box
              sx={{
                width: '100%',
                height: 400,
                borderRadius: '0 0 12px 12px',
                overflow: 'hidden',
              }}
            >
              <iframe
                title="Reception location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.5!2d88.25!3d22.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sShiv%20Shakti%20Marriage%20Hall%2C%20Sarbari%20More!5e0!3m2!1sen!2sin!4v1700000000000"
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  display: 'block',
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>
          </DialogContent>

          <DialogActions
            sx={{
              p: 3,
              gap: 1,
              bgcolor: 'rgba(212, 165, 165, 0.05)',
              borderTop: '1px solid rgba(212, 165, 165, 0.2)',
              borderRadius: '0 0 12px 12px',
            }}
          >
            <Button
              onClick={() => setMapDialogOpen(false)}
              sx={{
                color: 'text.secondary',
                '&:hover': {
                  bgcolor: 'rgba(0, 0, 0, 0.05)',
                },
              }}
            >
              Close
            </Button>
            <Button
              variant="contained"
              endIcon={<OpenInNewIcon />}
              onClick={() => window.open('https://maps.app.goo.gl/pvosjCuwAaCdSaJP8', '_blank')}
              sx={{
                bgcolor: 'success.main',
                color: 'white',
                '&:hover': {
                  bgcolor: '#B8941F',
                },
              }}
            >
              Open in Google Maps
            </Button>
          </DialogActions>
        </Dialog>
        </Container>
      </Box>
    </Box>
  );
}

