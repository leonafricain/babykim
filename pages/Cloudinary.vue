<template>
  <div>
      <div>
         <!--  <Upload />
 -->          <upload-view />
      </div>
      <div class="w-full border">
    <!-- <embed width="100%" height="500" :src="src" alt="An image example with Cloudinary" /> -->
  </div>
  </div>
</template>
<script>
import Upload from '~/components/Upload.vue'
import UploadView from '~/components/UploadView.vue'
export default {
  components: { Upload, UploadView },
  data() {
    return {
      src: this.$cloudinary.image.url(
          'https://res.cloudinary.com/dnqloc8vn/image/upload/v1633712026/projet_decret_executif_gestion_budgetaire_epa_tvnhmf.pdf',
          {
            /* width: '200',
            height: '200',
            crop: 'scale' */
          }
        )
    }
  }
}
</script>