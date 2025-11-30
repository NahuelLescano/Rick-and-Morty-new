import { create } from "zustand";
import type { Character, RickAndMortyApiResponse } from "@/types";
import { getCharacters, getCharacterById as apiGetCharacterById } from "@/services/api";

interface CharacterStore {
    allCharacters: Character[];
    setAllCharacters: () => Promise<void>;
    fetchCharacterById: (id: number) => Promise<void>;
    selectCharacterById: (id: number) => Character | undefined;
    searchCharacters: (query: string) => Character[] | undefined;
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
    setAllCharacters: async () => {
        const { call } = getCharacters();
        const { data } = await call;

        const parsedData = parsedCharacters(data);
        set({ allCharacters: parsedData });
    },
    fetchCharacterById: async (id: number) => {
        const { call } = apiGetCharacterById(id);
        const { data } = await call; // data: Character
        set((state) => {
            const exists = state.allCharacters.some((c) => c.id === data.id);
            return { allCharacters: exists ? state.allCharacters : [...state.allCharacters, data] };
        });
    },
    selectCharacterById: (id: number) => {
        return get().allCharacters.find((character) => character.id === id);
    },
    searchCharacters: (query: string) => {
        if (!query) return undefined;

        const lowerCaseQuery = query.toLowerCase();
        return get().allCharacters.filter((character) =>
            character.name.toLowerCase().includes(lowerCaseQuery),
        );
    },
}));
