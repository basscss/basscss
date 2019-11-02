import base from '@theme-ui/preset-base'

export default {
  ...base,
  sizes: {
    container: 1024,
  },
  text: {
    heading: {
      a: {
        color: 'inherit',
        textDecoration: 'none',
        '&:hover': {
          color: 'primary',
        }
      }
    }
  },
  styles: {
    ...base.styles,
    h1: { variant: 'text.heading', },
    h2: { variant: 'text.heading', },
    h3: { variant: 'text.heading', },
    h4: { variant: 'text.heading', },
  }
}
