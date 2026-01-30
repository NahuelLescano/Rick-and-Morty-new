import { BrowserRouter, Route } from "react-router-dom";
import { Suspense } from "react";
import { RoutesNotFound } from "@/RoutesNotFound";
import { Characters, CharacterDetail } from "@/characters";
import { Loading } from "@/Globals";
import { About } from "@/About";
import { NavBar } from "@/NavBar";
import { Favorites } from "@/Favorites";

export const AppRouter = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <NavBar />
        <RoutesNotFound>
          <Route path="/" element={<Characters />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<CharacterDetail />} />
          <Route path="/favorites" element={<Favorites />} />
        </RoutesNotFound>
      </BrowserRouter>
    </Suspense>
  );
};
