/** @jsx jsx */
import { jsx } from 'theme-ui'

const code = props => {
  console.log(props)
  return <pre {...props} />
}

export default {
  pre: props => props.children,
  code,
}
