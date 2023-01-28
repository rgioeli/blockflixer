import Image from "next/image";
import { useRouter } from "next/navigation";
import { BsStarFill } from "react-icons/bs";

const SearchResults = ({ movie, setMovieDetails }) => {
  const router = useRouter();
  return (
    <div
      className="relative cursor-pointer"
      onClick={() => {
        router.push(`/movies/${movie.id}}`);
        setMovieDetails([]);
      }}
    >
      <div className="flex space-x-5 justify-between items-center border-2 p-2 rounded-full relative z-10 bg-slate-900">
        {movie.poster_path ? (
          <Image
            className="max-w-[50px] w-auto h-auto rounded-tl-full rounded-bl-full"
            alt={movie.title}
            src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
            height={250}
            width={200}
          />
        ) : null}
        <div className="text-center">
          <p className="text-lg font-bold">{movie.title}</p>
          <p className="text-xs font-bold">
            {movie.release_date.split("-")[0]}
          </p>
        </div>

        <div className="flex space-x-2 items-center">
          <p className="text-white font-medium space-x-2 text-sm">
            {movie.vote_average}/10
          </p>
          <BsStarFill size={15} color="white" />
        </div>
      </div>
      <div className="absolute top-2 right-2 z-0 bg-[#00CF98] w-full h-full rounded-full"></div>
    </div>
  );
};

export default SearchResults;
