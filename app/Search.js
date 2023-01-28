"use client";

import { useRouter } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";
import SearchResults from "./SearchResults";

const Search = ({}) => {
  const inputValue = useRef();

  const [movieDetails, setMovieDetails] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleError = (code) => {
    setError(code);
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => setError(""), 3000);
    }
  }, [error]);

  const handleForm = async (e) => {
    setMovieDetails([]);
    e.preventDefault();
    setLoading(true);
    //input value
    const keyword = inputValue.current.value;
    try {
      const movie_details = await fetch(`/api/searchMovie`, {
        body: JSON.stringify(keyword),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const results = await movie_details.json();
      if (results.error) return handleError(results.error);
      setMovieDetails(results.success.results);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      throw new Error("No Results");
    } finally {
      setLoading((prevState) => prevState == true && false);
    }
  };
  return (
    <div className="text-white w-full flex flex-col justify-center items-center">
      <form onSubmit={handleForm} className="w-full">
        <div className="flex gap-x-2 w-full justify-center">
          <input
            ref={inputValue}
            placeholder="Search for any movie"
            type="search"
            className="p-3 rounded-lg outline-none text-slate-900 text-md w-full cursor-pointer max-w-lg"
          />
          <button type="submit" className="p-3 rounded-lg bg-[#00CF98]">
            Search
          </button>
        </div>
      </form>
      {error && <p className="font-bold mt-5 text-center">{error}</p>}
      {loading && (
        <p className="font-bold mt-5 text-center">Searching for movies...</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        {movieDetails.length > 0 &&
          inputValue.current.value &&
          movieDetails.map((movie) => (
            <Suspense key={movie.id} fallback={<p>Loading...</p>}>
              <SearchResults movie={movie} setMovieDetails={setMovieDetails} />
            </Suspense>
          ))}
      </div>
    </div>
  );
};

export default Search;

{
  /* <h3 className="px-2 md:hidden font-bold underline text-center">Genres</h3>
      <div className="flex flex-wrap mt-2 text-xl font-medium justify-center items-center md:flex md:items-center md:justify-center gap-2">
        <p
          onClick={handleLink}
          className="cursor-pointer text-slate-900 bg-white p-2 rounded-lg"
        >
          Popular
        </p>
        <p className="cursor-pointer text-slate-900 bg-white p-2 rounded-lg">
          Comedy
        </p>
        <p className="cursor-pointer text-slate-900 bg-white p-2 rounded-lg">
          Romance
        </p>
        <p
          onClick={() => handleLink("mystery")}
          className="cursor-pointer text-slate-900 bg-white p-2 rounded-lg"
        >
          Mystery
        </p>
        <p className="cursor-pointer text-slate-900 bg-white p-2 rounded-lg">
          Thriller
        </p>
        <p className="cursor-pointer text-slate-900 bg-white p-2 rounded-lg">
          Family
        </p>
        <p className="cursor-pointer text-slate-900 bg-white p-2 rounded-lg">
          Horror
        </p>
      </div> */
}
