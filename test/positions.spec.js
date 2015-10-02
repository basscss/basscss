

import expect from 'expect'

describe('positions', () => {

  const addElement = (el) => {
    const $el = document.createElement(el)
    document.body.appendChild($el)
    $el.computedStyle = window.getComputedStyle($el)
    return $el
  }

  const div = addElement('div')

  it('should set position relative', () => {
    div.className = 'relative'
    expect(div.computedStyle.position).toEqual('relative')
  })

  it('should set position absolute', () => {
    div.className = 'absolute'
    expect(div.computedStyle.position).toEqual('absolute')
  })

  it('should set position fixed', () => {
    div.className = 'fixed'
    expect(div.computedStyle.position).toEqual('fixed')
  })

  it('should set top 0', () => {
    div.className = 'top-0'
    expect(div.computedStyle.top).toEqual('0px')
  })

  it('should set right 0', () => {
    div.className = 'right-0'
    expect(div.computedStyle.right).toEqual('0px')
  })

  it('should set bottom 0', () => {
    div.className = 'bottom-0'
    expect(div.computedStyle.bottom).toEqual('0px')
  })

  it('should set left 0', () => {
    div.className = 'left-0'
    expect(div.computedStyle.left).toEqual('0px')
  })

  it('should set z-index 1', () => {
    div.className = 'z1'
    expect(div.computedStyle.zIndex).toEqual('1')
  })

  it('should set z-index 2', () => {
    div.className = 'z2'
    expect(div.computedStyle.zIndex).toEqual('2')
  })

  it('should set z-index 3', () => {
    div.className = 'z3'
    expect(div.computedStyle.zIndex).toEqual('3')
  })

  it('should set z-index 4', () => {
    div.className = 'z4'
    expect(div.computedStyle.zIndex).toEqual('4')
  })

})
