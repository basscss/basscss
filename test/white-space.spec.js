
import expect from 'expect'

describe('white-space', () => {

  const addElement = (el) => {
    const $el = document.createElement(el)
    document.body.appendChild($el)
    $el.computedStyle = window.getComputedStyle($el)
    return $el
  }

  const div = addElement('div')
  const h1 = addElement('h1')
  const ul = addElement('ul')

  describe('margin', () => {
    it('should set margin 0', () => {
      h1.className = 'm0'
      expect(h1.computedStyle.marginTop).toEqual('0px')
    })

    describe('m1', () => {
      it('should set margin 8px', () => {
        div.className = 'm1'
        expect(div.computedStyle.marginTop).toEqual('8px')
      })

      it('should set margin-top 8px', () => {
        div.className = 'mt1'
        expect(div.computedStyle.marginTop).toEqual('8px')
      })

      it('should set margin-right 8px', () => {
        div.className = 'mr1'
        expect(div.computedStyle.marginRight).toEqual('8px')
      })

      it('should set margin-bottom 8px', () => {
        div.className = 'mb1'
        expect(div.computedStyle.marginBottom).toEqual('8px')
      })

      it('should set margin-left 8px', () => {
        div.className = 'ml1'
        expect(div.computedStyle.marginLeft).toEqual('8px')
      })
    })

    describe('m2', () => {
      it('should set margin 16px', () => {
        div.className = 'm2'
        expect(div.computedStyle.marginTop).toEqual('16px')
      })

      it('should set margin-top 16px', () => {
        div.className = 'mt2'
        expect(div.computedStyle.marginTop).toEqual('16px')
      })

      it('should set margin-right 16px', () => {
        div.className = 'mr2'
        expect(div.computedStyle.marginRight).toEqual('16px')
      })

      it('should set margin-bottom 16px', () => {
        div.className = 'mb2'
        expect(div.computedStyle.marginBottom).toEqual('16px')
      })

      it('should set margin-left 16px', () => {
        div.className = 'ml2'
        expect(div.computedStyle.marginLeft).toEqual('16px')
      })
    })

    describe('m3', () => {
      it('should set margin 32px', () => {
        div.className = 'm3'
        expect(div.computedStyle.marginTop).toEqual('32px')
      })

      it('should set margin-top 32px', () => {
        div.className = 'mt3'
        expect(div.computedStyle.marginTop).toEqual('32px')
      })

      it('should set margin-right 32px', () => {
        div.className = 'mr3'
        expect(div.computedStyle.marginRight).toEqual('32px')
      })

      it('should set margin-bottom 32px', () => {
        div.className = 'mb3'
        expect(div.computedStyle.marginBottom).toEqual('32px')
      })

      it('should set margin-left 32px', () => {
        div.className = 'ml3'
        expect(div.computedStyle.marginLeft).toEqual('32px')
      })
    })

    describe('m4', () => {
      it('should set margin 64px', () => {
        div.className = 'm4'
        expect(div.computedStyle.marginTop).toEqual('64px')
      })

      it('should set margin-top 64px', () => {
        div.className = 'mt4'
        expect(div.computedStyle.marginTop).toEqual('64px')
      })

      it('should set margin-right 64px', () => {
        div.className = 'mr4'
        expect(div.computedStyle.marginRight).toEqual('64px')
      })

      it('should set margin-bottom 64px', () => {
        div.className = 'mb4'
        expect(div.computedStyle.marginBottom).toEqual('64px')
      })

      it('should set margin-left 64px', () => {
        div.className = 'ml4'
        expect(div.computedStyle.marginLeft).toEqual('64px')
      })
    })
  })

  describe('padding', () => {
    describe('p0', () => {
      it('should set padding 0', () => {
        ul.className = 'p0'
        expect(h1.computedStyle.paddingTop).toEqual('0px')
      })
    })

    describe('p1', () => {
      it('should set padding 8px', () => {
        div.className = 'p1'
        expect(div.computedStyle.paddingTop).toEqual('8px')
      })

      it('should set padding-top and padding-bottom 8px', () => {
        div.className = 'py1'
        expect(div.computedStyle.paddingTop).toEqual('8px')
        expect(div.computedStyle.paddingBottom).toEqual('8px')
      })

      it('should set padding-left and padding-right 8px', () => {
        div.className = 'px1'
        expect(div.computedStyle.paddingLeft).toEqual('8px')
        expect(div.computedStyle.paddingRight).toEqual('8px')
      })
    })

    describe('p2', () => {
      it('should set padding 16px', () => {
        div.className = 'p2'
        expect(div.computedStyle.paddingTop).toEqual('16px')
      })

      it('should set padding-top and padding-bottom 16px', () => {
        div.className = 'py2'
        expect(div.computedStyle.paddingTop).toEqual('16px')
        expect(div.computedStyle.paddingBottom).toEqual('16px')
      })

      it('should set padding-left and padding-right 16px', () => {
        div.className = 'px2'
        expect(div.computedStyle.paddingLeft).toEqual('16px')
        expect(div.computedStyle.paddingRight).toEqual('16px')
      })
    })

    describe('p3', () => {
      it('should set padding 32px', () => {
        div.className = 'p3'
        expect(div.computedStyle.paddingTop).toEqual('32px')
      })

      it('should set padding-top and padding-bottom 32px', () => {
        div.className = 'py3'
        expect(div.computedStyle.paddingTop).toEqual('32px')
        expect(div.computedStyle.paddingBottom).toEqual('32px')
      })

      it('should set padding-left and padding-right 32px', () => {
        div.className = 'px3'
        expect(div.computedStyle.paddingLeft).toEqual('32px')
        expect(div.computedStyle.paddingRight).toEqual('32px')
      })
    })

    describe('p4', () => {
      it('should set padding 64px', () => {
        div.className = 'p4'
        expect(div.computedStyle.paddingTop).toEqual('64px')
      })

      it('should set padding-top and padding-bottom 64px', () => {
        div.className = 'py4'
        expect(div.computedStyle.paddingTop).toEqual('64px')
        expect(div.computedStyle.paddingBottom).toEqual('64px')
      })

      it('should set padding-left and padding-right 64px', () => {
        div.className = 'px4'
        expect(div.computedStyle.paddingLeft).toEqual('64px')
        expect(div.computedStyle.paddingRight).toEqual('64px')
      })
    })

  })

})
