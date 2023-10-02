<template>
  <Navbar />

  <RouterView />
</template>

<script>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar/index.vue";

export default {
  name: "App",
  components: {
    RouterView,
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
