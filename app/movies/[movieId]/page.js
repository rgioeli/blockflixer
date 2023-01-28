import { Suspense } from "react";
import movieList from "../../../dummyMovies.json";
import Movie from "./Movie";

async function getMovie(id) {
  const movie = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=91cb7d5234eee52792ae45610fc14486&language=en-US&append_to_response=videos,people`,
    { cache: "force-cache" }
  );

  return movie.json();
}

const Page = async ({ params: { movieId } }) => {
  // const [movie] = movieList.results.filter((m) => m.id == movieId);
  const movie = await getMovie(movieId);
  console.log(movie);

  return (
    <div className="container m-auto">
      <Suspense fallback={<p>Loading your movie...</p>}>
        <Movie movie={movie} />
      </Suspense>
    </div>
  );
};

export default Page;
