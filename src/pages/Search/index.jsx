import { useSearchParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Card from "../../components/molecules/Card";

const Search = ({ apiPath }) => {
  const [searhParams] = useSearchParams();
  const queryTerm = searhParams.get("q");
  const { data: movies } = useFetch(apiPath, queryTerm);

  useDocumentTitle(`Search result for ${queryTerm}`);

  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-darkbg dark:text-white">
          {movies.length === 0
            ? `No result found for '${queryTerm}'`
            : `Result for '${queryTerm}'`}
        </p>
      </section>
      <section className="max-w-7xl mx-full py-7">
        <div className="flex justify-center flex-wrap gap-4">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Search;
