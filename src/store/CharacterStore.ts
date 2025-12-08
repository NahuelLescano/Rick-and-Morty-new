import { create } from "zustand";
import type { Character } from "@/types";
import {
  getCharacters,
  getCharacterById,
  getCharactersByPage,
  getCharacterByName,
  getCharacterByNameAndPage,
  getCharactersByFilter,
} from "@/services";
import { parsedCharacters } from "./utils";

interface CharacterStore {
  currentPage: number;
  totalPages: number;
  loading: boolean;
  searchCharacter: string | null;
  allCharacters: Character[];
  filters: { status?: string; gender?: string };
  setAllCharacters: () => Promise<void>;
  fetchCharacterById: (id: number) => Promise<void>;
  selectCharacterById: (id: number) => Character | undefined;
  getPage: (page: number) => Promise<void>;
  findCharacterByName: (name: string) => Promise<void>;
  clearSearch: () => void;
  setFilters: (partial: { status?: string; gender?: string }) => Promise<void>;
  clearFilters: () => Promise<void>;
}

export const useCharacterStore = create<CharacterStore>((set, get) => ({
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

    const parsedData = parsedCharacters(data);
    set(() => ({
      allCharacters: parsedData,
      currentPage: 1,
      totalPages: data.info.pages,
      loading: false,
    }));
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
      };
    });
  },
  selectCharacterById: (id: number) => {
    return get().allCharacters.find((character) => character.id === id);
  },
  getPage: async (page: number) => {
    set(() => ({ loading: true }));

    const name = get().searchCharacter;
    const { status, gender } = get().filters ?? {};
    if (name && name.trim().length > 0) {
      const { call } = getCharacterByNameAndPage(name, page);
      const { data } = await call;
      const parsedData = parsedCharacters(data);
      set(() => ({
        allCharacters: parsedData,
        currentPage: page,
        totalPages: data.info.pages,
        searchCharacter: name,
        loading: false,
      }));
      return;
    }

    // If filters are set, use filtered query
    if ((status && status.trim().length > 0) || (gender && gender.trim().length > 0)) {
      const { call } = getCharactersByFilter({ status, gender, page });
      const { data } = await call;
      const parsedData = parsedCharacters(data);
      set(() => ({
        allCharacters: parsedData,
        currentPage: page,
        totalPages: data.info.pages,
        searchCharacter: null,
        loading: false,
      }));
      return;
    }

    const { call } = getCharactersByPage(page);
    const { data } = await call;

    const parsedData = parsedCharacters(data);
    set(() => ({
      allCharacters: parsedData,
      currentPage: page,
      totalPages: data.info.pages,
      searchCharacter: null,
      loading: false,
    }));
  },
  findCharacterByName: async (name: string) => {
    set(() => ({ loading: true }));

    const { call } = getCharacterByName(name);
    const { data } = await call;

    const parsedData = parsedCharacters(data);
    set(() => ({
      allCharacters: parsedData,
      currentPage: 1,
      totalPages: data.info.pages,
      searchCharacter: name,
      loading: false,
    }));
  },
  clearSearch: () => {
    set(() => ({ searchCharacter: null, loading: false }));
  },
  setFilters: async (partial: { status?: string; gender?: string }) => {
    const next = { ...get().filters, ...partial };
    set(() => ({ filters: next }));
    await get().getPage(1);
  },
  clearFilters: async () => {
    set(() => ({ filters: {} }));
    await get().getPage(1);
  },
  findCharacterByFilter: async (status?: string, species?: string) => {
    set(() => ({ loading: true }));

    const { call } = getCharactersByFilter({ status, species });
    const { data } = await call;

    const parsedData = parsedCharacters(data);
    set(() => ({
      allCharacters: parsedData,
      currentPage: 1,
      totalPages: data.info.pages,
      searchCharacter: null,
      loading: false,
    }));
  },
}));
