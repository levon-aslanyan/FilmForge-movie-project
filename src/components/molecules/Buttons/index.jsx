const Button = ({ children }) => {
  return (
    <button className="text-xl font-medium w64 text-gray-700 dark:text-white bg-gradient-to-r from-indigo-500 via-blue-500 to-blue-700 rounded p-3">
      {children}
    </button>
  );
};

export default Button;
