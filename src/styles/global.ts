import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },

  'html': {
    fontSize: '62.5%'
  },

  'body': {
    backgroundColor: '$gray900',
    color: '$gray100',
    '--webkit-font-smoothing': 'antialiased',
  },

  'body, input, text-area, button': {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '1.6rem',
    fontWeight: 400,
  },

  ':focus': {
    outline: 'transparent !important',
    boxShadow: '0 0 0 1px $gray50'
  }
})