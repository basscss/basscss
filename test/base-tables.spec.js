
import expect from 'expect'

describe('base-tables', () => {

  document.body.style.width = '768px'

  const addElement = (el, parent) => {
    const $el = document.createElement(el)
    parent = parent || document.body
    parent.appendChild($el)
    $el.computedStyle = window.getComputedStyle($el)
    return $el
  }

  const table = addElement('table')
  const th = addElement('th', table)
  const td = addElement('td', table)

  it('should set table border-collapse', () => {
    expect(table.computedStyle.borderCollapse).toEqual('separate')
  })

  it('should set table border-spacing', () => {
    expect(table.computedStyle.borderSpacing).toEqual('0px 0px')
  })

  it('should set table max-width', () => {
    expect(table.computedStyle.maxWidth).toMatch(/100%|768px/)
  })

  it('should set table width', () => {
    expect(table.computedStyle.width).toEqual('768px')
  })

  it('should set th text-align', () => {
    expect(th.computedStyle.textAlign).toEqual('left')
  })

  it('should set th font-weight', () => {
    expect(th.computedStyle.fontWeight).toMatch(/bold|700/)
  })

  it('should set th padding', () => {
    expect(th.computedStyle.paddingTop).toEqual('4px')
    expect(th.computedStyle.paddingBottom).toEqual('4px')
    expect(th.computedStyle.paddingLeft).toEqual('16px')
    expect(th.computedStyle.paddingRight).toEqual('16px')
  })

  it('should set td padding', () => {
    expect(td.computedStyle.paddingTop).toEqual('4px')
    expect(td.computedStyle.paddingBottom).toEqual('4px')
    expect(td.computedStyle.paddingLeft).toEqual('16px')
    expect(td.computedStyle.paddingRight).toEqual('16px')
  })

  it('should set th vertical-align', () => {
    expect(th.computedStyle.verticalAlign).toEqual('bottom')
  })

  it('should set td vertical-align', () => {
    expect(td.computedStyle.verticalAlign).toEqual('top')
  })

})
