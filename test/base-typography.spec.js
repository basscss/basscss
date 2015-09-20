
import expect from 'expect'

describe('base-typograph', () => {

  const getStyle = (el) => ( window.getComputedStyle(el) )

  let body = document.body
  let h1 = document.createElement('h1')

  beforeEach(() => {
    document.body.appendChild(h1)
  })

  it('should set body font-family')
  it('should set body line-height')
  it('should set body font-size')

  it('should set h1 font-family')
  it('should set h1 font-weight')
  it('should set h1 line-height')
  it('should set h1 margins')

  it('should set p margins')

  it('should set ul margins')

  it('should set pre font-family')
  it('should set pre font-size')
  it('should set pre margins')
  it('should set pre overflow-x')

  it('should set h1 font-size')
  it('should set h2 font-size')
  it('should set h3 font-size')
  it('should set h4 font-size')
  it('should set h5 font-size')
  it('should set h6 font-size')

})
