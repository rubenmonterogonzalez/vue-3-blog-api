<template>
  <Header />
  <section>
    <div class="px-[4%] container m-auto flex flex-col" v-if="error">
      {{ error }}
    </div>
    <div class="px-[4%] container m-auto grid" v-if="posts.length">
      <div>
        <PostList :posts="posts" />
      </div>
      <TagCloud :posts="posts" />
    </div>
    <div v-else class="px-[4%] container m-auto flex flex-col">
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
import TagCloud from "../components/TagCloud.vue";

export default {
  name: "Home",
  components: {
    PostList,
    Spinner,
    Header,
    TagCloud,
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
