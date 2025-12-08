import { useState, type FormEvent } from "react";
import { useCharacterStore } from "@/store/CharacterStore";
import { CommonButton } from "../CommonButton";

export const NavBar = () => {
  const [value, setValue] = useState("");
  const findCharacterByName = useCharacterStore(
    (state) => state.findCharacterByName,
  );
  const getPage = useCharacterStore((state) => state.getPage);
  const clearSearch = useCharacterStore((state) => state.clearSearch);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = value.trim();
    if (q.length === 0) {
      clearSearch();
      getPage(1);
    } else {
      findCharacterByName(q);
    }
  };

  return (
    <nav className="top-0 w-full fixed p-4 flex justify-between items-center bg-transparent border-b border-white/20 backdrop-blur-md z-50">
      <ul className="flex gap-8">
        <li>
          <a href="/" className="hover:underline">
            Rick and Morty
          </a>
        </li>
        <li>
          <a href="/about" className="hover:underline">
            About
          </a>
        </li>
      </ul>
      <section className="flex-1 max-w-md">
        <form className="flex gap-2" onSubmit={onSubmit}>
          <input
            placeholder="Qué personaje buscamos?"
            className="flex-1 px-3 py-2 border rounded"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <CommonButton
            ariaLabel="Buscar personaje"
            className="px-2 py-2 hover:scale-110 transition-all"
            type="submit"
          >
            <p className="font-bold">Buscar</p>
          </CommonButton>
        </form>
      </section>
    </nav>
  );
};
