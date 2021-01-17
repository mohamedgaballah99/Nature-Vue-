import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from '@/views/About';
import Product from '@/views/Product';
import Contact from '@/views/Contact';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path:"/product",
    name:"Product",
    component: Product
  },
  {
    path:"/contact",
    name:"Contact",
    component:Contact,
  },
 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
