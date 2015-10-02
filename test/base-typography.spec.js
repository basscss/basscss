
import expect from 'expect'

describe('base-typography', () => {

  const getStyle = (el) => ( window.getComputedStyle(el) )

  const addElement = (el) => {
    const $el = document.createElement(el)
    body.appendChild($el)
    return $el
  }

  const body = document.body
  const h1 = addElement('h1')
  const h2 = addElement('h2')
  const h3 = addElement('h3')
  const h4 = addElement('h4')
  const h5 = addElement('h5')
  const h6 = addElement('h6')

  const p = addElement('p')
  const ul = addElement('ul')
  const pre = addElement('pre')

  const fontFamily = /\"Helvetica Neue\"\,Helvetica\,sans-serif|\'Helvetica Neue\'\,\ Helvetica\,\ sans-serif/

  it('should set body font-family', () => {
    expect(getStyle(body).fontFamily).toMatch(fontFamily)
  })

  it('should set body line-height', () => {
    expect(getStyle(body).lineHeight).toEqual('24px')
  })

  it('should set body font-size', () => {
    expect(getStyle(body).fontSize).toEqual('16px')
  })

  it('should set h1 font-family', () => {
    expect(getStyle(h1).fontFamily).toMatch(fontFamily)
  })

  it('should set h1 font-weight', () => {
    expect(getStyle(h1).fontWeight).toMatch(/700|bold/)
  })

  it('should set h1 line-height', () => {
    expect(getStyle(h1).lineHeight).toEqual('40px')
  })

  it('should set h1 margins', () => {
    expect(getStyle(h1).marginTop).toEqual('32px')
    expect(getStyle(h1).marginBottom).toEqual('16px')
  })

  it('should set p margins', () => {
    expect(getStyle(p).marginTop).toMatch(/0px|^$/)
    expect(getStyle(p).marginBottom).toEqual('16px')
  })

  it('should set ul margins', () => {
    expect(getStyle(ul).marginTop).toMatch(/0px|^$/)
    expect(getStyle(ul).marginBottom).toEqual('16px')
  })

  it('should set pre font-family', () => {
    // const preFontFamily = /\"Source\ Code\ Pro\"\,\ Consolas\,\ monospace|\"Source\ Code\ Pro\"\,Consolas\,monospace/
    const preFontFamily = /(\"|\')Source\ Code\ Pro(\"|\')\,\ ?Consolas\,\ ?monospace/
    expect(getStyle(pre).fontFamily).toMatch(preFontFamily)
  })

  it('should set pre font-size', () => {
    expect(getStyle(pre).fontSize).toEqual('16px')
  })

  it('should set pre margins', () => {
    expect(getStyle(pre).marginTop).toMatch(/0px|^$/)
    expect(getStyle(pre).marginBottom).toEqual('16px')
  })

  it('should set pre overflow-x', () => {
    expect(getStyle(pre).overflowX).toEqual('scroll')
  })

  it('should set h1 font-size', () => {
    expect(getStyle(h1).fontSize).toEqual('32px')
  })

  it('should set h2 font-size', () => {
    expect(getStyle(h2).fontSize).toEqual('24px')
  })

  it('should set h3 font-size', () => {
    expect(getStyle(h3).fontSize).toEqual('20px')
  })

  it('should set h4 font-size', () => {
    expect(getStyle(h4).fontSize).toEqual('16px')
  })

  it('should set h5 font-size', () => {
    expect(getStyle(h5).fontSize).toEqual('14px')
  })

  it('should set h6 font-size', () => {
    expect(getStyle(h6).fontSize).toEqual('12px')
  })

})
