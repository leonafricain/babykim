<template>
  <div>
    <div class="text-2xl font-semibold border-b border-gray-600 py-4">
      Upload with view image before upload to database
    </div>
    <div class="p-6">
      <form @submit.prevent="showInput" class="flex items-center px-6">
        <input style="display: none" ref="input_ref" type="file" @change="preview"  />
        <embed  v-show="open"  id="mon_image" src="@/assets/images/pdf.svg" width="10%" height="50px" />
        <button class="bg-pink-600 px-4 py-[6px] text-white rounded-md shadow-inner text-xs">Fichier...</button>
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
        console.log(mon_image.width);
        mon_image.width =  '80%';
        mon_image.height = '400px'
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