import "./App.css";
import { Characters } from "@/characters/Characters";
import { useCharacterFetch } from "@/characters/hooks/useCharacterFetch";

function App() {
    const { characters } = useCharacterFetch({ url: "https://rickandmortyapi.com/api/character" });

    return (
        <>
            <h2>NavBar</h2>
            <Characters characters={characters} />
            <h2>Footer</h2>
        </>
    );
}

export default App;
