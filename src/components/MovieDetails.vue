<template>
  <div class="container">
    <h1 class="text-align-left">Movie Details</h1>
    <img class="img-sm img-lg" :src="image_full_url" alt srcset />
    <h2 class="movie-title">{{this.movie.title}}</h2>
    <p>"{{movie.tagline}}"</p>

    <section class="release-date">
      <h3>{{movie.status}} On: {{this.movie.release_date}}</h3>
      <h3>Runtime: {{this.movie.runtime}} Mins.</h3>
      <h3>
        Rating:
        <span :style="{color:color}">{{this.movie.vote_average}}</span>
      </h3>
    </section>

    <section class="overview">
      <h3 style="text-align:left;">Overview</h3>
      <p style="text-align:justify;">{{this.movie.overview}}</p>

      <h4 v-if="movie.homepage!==''" class="text-align-left">
        Visit Movie's homepage:
        <a
          style="color:#0055ff"
          target="_blank"
          :href="movie.homepage"
        >{{movie.homepage}}</a>
      </h4>
    </section>

    <hr />

    <section class="genres">
      <h3 class="text-align-left">Genres</h3>
      <div style="display:flex;flex-wrap:wrap;" class="text-align-left">
        <span style="padding:1%" v-for="genre in movie.genres" :key="genre.id">{{genre.name}}</span>
      </div>
    </section>
    <hr />

    <section>
      <h3 class="text-align-left">Languages</h3>
      <div class="text-align-left">
        <span
          style="padding:1%"
          v-for="language in movie.spoken_languages"
          :key="language.id"
        >{{language.name}}</span>
      </div>
      <div>
        <h3 class="text-align-left">Production Countries</h3>
        <div style="display:flex;flex-wrap:wrap;" class="text-align-left">
          <span
            style="padding:3%"
            v-for="genre in movie.production_countries"
            :key="genre.id"
          >{{genre.name}}</span>
        </div>
      </div>
    </section>
    <hr />

    <section>
      <h3 class="text-align-left">Production Companies</h3>
      <div class="company-logos">
        <div v-for="company in movie.production_companies" :key="company.id">
          <img
            v-if="company.logo_path!==null"
            :src="getImageUrl(company.logo_path)"
            :alt="company.name"
            class="company-logo"
            srcset
          />
          <p class="col-md col-sm col-lg" v-else>{{company.name}}</p>
        </div>
      </div>
    </section>

    <hr />
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
    //Request API for specific movie data. Movie ID is  extracted  from URL params and sent to API.
    this.$http
      .get(
        `https://api.themoviedb.org/3/movie/${this.$route.params.movie_id}?api_key=${process.env.VUE_APP_API_KEY}&language=en-US`
      )
      .then(response => {
        console.log(response);
        this.movie = response.data; //storing recieved data in component.
        this.image_full_url = `${this.image_base_url}${this.movie.poster_path}?api_key=${process.env.VUE_APP_API_KEY}`; //Building requireed fromatt for image URL.
      });
  },
  methods: {
    getImageUrl(suffix) {
      return `https://image.tmdb.org/t/p/w500/${suffix}?api_key=${process.env.VUE_APP_API_KEY}`;
    }
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
.text-align-left {
  text-align: left;
}
a {
  color: black;
}
* {
  overflow-x: hidden;
}
a:visited {
  color: #0055ff !important;
}

@media (max-width: 600px) {
  .img-sm {
    width: 60%;
  }
  .container {
    margin: 0 10%;
  }

  .company-logos {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
  }
  .company-logo {
    width: 50%;
  }
}

@media (min-width: 600px) {
  .img-lg {
    width: 40%;
  }

  .container {
    margin: 0 20%;
  }
  .movie-title {
    text-align: center;
  }
  .company-logos {
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 20px;
  }
  .company-logo {
    width: 80%;
    margin: 10%;
  }
}
</style>