<template>
  <div>
    <div>
      <cld-image publicId="IMG_4529.JPG.jpg"> </cld-image>
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
    <div v-for="item in data" :key="item.id">
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
    console.log("data", data);
    return {
      data,
    };
  },
};
</script>

<style  scoped>
</style>