import { keyframes } from 'styled-components';

export const animationEasing = {
  deceleration: `cubic-bezier(0.0, 0.0, 0.2, 1)`,
  acceleration: `cubic-bezier(0.4, 0.0, 1, 1)`
};

export const ANIMATION_DURATION = 200;

// fade in
export const segmentfadeIn = keyframes`
  0%: {
    transform: scale(0.8),
    opacity: 0
  },
  100%: {
    transform: scale(1),
    opacity: 1
  }
`;

// fade out
export const segmentfadeOut = keyframes`
  0%: {
    transform: scale(1),
    opacity: 1
  },
  100%: {
    transform: scale(0.8),
    opacity: 0
  }
`;

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
