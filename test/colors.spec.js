
import expect from 'expect'
import Color from 'color'
import colorsCss from 'colors.css'

describe('colors', () => {

  const getStyle = (el) => ( window.getComputedStyle(el) )

  let div = document.createElement('div')
  div.textContent = 'Basscss Colors'
  document.body.appendChild(div)

  Object.keys(colorsCss).forEach((key) => {
    it(`should set the correct color ${key}`, () => {
      let hex = colorsCss[key]
      let rgb = Color(hex).rgbString()
      div.className = key
      expect(getStyle(div).color).toEqual(rgb)
    })
  })

})
