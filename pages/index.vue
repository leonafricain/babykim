<template>
  <div>
    <span class="text-4xl"> Use Cld-image </span>
    <div>
      <cld-image publicId="ukz7zbwgaxo1vm3seiub"> </cld-image>
    </div>
    <div>
      <NuxtLink
        tag="div"
        to="/cloudinary"
        class="underline font-bold text-blue-700 cursor-pointer"
      >
        Demo Cloudinary
      </NuxtLink>
    </div>
    <div class="text-2xl font-bold text-center">Index Page</div>
    <div v-for="(item, index) in data" :key="index">
      <NuxtLink :to="item.path">
        {{ item.path }}
      </NuxtLink>
    </div>
    <embed
      src="https://example.org"
      width="500"
      height="400"
      type="application/pdf"
    />
  </div>
</template>


<script>
export default {
  async asyncData({ $content }) {
    const data = await $content({ deep: true }).fetch();
    return {
      data,
    };
  },
};
</script>

<style  scoped>
</style>