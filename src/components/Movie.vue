<template>
  <div class="movie">
    <img :src="image_base_url+imageURL" alt srcset />
    <h2>{{this.title}}</h2>
  </div>
</template>

<script>
export default {
  name: "Movie",
  props: ["title", "imageURL"],
  data: () => ({
    image_base_url: "https://image.tmdb.org/t/p/w500",
    image_full_url: ""
  }),
  created() {
    this.image_full_url = `${this.image_base_url}${this.imageURL}?api_key=${process.env.VUE_APP_API_KEY}`;
  }
};
</script>

<style scoped>
.movie {
  border: 1px solid #666;
  margin: 4px;
  border-radius: 5%;
}
img {
  border-radius: 5% 5% 0% 0%;
}
</style>