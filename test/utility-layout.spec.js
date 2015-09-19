
import expect from 'expect'

describe('utility-layout', () => {

  const getStyle = () => ( window.getComputedStyle(div) )
  let container = document.createElement('div')
  let div = document.createElement('div')

  beforeEach(() => {
    div.innerText = 'Basscss Utility Layout'
    document.body.appendChild(container)
    container.appendChild(div)
    container.style.width = '768px'
  })

  it('should render an empty div', () => {
    expect(div).toExist()
  })

  it('should set display inline', () => {
    div.className = 'inline'
    expect(getStyle().display).toEqual('inline')
  })

  it('should set display inline-block', () => {
    div.className = 'inline-block'
    expect(getStyle().display).toEqual('inline-block')
  })

  it('should set display block', () => {
    div.className = 'block'
    expect(getStyle().display).toEqual('block')
  })

  it('should set display table', () => {
    div.className = 'table'
    expect(getStyle().display).toEqual('table')
  })

  it('should set display table-cell', () => {
    div.className = 'table-cell'
    expect(getStyle().display).toEqual('table-cell')
  })

  it('should set float left', () => {
    div.className = 'left'
    console.log(getStyle().float)
    expect(getStyle().float).toEqual('left')
  })

  it('should set float right', () => {
    div.className = 'right'
    expect(getStyle().float).toEqual('right')
  })

  it('should set max-width 100%', () => {
    div.className = 'fit'
    expect(getStyle().maxWidth).toMatch(/100\%|768px/)
  })

  it('should set overflow hidden', () => {
    div.className = 'overflow-hidden'
    expect(getStyle().overflow).toEqual('hidden')
  })

  it('should set overflow scroll', () => {
    div.className = 'overflow-scroll'
    expect(getStyle().overflow).toEqual('scroll')
  })

  it('should set overflow auto', () => {
    div.className = 'overflow-auto'
    expect(getStyle().overflow).toEqual('auto')
  })

})
