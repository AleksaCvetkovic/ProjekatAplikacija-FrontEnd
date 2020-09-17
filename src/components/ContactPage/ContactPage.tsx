import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Container } from 'react-bootstrap';

export class ContactPage extends React.Component{
    render() {
        return(
            <Container>
                <Card>
                    <Card.Body>
                        <Card.Title>
                        <FontAwesomeIcon icon = { faPhone } /> Contact detail
                        </Card.Title>
                        <Card.Text>
                            Kontakt podaci...
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}