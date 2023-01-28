"use client";

import Image from "next/image";
import { BsStarFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import MovieCategory from "./MovieCategory";
import Link from "next/link";

const MovieList = ({
  popular,
  comedies,
  romance,
  family,
  thriller,
  mystery,
  horror,
}) => {
  const router = useRouter();
  return (
    <>
      <div className="mt-10 text-2xl">
        <h1 className="text-3xl">Popular Genres</h1>
        <h1 className="text-2xl font-bold text-white mt-5">Trending</h1>
        <MovieCategory category={popular} heading={"Trending"} />
        <h1 className="text-2xl font-bold text-white mt-5">Comedies</h1>
        <MovieCategory category={comedies} heading={"Comedies"} />
        <h1 className="text-2xl font-bold text-white mt-5">Romance</h1>
        <MovieCategory category={romance} heading={"Romance"} />
        <h1 className="text-2xl font-bold text-white mt-5">Family</h1>
        <MovieCategory category={family} heading={"Family"} />
        <h1 className="text-2xl font-bold text-white mt-5">Thriller</h1>
        <MovieCategory category={thriller} heading={"Thriller"} />
        <h1 id="mystery" className="text-2xl font-bold text-white mt-5">
          Mystery
        </h1>
        <MovieCategory category={mystery} heading={"Mystery"} />
        <h1 className="text-2xl font-bold text-white mt-5">Horror</h1>
        <MovieCategory category={horror} heading={"Horror"} />
      </div>
    </>
  );
};

export default MovieList;
