<template>
  <Header />
  <section>
    <div class="px-20 container m-auto" v-if="error">
      {{ error }}
    </div>
    <div v-if="isLoading" class="px-20 container m-auto">
      <h3 class="font-bold text-lg mt-5 text-green-700">
        {{ post.title }}
      </h3>
      <p class="mt-5 mb-10 text-gray-600">{{ post.body }}</p>
      <span
        class="mr-2 bg-green-500 text-white p-2 rounded-full"
        v-for="tag in post.tags"
        :key="tag"
        >#{{ tag }}</span
      >
    </div>
    <div v-else class="px-20 container m-auto">
      <Spinner />
    </div>
  </section>
</template>

<script lang="js">
import Header from "../components/Header.vue";
import Spinner from "../components/Spinner.vue";
import { watchEffect } from "vue";
import { getSinglePost } from "../composables/getSinglePost";
import { useRoute } from "vue-router";

export default {
  name: "Post",
  components: {
    Header,
    Spinner,
  },
  props: ["id"],
  setup(props) {
    const route = useRoute();
    
    const { post, error, load, isLoading } = getSinglePost(route.params.id);

    watchEffect(() => {
      load();
    });

    return { post, error, isLoading };
  },
};
</script>
