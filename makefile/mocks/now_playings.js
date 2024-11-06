import axios from "axios";

const NOW_PLAYINGS = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWQzODhjMDM3Mzk2NTJjMTUxYzE1NjMyMjY5MmJkYyIsIm5iZiI6MTczMDgwOTUwMi44MDAwNzQzLCJzdWIiOiI2NzA2NTMwMGE4ODYxNGQ2YjA4YWUxYWMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.gI5EJdUXOnjvm2x-32NpvpX0yipyrtZ3mquKGbnG7rc`,
      },
    }
  );
  return response.data.results;
};

export default NOW_PLAYINGS;
