import { useCharacterStore } from "@/store";
import { CommonButton } from "../CommonButton";
import type { ChangeEvent } from "react";

export const Filters = () => {
  const status = useCharacterStore((s) => s.filters.status);
  const gender = useCharacterStore((s) => s.filters.gender);
  const species = useCharacterStore((s) => s.filters.species);
  const setFilters = useCharacterStore((s) => s.setFilters);
  const clearFilters = useCharacterStore((s) => s.clearFilters);

  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters({ [name]: value || undefined });
  };

  const hasActiveFilters = Boolean(
    (status && status.trim().length > 0) ||
    (species && species.trim().length > 0) ||
    (gender && gender.trim().length > 0),
  );

  return (
    <section className="flex flex-col md:flex-row gap-3 items-center">
      <select
        className="border p-2 rounded-md bg-gray-600 text-white"
        value={status ?? ""}
        name="status"
        onChange={handleFilterChange}
      >
        <option disabled value="">All status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>

      <select
        className="border p-2 rounded-md bg-gray-600 text-white"
        value={gender ?? ""}
        name="gender"
        onChange={handleFilterChange}
      >
        <option disabled value="">All gender</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>

      <select
        className="border p-2 rounded-md bg-gray-600 text-white"
        value={species ?? ""}
        name="species"
        onChange={handleFilterChange}
      >
        <option disabled value="">All species</option>
        <option value="human">Human</option>
        <option value="alien">Alien</option>
        <option value="humanoid">Humanoid</option>
        <option value="poopybutthole">Poopybutthole</option>
        <option value="mythological">Mythological Creature</option>
        <option value="robot">Robot</option>
        <option value="cronenberg">Cronenberg</option>
        <option value="animal">Animal</option>
        <option value="unknown">Unknown</option>
      </select>

      <CommonButton
        className={`px-4 py-2 transition-all ${hasActiveFilters ? "hover:scale-110" : "disabled:bg-gray-600 disabled:opacity-60 disabled:cursor-not-allowed"}`}
        onClick={() => hasActiveFilters && clearFilters()}
        disabled={!hasActiveFilters}
      >
        Limpiar filtros
      </CommonButton>
    </section>
  );
};
