
import expect from 'expect'

describe('base-tables', () => {

  const getStyle = (el) => ( window.getComputedStyle(el) )

  let table = document.createElement('table')

  beforeEach(() => {
    document.body.appendChild(table)
  })

  it('should set table border-collapse')
  it('should set table border-spacing')
  it('should set table max-width')
  it('should set table width')
  it('should set th text-align')
  it('should set th font-weight')
  it('should set th padding')
  it('should set td padding')
  it('should set th vertical-align')
  it('should set td vertical-align')

})
