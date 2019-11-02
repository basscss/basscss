import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import '../../basscss.css'
import './styles.css'

const heading = Tag => ({ id, children, ...props }) =>
  !!id ? (
    <Tag {...props} id={id}>
      <a href={`#` + id}>
        {children}
      </a>
    </Tag>
  ) : <Tag {...props} children={children} />

const isHTML = c => /language\-html/.test(c)
const code = props => {
  if (!isHTML(props.className)) {
    return <pre {...props} />
  }
  return (
    <div>
      <div
        className='relative p2 border'
        dangerouslySetInnerHTML={{
          __html: props.children,
        }}
      />
      <pre {...props} />
    </div>
  )
}

const sectionComponents = {
  h1: heading('h2'),
  h2: heading('h3'),
  h3: heading('h4'),
  h4: heading('h5'),
  h5: heading('h6'),
  h6: heading('h6'),
  pre: props => props.children,
  code,
}

export const SectionProvider = props =>
  <MDXProvider
    {...props}
    components={sectionComponents}
  />

export const Container = props =>
  <div
    className='max-width-4 mx-auto px3'
    children={props.children}
  />

export const Grid = props =>
  <div
    {...props}
    className='grid my4'
  />

