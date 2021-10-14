<template>
  <div class="font-inter">
    <div class="text-3xl">
      SLUG
    </div>
    <nuxt-content :document="article" class="antialiased prose prose-sm prose-blue text-justify max-w-full leading-6" />
    <div class="h-60"></div>
    <SideBarRight :toc="article.toc" />
  </div>
</template>

<script>
import fixIds from '../utils/fixIds'
export default {
  async asyncData({ $content, params }) {
    const article = await $content(params.slug).fetch();
    fixIds(article.body.children)
    fixIds(article.toc)
    return {
      article,
    };
  },
};
</script>

<style scoped>
.font-inter {
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
}



</style>