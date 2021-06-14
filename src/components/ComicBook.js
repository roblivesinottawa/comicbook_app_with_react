import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const ComicBook = ({
  id,
  comicbookname,
  publisher,
  quantity,
  date,
  handleRemoveBook,
}) => {
  const history = useHistory();
  return (
    <Card style={{ width: "18rem" }} className="comicbook">
      <Card.Body>
        <Card.Title className="book-title">{comicbookname}</Card.Title>
        <div className="book-details">
          <div>Publisher: {publisher} </div>
          <div>Quantity: {quantity} </div>
          <div> Date: {new Date(date).toDateString()}</div>
        </div>
        <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
          Edit
        </Button>{" "}
        <Button variant="danger" onClick={() => handleRemoveBook(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ComicBook;
