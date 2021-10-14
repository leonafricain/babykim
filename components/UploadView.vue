<template>
  <div>
    <div class="text-4xl font-semibold">
      Upload with view image before upload to database
    </div>
    <div>
      <form @submit.prevent="showInput">
        <input style="display: none" ref="input_ref" type="file" @change="preview"  />
        <embed  v-show="open"  id="mon_image" src="@/assets/images/pdf.svg" width="100%" height="500px" />
        <button class="bg-pink-600 px-4 py-[8px] text-white rounded-md shadow-inner font-semibold">Fichier...</button>
      </form>
    </div>
  </div>
</template>

<script>
import PdfSvg from './global/PdfSvg.vue';
export default {
  components: { PdfSvg },
    data() {
        return {
            open: true,
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