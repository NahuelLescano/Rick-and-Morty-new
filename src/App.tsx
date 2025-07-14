import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Characters } from "@/characters/Characters";
import { NavBar } from "@/NavBar/NavBar";
import { Footer } from "@/Footer/Footer";
import { About } from "@/about/About";
import { useCharacterFetch } from "@/characters/hooks/useCharacterFetch";
import "./App.css";

function App() {
    const { characters } = useCharacterFetch({ url: "https://rickandmortyapi.com/api/character" });

    return (
        <div className="min-h-screen flex flex-col">
            <NavBar />
            <main className="flex-1">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Characters characters={characters} />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/favorites" element={<h1>Favorites Page</h1>} />
                        <Route path="/detail/:id" element={<h1>Detail Page</h1>} />
                    </Routes>
                </BrowserRouter>
            </main>
            <Footer />
        </div>
    );
}

export default App;
