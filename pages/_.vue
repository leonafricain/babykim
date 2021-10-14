<template>
  <div class="font-inter">
    <span class="text-red-600">_VUE Racine</span>
    <nuxt-content
      :document="article"
      class="
        antialiased
        prose prose-sm prose-blue
        text-justify
        max-w-full
        leading-6
      "
    />
    <div class="h-96"></div>
    <SideBarRight :toc="article.toc" />
  </div>
</template>

<script>
import fixIds from "../utils/fixIds";
export default {
  async asyncData({ $content, params }) {
    const article = await $content(params.pathMatch).fetch();
    console.log("params==========", params);
    console.log(article);
    // fixIds(article.body.children)
    fixIds(article.toc);
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