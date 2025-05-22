import useFetch from "../../hooks/useFetch";
import Card from "../../components/molecules/Card";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const MovieList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);
  useDocumentTitle(`${title}`);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-center flex-wrap gap-4">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default MovieList;
