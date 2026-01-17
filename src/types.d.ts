export interface Location {
  name: string;
  url: string;
}

interface BaseCharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type?: string;
  gender: string;
  image: string;
}

export interface ApiCharacter extends BaseCharacter {
  url: string;
  episode: string[];
  created: string;
  origin: Location;
  location: Location;
}

export interface Character extends BaseCharacter {
  episode: string;
  origin: string
  location: string
}

export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface RickAndMortyApiResponse {
  info: Info;
  results: ApiCharacter[];
}
