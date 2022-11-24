<template>
  <Header />
  <section>
    <div class="px-20 container m-auto flex flex-col" v-if="error">
      {{ error }}
    </div>
    <div class="px-20 container m-auto flex flex-col" v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else class="px-20 container m-auto flex flex-col">
      <Spinner />
    </div>
  </section>
</template>

<script>
import { watchEffect } from "vue";
import PostList from "../components/PostList.vue";
import Spinner from "../components/Spinner.vue";
import Header from "../components/Header.vue";
import { getPosts } from "../composables/getPosts";

export default {
  name: "Home",
  components: {
    PostList,
    Spinner,
    Header,
  },

  setup() {
    const { posts, error, load } = getPosts();

    watchEffect(() => {
      load();
    });

    return { posts, error };
  },
};
</script>
