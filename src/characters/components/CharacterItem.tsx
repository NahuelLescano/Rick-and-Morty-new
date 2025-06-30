import type { Character } from "@/types";

export const CharacterItem = (
    { name, status, species, image }: Pick<Character, "name" | "status" | "species" | "image">
) => {

    return (
        <section className="mt-8">
            <h2>Name: {name}</h2>
            <img src={image} alt={`${name}'s image`} />
            <h2>Status: {status}</h2>
            <h2>Species: {species}</h2>
        </section>
    );
}

