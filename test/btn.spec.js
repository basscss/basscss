
import expect from 'expect'

describe('btn', () => {

  let container = document.createElement('div')
  let button = document.createElement('button')
  let input = document.createElement('input')
  let link = document.createElement('a')

  const getStyle = (el) => ( window.getComputedStyle(el) )
  const TRANSPARENT_REGEX = /rgba\(0,\ 0,\ 0,\ 0\)|transparent|^$/

  beforeEach(() => {
    container.style.fontFamily = 'Verdana'
    container.style.fontSize = '24px'
    container.style.color = '#0ff'
    document.body.appendChild(container)

    button.textContent = 'Basscss Btn'
    input.type = 'submit'
    input.value = 'Basscss Btn'
    link.textContent = 'Basscss Btn'
  })

  describe('button element', () => {
    let style

    beforeEach(() => {
      button.className = 'btn'
      container.appendChild(button)
      style = getStyle(button)
    })

    it('should inherit font-family', () => {
      expect(style.fontFamily).toEqual('Verdana')
    })

    it('should inherit font-size', () => {
      expect(style.fontSize).toEqual('24px')
    })

    it('should be bold', () => {
      expect(style.fontWeight).toMatch(/bold|700/)
    })

    it('should set cursor pointer', () => {
      expect(style.cursor).toEqual('pointer')
    })

    it('should display inline-block', () => {
      expect(style.display).toEqual('inline-block')
    })

    it('should have no margin', () => {
      expect(style.margin).toMatch(/0px|^$/)
    })

    it('should set vertical-align middle', () => {
      expect(style.verticalAlign).toEqual('middle')
    })

    it('should have a transparent border', () => {
      expect(style.borderColor).toMatch(TRANSPARENT_REGEX)
    })

    it('should have a transparent background', () => {
      expect(style.backgroundColor).toMatch(TRANSPARENT_REGEX)
    })

    it('should inherit color', () => {
      expect(style.color).toEqual('rgb(0, 255, 255)')
    })

  })

  describe('input element', () => {
    let style

    beforeEach(() => {
      input.className = 'btn'
      container.appendChild(input)
      style = getStyle(input)
    })

    it('should inherit font-family', () => {
      expect(style.fontFamily).toEqual('Verdana')
    })

    it('should inherit font-size', () => {
      expect(style.fontSize).toEqual('24px')
    })

    it('should be bold', () => {
      expect(style.fontWeight).toMatch(/bold|700/)
    })

    it('should set cursor pointer', () => {
      expect(style.cursor).toEqual('pointer')
    })

    it('should display inline-block', () => {
      expect(style.display).toEqual('inline-block')
    })

    it('should have no margin', () => {
      expect(style.margin).toMatch(/0px|^$/)
    })

    it('should set vertical-align middle', () => {
      expect(style.verticalAlign).toEqual('middle')
    })

    it('should have a transparent border', () => {
      expect(style.borderColor).toMatch(TRANSPARENT_REGEX)
    })

    it('should have a transparent background', () => {
      expect(style.backgroundColor).toMatch(TRANSPARENT_REGEX)
    })

    it('should inherit color', () => {
      expect(style.color).toEqual('rgb(0, 255, 255)')
    })

  })

  describe('link element', () => {
    let style

    beforeEach(() => {
      link.className = 'btn'
      container.appendChild(link)
      style = getStyle(link)
    })

    it('should inherit font-family', () => {
      expect(style.fontFamily).toEqual('Verdana')
    })

    it('should inherit font-size', () => {
      expect(style.fontSize).toEqual('24px')
    })

    it('should be bold', () => {
      expect(style.fontWeight).toMatch(/bold|700/)
    })

    it('should remove text-decoration', () => {
      expect(style.textDecoration).toEqual('none')
    })

    it('should set cursor pointer', () => {
      expect(style.cursor).toEqual('pointer')
    })

    it('should display inline-block', () => {
      expect(style.display).toEqual('inline-block')
    })

    it('should have no margin', () => {
      expect(style.margin).toMatch(/0px|^$/)
    })

    it('should set vertical-align middle', () => {
      expect(style.verticalAlign).toEqual('middle')
    })

    it('should have a transparent border', () => {
      expect(style.borderColor).toMatch(TRANSPARENT_REGEX)
    })

    it('should have a transparent background', () => {
      expect(style.backgroundColor).toMatch(TRANSPARENT_REGEX)
    })

    it('should inherit color', () => {
      expect(style.color).toEqual('rgb(0, 255, 255)')
    })
  })

})

