import { ref } from "vue";

export const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      
      await new Promise(resolve => {
        setTimeout(resolve, 2000);
      })

      const res = await fetch("https://dummyjson.com/posts");
      if (!res.ok) {
        throw Error("No Data Available");
      }
      const data = await res.json();
      posts.value = data.posts.slice(0, 10);
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { posts, error, load };
}