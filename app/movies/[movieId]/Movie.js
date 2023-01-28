import Image from "next/image";
import { BsClockFill, BsStarFill } from "react-icons/bs";
import GoBackButton from "./GoBackButton";

async function getCast(movie_id) {
  const video = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=91cb7d5234eee52792ae45610fc14486&language=en-US`
  );

  return video.json();
}

async function getPersonDetails(person_id) {
  const personDetails = await fetch(`
  https://api.themoviedb.org/3/person/${person_id}?api_key=91cb7d5234eee52792ae45610fc14486&language=en-US`);

  return personDetails.json();
}

const Movie = async ({ movie }) => {
  const { cast } = await getCast(movie.id);
  const firstCastMember = cast && cast[0];
  const firstCastMemberDetails = await getPersonDetails(firstCastMember.id);

  const trailer = movie.videos.results.filter(
    (video) =>
      video &&
      video.type.toLowerCase().includes("trailer") &&
      video.site.toLowerCase().includes("youtube")
  );

  const formatReleasedate = () => {
    const date = movie.release_date;
    const year = date.split("-");
    return [year[1], year[2], year[0]].join("/");
  };

  return (
    <div className="container">
      <div className="flex flex-col justify-center items-center scrollbar">
        <GoBackButton />
        <div className="flex flex-col md:flex-row md:items-start md:justify-start relative min-h-[50%]">
          <div className="flex justify-center mb-5 relative h-full md:p-5 md:pr-0 bg-white">
            {movie.poster_path && (
              <Image
                alt={movie.title}
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                height={1200}
                width={1200}
                className="max-w-sm"
              />
            )}
          </div>
          <div className="p-5 flex flex-col justify-center max-w-[500px] bg-white text-slate-900">
            <div className="flex space-x-5 items-center">
              <h3 className="text-xl font-bold">{movie.title}</h3>
              <p className="text-md font-medium">{formatReleasedate()}</p>
            </div>
            <p className="text-sm font-medium italic">
              {movie.tagline && movie.tagline}
            </p>
            <p className="text-md leading-6 mt-2 overflow-y-auto">
              {movie.overview && movie.overview}
            </p>
            <div className="flex space-x-2 items-center mt-2">
              <BsStarFill size={25} className="text-slate-900" />
              <p className="text-sm font-medium">
                {Math.floor(movie.vote_average)}/10
              </p>
            </div>
            <div className="flex space-x-2 mt-2 items-center">
              <BsClockFill className="text-slate-900" size={25} />
              <p className="text-sm font-medium">{`${movie.runtime} minutes`}</p>
            </div>
            <div className="flex flex-wrap items-center gap-2 justify-start mt-2">
              {movie.genres.map((genre) => (
                <p
                  className="bg-gradient-to-r from-slate-900 to-slate-600 text-white px-2 py-2 rounded-md"
                  key={genre.id}
                >
                  {genre.name}
                </p>
              ))}
            </div>
            {trailer.length > 0 && (
              <iframe
                className="mt-5"
                width="100%"
                height="300"
                src={`https://www.youtube.com/embed/${trailer[0].key}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            )}
            {firstCastMember && (
              <div className="mt-5">
                <div className="flex justify-between text-center items-center">
                  <Image
                    className="min-w-[200px] max-h-[300px] float-left"
                    alt="The star of the show"
                    src={`https://image.tmdb.org/t/p/w200/${
                      firstCastMemberDetails &&
                      firstCastMemberDetails.profile_path
                    }`}
                    height={200}
                    width={200}
                  />
                  <div className="flex flex-col w-full px-5">
                    <h3 className="text-md pb-2">Meet the Star</h3>
                    <p className="text-2xl font-bold">
                      {firstCastMember && firstCastMember.name}
                    </p>
                  </div>
                </div>
                <div className="mt-5 mb-10">
                  <p className="leading-7 w-full indent-6 text-justify">
                    {firstCastMemberDetails && firstCastMemberDetails.biography}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
