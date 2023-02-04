export interface PokemonData {
	id?: number;
	name?: string;
	imgUrl?: string;
	types?: string[];
	stats?: StatData;
}

export interface StatData {
	hp: number;
	attack: number;
	defense: number;
	spAtk: number;
	spDef: number;
	speed: number;
}

export interface IShortPokemonData {
	name: string;
	id: number;
}
