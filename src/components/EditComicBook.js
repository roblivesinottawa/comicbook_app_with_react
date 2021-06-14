import React, { useContext } from "react";
import BookForm from "./BookForm";
import { useParams } from "react-router-dom";
import ComicBooksContext from "../context/ComicBooksContext";

const EditComicBook = ({ history }) => {
  const { comicbooks, setBooks } = useContext(ComicBooksContext);
  const { id } = useParams();
  const bookToEdit = comicbooks.find((comicbook) => comicbook.id === id);

  const handleOnSubmit = (comicbook) => {
    const filteredBooks = comicbooks.filter((comicbook) => comicbook.id !== id);
    setBooks([comicbook, ...filteredBooks]);
    history.push("/");
  };

  return (
    <div>
      <BookForm comicbook={bookToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditComicBook;
