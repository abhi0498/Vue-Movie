<template>
  <div>
    <div v-if="isOnline" style="margin:auto" class="loader"></div>
    <div v-else>
      <h1>You are Offline</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader",
  computed: {
    isOnline() {
      return window.navigator.onLine;
    }
  }
};
</script>

<style scoped>
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>