
import expect from 'expect'

describe('color-forms', () => {

  const addElement = (el) => {
    let $el = document.createElement(el)
    document.body.appendChild($el)
    $el.computedStyle = window.getComputedStyle($el)
    return $el
  }

  let input = addElement('input')

  input.className = 'field'

  it('should set border-style', () => {
    expect(input.computedStyle.borderTopStyle).toEqual('solid')
    expect(input.computedStyle.borderRightStyle).toEqual('solid')
    expect(input.computedStyle.borderBottomStyle).toEqual('solid')
    expect(input.computedStyle.borderLeftStyle).toEqual('solid')
  })

  it('should set border-width', () => {
    expect(input.computedStyle.borderTopWidth).toEqual('1px')
    expect(input.computedStyle.borderRightWidth).toEqual('1px')
    expect(input.computedStyle.borderBottomWidth).toEqual('1px')
    expect(input.computedStyle.borderLeftWidth).toEqual('1px')
  })

  it('should set border-color')
  /*
  it('should set border-color', () => {
    let color = 'rgba(0, 0, 0, 0.125)'
    expect(input.computedStyle.borderTopColor).toEqual(color)
    expect(input.computedStyle.borderRightColor).toEqual(color)
    expect(input.computedStyle.borderBottomColor).toEqual(color)
    expect(input.computedStyle.borderLeftColor).toEqual(color)
  })
  */

  it('should set border-radius', () => {
    let radius = '3px'
    expect(input.computedStyle.borderTopLeftRadius).toEqual(radius)
    expect(input.computedStyle.borderTopRightRadius).toEqual(radius)
    expect(input.computedStyle.borderBottomRightRadius).toEqual(radius)
    expect(input.computedStyle.borderBottomLeftRadius).toEqual(radius)
  })

  it('should set focus border-color')
  it('should set focus box-shadow')

  it('should set disabled background-color')

  it('should set success border-color')
  it('should set warning border-color')
  it('should set error border-color')

})

