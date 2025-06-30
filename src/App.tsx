import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Characters } from "@/characters/Characters";
import { NavBar } from "@/NavBar/NavBar";
import { Footer } from "@/Footer/Footer";
import { useCharacterFetch } from "@/characters/hooks/useCharacterFetch";
import "./App.css";

function App() {
    const { characters } = useCharacterFetch({ url: "https://rickandmortyapi.com/api/character" });

    return (
        <>
            <NavBar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Characters characters={characters} />} />
                    <Route path="/about" element={<h1>About Page</h1>} />
                    <Route path="/favorites" element={<h1>Favorites Page</h1>} />
                    <Route path="/detail/:id" element={<h1>Detail Page</h1>} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
