import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function ScreenAddMovie() {

    let dispatch = useDispatch();
    let [ name, setInputName ] = useState();
    let [ category, setInputCategory ] = useState();

    return (
        <Container fluid>
            <Form onSubmit={(evt) => {
                evt.preventDefault();
                dispatch({type: "ADD_MOVIE", data: {
                    title: name, category: category, image: ""
                }});
            }}>
                <Form.Group controlId="formBasic">
                    <Form.Label>Nom du film</Form.Label>
                    <Form.Control type="text" name="name" onChange={evt => {
                        setInputName(evt.target.value);
                    }}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Category</Form.Label>
                    <Form.Control type="text" name="category" onChange={evt => {
                        setInputCategory(evt.target.value);
                    }}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Ajouter
                </Button>
            </Form>
        </Container>
    )
}