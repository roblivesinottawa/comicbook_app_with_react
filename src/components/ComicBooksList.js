import React, { useContext } from "react";
import ComicBooksContext from "../context/ComicBooksContext";
import _ from "lodash";
import ComicBook from "./ComicBook";

const ComicBooksList = () => {
  const { comicbooks, setBooks } = useContext(ComicBooksContext);

  const handleRemoveBook = (id) => {
    setBooks(comicbooks.filter((comicbook) => comicbook.id !== id));
  };
  return (
    <React.Fragment>
      <div className="book-list">
        {!_.isEmpty(comicbooks) ? (
          comicbooks.map((comicbook) => (
            <ComicBook
              key={comicbook.id}
              {...comicbook}
              handleRemoveBook={handleRemoveBook}
            />
          ))
        ) : (
          <p className="message">
            No comic books available. Please add more books.
          </p>
        )}
      </div>
    </React.Fragment>
  );
};

export default ComicBooksList;
