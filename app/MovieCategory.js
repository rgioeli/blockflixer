"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  BsArrowLeftSquareFill,
  BsArrowRightSquareFill,
  BsStarFill,
} from "react-icons/bs";

const MovieCategory = ({ category }) => {
  const router = useRouter();

  return (
    <div className="relative overflow-y-hidden">
      <div className="overflow-x-auto scrollbar relative z-10">
        <div className="flex justify-start py-2 relative">
          {category.results.map((movie) => (
            <div
              key={movie.id}
              className={
                "flex relative flex-col flex-1 flex-grow-1 flex-shrink-0 basis-[200px] justify-between gap-x-10 mr-4 shadow-md rounded-lg p-2 cursor-pointer"
              }
              onClick={() => router.push(`/movies/${movie.id}`)}
            >
              <Image
                alt={movie.title}
                src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
                height={400}
                width={300}
                className="rounded-xl z-10"
              />
              <div className="bg-white absolute top-0 h-full w-full -right-0 rounded-lg z-0"></div>
              <div className="flex justify-between items-center mt-2 relative z-20">
                <div className="flex items-center">
                  <BsStarFill className="text-slate-900" size={25} />
                  <p className="ml-1 text-slate-900">{movie.vote_average}</p>
                </div>
                <div>
                  <p className="text-slate-900 text-xs">
                    Votes{" "}
                    <span className="font-medium text-slate-900">
                      ({movie.vote_count})
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCategory;
