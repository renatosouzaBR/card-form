import { styled } from "@/styles/stitches.config";

export const ButtonContainer = styled('button', {
  width: '100%',
  height: 56,
  borderRadius: 4,
  padding: '16px 48px',
  gap: 8,
  backgroundColor: '$brandColor',
  boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 0,
  color: '$gray50',
  cursor: 'pointer',
  fontSize: '1.8rem',
  fontWeight: '600',

  "&:not(:disabled):hover": {
    background: "$brandColorLight"
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed'
  }
})