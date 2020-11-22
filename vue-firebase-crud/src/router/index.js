import Vue from "vue";
import VueRouter from "vue-router";
import Index from '@/components/index'
import AddFood from '@/components/AddFood'
import EditFood from '@/components/EditFood'


Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/add-food",
    name: "AddFood",
    component: AddFood
  },
  {
    path: "/edit-food:food_slug",
    name: "EditFood",
    component: EditFood
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;