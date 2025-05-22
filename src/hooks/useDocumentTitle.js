import { useEffect } from "react";

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `${title} / Forge`;
  });

  return null;
};

export default useDocumentTitle;
