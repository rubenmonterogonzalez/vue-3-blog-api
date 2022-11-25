import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Post from '../views/Post.vue'
import Create from '../views/Create.vue'
import Tag from '../views/Tag.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/posts/:id",
      name: "Post",
      component: Post,
      props: true
    },
    {
      path: "/create",
      name: "Create",
      component: Create,
    },
    {
      path: "/tags/:tag",
      name: "Tag",
      component: Tag,
    },

  ],
});

export default router;