<template>
  <div style="margin:0 10%">
    <h1 style="text-align:left;">Movie Details</h1>
    <img width="30%" :src="image_full_url" alt srcset />
    <h1>{{this.movie.title}}</h1>
    <table>
      <tr>
        <td class="name">Movie Title</td>
        <td>{{this.movie.title}}</td>
      </tr>

      <tr>
        <td class="name">Overview</td>
        <td>{{this.movie.overview}}</td>
      </tr>
      <tr>
        <td class="name">Website</td>
        <td>
          <a :href="movie.homepage">{{movie.homepage}}</a>
        </td>
      </tr>
      <tr>
        <td class="name">Release Date</td>
        <td>{{movie.release_date}}</td>
      </tr>
      <tr>
        <td class="name">Runtime</td>
        <td>{{movie.runtime}} Mins.</td>
      </tr>
      <tr>
        <td class="name">Genres</td>

        <td>
          <div v-for="genre in movie.genres" :key="genre.id">{{genre.name}}</div>
        </td>
      </tr>
      <tr>
        <td class="name">Languages</td>

        <td>
          <div v-for="genre in movie.spoken_languages" :key="genre.id">{{genre.name}}</div>
        </td>
      </tr>
      <tr>
        <td class="name">Budget</td>
        <td>$ {{this.movie.budget}}</td>
      </tr>

      <tr>
        <td class="name">Revenue</td>
        <td>$ {{this.movie.revenue}}</td>
      </tr>

      <tr>
        <td class="name">Production Companies</td>

        <td class="company-logos">
          <div v-for="company in movie.production_companies" :key="company.id">
            <img
              style=" display: block;margin:auto;margin-top:auto;margin-bottom:auto;padding:auto;"
              v-if="company.logo_path!==null"
              width="40%"
              :src="getImageUrl(company.logo_path)"
              :alt="company.name"
              srcset
            />
            <p v-else>{{company.name}}</p>
          </div>
        </td>
      </tr>

      <tr>
        <td class="name">Country</td>

        <td>
          <div v-for="genre in movie.production_countries" :key="genre.id">{{genre.name}}</div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "MovieDetails",
  data: () => ({
    image_base_url: "https://image.tmdb.org/t/p/w500",
    movie: [],
    image_full_url: ""
  }),
  created() {
    this.$http
      .get(
        `https://api.themoviedb.org/3/movie/${this.$route.params.movie_id}?api_key=${process.env.VUE_APP_API_KEY}&language=en-US`
      )
      .then(response => {
        this.movie = response.data;
        console.log(this.movie);
        this.image_full_url = `${this.image_base_url}${this.movie.poster_path}?api_key=${process.env.VUE_APP_API_KEY}`;
      });
  },
  methods: {
    getImageUrl(suffix) {
      return `https://image.tmdb.org/t/p/w500/${suffix}?api_key=${process.env.VUE_APP_API_KEY}`;
    }
  }
};
</script>

<style scoped>
table {
  margin: auto;
  width: 60%;
}
tr {
  border: 2px solid #777;
}
td {
  border-bottom: 2px solid #777;
}
.name {
  width: 30%;
  border-right: 2px solid #777;
}

a {
  color: black;
}

a:visited {
  color: black !important;
}

.company-logos {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto auto;
}
</style>