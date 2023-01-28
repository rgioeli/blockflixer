export default async function handler(req, res) {
  if (req.method !== "POST") return;
  const keyword = req.body;

  try {
    const movie_details = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${keyword}`
    );
    const { results } = await movie_details.json();
    if (results.length == 0) return res.json({ error: "No Results" });
    const filterResults = results.filter(
      (movie) =>
        movie.poster_path &&
        movie.vote_count &&
        movie.original_language == "en" &&
        movie.id
    );
    res.status(200).json({ success: { results: filterResults } });
  } catch (e) {
    res.status(400).json({ error: "No Results" });
  }
}
