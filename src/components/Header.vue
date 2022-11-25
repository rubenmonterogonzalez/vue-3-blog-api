<script>
import { RouterLink } from "vue-router";

export default {
  name: "Header",
};
</script>

<template>
  <header class="h-16 flex justify-between pt-3 px-5 shadow-md">
    <h1 class="text-2xl font-bold text-green-700">
      Ruben's Blog
    </h1>
    <nav class="pt-2">
      <RouterLink class="font-bold text-gray-400 mr-3" to="/">Blog</RouterLink>
      <RouterLink class="font-bold text-gray-400" to="/create">Create Post</RouterLink>
    </nav>
  </header>
</template>
