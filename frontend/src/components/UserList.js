import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import UserModal from './UserModal'


function UserList() {
    const [users, setUsers] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const [clicked, setClicked]  = useState("");

    useEffect(() => {
        axios
            .get(
                `http://localhost:9090/get/all/users`
            )
            .then((response) => {
                setUsers(response.data);
                setClicked(true);
            }).catch((err) => {
                setErrorMessage(
                    "Erreur"
                );
            });
    }, []);

    return <>
        <Container>
            <Container>
                <h2>List of users</h2>
                    <p>{errorMessage}</p>
                    <table className="center">
                        <tr>
                            <th>Nom</th>
                            <th>Guess utilisateur</th>
                            <th>Numero random</th>
                        </tr>
                            {users.map((user) => (
                                <UserModal
                                    key={users.indexOf(user)}
                                    user={user}
                                />
                            ))}
                    </table>
                </Container>
        </Container></>;
}

export default UserList;