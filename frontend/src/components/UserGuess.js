import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import UserModal from './UserModal'


function UserGuess() {
    const [guessUserResponse, setGuessUserResponse] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        axios
            .get(
                `http://localhost:9090/get/latest/inserted/user`
            )
            .then((response) => {
                setGuessUserResponse(response.data);
            }).catch((err) => {
                setErrorMessage(
                    "Erreur"
                );
            });
    }, []);

    return <>
        <Container>
            <Container>
            <br/>
            {""}
            {guessUserResponse.userRandomNumber}
            <br/>
            <br/>
            {""}
            {guessUserResponse.result}
            <br/>
            </Container>
        </Container></>;
}

export default UserGuess;