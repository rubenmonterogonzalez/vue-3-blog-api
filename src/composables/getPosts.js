import { ref } from "vue";

export const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      
      await new Promise(resolve => {
        setTimeout(resolve, 500);
      })

      const res = await fetch("http://localhost:3000/posts/");
      if (!res.ok) {
        throw Error("No Data Available");
      }
      const data = await res.json();
      posts.value = data.sort((a, b) => b.id - a.id);
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { posts, error, load };
}