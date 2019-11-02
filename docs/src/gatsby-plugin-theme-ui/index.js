import base from '@theme-ui/preset-base'
import prism from '@theme-ui/prism/presets/theme-ui'

export default {
  ...base,
  colors: {
    ...base.colors,
    secondary: 'purple',
    accent: 'orange',
    gray: '#666',
  },
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
    pre: {
      ...prism,
    },
  }
}
