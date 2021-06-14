import React, { useContext } from "react";
import BookForm from "./BookForm";
import ComicBooksContext from "../context/ComicBooksContext";

const AddBook = ({ history }) => {
  const { comicbooks, setBooks } = useContext(ComicBooksContext);
  const handleOnSubmit = (comicbook) => {
    setBooks([comicbook, ...comicbooks]);
    history.push("/");
  };

  return (
    <React.Fragment>
      <BookForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddBook;
