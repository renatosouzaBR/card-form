import { styled } from "@/styles/stitches.config";

export const TextFieldContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  width: '100%',
})

export const TextFieldLabelContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 6
})

export const TextFieldLabel = styled('label', {
  fontSize: '1.4rem',
  fontWeight: '600',
  color: '$gray200'
})

export const TextFieldInput = styled('input', {
  backgroundColor: '$gray900',
  height: '4.8rem',
  borderRadius: 4,
  padding: '1.2rem',
  border: '1px solid $gray700',
  color: '$gray100',
  fontSize: '1.6rem',
  fontWeight: '400',

  '&::placeholder': {
    color: '$gray400',
  },

  '&:hover': {
    border: '1.5px solid $gray600'
  },

  '&:focus': {
    border: '1.5px solid $brandColor'
  },

  variants: {
    error: {
      true: {
        border: '1.5px solid $statusError'
      }
    }
  }
})

export const TextFieldErrorContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  marginTop: 4,
})

export const TextFieldErrorText = styled('span', {
  fontSize: '1.4rem',
  fontWeight: '400',
  color: '$statusError'
})