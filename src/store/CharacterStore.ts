import { create } from "zustand";
import type { Character } from "@/types";
import {
	getCharacters,
	getCharacterById,
	getCharactersByPage,
  getCharacterByName,
} from "@/services";
import { parsedCharacters } from "./utils";

interface CharacterStore {
	currentPage: number;
	totalPages: number;
	searchCharacter?: string;
	allCharacters: Character[];
	setAllCharacters: () => Promise<void>;
	fetchCharacterById: (id: number) => Promise<void>;
	selectCharacterById: (id: number) => Character | undefined;
	getPage: (page: number) => Promise<void>;
	findCharacterByName: (name: string) => Promise<void>;
}

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
			searchCharacter: undefined,
		}));
	},
	findCharacterByName: async (name: string) => {
    const { call } = getCharacterByName(name);
    const { data } = await call;

    const parsedData = parsedCharacters(data);
    set(() => ({
      allCharacters: parsedData,
      currentPage: 1,
      totalPages: data.info.pages,
      searchCharacter: name,
    }));
	},
}));
