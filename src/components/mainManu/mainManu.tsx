import React from "react";
import { Container, Nav } from "react-bootstrap";
export class MainManuItem{
    text: string = '';
    link: string = '#';

    constructor(text: string, link: string){
        this.link = link;
        this.text = text;
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
                { this.state.items.map(this.makeNavLink)}
            </Nav>
            </Container>
        );
    }
    private makeNavLink(item: MainManuItem){
        return (
            <Nav.Link href ={ item.link }>
                { item.text }
                </Nav.Link>
        );
    }
}
