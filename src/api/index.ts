import axios from "axios";
import { IPokemonData, IStatData } from "../interfaces";
export const POKEMON_API_BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export const getSpecificPokemonData = async (param: string | number) => {
	// TODO: handle all type of invalid input
	try {
		const response = await axios(`${POKEMON_API_BASE_URL}/${param}`);
		const data = await response.data;
		const currentPokemon: IPokemonData = {
			id: data.id,
			name: data.name,
			imgUrl: data["sprites"]["other"]["official-artwork"]["front_default"],
			types: getTypes(data.types),
			stats: getStats(data.stats),
		};
		return { ...currentPokemon };
	} catch (error) {
		throw new Error("Pokemon not found");
	}
};

export const getPokemonNameId = async (param: string | number) => {
	try {
		const response = await axios(`${POKEMON_API_BASE_URL}/${param}`);
		const data = await response.data;

		const currentPokemon: IPokemonData = {
			id: data.id,
			name: data.name,
		};
		return { ...currentPokemon };
	} catch (error) {
		throw new Error("Pokemon not found");
	}
};

function getTypes(types: any[]) {
	const result: string[] = [];
	types.forEach(type => {
		result.push(type?.type?.name);
	});
	return result;
}

function getStats(stats: any[]) {
	const result: IStatData = {
		hp: 0,
		attack: 0,
		defense: 0,
		spAtk: 0,
		spDef: 0,
		speed: 0,
	};
	stats.forEach(stat => {
		switch (stat.stat.name) {
			case "hp":
				result.hp = stat.base_stat;
				break;
			case "attack":
				result.attack = stat.base_stat;
				break;
			case "defense":
				result.defense = stat.base_stat;
				break;
			case "special-attack":
				result.spAtk = stat.base_stat;
				break;
			case "special-defense":
				result.spDef = stat.base_stat;
				break;
			case "speed":
				result.speed = stat.base_stat;
				break;
			default:
				break;
		}
	});
	return result;
}
