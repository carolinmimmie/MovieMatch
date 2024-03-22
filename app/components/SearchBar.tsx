import { ChangeEvent, FormEvent, useState } from "react";

interface SearchBarProps {
  // Funktionen för att hantera sökningar skickas som en prop till SearchBar.
  handleSearch: (query: string) => void;
}

const SearchBar = ({ handleSearch }: SearchBarProps) => {
  // Tillståndet för söktermen.
  const [query, setQuery] = useState("");

  // Hantera ändringar i sökfältet.
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Uppdatera tillståndet med den nya söktermen.
    setQuery(e.target.value);
  };

  // Hantera formulärsubmit.
  const handleSubmit = (e: FormEvent) => {
    // Förhindra standardbeteendet för formuläret.
    e.preventDefault();
    // Anropa handleSearch-funktionen med den aktuella söktermen.
    handleSearch(query);
  };

  return (
    // Rendera sökfältet med en knapp för att skicka in sökningen.
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-screen max-w-3xl"
    >
      <input
        type="text"
        // Hantera ändringar i sökfältet.
        value={query}
        onChange={handleChange}
        className="border border-gray-300 rounded-1 py-2 px-4 w-full focus:outline:none focus:border-blue-500"
      />
      <button
        type="submit"
        className="bg-red-600 text-white py-2 px-6 rounded-r hover:bg-blue-600 focus:outline-none"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
