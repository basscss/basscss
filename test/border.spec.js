
import expect from 'expect'
import addElement from './util/add-element'

describe('border', () => {

  const div = addElement('div')
  const input = addElement('input')

  div.style.width = '32px'
  div.style.height = '32px'

  it('should apply border style', () => {
    div.className = 'border'
    expect(div.computedStyle.borderTopStyle).toEqual('solid')
    expect(div.computedStyle.borderRightStyle).toEqual('solid')
    expect(div.computedStyle.borderBottomStyle).toEqual('solid')
    expect(div.computedStyle.borderLeftStyle).toEqual('solid')
  })

  it('should apply border width', () => {
    div.className = 'border'
    expect(div.computedStyle.borderTopWidth).toEqual('1px')
    expect(div.computedStyle.borderRightWidth).toEqual('1px')
    expect(div.computedStyle.borderBottomWidth).toEqual('1px')
    expect(div.computedStyle.borderLeftWidth).toEqual('1px')
  })

  it('should apply border color', () => {
    div.className = 'border'
    expect(div.computedStyle.borderTopColor).toNotEqual('none')
    expect(div.computedStyle.borderRightColor).toNotEqual('none')
    expect(div.computedStyle.borderBottomColor).toNotEqual('none')
    expect(div.computedStyle.borderLeftColor).toNotEqual('none')
  })

  it('should apply border top styles', () => {
    div.className = 'border-top'
    expect(div.computedStyle.borderTopWidth).toEqual('1px')
    expect(div.computedStyle.borderTopStyle).toEqual('solid')
    expect(div.computedStyle.borderTopColor).toNotEqual('none')
  })

  it('should apply border right styles', () => {
    div.className = 'border-right'
    expect(div.computedStyle.borderRightWidth).toEqual('1px')
    expect(div.computedStyle.borderRightStyle).toEqual('solid')
    expect(div.computedStyle.borderRightColor).toNotEqual('none')
  })

  it('should apply border bottom styles', () => {
    div.className = 'border-bottom'
    expect(div.computedStyle.borderBottomWidth).toEqual('1px')
    expect(div.computedStyle.borderBottomStyle).toEqual('solid')
    expect(div.computedStyle.borderBottomColor).toNotEqual('none')
  })

  it('should apply border left styles', () => {
    div.className = 'border-left'
    expect(div.computedStyle.borderLeftWidth).toEqual('1px')
    expect(div.computedStyle.borderLeftStyle).toEqual('solid')
    expect(div.computedStyle.borderLeftColor).toNotEqual('none')
  })

  it('should remove border styles', () => {
    input.className = 'border-none'
    expect(input.computedStyle.borderTopWidth).toMatch(/0px|^$/)
  })

  it('should apply border radius', () => {
    div.className = 'rounded'
    expect(div.computedStyle.borderTopRightRadius).toEqual('3px')
  })

  it('should apply circular border radius', () => {
    div.className = 'circle'
    expect(div.computedStyle.borderTopRightRadius).toMatch(/16px|50\%/)
  })

  it('should apply directional border radii', () => {
    div.className = 'rounded-top'
    expect(div.computedStyle.borderTopRightRadius).toEqual('3px')
    expect(div.computedStyle.borderBottomRightRadius).toEqual('0px')
  })

})
