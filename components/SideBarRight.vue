<template>
  <div
    class="
      border-l
      fixed
      z-10
      top-[58px]
      right-0
      bottom-0
      p-3
      flex
      w-56
      flex-col
      overscroll-y-auto
    "
  >
    <h1
      class="
        text-gray-900
        uppercase
        tracking-wide
        font-semibold
        mb-3
        text-sm
        lg:text-xs
      "
    >
      Sur Cette Page
    </h1>
    <ul class="mb-4 overflow-x-hidden" id="mon_menu">
      <li
        v-for="link in toc"
        :key="link.id"
        :class="{
          'pl-3 text-sm hover:pl-4 ': link.depth === 2,
          'pl-6 text-xs hover:pl-7': link.depth === 3,
        }"
        class="py-1 text-gray-400"
      >
        <NuxtLink
          :to="`#${link.id}`"
          class="transition-colors duration-300 ease-linear hover:text-gray-900"
        >
          {{ link.text }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
import removeAllActiveClass from "../utils/removeAllActiveClass";
import addActiveClass from "../utils/addActiveClass";

export default {
  props: ["toc"],
  mounted() {
  //  window.scrollTo(0, 0);
  //  removeAllActiveClass();
    const lesh2 = document.querySelectorAll(".nuxt-content h2, h3");
    onscroll = function () {
      const scrollPosition = document.documentElement.scrollTop;
      /* console.log('scrollposition = ', scrollPosition)
      console.log('offsetTop = ',lesh2[4].offsetTop)
      console.log('offsetheight = ',lesh2[4].offsetHeight) */
      lesh2.forEach((section) => {
        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight + 20
        ) {
          const currentId = section.attributes.id.value;
          console.log(
            "currentId===================================",
            currentId
          );
          removeAllActiveClass();
          addActiveClass(currentId);
        }
      });
    };
  },
};
</script>

<style>
.nuxt-content h2::before {
  content: "";
  display: block;
  height: 60px; /* fixed header height*/
  margin: -60px 0 0; /* negative fixed header height */
}
.nuxt-content h3::before {
  content: "";
  display: block;
  height: 60px; /* fixed header height*/
  margin: -50px 0 0; /* negative fixed header height */
}

.nuxt-link-active {
  font-weight: 500 !important;
  border-left: aqua !important;

}

/* exact link will show the primary color for only the exact matching link */
.nuxt-link-exact-active {
  color: #20ac84 !important;
  border-left: aqua !important
}

ul {
  list-style-type: none;
}

li {
  border-left: rgb(211, 205, 205, 0.5) solid 1px;
  transition: all 0.3s ease;
}

li:hover {
  border-left: 1px solid #20ac84;
}
a,
a:visited {
  text-decoration: none;
  color: inherit;
}


::v-deep .nuxt-content h2::before {
  content: "";
  display: block;
  height: 60px; /* fixed header height*/
  margin: -60px 0 0; /* negative fixed header height */
}
::v-deep .nuxt-content h3::before {
  content: "";
  display: block;
  height: 60px; /* fixed header height*/
  margin: -50px 0 0; /* negative fixed header height */
}

</style>
