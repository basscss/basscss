
export default const addElement = (el, parent = document.body) => {
  const $el = document.createElement(el)
  parent.appendChild($el)
  $el.computedStyle = window.getComputedStyle($el)
  return $el
}
