import { ref } from "vue";

export const useTags = (posts) => {
  const tags = ref([])
  const tagSet = new Set()

  posts.map(post => {
    post.tags.map(tag => tagSet.add(tag))
  })

  tags.value = [...tagSet]

  return { tags }
}