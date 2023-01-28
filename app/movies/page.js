async function getMovie(id) {
  const movie = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos,people`,
    { cache: "force-cache" }
  );

  return movie.json();
}

const Page = async (props) => {
  console.log(props);
  return (
    <div>
      <p>Movie Page</p>
    </div>
  );
};
export default Page;
