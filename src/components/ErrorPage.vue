<template>
  <div>
    <h1>404 Not Found</h1>
    <h4>Why not try visiting these pages?</h4>
    <br />
    <router-link to="/top-rated">Top Rated Movies</router-link>
    <br />
    <br />
    <router-link to="/upcoming">Upcoming Movies</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  color: black;
}

a:visited {
  color: black !important;
}
</style>