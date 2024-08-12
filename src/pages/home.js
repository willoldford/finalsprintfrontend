import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import AnimeCard from "../components/animecard";

function Home() {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchAnime();
  }, []);

  const fetchAnime = (query = "") => {
    setLoading(true);

    const url = query
      ? `http://localhost:8080/anime/search?keyword=${query}`
      : "http://localhost:8080/anime/getAll";

    axios
      .get(url)
      .then((response) => {
        setAnimeList(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching anime data:", error);
        setLoading(false);
      });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    fetchAnime(searchQuery);
  };

  const handleShowAll = () => {
    setSearchQuery("");
    fetchAnime();
  };

  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-bold text-center my-8">Anime List</h1>
      <div className="text-center my-8">
        <form onSubmit={handleSearch} className="flex justify-center">
          <input
            type="text"
            placeholder="Search anime by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-300 rounded-l-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-r-lg px-4 py-2 hover:bg-blue-600"
          >
            Search
          </button>
        </form>

        <button
          onClick={handleShowAll}
          className="m-4 bg-gray-500 text-white rounded-lg px-4 py-2 hover:bg-gray-600"
        >
          Show All
        </button>
      </div>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
          {animeList.map((anime, index) => (
            <AnimeCard
              key={index}
              name={anime.name}
              category={anime.category}
              rating={anime.rating}
              episodes={anime.episodes}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
