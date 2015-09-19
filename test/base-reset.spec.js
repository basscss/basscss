
import expect from 'expect'

describe('base-reset', () => {

  const getStyle = (el) => ( window.getComputedStyle(el) )

  let body = document.body
  let container = document.createElement('div')
  let img = document.createElement('img')

  beforeEach(() => {
    document.body.appendChild(container)
    container.appendChild(img)
    container.style.width = '768px'
  })

  it('should remove margin from body', () => {
    expect(getStyle(body).margin).toMatch(/0px|^$/)
  })

  it('should set max width on img', () => {
    expect(getStyle(img).maxWidth).toMatch(/100\%|768px/)
  })

})
