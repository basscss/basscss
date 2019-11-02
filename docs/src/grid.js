import React from 'react'
import { Box } from '@theme-ui/components'

export default props =>
  <Box
    {...props}
    sx={{
      h3: {
        m: 0,
      },
      p: {
        m: 0,
      },
      ul: {
        listStyle: 'none',
        p: 0,
        m: 0,
        display: 'grid',
        gridGap: 4,
        gridTemplateColumns: [
          'repeat(2, 1fr)',
          null,
          'repeat(3, 1fr)',
        ]
      },
      ...props.sx,
    }}
  />
