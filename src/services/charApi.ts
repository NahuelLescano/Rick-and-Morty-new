import axios from "axios";
import { API_URL } from "@/config";
import type { UseApiCall } from "@/model";
import type { Character, RickAndMortyApiResponse } from "@/types";

const loadAbort = (): AbortController => {
  return new AbortController();
};

/**
 * Fetches all characters from the Rick and Morty API.
 * @returns {UseApiCall<RickAndMortyApiResponse>} An object containing the API call promise and the abort controller.
 */
export const getCharacters = (): UseApiCall<RickAndMortyApiResponse> => {
  const controller = loadAbort();

  return {
    call: axios.get(API_URL, { signal: controller.signal }),
    controller,
  };
};

/**
 * Fetches a character by its ID from the Rick and Morty API.
 * @param {number} id - The ID of the character to fetch.
 * @returns {UseApiCall<Character>} An object containing the API call promise and the abort controller.
 */
export const getCharacterById = (id: number): UseApiCall<Character> => {
  const controller = loadAbort();

  return {
    call: axios.get(`${API_URL}/${id}`, { signal: controller.signal }),
    controller,
  };
};

/**
 * Fetches characters by page number from the Rick and Morty API.
 * @param {number} page - The page number to fetch.
 * @returns {UseApiCall<RickAndMortyApiResponse>} An object containing the API call promise and the abort controller.
 */
export const getCharactersByPage = (
  page: number,
): UseApiCall<RickAndMortyApiResponse> => {
  const controller = loadAbort();

  return {
    call: axios.get(`${API_URL}?page=${page}`, { signal: controller.signal }),
    controller,
  };
};

/**
 * Fetches characters by name from the Rick and Morty API.
 * @param {string} name - The name of the character to search for.
 * @returns {UseApiCall<RickAndMortyApiResponse>} An object containing the API call promise and the abort controller.
 */
export const getCharacterByName = (
  name: string,
): UseApiCall<RickAndMortyApiResponse> => {
  const controller = loadAbort();

  return {
    call: axios.get(`${API_URL}?name=${name}`, { signal: controller.signal }),
    controller,
  };
};

/**
 * Fetches characters by name and page number from the Rick and Morty API.
 * @param {string} name - The name of the character to search for.
 * @param {number} page - The page number to fetch.
 * @returns {UseApiCall<RickAndMortyApiResponse>} An object containing the API call promise and the abort controller.
 */
export const getCharacterByNameAndPage = (
  name: string,
  page: number,
): UseApiCall<RickAndMortyApiResponse> => {
  const controller = loadAbort();

  return {
    call: axios.get(`${API_URL}?name=${name}&page=${page}`, {
      signal: controller.signal,
    }),
    controller,
  };
};

/**
 * Fetches characters by name with optional filters and page.
 * @param {Object} params - The parameters for the API call.
 * @param {string} params.name - The name of the character to search for.
 * @param {string} [params.status] - The status filter (e.g., "alive", "dead", "unknown").
 * @param {string} [params.species] - The species filter (e.g., "human", "alien").
 * @param {string} [params.gender] - The gender filter (e.g., "male", "female").
 * @param {number} [params.page] - The page number to fetch.
 * @returns {UseApiCall<RickAndMortyApiResponse>} An object containing the API call promise and the abort controller.
 */
export const getCharactersByNameAndFilter = ({
  name,
  status,
  species,
  gender,
  page,
}: {
  name: string;
  status?: string;
  species?: string;
  gender?: string;
  page?: number;
}): UseApiCall<RickAndMortyApiResponse> => {
  const controller = loadAbort();
  const query = new URLSearchParams();
  if (name && name.trim().length > 0) query.set("name", name);
  if (page && page > 0) query.set("page", String(page));
  if (status && status.trim().length > 0) query.set("status", status);
  if (species && species.trim().length > 0) query.set("species", species);
  if (gender && gender.trim().length > 0) query.set("gender", gender);

  return {
    call: axios.get(`${API_URL}?${query.toString()}`, {
      signal: controller.signal,
    }),
    controller,
  };
};

/**
 * Fetches characters by applying filters such as status, species
 * and gender from the Rick and Morty API.
 * @param {Object} filters - The filters to apply.
 * @param {string} [filters.status] - The status filter (e.g., "alive", "dead", "unknown").
 * @param {string} [filters.species] - The species filter (e.g., "human", "alien").
 * @param {string} [filters.gender] - The gender filter (e.g., "male", "female", "genderless", "unknown").
 * @param {number} [filters.page] - The page number to fetch.
 * @returns {UseApiCall<RickAndMortyApiResponse>} An object containing the API call promise and the abort controller.
 */
export const getCharactersByFilter = ({
  status,
  species,
  gender,
  page,
}: {
  status?: string;
  species?: string;
  gender?: string;
  page?: number;
}): UseApiCall<RickAndMortyApiResponse> => {
  const controller = loadAbort();
  const query = new URLSearchParams();
  if (page && page > 0) query.set("page", String(page));
  if (status && status.trim().length > 0) query.set("status", status);
  if (species && species.trim().length > 0) query.set("species", species);
  if (gender && gender.trim().length > 0) query.set("gender", gender);

  return {
    call: axios.get(`${API_URL}?${query.toString()}`, {
      signal: controller.signal,
    }),
    controller,
  };
};
