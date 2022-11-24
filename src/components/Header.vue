<script>
import { RouterLink } from "vue-router";

export default {
  name: "Header",
};
</script>

<template>
  <nav>
    <RouterLink to="/">
      <h1 class="text-2xl text-center font-bold underline text-green-700 pt-10">
        Ruben's Blog
      </h1>
    </RouterLink>
  </nav>
</template>
