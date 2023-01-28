import Movie from "./Movie";
import { notFound } from "next/navigation";
import { Suspense } from "react";

async function getMovie(id) {
  const movie = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos,people`
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
      <Suspense
        fallback={<p className="mt-5 text-center">Loading some details...</p>}
      >
        <Movie movie={movie} />
      </Suspense>
    </div>
  );
};

export default Page;
