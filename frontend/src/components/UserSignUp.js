import axios from "axios";
import React from "react";
import { useState } from "react";
import { useFormFields } from "../lib/hooksLib";
import { Container, Form } from "react-bootstrap";

const UserSignUp = () => {

  const [errorMessage, setErrorMessage] = useState("");

  const [fields, handleFieldChange] = useFormFields({
    username: "",
    guessUserNumber: "",
  });

  function onCreatePost(e) {
    if (fields.guessUserNumber > 6 || fields.guessUserNumber <= 0) {
      e.preventDefault();
      setErrorMessage("Votre guess ne peux pas être 0 et doit être entre 1 et 6 inclusivement.");
      return;
    }

    axios
      .post("http://localhost:9090/save/user", fields)
  }

  return (
    <Form onSubmit={(e) => onCreatePost(e)}>
      <Container>
        <Form.Group controlId="username">
          <Form.Label className="discret mb-0">
            Votre nom
          </Form.Label>
          <Form.Control
            value={fields.username}
            onChange={handleFieldChange}
            type="text"
            placeholder="Entrer votre nom d'utilisateur"
            className="input_form"
            required
          />
        </Form.Group>
        <Form.Group controlId="guessUserNumber">
        <Form.Label className="discret mb-0">
            Votre guess
          </Form.Label>
          <Form.Control
            value={fields.guessUserNumber}
            onChange={handleFieldChange}
            type="number"
            placeholder="Entrer votre guess"
            className="input_form"
            required
          />
        </Form.Group>
        <Container>
          <p>{errorMessage}</p>
          <button className="btn_submit">Coup de dé</button>
        </Container>
      </Container>
    </Form>
  );
};

export default UserSignUp;
