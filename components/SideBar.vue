<template>
  <div
    :class="collapsed ? 'w-16' : 'w-60'"
     class="
      shadow-my
      fixed
      border-r
      z-1
      top-[60px]
      left-0
      bg-gray-50
      bottom-0
      p-3
      flex flex-col
      transition-all
      duration-300
      ease-linear
    "
  >
    <h1 class="h-1/6">
      <span v-if="collapsed" class="text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7 ml-2 object-fill text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
          />
        </svg>
      </span>
       <span v-else class="text-center inline-block text-gray-400">Menu</span>
    </h1>
    <!-- <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
        <SidebarLink to="/counter" icon="fas fa-columns">Counter </SidebarLink>
        <SidebarLink to="/fetch" icon="fas fa-chart-bar">Fetch</SidebarLink>
        <SidebarLink to="/vue3" icon="fas fa-image">Vuejs</SidebarLink>
        <SidebarLink to="/customEvent" icon="fas fa-cloud-moon"
            >CustomEvent</SidebarLink
        >
        <SidebarLink to="/dashboard" icon="fas fa-tachometer-alt"
            >Dashboad</SidebarLink
        >
        <SidebarLink to="/table" icon="fas fa-scroll">Table</SidebarLink>
        <SidebarLink to="/watch3" icon="fas fa-eye">WatchVue3</SidebarLink>
        <SidebarLink to="/vmodel" icon="fas fa-eye"
            >Vmodel Custom_Comp</SidebarLink
        > -->
    <span
      @click="CollapsedHandler"
      :class="{ 'transform -rotate-180 ': $store.state.collapsed }"
      class="
        cursor-pointer
        absolute
        bottom-0
        p-4
        block
        opacity-50
        transition-all
        duration-300
        ease-linear
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </span>
  </div>
</template>

<script>
//import { collapsed, toggleSidebar, sidebarWidth } from "./stateSidebar"
//import SidebarLink from "./SidebarLink.vue"
export default {
  computed: {
    collapsed() {
      return this.$store.state.collapsed;
    },
  },
  methods: {
    CollapsedHandler() {
      this.$store.commit("setCollapsed");
    },
  },

  components: {
    //   SidebarLink,
  },
};
</script>

<style scoped>
</style>
