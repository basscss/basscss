/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import '../../basscss.css'
import './overrides.css'

const heading = Tag => ({ id, children, ...props }) =>
  !!id ? (
    <Tag {...props} id={id}>
      <a href={`#` + id}>
        {children}
      </a>
    </Tag>
  ) : <Tag {...props} children={children} />

const sectionComponents = {
  h1: heading('h2'),
  h2: heading('h3'),
  h3: heading('h4'),
  h4: heading('h5'),
  h5: heading('h6'),
  h6: heading('h6'),
}

export const SectionProvider = props =>
  <ThemeProvider
    {...props}
    components={sectionComponents}
  />

export const Container = props =>
  <div
    sx={{
      variant: 'styles.root',
      maxWidth: 'container',
      mx: 'auto',
      px: 3,
    }}>
    {props.children}
  </div>
