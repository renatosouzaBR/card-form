import { styled } from "@/styles/stitches.config";

import bgImage from '@/assets/card-bg-back.png'

export const CardFrontContainer = styled('div', {
  width: '28rem',
  height: '16.8rem',
  borderRadius: 16,
  border: '1px solid $gray700',
  padding: '2.4rem',
  backgroundColor: '$gray900',
  boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.25)',
  backgroundImage: `url(${bgImage.src})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',

  cursor: 'pointer',

  display: 'flex',
  alignItems: 'flex-end',
})

export const TextEmpty = styled('div', {
  width: 4,
  height: 4,
  borderRadius: '100%',
  backgroundColor: '$gray900',
  margin: '0 1px',
  opacity: .5
})

export const CVVContent = styled('div', {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  marginBottom: 10,

  'span': {
    fontSize: '1.4rem',
    fontWeight: '400',
    color: '$gray200'
  }
});

export const CVVText = styled('span', {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  backgroundColor: '$gray300',

  height: 32,
  borderRadius: 4,
  padding: '1.2rem',
  gap: 6,

  fontSize: '1.4rem',
  fontWeight: '500 !important',
  color: '$gray900 !important'
})