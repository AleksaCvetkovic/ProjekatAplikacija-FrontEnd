import React from "react";
import { Container, Nav } from "react-bootstrap";

export class MainManu extends React.Component{
    render() {
        return (
            <Container>
            <Nav variant="tabs">
                <Nav.Link href = "/">Home</Nav.Link>
                <Nav.Link href = "/contact">Contact</Nav.Link>
                <Nav.Link href = "/login">log in</Nav.Link>
            </Nav>
            </Container>
        );
    }
}