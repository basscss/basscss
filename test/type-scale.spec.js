
import expect from 'expect'

describe('type-scale', () => {

  const addElement = (el) => {
    const $el = document.createElement(el)
    document.body.appendChild($el)
    $el.computedStyle = window.getComputedStyle($el)
    return $el
  }

  const p = addElement('p')

  it('should set .h1 font-size', () => {
    p.className = 'h1'
    expect(p.computedStyle.fontSize).toEqual('32px')
  })

  it('should set .h2 font-size', () => {
    p.className = 'h2'
    expect(p.computedStyle.fontSize).toEqual('24px')
  })

  it('should set .h3 font-size', () => {
    p.className = 'h3'
    expect(p.computedStyle.fontSize).toEqual('20px')
  })

  it('should set .h4 font-size', () => {
    p.className = 'h4'
    expect(p.computedStyle.fontSize).toEqual('16px')
  })

  it('should set .h5 font-size', () => {
    p.className = 'h5'
    expect(p.computedStyle.fontSize).toEqual('14px')
  })

  it('should set .h6 font-size', () => {
    p.className = 'h6'
    expect(p.computedStyle.fontSize).toEqual('12px')
  })

})
