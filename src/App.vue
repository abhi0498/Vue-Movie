<template>
  <div id="app">
    <div class="navbar">
      <h2 style="margin:0;margin-left:20px;color:white">MoviesHub</h2>
      <div class="nav-links">
        <router-link class="a" to="/top-rated">Top Rated</router-link>
        <router-link class="a" to="/upcoming">Upcoming</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  mounted() {}
};
</script>

<style>
.a {
  color: white;
  text-decoration: none;
}
.a:visited {
  color: white;
  text-decoration: none;
}

a {
  color: black;
  text-decoration: none;
}
a:visited {
  color: black;
  text-decoration: none;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navbar {
  margin: 0;
  position: -webkit-sticky;
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  width: 100%;
  height: 8vh;
  background-color: #6639b6;
}
.nav-links {
  margin: 20px;
  display: flex;
  justify-content: space-around;
  width: 20%;
}
</style>
