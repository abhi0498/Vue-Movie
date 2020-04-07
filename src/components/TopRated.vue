<template>
  <div>
    <h1>Top Rated Movies</h1>
    <div class="movies">
      <Movie v-for="movie in movieData.results" :key="movie.id" :movie="movie"></Movie>
    </div>
    <div style="margin:auto">
      <button
        class="btn"
        :class="{'btn-disabled':firstPage,'btn-primary':!firstPage}"
        :disabled="firstPage"
        @click="gotoPage(1)"
      >First</button>
      <button
        class="btn"
        :class="{'btn-disabled':firstPage,'btn-primary':!firstPage}"
        :disabled="firstPage"
        @click="prevPage"
      >Previous</button>
      <span>Page No: {{this.movieData.page}}</span>
      <button
        class="btn"
        :class="{'btn-disabled':lastPage,'btn-primary':!lastPage}"
        :disabled="lastPage"
        @click="nextPage"
      >Next</button>
      <button
        class="btn"
        :class="{'btn-disabled':lastPage,'btn-primary':!lastPage}"
        :disabled="lastPage"
        @click="gotoPage(last_page)"
      >Last</button>
    </div>
  </div>
</template>

<script>
import Movie from "./Movie";
export default {
  data: () => ({
    movieData: [],
    page_no: 1,
    last_page: 355
  }),
  name: "Movies",
  components: { Movie },
  beforeMount() {
    this.getMovieData();
  },
  methods: {
    getMovieData() {
      this.$http
        .get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.VUE_APP_API_KEY}&language=en-US&page=${this.page_no}`
        )
        .then(response => {
          this.movieData = response.data;
          console.log(this.movieData);
          this.page_no = this.movieData.page;
        });
    },
    nextPage() {
      this.page_no += 1;
      this.gotoPage(this.page_no);
    },
    prevPage() {
      this.page_no -= 1;
      this.gotoPage(this.page_no);
    },
    gotoPage(page_no) {
      this.page_no = page_no;
      this.getMovieData();
      console.log(this.page_no);
    }
  },
  computed: {
    firstPage() {
      return this.page_no == 1;
    },
    lastPage() {
      return this.page_no == this.last_page;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.movies {
  display: grid;
  grid-template-columns: auto auto auto;
}
.btn {
  width: 200px;
  height: 30px;
  border-radius: 2px;
  border: 0;
  transition: 0.2s ease-out;
  color: #fff;
  margin: 6px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}

.btn:hover {
  color: #fff;
  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
}
.btn-primary {
  background: #4285f4;
}
.btn-disabled {
  background-color: #777 !important;
}
.btn-primary:hover,
.btn-primary:focus {
  background-color: #5a95f5 !important;
}
a {
  color: black;
  text-decoration: none;
}
a:visited {
  color: black;
  text-decoration: none;
}
</style>
