import { create } from "zustand";
import type { Character, RickAndMortyApiResponse } from "@/types";
import { getCharacters } from "@/services/api";

interface CharacterStore {
    allCharacters: Character[];
    setAllCharacters: () => Promise<void>;
    getCharacterById: (id: number) => Character | undefined;
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
    getCharacterById: (id: number) => {
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
