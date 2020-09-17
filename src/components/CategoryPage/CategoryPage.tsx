import { faListAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Container } from 'react-bootstrap';
import CategoryType from '../../types/categoryType';

interface CategoryPageProperties {
    match: {
        params: {
            cid: number;
        }
    }
}

interface CategoryPageState {
    cotegory?: CategoryType;
}

export default class CategoryPage extends React.Component<CategoryPageProperties> {
   state: CategoryPageState;
   
    constructor(props: Readonly<CategoryPageProperties>){
        super(props);

        this.state = { };
    }
    render() {
        return (
            <Container>
            <Card>
                <Card.Body>
                    <Card.Title>
                    <FontAwesomeIcon icon = { faListAlt } /> { this.state.cotegory?.name }
                    </Card.Title>
                    <Card.Text>
                        pisu neki artikli
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
        );
    }

    componentWillMount(){
       this.getCategoryData();
    }
    componentWillReceiveProps(newProperties: CategoryPageProperties){
        if(newProperties.match.params.cid === this.props.match.params.cid){
            return;
        }

        this.getCategoryData();
    }

    private getCategoryData() {
        setTimeout(() =>{
            const data: CategoryType = {
                name: 'Category: '+ this.props.match.params.cid,
                categoryId: this.props.match.params.cid,
                items: []
            };

            this.setState({
                cateogry: data,
            })
        },800);
    }
}