import { styled } from "@/styles/stitches.config";

import bgImage from '@/assets/card-bg.png'

export const CardContainer = styled('div', {
  minWidth: '28rem',
  maxWidth: '28rem',
  width: '100%',
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
  flexDirection: 'column',
  justifyContent: 'space-between'
})

export const CardHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})

export const CardData = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,

  '& > div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})

export const CardHoldersName = styled('span', {
  fontSize: '1.4rem',
  fontWeight: '400',
  color: '$gray50',

  variants: {
    empty: {
      true: {
        opacity: 0.5,
      }
    }
  }
})

export const CardNumberContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})

export const CardNumberText = styled('strong', {
  fontSize: '1.6rem',
  fontWeight: '600',
  color: '$gray50',
})

export const CardNumberGroup = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 4,
})

export const TextEmpty = styled('div', {
  width: 4,
  height: 4,
  borderRadius: '100%',
  backgroundColor: '$gray50',
  margin: '0 1px',
  opacity: .5
})

export const CVVContent = styled('span', {
  display: 'flex',
  alignItems: 'center',
  gap: 4,

  fontSize: '1.4rem',
  fontWeight: '400',
  color: '$gray50',
  letterSpacing: 1.4
})