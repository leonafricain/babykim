import {slugify} from 'transliteration'

export default function fixIds(elements = []) {
  const slugifyOptions = {replace: {ü: 'ue', ä: 'ae', ö: 'oe', ß: 'ss', é: 'e', à: 'a', è: 'e'}}
  elements.forEach((el) => {
    if (el.props && el.props.id) {
      el.props.id = slugify(el.props.id, slugifyOptions)
    }
    if (el.id) {
      el.id = slugify(el.id, slugifyOptions)
    }
    if (el.children) {
      fixIds(el.children)
    }
  })
}