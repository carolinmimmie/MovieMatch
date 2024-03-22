"use client";
import { useState } from "react";
import React from "react";
import { searchMovies } from "../services/movie.service";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

const MovieSearch = () => {
  // movies är ett tillstånd som håller en array av filmer, initialt tom.
  const [movies, setMovies] = useState<Movie[]>([]);

  // När användaren utför en sökning med handleSearch, anropas searchMovies
  // för att hämta filmer baserat på söktermen.
  const handleSearch = async (query: string) => {
    // När resultaten returneras, uppdateras movies-tillståndet med de nya filmerna
    // genom setMovies(results).
    // Detta orsakar en omrendering av komponenten och visar de nya filmerna på sidan.
    const results = await searchMovies(query);
    setMovies(results);
  };
  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
        {movies.map((movie: Movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            overview={""}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;
