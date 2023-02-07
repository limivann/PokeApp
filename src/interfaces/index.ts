export interface IPokemonData {
	id?: number;
	name?: string;
	imgUrl?: string;
	types?: string[];
	stats?: IStatData;
}

export interface IStatData {
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
