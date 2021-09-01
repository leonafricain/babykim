export default function addActiveClass(id) {
    const selector = `a[href="/#${id}"]`
  // console.log('selector===================================', selector)
   const elementSelectionne = document.querySelector(selector)
   console.log('elementSelectionnee ==== ',elementSelectionne)
//   console.log('document queryselector',document.querySelector(selector))
   document.querySelector(selector).classList.add('nuxt-link-active', 'nuxt-link-exact-active')
}