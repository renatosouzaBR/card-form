import { styled } from "@/styles/stitches.config";

export const HomeContainer = styled('div', {
  width: '100%',

  'form': {
    maxWidth: 492,
    borderRadius: 8,
    padding: 32,
    margin: '0 auto',
    marginTop: 160,
    backgroundColor: '$gray800',
    border: '1px solid $gray700'
  }
})

export const InputsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  marginBottom: 48
})

export const InputsGroupRow = styled('div', {
  display: 'flex',
  gap: 16
})