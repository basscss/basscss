
import expect from 'expect'

describe('borders', () => {

  const getStyle = (el) => ( window.getComputedStyle(el) )

  let div = document.createElement('div')
  let input = document.createElement('input')
  let style

  beforeEach(() => {
    div.textContent = 'Basscss Borders'
    document.body.appendChild(div)
    style = getStyle(div)
  })

  it('should apply border style', () => {
    div.className = 'border'
    expect(style.borderTopStyle).toEqual('solid')
    expect(style.borderRightStyle).toEqual('solid')
    expect(style.borderBottomStyle).toEqual('solid')
    expect(style.borderLeftStyle).toEqual('solid')
  })

  it('should apply border width', () => {
    div.className = 'border'
    expect(style.borderTopWidth).toEqual('1px')
    expect(style.borderRightWidth).toEqual('1px')
    expect(style.borderBottomWidth).toEqual('1px')
    expect(style.borderLeftWidth).toEqual('1px')
  })

  it('should apply border color', () => {
    div.className = 'border'
    expect(style.borderTopColor).toNotEqual('none')
    expect(style.borderRightColor).toNotEqual('none')
    expect(style.borderBottomColor).toNotEqual('none')
    expect(style.borderLeftColor).toNotEqual('none')
  })

  it('should apply border top styles', () => {
    div.className = 'border-top'
    expect(style.borderTopWidth).toEqual('1px')
    expect(style.borderTopStyle).toEqual('solid')
    expect(style.borderTopColor).toNotEqual('none')
  })

  it('should apply border right styles', () => {
    div.className = 'border-right'
    expect(style.borderRightWidth).toEqual('1px')
    expect(style.borderRightStyle).toEqual('solid')
    expect(style.borderRightColor).toNotEqual('none')
  })

  it('should apply border bottom styles', () => {
    div.className = 'border-bottom'
    expect(style.borderBottomWidth).toEqual('1px')
    expect(style.borderBottomStyle).toEqual('solid')
    expect(style.borderBottomColor).toNotEqual('none')
  })

  it('should apply border left styles', () => {
    div.className = 'border-left'
    expect(style.borderLeftWidth).toEqual('1px')
    expect(style.borderLeftStyle).toEqual('solid')
    expect(style.borderLeftColor).toNotEqual('none')
  })

  it('should remove border styles', () => {
    input.className = 'border-none'
    expect(getStyle(input).borderTopWidth).toMatch(/0px|^$/)
  })

  it('should apply border radius', () => {
    div.className = 'rounded'
    expect(style.borderTopRightRadius).toEqual('3px')
  })

  it('should apply circular border radius', () => {
    div.className = 'circle'
    div.style.width = '32px'
    div.style.height = '32px'
    expect(style.borderTopRightRadius).toMatch(/16px|50\%/)
  })

  it('should apply directional border radii', () => {
    div.className = 'rounded-top'
    expect(style.borderTopRightRadius).toEqual('3px')
    expect(style.borderBottomRightRadius).toEqual('0px')
  })

})
