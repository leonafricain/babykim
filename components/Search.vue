<template>
  <div class="flex relative">
    <input
      v-model="query"
      type="text"
      class=" my-shadow
        block
        w-full
        pl-4
        pr-3
        py-2
        text-sm
        truncate
        leading-5
        placeholder-gray-400
        border border-gray-300
        text-gray-700
        focus:border-purple-300
        rounded-md
        focus:outline-none
        focus:bg-white
        bg-white
      "
      placeholder="Rechercher"
    />
    <ul
      v-on-clickaway="hideDropDown"
      v-if="articles.length && isVisible"
      class="
        z-50
        bg-gray
        absolute
        w-full
        p-4
        top-[38px]
        shadow-md
        bg-white
        rounded-md
        border border-gray-300
        overflow-hidden
      "
    >
      <li
        v-for="article of articles"
        :key="article.path"
        class="w-full inline-block cursor-pointer p-2 text-gray-500 hover:text-gray-700"
      >
        <NuxtLink
          v-on-clickaway="hideDropDown"
          class="block text-sm rounded-sm"
          :to= "article.slug"
        >
          <div class="flex items-center space-x-2">
            <svg
              class="w-6 h-6 fill-current object-cover "
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 24h-20v-24h14l6 6v18zm-7-23h-12v22h18v-16h-6v-6zm3 15v1h-12v-1h12zm0-3v1h-12v-1h12zm0-3v1h-12v-1h12zm-2-4h4.586l-4.586-4.586v4.586z"
              />
            </svg>
            <div>
              {{ article.title }}
            </div>
          </div>
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
      isVisible: true,
    };
  },
  methods: {
    hideDropDown() {
      this.isVisible = false;
      this.query = "";
    },
  },

  watch: {
    async query(newVal) {
      if (!newVal || newVal.length <= 3) {
        this.articles = [];
        this.isVisible = false;
        return;
      }
      this.isVisible = true;
      this.articles = await this.$content({ deep: true, text: true })
        /* .where({'text': {$containsAny: [query]}}) */
        .where({ text: { $regex: [newVal, "i"] } })
        .fetch();
    },
  },
};
</script>

<style scoped>
.my-shadow {
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}
</style>