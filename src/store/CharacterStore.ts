import { create } from "zustand";
import type { Character } from "@/types";
import {
  getCharacters,
  getCharacterById,
  getCharactersByPage,
  getCharacterByNameAndPage,
  getCharactersByFilter,
  getCharactersByNameAndFilter,
} from "@/services";
import { parsedCharacters } from "./utils";

interface CharacterStore {
  currentPage: number;
  totalPages: number;
  loading: boolean;
  searchCharacter: string | null;
  allCharacters: Character[];
  filters: { status?: string; species?: string; gender?: string };
  setAllCharacters: () => Promise<void>;
  fetchCharacterById: (id: number) => Promise<void>;
  selectCharacterById: (id: number) => Character | undefined;
  getPage: (page: number) => Promise<void>;
  findCharacterByName: (name: string) => Promise<void>;
  clearSearch: () => void;
  setFilters: (partial: {
    status?: string;
    species?: string;
    gender?: string;
  }) => Promise<void>;
  clearFilters: () => Promise<void>;
}

/**
 * Store for managing character data, pagination, search, and filters.
 * Provides methods to fetch and manipulate character data from the API.
 * @returns {CharacterStore} The character store instance.
 */
export const useCharacterStore = create<CharacterStore>((set, get) => {
  // Helper function to check if filters are active
  const hasActiveFilters = (filters: { status?: string; species?: string; gender?: string }) => {
    return (
      (filters.status && filters.status.trim().length > 0) ||
      (filters.species && filters.species.trim().length > 0) ||
      (filters.gender && filters.gender.trim().length > 0)
    );
  };

  // Helper function to update characters state
  const updateCharactersState = (
    data: any,
    page: number,
    searchName: string | null = null
  ) => {
    const parsedData = parsedCharacters(data);
    set(() => ({
      allCharacters: parsedData,
      currentPage: page,
      totalPages: data.info.pages,
      searchCharacter: searchName,
      loading: false,
    }));
  };

  // Helper function to handle API errors
  const handleError = (error: any, page: number, searchName: string | null = null) => {
    const is404 = error?.response?.status === 404;
    set(() => ({
      allCharacters: [],
      currentPage: page,
      totalPages: is404 ? 0 : get().totalPages,
      searchCharacter: searchName,
      loading: false,
    }));
  };

  // Centralized function to fetch characters based on current state
  const fetchCharacters = async (page: number, name?: string) => {
    set(() => ({ loading: true }));

    const searchName = name ?? get().searchCharacter;
    const filters = get().filters;
    const hasFilters = hasActiveFilters(filters);
    const hasName = searchName && searchName.trim().length > 0;

    try {
      let call;

      // Determine which API call to make based on current state
      if (hasName && hasFilters) {
        call = getCharactersByNameAndFilter({
          name: searchName,
          status: filters.status,
          species: filters.species,
          gender: filters.gender,
          page,
        }).call;
      } else if (hasName) {
        call = getCharacterByNameAndPage(searchName, page).call;
      } else if (hasFilters) {
        call = getCharactersByFilter({
          status: filters.status,
          species: filters.species,
          gender: filters.gender,
          page,
        }).call;
      } else {
        call = getCharactersByPage(page).call;
      }

      const { data } = await call;
      updateCharactersState(data, page, hasName ? searchName : null);
    } catch (error: any) {
      handleError(error, page, hasName ? searchName : null);
    }
  };

  return {
    allCharacters: [],
    currentPage: 1,
    totalPages: 0,
    loading: false,
    searchCharacter: null,
    filters: {},
    
    setAllCharacters: async () => {
      set(() => ({ loading: true }));
      const { call } = getCharacters();
      const { data } = await call;
      updateCharactersState(data, 1);
    },

    fetchCharacterById: async (id: number) => {
      set(() => ({ loading: true }));
      const { call } = getCharacterById(id);
      const { data } = await call;
      set((state) => {
        const exists = state.allCharacters.some((c) => c.id === data.id);
        return {
          allCharacters: exists
            ? state.allCharacters
            : [...state.allCharacters, data],
          loading: false,
        };
      });
    },

    selectCharacterById: (id: number) => {
      return get().allCharacters.find((character) => character.id === id);
    },

    getPage: async (page: number) => {
      await fetchCharacters(page);
    },

    findCharacterByName: async (name: string) => {
      await fetchCharacters(1, name);
    },

    clearSearch: () => {
      set(() => ({ searchCharacter: null, loading: false }));
    },

    setFilters: async (partial: { status?: string; species?: string; gender?: string }) => {
      const next = { ...get().filters, ...partial };
      set(() => ({ filters: next }));
      await fetchCharacters(1);
    },

    clearFilters: async () => {
      set(() => ({ filters: {} }));
      await fetchCharacters(1);
    },
  };
});
