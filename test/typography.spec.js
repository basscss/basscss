
import addElement from './util/add-element'

describe('typography', () => {

  let h1 = addElement('h1')
  let p = addElement('p')
  let ul = addElement('ul')

  it('should set font-weight bold', () => {
    p.className = 'bold'
    expect(p.computedStyle.fontWeight).to.match(/bold|700/)
  })

  it('should set font-weight normal', () => {
    h1.className = 'regular'
    expect(h1.computedStyle.fontWeight).to.match(/normal|400/)
  })

  it('should set font-style italic', () => {
    h1.className = 'italic'
    expect(h1.computedStyle.fontStyle).to.equal('italic')
  })

  it('should set uppercase and add tracking', () => {
    h1.className = 'caps'
    expect(h1.computedStyle.textTransform).to.equal('uppercase')
    expect(h1.computedStyle.letterSpacing).to.not.equal('normal')
  })

  it('should left align text', () => {
    h1.className = 'left-align'
    expect(h1.computedStyle.textAlign).to.equal('left')
  })

  it('should center align text', () => {
    h1.className = 'center'
    expect(h1.computedStyle.textAlign).to.equal('center')
  })

  it('should right align text', () => {
    h1.className = 'right-align'
    expect(h1.computedStyle.textAlign).to.equal('right')
  })

  it('should justify text', () => {
    h1.className = 'justify'
    expect(h1.computedStyle.textAlign).to.equal('justify')
  })

  it('should set white-space nowrap', () => {
    h1.className = 'nowrap'
    expect(h1.computedStyle.whiteSpace).to.equal('nowrap')
  })

  it('should set word-wrap break-word', () => {
    h1.className = 'break-word'
    expect(h1.computedStyle.wordWrap).to.equal('break-word')
  })

  it('should truncate text', () => {
    h1.className = 'truncate'
    expect(h1.computedStyle.overflow).to.equal('hidden')
    expect(h1.computedStyle.textOverflow).to.equal('ellipsis')
    expect(h1.computedStyle.whiteSpace).to.equal('nowrap')
  })

  it('should reset list style', () => {
    ul.className = 'list-reset'
    expect(ul.computedStyle.listStyle).to.match(/none|^$/)
    expect(ul.computedStyle.paddingLeft).to.match(/0px|^$/)
  })

})
