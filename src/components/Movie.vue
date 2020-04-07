<template>
  <router-link :to="movie_url">
    <div class="movie">
      <img :src="image_full_url" alt srcset />

      <h2>{{this.movie.title}}</h2>

      <div v-if="movie.vote_count!= undefined">
        <div class="rating-details">
          <div>
            Average Rating:
            <span :style="{color:color}">{{this.movie.vote_average}}</span>
          </div>

          <div>
            No. of votes:
            <span>{{this.movie.vote_count}}</span>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Movie",
  props: ["movie"],
  data: () => ({
    image_base_url: "https://image.tmdb.org/t/p/w500",
    image_full_url: "",
    movie_url: ""
  }),
  created() {
    this.image_full_url = `${this.image_base_url}${this.movie.poster_path}?api_key=${process.env.VUE_APP_API_KEY}`;
    this.movie_url = `/movie/${this.movie.id}`;
  },
  computed: {
    color() {
      if (this.movie.vote_average >= 7) {
        return "green";
      } else if (this.movie.vote_average >= 4 && this.movie.vote_average < 7) {
        return "yellow";
      } else {
        return "red";
      }
    }
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
.rating-details {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>