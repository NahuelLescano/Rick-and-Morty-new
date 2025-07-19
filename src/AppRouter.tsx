import { BrowserRouter, Route } from "react-router-dom";
import { Characters } from "@/characters/Characters";
import { CharacterDetail } from "@/characters/components/CharacterDetail";
import { About } from "@/About/About";
import { RoutesNotFound } from "./RoutesNotFound/RoutesNotFound";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <RoutesNotFound>
                <Route path="/" element={<Characters />} />
                <Route path="/about" element={<About />} />
                <Route path="/detail/:id" element={<CharacterDetail />} />
            </RoutesNotFound>
        </BrowserRouter>
    );
}
