<template>
  <div class="navbar">
    <RouterLink to="/">
      <div>Home Page</div>
    </RouterLink>
    <RouterLink to="/signup">
      <div>Signup</div>
    </RouterLink>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  name: "NavbarComponent",
  components: {
    RouterLink,
  },
};
</script>
<style>
.navbar {
  display: flex;
}
</style>
