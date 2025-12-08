import type { RickAndMortyApiResponse, Character } from "@/types";

/**
 * Parses the character data from the Rick and Morty API response.
 * @param {RickAndMortyApiResponse} data - The API response containing character data.
 * @returns {Character[]} An array of parsed Character objects.
 */
export const parsedCharacters = (
  data: RickAndMortyApiResponse,
): Character[] => {
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
