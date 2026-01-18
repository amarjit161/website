import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';
import { db } from '../firebase';
import { doc, getDoc, updateDoc, increment, setDoc } from 'firebase/firestore';

export default function LikeButton() {
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [loading, setLoading] = useState(true);

  const LIKE_STORAGE_KEY = 'wedding-invite-liked';

  // Fetch like count from Firestore
  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const docRef = doc(db, 'likes', 'main');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setLikeCount(docSnap.data().count || 0);
        } else {
          // Initialize if document doesn't exist
          await setDoc(docRef, { count: 0 });
          setLikeCount(0);
        }

        // Check if user already liked
        const hasLiked = localStorage.getItem(LIKE_STORAGE_KEY);
        setIsLiked(!!hasLiked);
      } catch (error) {
        console.error('Error fetching likes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLikes();
  }, []);

  // Handle like button click
  const handleLike = async () => {
    if (isLiked || loading) return;

    try {
      const docRef = doc(db, 'likes', 'main');

      // Update Firestore
      await updateDoc(docRef, {
        count: increment(1),
      });

      // Update local state
      setLikeCount(likeCount + 1);
      setIsLiked(true);

      // Mark as liked in localStorage (prevents duplicate likes from same device)
      localStorage.setItem(LIKE_STORAGE_KEY, 'true');
    } catch (error) {
      console.error('Error updating likes:', error);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <Box
        onClick={handleLike}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          p: 2,
          borderRadius: 2,
          bgcolor: isLiked ? 'rgba(212, 165, 165, 0.2)' : 'rgba(255, 246, 238, 0.6)',
          border: isLiked ? '2px solid #D4A5A5' : '2px solid rgba(212, 165, 165, 0.5)',
          cursor: loading || isLiked ? 'default' : 'pointer',
          transition: 'all 0.3s ease',
          justifyContent: 'center',
          opacity: loading ? 0.6 : 1,
          pointerEvents: loading ? 'none' : 'auto',
          '&:hover': !isLiked && !loading ? {
            bgcolor: 'rgba(212, 165, 165, 0.15)',
            borderColor: '#D4A5A5',
          } : {},
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '1.8rem', sm: '2.2rem' },
            cursor: loading || isLiked ? 'default' : 'pointer',
            animation: isLiked ? 'heartBeat 0.6s' : 'none',
            '@keyframes heartBeat': {
              '0%': { transform: 'scale(1)' },
              '14%': { transform: 'scale(1.3)' },
              '28%': { transform: 'scale(1)' },
              '42%': { transform: 'scale(1.3)' },
              '70%': { transform: 'scale(1)' },
            },
          }}
        >
          {isLiked ? '❤️' : '🤍'}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography
            sx={{
              fontWeight: 700,
              color: isLiked ? '#D4A5A5' : '#8B7B7B',
              fontSize: { xs: '1.1rem', sm: '1.3rem' },
            }}
          >
            {likeCount}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '0.7rem', sm: '0.8rem' },
              color: '#C9A24D',
              fontWeight: 600,
              letterSpacing: '0.5px',
            }}
          >
            {isLiked ? 'LIKED' : 'LIKE'}
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
}
