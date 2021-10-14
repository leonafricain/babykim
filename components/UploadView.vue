<template>
  <div>
    <div class="text-4xl font-semibold">
      Upload with view image before upload to database
    </div>
    <div>
      <form @submit.prevent="showInput">
        <input style="display: none" ref="input_ref" type="file" @change="preview"  />
        <img v-show="open"  id="mon_image" src="" width="200px" height="200px" />
        <button class="bg-pink-600 px-4 py-[8px] text-white rounded-md shadow-inner font-semibold">Fichier...</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            open: false
        }
    },
  methods: {
    preview(event) {
        mon_image.src = URL.createObjectURL(event.target.files[0]);
        this.open= true
    },
    showInput() {
        this.$refs.input_ref.click()
    }
  },
};
</script>

<style scoped>
</style>