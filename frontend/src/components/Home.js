import { Container } from "react-bootstrap";
import UserSignUp from "./UserSignUp";
import UserList from "./UserList";
import UserGuess from "./UserGuess";


function Home() {
    return <>
        <Container>
            <Container>
                <Container>
                    <UserSignUp />
                </Container>
                <Container>
                    <UserGuess />
                </Container>
                <Container>
                    <UserList />
                </Container>
            </Container>
        </Container></>;
}

export default Home;

