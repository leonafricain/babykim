<template>
  <div>
    <div class="text-2xl font-bold text-center">Index Page</div>
    <div v-for="item in data" :key="item.id">
        <NuxtLink :to="item.slug">
          {{item.slug}}
        </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const data = await $content().fetch();
    return {
      data,
    };
  },
};
</script>

<style  scoped>
</style>