import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white shadow  dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-between ">
        <span className="text-lg text-gray-500  dark:text-gray-400">
          © {new Date().getFullYear()}&nbsp;
          <Link to="/" className="hover:underline">
            Forge™
          </Link>
          .&nbsp;All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center text-md font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="#"
              target="_blank"
              className="hover:underline me-4 md:me-6"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              className="hover:underline me-4 md:me-6"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              className="hover:underline me-4 md:me-6"
            >
              YouTube
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className="hover:underline">
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
