<template>
  <div>
    <span>Upload to Cloudinary</span>
    <input
      type="file"
      accept=".jpeg,.jpg,.png,image/jpeg,image/png, application/pdf"
      aria-label="upload image button"
      @change="selectFile"
    />
    <div>
      <label for="file">File progress:</label>
      <progress id="file" max="100" :value="progress">{{progress}}</progress>
    </div>
    <div>
      <iframe :src="data" frameborder="0" width="100%" height="500"></iframe>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: null,
      progress: 0
    };
  },
  methods: {
    async selectFile(e) {
      this.progress = 0
      const file = e.target.files[0];
      /* Make sure file exists */
      if (!file) return;

      /* create a reader */
      const readData = (f) =>
        new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(f);
        });

      /* Read data */
      this.data = await readData(file);
      this.progress = 50
      /* upload the converted data */
      const instance = await this.$cloudinary.upload(
        this.data,
        {
          uploadPreset: "linqhot2",
          resource_type: "auto",
          public_id: file.name,
          tags: ["hakim", "baya"],
        },
        function (error, result) {}
      );

      console.log("url =>", instance);
      this.data = instance.url;
      this.progress = 100
    },
  },
};
</script>