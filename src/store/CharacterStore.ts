import { create } from "zustand";
import type { Character, RickAndMortyApiResponse } from "@/types";
import {
  getCharacters,
  getCharacterById,
  getCharactersByPage,
} from "@/services";

interface CharacterStore {
  allCharacters: Character[];
  setAllCharacters: () => Promise<void>;
  fetchCharacterById: (id: number) => Promise<void>;
  selectCharacterById: (id: number) => Character | undefined;
  getPage: (page: number) => Promise<void>;
  currentPage: number;
  totalPages: number;
}

const parsedCharacters = (data: RickAndMortyApiResponse): Character[] => {
  const parsedCharacters: Character[] = data.results.map((char) => ({
    id: char.id,
    name: char.name,
    status: char.status,
    species: char.species,
    type: char.type,
    gender: char.gender,
    origin: {
      name: char.origin.name,
      url: char.origin.url,
    },
    location: {
      name: char.location.name,
      url: char.location.url,
    },
    image: char.image,
  }));

  return parsedCharacters;
};

export const useCharacterStore = create<CharacterStore>((set, get) => ({
  allCharacters: [],
  currentPage: 1,
  totalPages: 0,
  setAllCharacters: async () => {
    const { call } = getCharacters();
    const { data } = await call;

    const parsedData = parsedCharacters(data);
    set(() => ({
      allCharacters: parsedData,
      currentPage: 1,
      totalPages: data.info.pages,
    }));
  },
  fetchCharacterById: async (id: number) => {
    const { call } = getCharacterById(id);
    const { data } = await call;
    set((state) => {
      const exists = state.allCharacters.some((c) => c.id === data.id);
      return {
        allCharacters: exists
          ? state.allCharacters
          : [...state.allCharacters, data],
      };
    });
  },
  selectCharacterById: (id: number) => {
    return get().allCharacters.find((character) => character.id === id);
  },
  getPage: async (page: number) => {
    const { call } = getCharactersByPage(page);
    const { data } = await call;

    const parsedData = parsedCharacters(data);
    set(() => ({
      allCharacters: parsedData,
      currentPage: page,
      totalPages: data.info.pages,
    }));
  },
}));
