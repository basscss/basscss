
const addElement = (el) => {
  const $el = document.createElement(el)
  document.body.appendChild($el)
  $el.computedStyle = window.getComputedStyle($el)
  return $el
}

export default addElement

