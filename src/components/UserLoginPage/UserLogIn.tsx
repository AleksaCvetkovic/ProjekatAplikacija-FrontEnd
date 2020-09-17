import {  faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Container } from 'react-bootstrap';

export class UserLogIn extends React.Component{
    render() {
        return(
            <Container>
                <Card>
                    <Card.Body>
                        <Card.Title>
                        <FontAwesomeIcon icon = { faSignInAlt } /> UserLogIn
                        </Card.Title>
                        <Card.Text>
                            Neki formular
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}