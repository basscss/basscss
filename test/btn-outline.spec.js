
import expect from 'expect'

describe('btn-outline', () => {

  const addElement = (el) => {
    const $el = document.createElement(el)
    document.body.appendChild($el)
    $el.computedStyle = window.getComputedStyle($el)
    return $el
  }

  const button = addElement('button')
  button.className = 'btn btn-outline'
  button.textContent = 'btn-outline'

  it('should set border-color', () => {
    expect(button.computedStyle.borderTopColor).toEqual('rgb(17, 17, 17)')
  })

  it('should set border-radius', () => {
    expect(button.computedStyle.borderTopLeftRadius).toEqual('3px')
  })

})

