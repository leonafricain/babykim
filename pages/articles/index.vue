<template>
  <div>
    <nuxt-link to="/">Home</nuxt-link>
    <h2>Nuxt.js Blog</h2>
    <ul>
      <li class="p-4 text-xl text-blue-500" v-for="article in articles" :key="article.slug">
        <nuxt-link :to="article.path">{{ article.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, route }) {
    let query = $content('articles', { deep: true })
      .sortBy('date', 'desc')
       const articles = await query.fetch()
    return {
      articles
    }
  },
 
}
</script>