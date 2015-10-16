
import expect from 'expect'

describe('responsive-states', () => {

  const addElement = (el) => {
    const $el = document.createElement(el)
    document.body.appendChild($el)
    $el.computedStyle = window.getComputedStyle($el)
    return $el
  }

  const div = addElement('div')

  context('below sm breakpoint', () => {
    beforeEach(() => {
      // Resize window
    })

    it('should set display none for sm-show')
    it('should set display none for md-show')
    it('should set display none for lg-show')
  })

  context('above sm breakpoint', () => {
    beforeEach(() => {
      // Resize window
    })

    it('should set display block for sm-show')
    it('should set display none for sm-hide')
    it('should set display none for md-show')
    it('should set display none for lg-show')
  })

  context('above md breakpoint', () => {
    beforeEach(() => {
      // Resize window
    })
    it('should set display block for sm-show')
    it('should set display none for sm-hide')
    it('should set display block for md-show')
    it('should set display none for md-hide')
    it('should set display none for lg-show')
  })

  context('above lg breakpoint', () => {
    beforeEach(() => {
      // Resize window
    })
    it('should set display block for sm-show')
    it('should set display none for sm-hide')
    it('should set display block for md-show')
    it('should set display none for md-hide')
    it('should set display block for lg-show')
    it('should set display none for lg-hide')
  })


})
