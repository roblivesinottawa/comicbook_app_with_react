import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const BookForm = (props) => {
  const [comicbook, setBook] = useState(() => {
    return {
      comicbookname: props.comicbook ? props.comicbook.comicbookname : "",
      publisher: props.comicbook ? props.comicbook.publisher : "",
      quantity: props.comicbook ? props.comicbook.quantity : "",
      date: props.comicbook ? props.comicbook.date : "",
    };
  });

  const [errorMsg, setErrorMsg] = useState("");
  const { comicbookname, publisher, quantity } = comicbook;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [comicbookname, publisher, quantity];
    let errorMsg = "";

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });

    if (allFieldsFilled) {
      const comicbook = {
        id: uuidv4(),
        comicbookname,
        publisher,
        quantity,
        date: new Date(),
      };
      props.handleOnSubmit(comicbook);
    } else {
      errorMsg = "Please fill out all the fields.";
    }
    setErrorMsg(errorMsg);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "quantity":
        if (value === "" || parseInt(value) === +value) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      case "price":
        if (value === "" || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      default:
        setBook((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Comic Book Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="comicbookname"
            value={comicbookname}
            placeholder="Enter name of comic book"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="publisher">
          <Form.Label>Comic Book Publisher</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="publisher"
            value={publisher}
            placeholder="Enter publisher"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="quantity"
            value={quantity}
            placeholder="Enter available quantity"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BookForm;
