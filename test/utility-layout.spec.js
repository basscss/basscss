
import { clone } from 'lodash'
import expect from 'expect'
import { diff } from 'deep-diff'

describe('utility-layout', () => {

  const getStyle = (el) => ( window.getComputedStyle(el) )
  let container = document.createElement('div')
  let div = document.createElement('div')

  let style
  let initial // = window.getComputedStyle(div.cloneNode())

  beforeEach(() => {
    div.textContent = 'Basscss Utility Layout'
    document.body.appendChild(container)
    container.appendChild(div)
    container.style.width = '768px'
    style = getStyle(div)
    initial = clone(style)
  })

  // it('should not differ from initial', () => {
  //   console.log('style == initial', style == initial)
  //   console.log(
  //     diff(style, initial).map((d) => d)
  //   )
  //   // expect(style).toEqual(initial)
  // })

  // it('should only change display', () => {
  //   div.className = 'inline'
  //   // expect(style).toBe(initial)
  // })

  it('should set display inline', () => {
    div.className = 'inline'
    expect(style.display).toEqual('inline')
  })

  it('should set display inline-block', () => {
    div.className = 'inline-block'
    expect(style.display).toEqual('inline-block')
  })

  it('should set display block', () => {
    div.className = 'block'
    expect(style.display).toEqual('block')
  })

  it('should set display table', () => {
    div.className = 'table'
    expect(style.display).toEqual('table')
  })

  it('should set display table-cell', () => {
    div.className = 'table-cell'
    expect(style.display).toEqual('table-cell')
  })

  it('should set float left', () => {
    div.className = 'left'
    expect(style.float).toEqual('left')
  })

  it('should set float right', () => {
    div.className = 'right'
    expect(style.float).toEqual('right')
  })

  it('should set max-width 100%', () => {
    div.className = 'fit'
    expect(style.maxWidth).toMatch(/100\%|768px/)
  })

  it('should set overflow hidden', () => {
    div.className = 'overflow-hidden'
    expect(style.overflow).toEqual('hidden')
  })

  it('should set overflow scroll', () => {
    div.className = 'overflow-scroll'
    expect(style.overflow).toEqual('scroll')
  })

  it('should set overflow auto', () => {
    div.className = 'overflow-auto'
    expect(style.overflow).toEqual('auto')
  })

})
