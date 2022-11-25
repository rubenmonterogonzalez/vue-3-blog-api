<template>
  <Header />
  <section>
    <div class="px-[4%] container m-auto flex flex-col" v-if="error">
      {{ error }}
    </div>
    <div class="px-[4%] container m-auto grid" v-if="posts.length">
      <div>
        <PostList :posts="postsWithTag" />
      </div>
      <TagCloud :posts="posts" />
    </div>
    <div v-else class="px-[4%] container m-auto flex flex-col">
      <Spinner />
    </div>
  </section>
</template>

<script>
import Header from "../components/Header.vue";
import Spinner from "../components/Spinner.vue";
import PostList from "../components/PostList.vue";
import { getPosts } from "../composables/getPosts";
import { watchEffect } from "vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
import TagCloud from "../components/TagCloud.vue";

export default {
  name: "Tag",
  components: {
    Header,
    Spinner,
    PostList,
    TagCloud,
  },
  setup() {
    const route = useRoute();

    const { posts, error, load } = getPosts();

    watchEffect(() => {
      load();
    });

    const postsWithTag = computed(() => {
      return posts.value.filter((post) => post.tags.includes(route.params.tag));
    });

    return { posts, error, postsWithTag };
  },
};
</script>
