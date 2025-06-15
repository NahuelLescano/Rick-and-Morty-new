import type { Character, RickAndMortyApiResponse } from "@/types";
import { useEffect, useState } from "react";

const parsedCharacters = (data: RickAndMortyApiResponse ) => {
    const parsedCharacters: Character[] = data.results.map((char) => ({
        id: char.id,
        name: char.name,
        status: char.status,
        species: char.species,
        type: char.type,
        gender: char.gender,
        origin: {
            name: char.origin.name,
            url: char.origin.url
        },
        location: {
            name: char.location.name,
            url: char.location.url
        },
        image: char.image
    }));

    return parsedCharacters;
}

export const useCharacterFetch = ({ url }: { url: string }) => {
    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error(`Could not fetch characters. Status: ${response.status}`);
            }

            const jsonData: RickAndMortyApiResponse = await response.json();

            setCharacters(parsedCharacters(jsonData));
        }
        fetchCharacters();
    }, []);

    return { characters };
}
