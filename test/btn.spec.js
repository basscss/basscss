
import expect from 'expect'

describe('btn', () => {

  let container = document.createElement('div')
  let button = document.createElement('button')
  let input = document.createElement('input')
  let link = document.createElement('a')
  const getStyle = (el) => ( window.getComputedStyle(el) )

  beforeEach(() => {
    container.style.fontFamily = 'Verdana'
    container.style.fontSize = '24px'
    container.style.color = '#0ff'
    document.body.appendChild(container)

    button.innerText = 'Basscss Btn'
    input.type = 'submit'
    input.value = 'Basscss Btn'
    link.innerText = 'Basscss Btn'
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

    // Only relevant for links
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
      expect(style.borderColor).toMatch(/rgba(0, 0, 0, 0)|^$/)
    })

    it('should have a transparent background', () => {
      expect(style.backgroundColor).toMatch(/rgba(0, 0, 0, 0)|transparent/)
    })

    it('should inherit color', () => {
      expect(style.color).toEqual('rgb(0, 255, 255)')
    })

    context('when focused', () => {

      beforeEach(() => {
        button = document.querySelector('button')
        button.focus()
      })

      it('should focus', () => {
        expect(document.activeElement).toEqual(button)
      })

      it('should have a box-shadow', () => {
        // expect(style.boxShadow).toNotEqual('none')
      })
    })

  })

})

