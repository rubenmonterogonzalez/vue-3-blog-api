import { ref } from "vue";

export const getSinglePost = (id) => {
  const post = ref([]);
  const error = ref(null);
  const isLoading = ref(false)

  const load = async () => {
    try {

      await new Promise(resolve => {
        setTimeout(resolve, 500);
      })

      const res = await fetch("http://localhost:3000/posts/" + id);
      if (!res.ok) {
        throw Error("This post does NOT exist");
      }

      const data = await res.json();
      post.value = data;
      isLoading.value = true;
    }

    catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { post, error, load, isLoading };
}