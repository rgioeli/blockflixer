import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Suspense } from "react";
import Error from "./error";
import MovieList from "./MovieList";
import Search from "./Search";

async function getPopularMovies() {
  const movies = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 43200 } }
  );

  return movies.json();
}

async function getComedies() {
  const comedies = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=flatrate`,
    { next: { revalidate: 43200 } }
  );

  return comedies.json();
}

async function getRomance() {
  const comedies = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&region=US&include_video=false&with_genres=10749&page=1&with_watch_monetization_types=flatrate`,
    { next: { revalidate: 43200 } }
  );

  return comedies.json();
}

async function getThrillers() {
  const comedies = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=53&with_watch_monetization_types=flatrate`,
    { next: { revalidate: 43200 } }
  );

  return comedies.json();
}

async function getMysteries() {
  const comedies = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=9648&with_watch_monetization_types=flatrate`,
    { next: { revalidate: 43200 } }
  );

  return comedies.json();
}

async function getFamily() {
  const comedies = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10751&with_watch_monetization_types=flatrate`,
    { next: { revalidate: 43200 } }
  );

  return comedies.json();
}

async function getHorror() {
  const comedies = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&with_watch_monetization_types=flatrate`,
    { next: { revalidate: 43200 } }
  );

  return comedies.json();
}

export default async function Home() {
  const popular = await getPopularMovies();
  const comedies = await getComedies();
  const horror = await getHorror();
  const mystery = await getMysteries();
  const family = await getFamily();
  const thriller = await getThrillers();
  const romance = await getRomance();

  return (
    <main className="">
      <div className="container m-auto">
        <Search />
        <Suspense fallback={"Loading Movies..."}>
          <MovieList
            popular={popular}
            comedies={comedies}
            horror={horror}
            mystery={mystery}
            family={family}
            thriller={thriller}
            romance={romance}
          />
        </Suspense>
      </div>
    </main>
  );
}
