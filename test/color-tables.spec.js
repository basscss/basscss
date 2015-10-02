
import expect from 'expect'

describe('color-tables', () => {

  const addElement = (el, parent) => {
    let $el = document.createElement(el)
    parent = parent || document.body
    parent.appendChild($el)
    $el.computedStyle = window.getComputedStyle($el)
    return $el
  }

  const table = addElement('table')
  const th = addElement('th', table)
  const tr = addElement('tr', table)
  const trLast = addElement('tr', table)
  const td = addElement('td', tr)
  const tdLast = addElement('td', trLast)

  table.className = 'table-light'

  it('should set th border-bottom-width')
  it('should set th border-bottom-style')
  it('should set th border-bottom-color')
  it('should set td border-bottom-width')
  it('should set td border-bottom-style')
  it('should set td border-bottom-color')
  it('should not have a border for the last tr')

})

