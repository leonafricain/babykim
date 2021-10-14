<template>
  <div>
    <nuxt-link to="/articles">Articles</nuxt-link>
    <nuxt-link to="/products">Products</nuxt-link>
    <h1>Home</h1>
    <h2>Markdown</h2>
    <h3>Content</h3>
    <nuxt-content :document="markdown" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const markdown = await $content("markdown").fetch();
    return {
      markdown,
    };
  },
};
</script>