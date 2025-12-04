import { useState } from "react";
import { useCharacterStore } from "@/store/CharacterStore";

export const NavBar = () => {
  const [value, setValue] = useState("");
  const findCharacterByName = useCharacterStore((state) => state.findCharacterByName);
  const getPage = useCharacterStore((state) => state.getPage);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = value.trim();
    if (q.length === 0) {
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
          <button className="px-4 py-2 bg-blue-600 text-white rounded" type="submit">
            Buscar
          </button>
        </form>
      </section>
    </nav>
  );
};
