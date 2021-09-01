<template>
  <div>
    <Header />
    <SideBar />
    <main class="pt-16 px-7 transition-all duration-300 ease-linear mr-52" :class="collapsed ? 'ml-16': 'ml-60'">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue';
export default {
  components: { NavBar },
    computed:{
        collapsed() {
            return this.$store.state.collapsed
        }
    }
};
</script>

<style scoped>
</style>