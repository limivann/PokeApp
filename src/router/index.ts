import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import NotFound from "../pages/NotFound.vue";
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
	{ path: "/:pathMath(.*)*", name: "not-found", component: NotFound },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
