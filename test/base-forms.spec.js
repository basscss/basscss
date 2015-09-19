
import expect from 'expect'

describe('base-forms', () => {

  const getStyle = (el) => ( window.getComputedStyle(el) )

  let container = document.createElement('form')
  let label = document.createElement('label')
  let input = document.createElement('input')
  let select = document.createElement('select')
  let textarea = document.createElement('textarea')


  beforeEach(() => {
    document.body.appendChild(container)
    container.appendChild(label)
    container.appendChild(input)
    container.appendChild(select)
    container.appendChild(textarea)
    container.style.fontFamily = 'Verdana'
  })

  describe('label', () => {
    let style = getStyle(label)

    it('should inherit font-family', () => {
      expect(style.fontFamily).toEqual('Verdana')
    })

    it('should set font size to 1rem', () => {
      expect(style.fontSize).toEqual('16px')
    })

    it('should set vertical-align middle', () => {
      expect(style.verticalAlign).toEqual('middle')
    })

  })

  describe('input', () => {
    let style = getStyle(input)

    it('should inherit font-family', () => {
      expect(style.fontFamily).toEqual('Verdana')
    })

    it('should set font size to 1rem', () => {
      expect(style.fontSize).toEqual('16px')
    })

    it('should remove margins', () => {
      expect(style.margin).toMatch(/0px|^$/)
    })

  })

  describe('textarea', () => {
    let style = getStyle(textarea)

    it('should inherit font-family', () => {
      expect(style.fontFamily).toEqual('Verdana')
    })

    it('should set font size to 1rem', () => {
      expect(style.fontSize).toEqual('16px')
    })

    it('should remove margins', () => {
      expect(style.margin).toMatch(/0px|^$/)
    })

  })


  describe('select', () => {
    let style

    beforeEach(() => {
      style = getStyle(select)
    })

    it('should remove margins', () => {
      expect(style.margin).toMatch(/0px|^$/)
    })

  })

})
