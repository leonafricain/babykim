export default function   removeAllActiveClass() {
   document.querySelectorAll('#mon_menu li a').forEach(el => {
  // console.log('el===========', el)
        //el.classList.remove("active")
//        console.log('remove',el.classList.remove("nuxt-link-exact-active"))
       el.classList.remove('nuxt-link-exact-active', 'nuxt-link-active')
    })

}