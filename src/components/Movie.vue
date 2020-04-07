<template>
  <router-link :to="movie_url">
    <div class="movie">
      <img :src="image_full_url" :alt="this.movie.title" srcset />

      <h4>{{this.movie.title}}</h4>

      <div v-if="movie.vote_count!= undefined">
        <div class="rating-details">
          <div>
            Average Rating:
            <span :style="{color:color}">
              <h4 style="display:inline">{{this.movie.vote_average}}</h4>
            </span>
          </div>

          <div style="padding:2%">
            <span>No. of votes:</span>
            <span>
              <strong>{{this.movie.vote_count}}</strong>
            </span>
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
    this.image_full_url = `${this.image_base_url}${this.movie.poster_path}?api_key=${process.env.VUE_APP_API_KEY}`; //Building urls for required images and pages.
    this.movie_url = `/movie/${this.movie.id}`;
  },
  computed: {
    //returns color based on Movie rating
    color() {
      if (this.movie.vote_average >= 7) {
        return "#388e3c";
      } else if (this.movie.vote_average >= 4 && this.movie.vote_average < 7) {
        return "#ffc400";
      } else {
        return "#c62828";
      }
    }
  }
};
</script>

<style scoped>
.movie {
  border: 1px solid #666;
  border-radius: 5%;
  margin: 1%;
  width: 100%;
  height: 100%;
  word-wrap: break-word;
}

img {
  border-radius: 5% 5% 0% 0%;
  width: 100%;
}
.rating-details {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>