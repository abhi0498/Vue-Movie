<template>
  <div>
    <h1>Top Rated Movies</h1>
    <Loader v-if="loading" style="margin:auto;"></Loader>

    <div v-else class="movies row">
      <Movie
        class="col-md col-lg col-sm"
        v-for="movie in movieData.results"
        :key="movie.id"
        :movie="movie"
      ></Movie>
    </div>
    <div style="margin:auto;margin-top:5%">
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
import Loader from "./Loader";
export default {
  data: () => ({
    movieData: [],
    page_no: 1,
    last_page: 355,
    loading: true
  }),
  name: "Movies",
  components: { Movie, Loader },
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
          this.loading = false;
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
<style>
.movies {
  display: flex;
  flex-wrap: wrap;
  margin: 0 10%;
}
.btn {
  width: 15%;
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

.row {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 20px;
}

@media (max-width: 6000px) {
  .col-lg {
    grid-column: span 2;
  }
}
@media (max-width: 1200px) {
  .col-md {
    grid-column: span 4;
  }
}
@media (max-width: 600px) {
  .col-sm {
    grid-column: span 6;
  }
}
</style>
