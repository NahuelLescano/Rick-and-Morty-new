import type { RickAndMortyApiResponse, Character } from "@/types";

const parsedEpisode = (episodes: string[]): string => {
  return episodes
    .map((episode) => {
      const parts = episode.split("/");
      return parts[parts.length - 1];
    })
    .join(", ");
};

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
    origin: char.origin.name,
    location: char.location.name,
    image: char.image,
    episode: parsedEpisode(char.episode),
  }));

  return parsedCharacters;
};
