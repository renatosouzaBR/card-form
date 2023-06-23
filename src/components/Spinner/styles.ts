import { keyframes, styled } from "@/styles/stitches.config";

const spinnerAnimation = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 }
});

export const SpinnerContainer = styled('div', {
  color: '#ef4',
  display: 'flex',
  position: 'relative',
  width: 40,
  height: 40,
  backgroundColor: 'red',

  'div': {
    transformOrigin: '40px 40px 40px 40px',
    // animation: `${spinnerAnimation} 1.2s linear infinite`
  },

  'div:after': {
    content: '',
    display: 'block',
    position: 'absolute',
    top: 3,
    left: 6,
    width: 3,
    height: 10,
    borderRadius: '20%',
    backgroundColor: '#fff'
  },

  'div:nth-child(1)': {
    transform: 'rotate(0deg)',
    animationDelay: '-0.8s'
  },

  'div:nth-child(2)': {
    transform: 'rotate(45deg)',
    animationDelay: '-0.7s'
  },

  'div:nth-child(3)': {
    transform: 'rotate(90deg)',
    animationDelay: '-0.6s'
  },

  'div:nth-child(4)': {
    transform: 'rotate(135deg)',
    animationDelay: '-0.4s'
  },

  'div:nth-child(5)': {
    transform: 'rotate(180deg)',
    animationDelay: '-0.3s'
  },

  'div:nth-child(6)': {
    transform: 'rotate(225deg)',
    animationDelay: '-0.2s'
  },

  'div:nth-child(7)': {
    transform: 'rotate(270deg)',
    animationDelay: '-0.1s'
  },

  'div:nth-child(8)': {
    transform: 'rotate(315deg)',
    animationDelay: '0s'
  }
})