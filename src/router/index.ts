import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Pokemon from "../pages/Pokemon.vue";
const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/pokemon/:id",
		name: "pokemon",
		component: Pokemon,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
