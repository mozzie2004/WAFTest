import React, { useState } from 'react';
import { addFood, getAllFoods } from '../services/foodsApiService';
import { connect } from 'react-redux';
import { foodsError, foodsRequested, foodsLoaded } from '../actions';
import { Modal, Button, Form, ButtonGroup, Spinner } from 'react-bootstrap';

const AddFood = ({show, handleClose, foodsError, foods, foodsLoaded, foodsRequested}) => {

    const [validated, setValidated] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const [data, setData] = useState({
        title: '',
        img: '',
        price: '',
        description: ''
    });

    const {title, img, price, description} = data;

    const onChange = (e) => {
        setValidated(false)
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setValidated(false);
        setButtonDisabled(true);

        if (foods.find(item=>item.title.trim().toLowerCase() === data.title.trim().toLowerCase())) {
            setValidated(true);
            setButtonDisabled(false);
            return
        }

        addFood(data)
        .then(res=>{
            handleClose();
            foodsRequested();
            setButtonDisabled(false);
            setData({
                title: '',
                img: '',
                price: '',
                description: ''
            })

            getAllFoods()
            .then(res=>{
                foodsLoaded(res)
            })
            .catch(e=>foodsError());    

        })
        .catch(e=>foodsError());

    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add new hot-dog</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form validated={validated} onSubmit={onSubmit}>
                    <Form.Control className="mb-2" placeholder="Img URL" onChange={onChange} name="img" type="text" value={img} />
                    <Form.Group>
                        <Form.Control isInvalid={validated} required className="mb-2" placeholder="Title" onChange={onChange} name="title" type="text" value={title} />
                        <Form.Control.Feedback type="invalid">This title already exists</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Control required className="mb-2" placeholder="Price" onChange={onChange} name="price" type="number" value={price} />
                    <Form.Control className="mb-2" placeholder="Description" onChange={onChange} name="description" as="textarea" value={description} />
                    <ButtonGroup aria-label="Basic example">
                        <Button onClick={handleClose} type="button" className="mt-1" variant="secondary">No thanks!</Button>
                        <Button disabled={buttonDisabled} type="submit" className="mt-1" variant="dark">
                            Add  {buttonDisabled ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true"/> : ''} 
                        </Button>
                    </ButtonGroup>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

const mapStateToProps = ({foods}) => {
    return {
        foods
    }
}

export default connect(mapStateToProps, {foodsError,  foodsRequested, foodsLoaded})(AddFood);