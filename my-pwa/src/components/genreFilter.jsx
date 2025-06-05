import React, { useRef } from "react";

function GenreFilter({ allGenres, selectedGenre, setSelectedGenre, showGenreMenu, setShowGenreMenu }) {
  const genreButtonRef = useRef();

  return (
    <div className="relative">
      <button
        ref={genreButtonRef}
        onClick={() => setShowGenreMenu((v) => !v)}
        aria-haspopup="true"
        aria-expanded={showGenreMenu}
        aria-controls="genre-menu"
        id="filter"
        className="text-white w-15 text-center rounded-2xl transition-colors ease-in-out bg-graytext mb-2"
      >
        {selectedGenre === "All" ? "All Genres" : selectedGenre}
      </button>
      {showGenreMenu && (
        <div
          id="genre-menu"
          className="absolute left-0 top-12 z-50 w-40 bg-white dark:bg-dark border border-gray-300 rounded-xl shadow-lg flex flex-col"
        >
          <button
            className={`px-4 py-2 text-left rounded-t-xl ${selectedGenre === "All" ? "bg-accent text-white" : ""}`}
            onClick={() => {
              setSelectedGenre("All");
              setShowGenreMenu(false);
              genreButtonRef.current?.focus();
            }}
          >
            All
          </button>
          {allGenres.map((genre, idx) => (
            <button
              key={genre}
              className={`px-4 py-2 text-left ${idx === allGenres.length - 1 ? "rounded-b-xl" : ""} ${selectedGenre === genre ? "bg-accent text-white" : ""}`}
              onClick={() => {
                setSelectedGenre(genre);
                setShowGenreMenu(false);
                genreButtonRef.current?.focus();
              }}
            >
              {genre}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default GenreFilter;