import { styled } from "@/styles/stitches.config";

export const HomeContainer = styled('div', {
  width: '100%',

  'form': {
    maxWidth: 736,
    width: '100%',
    borderRadius: 8,
    padding: 32,
    margin: '0 auto',
    marginTop: 160,
    backgroundColor: '$gray800',
    border: '1px solid $gray700',

    '@max660': {
      maxWidth: 420,
      marginTop: 80
    },

    '@max400': {
      flex: 1,
      borderRadius: 0,
      padding: 22,
      marginTop: 0,
      border: 'none'
    }
  }
})

export const FormFields = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: 48,
  gap: 32,

  '> div:nth-child(2)': {
    marginTop: 20
  },

  '@max660': {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 48,

    '> div:nth-child(1)': {
      order: 2
    },

    '> div:nth-child(2)': {
      order: 1
    },
  }
})