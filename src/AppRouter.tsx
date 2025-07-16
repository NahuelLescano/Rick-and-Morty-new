import { BrowserRouter, Route } from "react-router-dom";
import { Characters } from "@/characters/Characters";
import { CharacterDetail } from "@/characters/components/CharacterDetail";
import { About } from "@/about/About";
import { RoutesNotFound } from "./RoutesNotFound/RoutesNotFound";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <RoutesNotFound>
                <Route path="/" element={<Characters />} />
                <Route path="/about" element={<About />} />
                <Route path="/favorites" element={<h1>Favorites Page</h1>} />
                <Route path="/detail/:id" element={<CharacterDetail />} />
            </RoutesNotFound>
        </BrowserRouter>
    );
}
