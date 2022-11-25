<template>
  <div>
    <h3 class="border-b-2 border-gray-300 pt-10 pb-2 text-green-700 text-lg font-semibold">Tags</h3>
    <div v-for="tag in tags" :key="tag" class="inline-block p-3">
      <RouterLink :to="{name: 'Tag', params: {tag: tag}}" class="text-green-400 no-underline">#{{ tag }}</RouterLink>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import { useTags } from "../composables/useTags";
export default {
  name: "TagCloud",
  components: {},
  props: ["posts"],
  setup(props) {

    const { tags } = useTags(props.posts);

    return { tags };

  },
};
</script>

