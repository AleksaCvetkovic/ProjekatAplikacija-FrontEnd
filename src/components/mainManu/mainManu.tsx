import React from "react";
import { Container, Nav } from "react-bootstrap";
import { HashRouter, Link } from "react-router-dom";
export class MainManuItem{
    text: string = '';
    link: string = '#';

    constructor(text: string, link: string){
        this.text = text;
        this.link = link;
    }
}

interface MainManuPropertis {
    items: MainManuItem[];
}

interface mainManuState{
    items: MainManuItem[];
}

export class MainManu extends React.Component<MainManuPropertis>{
    state: mainManuState;

    constructor(props: Readonly<MainManuPropertis>){
        super(props);

        this.state = {
            items: props.items,
        };

      
    }

    public setItem(items: MainManuItem[]){
        this.setState({
            items: items,
        });
    }

    render() {
        return (
            <Container>
            <Nav variant="tabs">
                <HashRouter>
                { this.state.items.map(this.makeNavLink)}
                </HashRouter>
            </Nav>
            </Container>
        );
    }
    private makeNavLink(item: MainManuItem){
        return (
            <Link to={item.link} className='nav-link'>
                { item.link }
            </Link>
            
        );
    }
}
