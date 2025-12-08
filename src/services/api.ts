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

export const getCharacterByName = (
  name: string,
): UseApiCall<RickAndMortyApiResponse> => {
  const controller = loadAbort();

  return {
    call: axios.get(`${API_URL}?name=${name}`, { signal: controller.signal }),
    controller,
  };
};

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
