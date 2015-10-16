
import expect from 'expect'

describe('color-base', () => {

  const getStyle = (el) => ( window.getComputedStyle(el) )

  let body = document.body
  let link = document.createElement('a')
  let pre = document.createElement('pre')
  let code = document.createElement('code')
  let hr = document.createElement('hr')

  document.body.appendChild(link)
  document.body.appendChild(pre)
  document.body.appendChild(code)
  document.body.appendChild(hr)

  it('should set body color', () => {
    expect(getStyle(body).color).toMatch(/rgb\(17,\ 17,\ 17\)/)
  })

  it('should set body background color', () => {
    expect(getStyle(body).backgroundColor).toMatch(/rgb\(255,\ 255,\ 255\)/)
  })

  it('should set link color', () => {
    expect(getStyle(link).color).toMatch(/rgb\(0,\ 116,\ 217\)/)
  })

  it('should set pre background color', () => {
    expect(getStyle(pre).backgroundColor).toMatch(/transparent|rgba\(0,\ 0,\ 0,\ 0\)/)
  })

  it('should set code background color', () => {
    expect(getStyle(code).backgroundColor).toMatch(/transparent|rgba\(0,\ 0,\ 0,\ 0\)/)
  })

  it('should set hr border bottom', () => {
    expect(getStyle(hr).borderBottomColor).toNotMatch(/none|^$/)
  })

})
