import { useRouter } from "next/navigation";
import movieList from "../../../dummyMovies.json";
import Movie from "./Movie";
import { notFound } from "next/navigation";

async function getMovie(id) {
  const movie = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=91cb7d5234eee52792ae45610fc14486&language=en-US&append_to_response=videos,people`
  );

  return movie.json();
}

const Page = async (props) => {
  const movie = await getMovie(props.params.movieId);
  if (movie.success === false) {
    notFound();
  }

  return (
    <div className="container m-auto">
      <Movie movie={movie} />
    </div>
  );
};

export default Page;
