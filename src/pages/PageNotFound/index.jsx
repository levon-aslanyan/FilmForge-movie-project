import { Link } from "react-router-dom";
import PageNotFoundImage from "../../assets/pagenotfound.png";
import Button from "../../components/molecules/Buttons";

const PageNotFound = () => {
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="dark:text-white text-7xl text-gray-700 font-bold my-6">
            404, Oops!
          </p>
          <div className="max-w-sm">
            <img
              src={PageNotFoundImage}
              alt="Page Not Found"
              className="rounded"
            />
          </div>
        </div>
        <div className="flex  justify-center my-4">
          <Link to="/">
            <Button>Back to Home Page</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default PageNotFound;
