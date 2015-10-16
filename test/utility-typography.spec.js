
import expect from 'expect'

describe('utility-typography', () => {

  const getStyle = (el) => ( window.getComputedStyle(el) )

  let h1 = document.createElement('h1')
  let p = document.createElement('p')
  let ul = document.createElement('ul')
  let h1Style,
      pStyle

  beforeEach(() => {
    document.body.appendChild(h1)
    document.body.appendChild(p)
    document.body.appendChild(ul)
    h1Style = getStyle(h1)
    pStyle = getStyle(p)
  })

  it('should set font-weight bold', () => {
    p.className = 'bold'
    expect(pStyle.fontWeight).toMatch(/bold|700/)
  })

  it('should set font-weight normal', () => {
    h1.className = 'regular'
    expect(h1Style.fontWeight).toMatch(/normal|400/)
  })

  it('should set font-style italic', () => {
    h1.className = 'italic'
    expect(h1Style.fontStyle).toEqual('italic')
  })

  it('should set uppercase and add tracking', () => {
    h1.className = 'caps'
    expect(h1Style.textTransform).toEqual('uppercase')
    expect(h1Style.letterSpacing).toNotEqual('normal')
  })

  it('should left align text', () => {
    h1.className = 'left-align'
    expect(h1Style.textAlign).toEqual('left')
  })

  it('should center align text', () => {
    h1.className = 'center'
    expect(h1Style.textAlign).toEqual('center')
  })

  it('should right align text', () => {
    h1.className = 'right-align'
    expect(h1Style.textAlign).toEqual('right')
  })

  it('should justify text', () => {
    h1.className = 'justify'
    expect(h1Style.textAlign).toEqual('justify')
  })

  it('should set white-space nowrap', () => {
    h1.className = 'nowrap'
    expect(h1Style.whiteSpace).toEqual('nowrap')
  })

  it('should set word-wrap break-word', () => {
    h1.className = 'break-word'
    expect(h1Style.wordWrap).toEqual('break-word')
  })

  it('should truncate text', () => {
    h1.className = 'truncate'
    expect(h1Style.overflow).toEqual('hidden')
    expect(h1Style.textOverflow).toEqual('ellipsis')
    expect(h1Style.whiteSpace).toEqual('nowrap')
  })

  it('should reset list style', () => {
    ul.className = 'list-reset'
    expect(getStyle(ul).listStyle).toMatch(/none|^$/)
    expect(getStyle(ul).paddingLeft).toMatch(/0px|^$/)
  })

})
