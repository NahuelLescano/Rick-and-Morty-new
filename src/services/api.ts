import axios from "axios";
import { API_URL } from "@/config";
import type { UseApiCall } from "@/model";
import type { Character, RickAndMortyApiResponse } from "@/types";

const loadAbort = (): AbortController => {
  return new AbortController();
};

export const getCharacters = (): UseApiCall<RickAndMortyApiResponse> => {
  const controller = loadAbort();

  return {
    call: axios.get(API_URL, { signal: controller.signal }),
    controller,
  };
};

export const getCharacterById = (id: number): UseApiCall<Character> => {
  const controller = loadAbort();

  return {
    call: axios.get(`${API_URL}/${id}`, { signal: controller.signal }),
    controller,
  };
};

export const getCharactersByPage = (
  page: number,
): UseApiCall<RickAndMortyApiResponse> => {
  const controller = loadAbort();

  return {
    call: axios.get(`${API_URL}?page=${page}`, { signal: controller.signal }),
    controller,
  };
};
