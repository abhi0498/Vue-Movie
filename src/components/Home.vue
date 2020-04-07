<template>
  <div style="margin:0 10%; ">
    <h2 style="text-align:center">Welcome to MovieDB</h2>
    <p
      style="margin-top:10%"
    >You can visit either Top Rated Movies page or the Upcoming Movies page by clicking the links in the navbar.</p>
    <p>
      The data is retrieved from the following API:
      <a
        href="https://api.themoviedb.org/3/"
      >https://api.themoviedb.org/3/</a>
    </p>
    <p>
      My Github Link:
      <a href="https://github.com/abhi0498">https://github.com/abhi0498</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
a:hover {
  text-decoration: underline;
}
a:visited:hover {
  text-decoration: underline;
}
</style>