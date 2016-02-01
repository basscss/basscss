
import addElement from './util/add-element'

describe('flexbox', () => {

  const div = addElement('div')

  it('should set display flex', () => {
    div.className = 'flex'
    expect(div.computedStyle.display).to.equal('flex')
  })

  it('should contain more tests')

})

