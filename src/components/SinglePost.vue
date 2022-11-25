<template>
  <div class="mt-10 mb-12">
    <RouterLink :to="{name: 'Post', params: {id: post.id}}">
      <h3 class="font-bold text-lg mt-5 text-green-700 hover:underline">{{ post.title }}</h3>
    </RouterLink>
    <p class="mb-5 text-gray-600">{{ snippet }}</p>
    <span
      class="mr-2 bg-green-500 text-white p-2 rounded-full"
      v-for="tag in post.tags"
      :key="tag"
      >#{{ tag }}</span
    >
  </div>
</template>

<script>
import { computed } from "vue";
import { RouterLink } from "vue-router";

export default {
  props: ["post"],
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 100) + "...";
    });
    return { snippet };
  },
  components: {},
};
</script>
