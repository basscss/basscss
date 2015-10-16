
import expect from 'expect'

describe('flex-object', () => {

  const getStyle = (el) => ( window.getComputedStyle(el) )

  let container = document.createElement('div')
  let cell = document.createElement('div')

  beforeEach(() => {
    document.body.appendChild(container)
    container.appendChild(cell)
  })

  it('should set display flex', () => {
    container.className = 'flex'
    expect(getStyle(container).display).toEqual('flex')
  })

  it('should set flex direction', () => {
    container.className = 'flex-column'
    expect(getStyle(container).flexDirection).toEqual('column')
  })

  it('should set flex wrap', () => {
    container.className = 'flex-wrap'
    expect(getStyle(container).flexWrap).toEqual('wrap')
  })

  it('should set align-items center', () => {
    container.className = 'flex-center'
    expect(getStyle(container).alignItems).toEqual('center')
  })

  it('should set align-items baseline', () => {
    container.className = 'flex-baseline'
    expect(getStyle(container).alignItems).toEqual('baseline')
  })

  it('should set align-items stretch', () => {
    container.className = 'flex-stretch'
    expect(getStyle(container).alignItems).toEqual('stretch')
  })

  it('should set align-items start', () => {
    container.className = 'flex-start'
    expect(getStyle(container).alignItems).toEqual('flex-start')
  })

  it('should set align-items end', () => {
    container.className = 'flex-end'
    expect(getStyle(container).alignItems).toEqual('flex-end')
  })

  it('should set justify-content space-between', () => {
    container.className = 'flex-justify'
    expect(getStyle(container).justifyContent).toEqual('space-between')
  })

  it('should set flex to 1 1 auto', () => {
    cell.className = 'flex-auto'
    expect(getStyle(cell).flexGrow).toEqual('1')
    expect(getStyle(cell).flexShrink).toEqual('1')
    expect(getStyle(cell).flexBasis).toEqual('auto')
  })

  it('should set flex to 1 0 auto', () => {
    cell.className = 'flex-grow'
    expect(getStyle(cell).flexGrow).toEqual('1')
    expect(getStyle(cell).flexShrink).toEqual('0')
    expect(getStyle(cell).flexBasis).toEqual('auto')
  })

  it('should set flex to none', () => {
    cell.className = 'flex-none'
    expect(getStyle(cell).flexGrow).toEqual('0')
    expect(getStyle(cell).flexShrink).toEqual('0')
  })

  it('should set order to -1', () => {
    cell.className = 'flex-first'
    expect(getStyle(cell).order).toEqual('-1')
  })

  it('should set order to 99999', () => {
    cell.className = 'flex-last'
    expect(getStyle(cell).order).toEqual('99999')
  })

})
