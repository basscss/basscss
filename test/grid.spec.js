
import expect from 'expect'

describe('grid', () => {

  const addElement = (el, parent) => {
    const $el = document.createElement(el)
    parent = parent || document.body
    parent.appendChild($el)
    $el.computedStyle = window.getComputedStyle($el)
    return $el
  }

  const width = 768

  const container = addElement('div')
  const row = addElement('div', container)
  const col = addElement('div', row)

  container.style = width
  container.className = 'container'
  row.className = 'clearfix'

  describe('container', () => {
    it('should set max-width')
    it('should set margin-left auto')
    it('should set margin-right auto')
  })

  describe('col', () => {
    it('should float left', () => {
      col.className = 'col'
      expect(col.computedStyle.float).toEqual('left')
    })
    it('should float right', () => {
      col.className = 'col-right'
      expect(col.computedStyle.float).toEqual('right')
    })
    it('should be 1/12 width', () => {
      col.className = 'col col-1'
      const colWidth = Math.round(parseFloat(col.computedStyle.width))
      expect(colWidth).toEqual(width / 12)
    })
    it('should be 2/12 width', () => {
      col.className = 'col col-2'
      const colWidth = Math.round(parseFloat(col.computedStyle.width))
      expect(colWidth).toEqual(width * 2 / 12)
    })
    it('should be 3/12 width', () => {
      col.className = 'col col-3'
      const colWidth = Math.round(parseFloat(col.computedStyle.width))
      expect(colWidth).toEqual(width * 3 / 12)
    })
    it('should be 4/12 width', () => {
      col.className = 'col col-4'
      const colWidth = Math.round(parseFloat(col.computedStyle.width))
      expect(colWidth).toEqual(width * 4 / 12)
    })
    it('should be 5/12 width', () => {
      col.className = 'col col-5'
      const colWidth = Math.round(parseFloat(col.computedStyle.width))
      expect(colWidth).toEqual(width * 5 / 12)
    })
    it('should be 6/12 width', () => {
      col.className = 'col col-6'
      const colWidth = Math.round(parseFloat(col.computedStyle.width))
      expect(colWidth).toEqual(width * 6 / 12)
    })
    it('should be 7/12 width', () => {
      col.className = 'col col-7'
      const colWidth = Math.round(parseFloat(col.computedStyle.width))
      expect(colWidth).toEqual(width * 7 / 12)
    })
    it('should be 8/12 width', () => {
      col.className = 'col col-8'
      const colWidth = Math.round(parseFloat(col.computedStyle.width))
      expect(colWidth).toEqual(width * 8 / 12)
    })
    it('should be 9/12 width', () => {
      col.className = 'col col-9'
      const colWidth = Math.round(parseFloat(col.computedStyle.width))
      expect(colWidth).toEqual(width * 9 / 12)
    })
    it('should be 10/12 width', () => {
      col.className = 'col col-10'
      const colWidth = Math.round(parseFloat(col.computedStyle.width))
      expect(colWidth).toEqual(width * 10 / 12)
    })
    it('should be 11/12 width', () => {
      col.className = 'col col-11'
      const colWidth = Math.round(parseFloat(col.computedStyle.width))
      expect(colWidth).toEqual(width * 11 / 12)
    })
    it('should be 12/12 width', () => {
      col.className = 'col col-12'
      const colWidth = Math.round(parseFloat(col.computedStyle.width))
      expect(colWidth).toEqual(width)
    })
  })

  // To do: Add breakpoint contexts

})
