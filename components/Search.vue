<template>
  <div class="flex w-full relative">
    <input
      v-model="query"
      type="text"
      class="
        block
        w-full
        pl-4
        pr-3
        py-2
        truncate
        leading-5
        placeholder-gray-400
        border border-gray-400
        text-gray-700
        focus:border-gray-300
        rounded-md
        focus:outline-none
        focus:bg-white
        bg-white
      "
      placeholder="Rechercher"
    />
    <ul v-if="articles.length" class="z-999 bg-gray absolute w-full p-4 top-[38px] shadow-md bg-white dark:bg-gray-900 rounded-md border border-gray-300 overflow-hidden">
      <li v-for="article of articles" :key="article.path" class="w-full bg-gray-600 cursor-pointer">
        <NuxtLink :to="{ name: 'slug', params: { slug: article.path } }">
          {{ article.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: "",
      articles: [],
    };
  },
  watch: {
    async query(newVal) {
      if (!newVal || newVal.length <= 3) {
        this.articles = [];
        return;
      }

      this.articles = await this.$content({ deep: true, text: true })
        /* .where({'text': {$containsAny: [query]}}) */
        .where({ text: { $regex: [newVal, "i"] } })
        .fetch();
      console.log("this.articles", this.articles);
    },
  },
};
</script>