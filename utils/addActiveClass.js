export default function addActiveClass(id, path) {
   console.log(`${path}#${id}`)
    const selector = `a[href="${path}#${id}"]`
  // console.log('selector===================================', selector)
   const elementSelectionne = document.querySelector(selector)

   //console.log('elementSelectionnee ==== ',elementSelectionne)
//   console.log('document queryselector',document.querySelector(selector))

if(selector) {

   document.querySelector(selector).classList.add('nuxt-link-active', 'nuxt-link-exact-active')
} else {
   return
}
}