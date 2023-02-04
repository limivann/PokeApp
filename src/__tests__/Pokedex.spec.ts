import { mount, shallowMount, VueWrapper } from "@vue/test-utils";
import Pokedex from "../components/Pokedex.vue";
import { PokemonData } from "../interfaces";

describe("Pokedex component", () => {
	let wrapper: VueWrapper<any>;
	let pokemonData: PokemonData;
	beforeEach(() => {
		pokemonData = {
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
		wrapper = mount(Pokedex, {
			propsData: {
				pokemonData,
			},
		});
	});

	it("should render correct elements", () => {
		expect(wrapper.find(".pokedexContainer").exists()).toBe(true);
		expect(wrapper.find(".pokemonImg").exists()).toBe(true);
	});

	it("updates the component when props are passed", () => {
		expect(wrapper.find(".pokemonName").text()).toEqual("butterfree");
	});
});
