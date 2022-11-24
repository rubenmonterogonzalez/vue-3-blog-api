import { ref } from "vue";

export const getSinglePost = (id) => {
  const post = ref([]);
  const error = ref(null);

  const load = async () => {
    try {

      await new Promise(resolve => {
        setTimeout(resolve, 2000);
      })

      const res = await fetch("https://dummyjson.com/posts/" + id);
      if (!res.ok) {
        throw Error("This post does NOT exist");
      }
      const data = await res.json();
      post.value = data;
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { post, error, load };
}