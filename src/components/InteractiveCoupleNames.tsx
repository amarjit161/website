import { useState } from 'react';
import { Typography } from '@mui/material';
import { keyframes } from '@emotion/react';
import { weddingConfig } from '../config';

const flip3D = keyframes`
  0% {
    opacity: 1;
    transform: rotateY(0deg) scale(1) perspective(1000px) translateZ(0);
  }
  50% {
    opacity: 0.35;
    transform: rotateY(90deg) scale(0.93) perspective(1000px) translateZ(0);
  }
  100% {
    opacity: 1;
    transform: rotateY(0deg) scale(1) perspective(1000px) translateZ(0);
  }
`;

export default function InteractiveCoupleNames() {
  const [isFlipped, setIsFlipped] = useState(false);

  const groomName = weddingConfig.groomName;
  const brideName = weddingConfig.brideName;
  
  const displayName = isFlipped 
    ? `${brideName} & ${groomName}` 
    : `${groomName} & ${brideName}`;

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsFlipped(!isFlipped);
    }
  };

  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <Typography
      variant="h1"
      className="couple-name-hero"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      sx={{
        // Layout & Positioning - Fixed, no reflow
        position: 'relative',
        zIndex: 1,
        m: 0,
        p: 0,
        display: 'inline-block',
        minHeight: '1em',
        
        // Color & Typography - Never changes
        color: '#4A1E28',
        fontWeight: 700,
        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
        lineHeight: 1.2,
        letterSpacing: '0.5px',
        
        // Interaction indicators - Touch-optimized
        cursor: 'pointer',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        WebkitTouchCallout: 'none',
        WebkitTapHighlightColor: 'transparent',
        
        // Hardware acceleration - smooth performance
        willChange: 'transform, opacity',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        
        // Animation - transform-based only
        animation: prefersReducedMotion 
          ? 'none' 
          : `${flip3D} 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards`,
        
        // Text shadow - smooth transition
        textShadow: isFlipped 
          ? '0 4px 16px rgba(0, 0, 0, 0.15), 0 0 10px rgba(74, 30, 40, 0.18)'
          : '0 2px 8px rgba(0, 0, 0, 0.12), 0 0 6px rgba(74, 30, 40, 0.1)',
        transition: 'text-shadow 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',

        // Hover state - subtle desktop enhancement (mobile ignores)
        '&:hover': {
          textShadow: isFlipped 
            ? '0 6px 18px rgba(0, 0, 0, 0.18), 0 0 12px rgba(74, 30, 40, 0.2)'
            : '0 4px 12px rgba(0, 0, 0, 0.14), 0 0 8px rgba(74, 30, 40, 0.12)',
          '@media (hover: none)': {
            textShadow: isFlipped 
              ? '0 4px 16px rgba(0, 0, 0, 0.15), 0 0 10px rgba(74, 30, 40, 0.18)'
              : '0 2px 8px rgba(0, 0, 0, 0.12), 0 0 6px rgba(74, 30, 40, 0.1)',
          },
        },

        // Focus state for accessibility - keyboard only
        '&:focus': {
          outline: '2px solid transparent',
          outlineOffset: '2px',
        },

        '&:focus-visible': {
          outline: '2px solid #C19AC7',
          outlineOffset: '4px',
          borderRadius: '2px',
        },

        // Prevent mobile layout shifts
        '@media (pointer: coarse)': {
          '&:active': {
            opacity: 0.95,
          },
        },
      }}
    >
      {displayName}
    </Typography>
  );
}
