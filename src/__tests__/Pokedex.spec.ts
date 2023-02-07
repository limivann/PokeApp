import { mount } from "@vue/test-utils";
import Pokedex from "../components/Pokedex.vue";
import { IPokemonData } from "../interfaces";

describe("Pokedex component", () => {
	const pokemonData: IPokemonData = {
		id: 12,
		name: "butterfree",
		imgUrl:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png",
		types: ["bug", "flying"],
		stats: {
			hp: 60,
			attack: 45,
			defense: 50,
			spAtk: 90,
			spDef: 80,
			speed: 70,
		},
	};

	it("should render correct elements", () => {
		const wrapper = mount(Pokedex);
		expect(wrapper.find(".pokedexContainer").exists()).toBe(true);
		expect(wrapper.find(".pokemonImg").exists()).toBe(true);
	});

	it("updates the component when props are passed", async () => {
		const wrapper = mount(Pokedex);
		await wrapper.setProps({ pokemonData });
		expect(wrapper.find(".pokemonName").text()).toEqual("butterfree");
		expect(wrapper.get(".moreDetails").isVisible()).toBe(true);
	});

	it("more details button should not be visible at first", () => {
		const wrapper = mount(Pokedex);
		expect(wrapper.get(".moreDetails").isVisible()).toBe(false);
	});
});
