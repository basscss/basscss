
import expect from 'expect'

describe('btn-primary', () => {

  const addElement = (el) => {
    const $el = document.createElement(el)
    document.body.appendChild($el)
    $el.computedStyle = window.getComputedStyle($el)
    return $el
  }

  const button = addElement('button')
  button.className = 'btn btn-primary'
  button.textContent = 'btn-primary'

  const TRANSPARENT_REGEX = /rgba\(0,\ 0,\ 0,\ 0\)|transparent|^$/

  it('should set color', () => {
    expect(button.computedStyle.color).toEqual('rgb(255, 255, 255)')
  })

  it('should set background-color', () => {
    expect(button.computedStyle.backgroundColor).toEqual('rgb(0, 116, 217)')
  })

  it('should set border-radius', () => {
    expect(button.computedStyle.borderTopLeftRadius).toEqual('3px')
  })

})

