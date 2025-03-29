import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value); // Déclenche la mise à jour des résultats
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="relative flex items-center w-full">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          className="block w-full p-2.5 text-sm border-b-2 border-gray-300 focus:outline-none  mr-12"
          placeholder="Rechercher ici..."
        />
        <button
          type="submit"
          className="absolute right-0 px-3 py-3 text-white bg-[#5B9F21] rounded-lg"
        >
          <FaSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
