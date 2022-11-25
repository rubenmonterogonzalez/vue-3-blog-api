<template>
  <Header />
  <div>
    <form @submit.prevent="handleSubmit" class="max-w-lg my-2 mx-auto">
      <label class="inline-block font-bold text-lg mt-5 text-green-700"
        >Title</label
      >
      <input
        class="block my-3 mx-auto w-full box-border p-1 border-2 rounded-sm border-green-800"
        v-model="title"
        type="text"
        required
      />
      <label class="inline-block font-bold text-lg mt-5 text-green-700"
        >Content</label
      >
      <textarea
        class="block my-3 mx-auto w-full box-border p-1 border-2 rounded-sm border-green-800 h-40"
        v-model="body"
        required
      ></textarea>
      <label class="inline-block font-bold text-lg mt-5 text-green-700"
        >Tags (hit the enter to add a tag)</label
      >
      <input
        class="block my-3 mx-auto w-full box-border p-1 border-2 rounded-sm border-green-800"
        v-model="tag"
        type="text"
        @keydown.enter.prevent="handleKeyDown"
      />
      <div
        v-for="tag in tags"
        :key="tag"
        class="inline-block mb-3 mr-3 text-white bg-green-400 p-2 rounded-full text-sm"
      >
        <button>#{{ tag }}</button>
      </div>
      <div>
        <button
          class="inline-block mt-3 mr-3 text-white bg-green-700 p-2 text-xl"
        >
          Add Post
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "Create",
  components: {
    Header,
  },
  setup() {
    const title = ref("");
    const body = ref("");
    const tag = ref("");
    const tags = ref([]);

    const router = useRouter();

    const handleKeyDown = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/, "");
        tags.value.push(tag.value);
      }
      tag.value = "";
    };

    const handleSubmit = async () => {
      const post = {
        // id: new Date().valueOf(),
        title: title.value,
        body: body.value,
        tags: tags.value,
      };
      await fetch("http://localhost:3000/posts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });

      router.push("/");
    };

    return { title, body, tag, tags, handleKeyDown, handleSubmit };
  },
};
</script>
