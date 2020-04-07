<template>
  <div>
    <h1>Upcoming Movies</h1>
    <div class="movies row">
      <Movie
        class="col-sm col-md col-lg"
        v-for="movie in movieData.results"
        :key="movie.id"
        :movie="movie"
      ></Movie>
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
    last_page: 14
  }),
  name: "Movies",
  components: { Movie },
  beforeMount() {
    this.getMovieData();
  },
  methods: {
    //Retrieve data from API and store it in components data.
    getMovieData() {
      this.$http
        .get(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.VUE_APP_API_KEY}&language=en-US&page=${this.page_no}`
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
    //loads data required for the requested page
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
<style >
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
</style>
