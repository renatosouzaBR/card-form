import { createStitches } from '@stitches/react'

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      brandColor: '#9333EA',
      brandColorLight: '#A855F7',
      
      gray50: '#F9FAFB',
      gray100: '#F3F4F6',
      gray900: '#111827',
    }
  }
});