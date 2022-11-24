<template>
  <Header />
  <div>
    <form class="max-w-lg my-2 mx-auto">
      <label class="inline-block mt-8 relative text-xl text-white mb-3"
        >Title:</label
      >
      <input
        class="block my-3 mx-auto w-full box-border p-1 border-2 border-green-800"
        v-model="title"
        type="text"
        required
      />
      <label class="inline-block mt-8 relative text-xl text-white mb-3"
        >Content:</label
      >
      <textarea
        class="block my-3 mx-auto w-full box-border p-1 border-2 border-green-800 h-40"
        v-model="body"
        required
      ></textarea>
      <label class="inline-block mt-8 relative text-xl text-white mb-3"
        >Tags</label
      >
      <input
        class="block my-3 mx-auto w-full box-border p-1 border-2 border-green-800"
        v-model="tag"
        type="text"
        @keydown.enter.prevent="handleKeyDown"
      />
      <div
        v-for="tag in tags"
        :key="tag"
        class="inline-block mt-3 mr-3 text-white bg-green-500 p-2 rounded-full text-sm"
      >
        #{{ tag }}
      </div>
      <div>
        <button class="inline-block mt-3 mr-3 text-white p-2 text-xl">
          Add Post
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import { ref } from "vue";

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

    const handleKeyDown = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/, "");
        tags.value.push(tag.value);
      }
      tag.value = "";
    };

    return { title, body, tag, tags, handleKeyDown };
  },
};
</script>

<style scoped>
label::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background-color: #22c55e;
  position: absolute;
  z-index: -1;
  padding-right: 120px;
  left: -30px;
  transform: rotateZ(-1.5deg);
}

button {
  background-color: #22c55e;
}
</style>


/* 10- 6*/