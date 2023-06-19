import { createStitches } from '@stitches/react'

export const { styled, getCssText, globalCss, theme } = createStitches({
  theme: {
    colors: {
      brandColor: '#9333EA',
      brandColorLight: '#A855F7',

      statusError: '#FB7185',
      
      gray50: '#F9FAFB',
      gray100: '#F3F4F6',
      gray200: '#E5E7EB',
      gray300: '#D1D5DB',
      gray400: '#9CA3AF',
      gray600: '#4B5563',
      gray700: '#374151',
      gray800: '#1F2937',
      gray900: '#111827',
    }
  }
});