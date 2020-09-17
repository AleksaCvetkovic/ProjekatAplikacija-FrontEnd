import {  faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  React  from "react";
import { Card, Col, Container, Form, Button, Alert, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import api, { ApiResponse } from '../../api/api';

interface UserRegistrationPageState {
    formData: {
        email:     string;
        password:  string;
        firstname: string;
        lastname:  string;
        phone:     string;
    };

    message?: string;

    isRegistrationComplete: boolean;
}

export class UserRegistrationPage extends React.Component {
    state: UserRegistrationPageState;

    constructor(props: Readonly<{}>){
        super(props);

        this.state = {
            isRegistrationComplete: false,
            formData: {
                email:     '',
                password:  '',
                firstname: '',
                lastname:  '',
                phone:     '',
            },
        };
    }

    render() {
        return (
        <Container>
        <Col md={ {span: 8, offset: 2 } }>
        <Card>
            <Card.Body>
                <Card.Title>
                <FontAwesomeIcon icon = { faUserPlus } /> UserLogIn
                </Card.Title>
               { 
               (this.state.isRegistrationComplete === false) ? 
               this.renderForm() :
                this.renderRegistrationComplete()
                }
                </Card.Body>
        </Card>
            </Col>
            </Container>

        );
    }
    private formInputChange(event: React.ChangeEvent<HTMLInputElement>){
        const newFormData = Object.assign(this.state.formData, {
            [ event.target.id ]: event.target.value,
        })

        const newState = Object.assign(this.state, {
            formData: newFormData
            
            
        });

        this.setState(newState);
    }

    private renderForm() {
        return(
            <>
            <Form>
                <Row>
                    <Col md="6">
            <Form.Group>
                <Form.Label htmlFor="email">E-mail:</Form.Label>
                <Form.Control type="email" id="email"
                                value = {this.state.formData.email}
                                onChange={ event => this.formInputChange(event as any) }/>
            </Form.Group>
                    </Col>
                    <Col md="6">
            <Form.Group>
                <Form.Label htmlFor="password">Password:</Form.Label>
                <Form.Control type="password" id="password"
                                value = {this.state.formData.password}
                                onChange={ event => this.formInputChange(event as any) }/>
            </Form.Group>
                    </Col>
            </Row>
            <Row>
            <Col md="6">
            <Form.Group>
                <Form.Label htmlFor="firstname">firstname:</Form.Label>
                <Form.Control type="text" id="firstname"
                                value = {this.state.formData.firstname}
                                onChange={ event => this.formInputChange(event as any) }/>
            </Form.Group>
            </Col>
                    <Col md="6">
            <Form.Group>
                <Form.Label htmlFor="lastname">lastname:</Form.Label>
                <Form.Control type="text" id="lastname"
                                value = {this.state.formData.lastname}
                                onChange={ event => this.formInputChange(event as any) }/>
            </Form.Group>
            </Col>
            </Row>
            <Form.Group>
                <Form.Label htmlFor="phone">phone:</Form.Label>
                <Form.Control type="phone" id="phone"
                                value = {this.state.formData.phone}
                                onChange={ event => this.formInputChange(event as any) }/>
            </Form.Group>
            <Form.Group>
                <Button variant="primary" 
                onClick={ () => this.doRegister()}>
                   Registruj se
                </Button>
            </Form.Group>
        </Form>
        <Alert variant='danger'
                    className={this.state.message? '' : 'd-none'}>
            { this.state.message }
        </Alert>
        </>
        );
    }


    private renderRegistrationComplete() {
        return (
            <p>
                Registrovan akaut.<br />
                    <Link to="/user/login/">Klikni</Link> Klikni da se ulogujes
            </p>
        );
    }

    private doRegister() {
        const data = {
            email: this.state.formData?.email,
            password: this.state.formData?.password,
            firstname: this.state.formData?.firstname,
            lastname: this.state.formData?.lastname,
            phoneNumber: this.state.formData?.phone,

        };
        api('auth/user/register/', 'post', data)
        .then((res: ApiResponse) => {
            if( res.status === 'error' ){
                 this.setErrorMesage('sistem error...try again');
                return;
            }

            if(res.data.statusCode !== undefined){
                this.handlerErrors(res.data);
                return;
            }
            this.registrationCompleat();
        })
    }

    private setErrorMesage(message: string){
        const newState = Object.assign(this.state, {
            message: message,
        });
        this.setState(newState);
    }

    private handlerErrors(data: any) {
        let massege = '';

        switch(data.statusCode) {
            case -6001: massege = 'Ne postojeci akaunt'; break;
        }

        this.setErrorMesage(massege);
    }

    private registrationCompleat() {
        const newState = Object.assign(this.state, {
            isRegistrationComplete: true,
        });
        this.setState(newState);
        
        
    }
    
 }