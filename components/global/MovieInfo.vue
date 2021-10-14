<template>
  <section class="shadow-md p-4 bg-gray-100 max-w-2xl">
    <strong>{{ name }}</strong>
    <slot name="summary">
      <p>No info available.</p>
    </slot>
  </section>
</template>

<script>
export default {
  name: 'MovieInfo',
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>