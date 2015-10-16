
import expect from 'expect'

describe('align', () => {

  const addElement = (el) => {
    const $el = document.createElement(el)
    document.body.appendChild($el)
    $el.computedStyle = window.getComputedStyle($el)
    return $el
  }

  const div = addElement('div')

  it('should set vertical-align baseline', () => {
    div.className = 'inline-block align-baseline'
    expect(div.computedStyle.verticalAlign).toEqual('baseline')
  })

  it('should set vertical-align top', () => {
    div.className = 'inline-block align-top'
    expect(div.computedStyle.verticalAlign).toEqual('top')
  })

  it('should set vertical-align middle', () => {
    div.className = 'inline-block align-middle'
    expect(div.computedStyle.verticalAlign).toEqual('middle')
  })

  it('should set vertical-align bottom', () => {
    div.className = 'inline-block align-bottom'
    expect(div.computedStyle.verticalAlign).toEqual('bottom')
  })

})
