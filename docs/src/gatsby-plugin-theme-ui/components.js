/** @jsx jsx */
import { jsx } from 'theme-ui'
import Prism from '@theme-ui/prism'

const isHTML = cn => /language\-html/.test(cn)

const code = props => {
  if (!isHTML(props.className)) {
    return <Prism {...props} />
  }

  return (
    <div>
      <div
        sx={{
          position: 'relative',
        }}
        dangerouslySetInnerHTML={{
          __html: props.children,
        }}
      />
      <Prism
        {...props}
        language='html'
      />
    </div>
  )
}

export default {
  pre: props => props.children,
  code,
}
