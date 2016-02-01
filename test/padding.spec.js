
import addElement from './util/add-element'

describe('padding', () => {

  const div = addElement('div')
  const h1 = addElement('h1')
  const ul = addElement('ul')

  describe('p0', () => {
    it('should set padding 0', () => {
      ul.className = 'p0'
      expect(h1.computedStyle.paddingTop).to.equal('0px')
    })
  })

  describe('p1', () => {
    it('should set padding 8px', () => {
      div.className = 'p1'
      expect(div.computedStyle.paddingTop).to.equal('8px')
    })

    it('should set padding-top and padding-bottom 8px', () => {
      div.className = 'py1'
      expect(div.computedStyle.paddingTop).to.equal('8px')
      expect(div.computedStyle.paddingBottom).to.equal('8px')
    })

    it('should set padding-left and padding-right 8px', () => {
      div.className = 'px1'
      expect(div.computedStyle.paddingLeft).to.equal('8px')
      expect(div.computedStyle.paddingRight).to.equal('8px')
    })
  })

  describe('p2', () => {
    it('should set padding 16px', () => {
      div.className = 'p2'
      expect(div.computedStyle.paddingTop).to.equal('16px')
    })

    it('should set padding-top and padding-bottom 16px', () => {
      div.className = 'py2'
      expect(div.computedStyle.paddingTop).to.equal('16px')
      expect(div.computedStyle.paddingBottom).to.equal('16px')
    })

    it('should set padding-left and padding-right 16px', () => {
      div.className = 'px2'
      expect(div.computedStyle.paddingLeft).to.equal('16px')
      expect(div.computedStyle.paddingRight).to.equal('16px')
    })
  })

  describe('p3', () => {
    it('should set padding 32px', () => {
      div.className = 'p3'
      expect(div.computedStyle.paddingTop).to.equal('32px')
    })

    it('should set padding-top and padding-bottom 32px', () => {
      div.className = 'py3'
      expect(div.computedStyle.paddingTop).to.equal('32px')
      expect(div.computedStyle.paddingBottom).to.equal('32px')
    })

    it('should set padding-left and padding-right 32px', () => {
      div.className = 'px3'
      expect(div.computedStyle.paddingLeft).to.equal('32px')
      expect(div.computedStyle.paddingRight).to.equal('32px')
    })
  })

  describe('p4', () => {
    it('should set padding 64px', () => {
      div.className = 'p4'
      expect(div.computedStyle.paddingTop).to.equal('64px')
    })

    it('should set padding-top and padding-bottom 64px', () => {
      div.className = 'py4'
      expect(div.computedStyle.paddingTop).to.equal('64px')
      expect(div.computedStyle.paddingBottom).to.equal('64px')
    })

    it('should set padding-left and padding-right 64px', () => {
      div.className = 'px4'
      expect(div.computedStyle.paddingLeft).to.equal('64px')
      expect(div.computedStyle.paddingRight).to.equal('64px')
    })
  })

})
