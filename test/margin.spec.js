
import addElement from './util/add-element'

describe('margin', () => {

  const div = addElement('div')
  const h1 = addElement('h1')
  const ul = addElement('ul')

  it('should set margin 0', () => {
    h1.className = 'm0'
    expect(h1.computedStyle.marginTop).to.equal('0px')
  })

  describe('m1', () => {
    it('should set margin 8px', () => {
      div.className = 'm1'
      expect(div.computedStyle.marginTop).to.equal('8px')
    })

    it('should set margin-top 8px', () => {
      div.className = 'mt1'
      expect(div.computedStyle.marginTop).to.equal('8px')
    })

    it('should set margin-right 8px', () => {
      div.className = 'mr1'
      expect(div.computedStyle.marginRight).to.equal('8px')
    })

    it('should set margin-bottom 8px', () => {
      div.className = 'mb1'
      expect(div.computedStyle.marginBottom).to.equal('8px')
    })

    it('should set margin-left 8px', () => {
      div.className = 'ml1'
      expect(div.computedStyle.marginLeft).to.equal('8px')
    })
  })

  describe('m2', () => {
    it('should set margin 16px', () => {
      div.className = 'm2'
      expect(div.computedStyle.marginTop).to.equal('16px')
    })

    it('should set margin-top 16px', () => {
      div.className = 'mt2'
      expect(div.computedStyle.marginTop).to.equal('16px')
    })

    it('should set margin-right 16px', () => {
      div.className = 'mr2'
      expect(div.computedStyle.marginRight).to.equal('16px')
    })

    it('should set margin-bottom 16px', () => {
      div.className = 'mb2'
      expect(div.computedStyle.marginBottom).to.equal('16px')
    })

    it('should set margin-left 16px', () => {
      div.className = 'ml2'
      expect(div.computedStyle.marginLeft).to.equal('16px')
    })
  })

  describe('m3', () => {
    it('should set margin 32px', () => {
      div.className = 'm3'
      expect(div.computedStyle.marginTop).to.equal('32px')
    })

    it('should set margin-top 32px', () => {
      div.className = 'mt3'
      expect(div.computedStyle.marginTop).to.equal('32px')
    })

    it('should set margin-right 32px', () => {
      div.className = 'mr3'
      expect(div.computedStyle.marginRight).to.equal('32px')
    })

    it('should set margin-bottom 32px', () => {
      div.className = 'mb3'
      expect(div.computedStyle.marginBottom).to.equal('32px')
    })

    it('should set margin-left 32px', () => {
      div.className = 'ml3'
      expect(div.computedStyle.marginLeft).to.equal('32px')
    })
  })

  describe('m4', () => {
    it('should set margin 64px', () => {
      div.className = 'm4'
      expect(div.computedStyle.marginTop).to.equal('64px')
    })

    it('should set margin-top 64px', () => {
      div.className = 'mt4'
      expect(div.computedStyle.marginTop).to.equal('64px')
    })

    it('should set margin-right 64px', () => {
      div.className = 'mr4'
      expect(div.computedStyle.marginRight).to.equal('64px')
    })

    it('should set margin-bottom 64px', () => {
      div.className = 'mb4'
      expect(div.computedStyle.marginBottom).to.equal('64px')
    })

    it('should set margin-left 64px', () => {
      div.className = 'ml4'
      expect(div.computedStyle.marginLeft).to.equal('64px')
    })
  })

})
