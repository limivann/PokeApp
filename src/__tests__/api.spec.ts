import { getSpecificPokemonData, getPokemonNameId } from "../api/index";

describe("Fetch data from api", () => {
	it("should fetch data from api successfully", async () => {
		expect.assertions(2);
		const pokemonData = await getSpecificPokemonData(1);
		const pokemonNameAndIdData = await getPokemonNameId(1);
		expect(pokemonData).toEqual({
			name: "bulbasaur",
			id: 1,
			imgUrl:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
			stats: {
				attack: 49,
				defense: 49,
				hp: 45,
				spAtk: 65,
				spDef: 65,
				speed: 45,
			},
			types: ["grass", "poison"],
		});
		expect(pokemonNameAndIdData).toEqual({
			name: "bulbasaur",
			id: 1,
		});
	});

	it("should throw an error if pokemon is not found", async () => {
		expect.assertions(2);
		await expect(getSpecificPokemonData("bob")).rejects.toThrow(
			"Pokemon not found"
		);
		await expect(getPokemonNameId("bob")).rejects.toThrow("Pokemon not found");
	});
});
