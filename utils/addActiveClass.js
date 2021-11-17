export default function addActiveClass(id, path) {
   console.log(`${path}#${id}`)
   const selector = `a[href="${path}#${id}"]`
   const elementSelectionne = document.querySelector(selector)

   //console.log('elementSelectionnee ==== ',elementSelectionne)
//   console.log('document queryselector',document.querySelector(selector))

console.log("path dans la fonction addclass", path)

if(selector && path !== '/') {
   document.querySelector(selector).classList.add('nuxt-link-active', 'nuxt-link-exact-active')
} else {
   return
}
}