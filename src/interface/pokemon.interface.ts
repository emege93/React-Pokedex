export interface PokemonResponse {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonDetails {
  abilities: Ability[];
  base_experience: number;
  forms: Form[];
  game_indices: GameIndex[];
  height: number;
  held_items: HeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

export interface Ability {
  ability: AbilityName;
  is_hidden: boolean;
  slot: number;
}

export interface AbilityName {
  name: string;
  url: string;
}

export interface Form {
  name: string;
  url: string;
}

export interface GameIndex {
  game_index: number;
  version: Version;
}

export interface Version {
  name: string;
  url: string;
}

export interface HeldItem {
  item: Item;
  version_details: VersionDetail[];
}

export interface Item {
  name: string;
  url: string;
}

export interface VersionDetail {
  rarity: number;
  version: Version;
}

export interface LocationAreaEncounter {
  location_area: LocationArea;
  version_details: VersionDetail[];
}

export interface LocationArea {
  name: string;
  url: string;
}

export interface Move {
  move: MoveName;
  version_group_details: any[];
}

export interface MoveName {
  name: string;
  url: string;
}

export interface VersionGroupDetail {
  level_learned_at: number;
}

export interface Species {
  name: string;
  url: string;
}

export interface Sprites {
  front_default: string;
  other: SpritesOther;
}

export interface SpritesOther {
  dream_world: {
    front_default: string;
  };
  "official-artwork": {
    front_default: string;
  };
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: StatName;
}

export interface StatName {
  name: string;
  url: string;
}

export interface Type {
  slot: number;
  type: TypeName;
}

export interface TypeName {
  name: string;
  url: string;
}

export interface PostType {
  name: string;
  url: string;
}

export interface PokemonInfo {
  id: number;
  name: string;
  height: number;
  weight: number;
  abilities: String[];
  types: String[];
  forms: String[];
  stats: { name: string; value: number }[];
}
