import React, { useState } from 'react';
import { addFood } from '../services/foodsApiService';
import { connect } from 'react-redux';
import { foodsError, foodAdd } from '../actions';
import { Modal, Button, Form, ButtonGroup } from 'react-bootstrap';

const AddFood = ({show, handleClose, foodsError, foods, foodAdd}) => {

    const [validated, setValidated] = useState(false)

    const [data, setData] = useState({
        title: '',
        img: '',
        price: '',
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
        setValidated(false)

        if (foods.find(item=>item.title.trim().toLowerCase() === data.title.trim().toLowerCase())) {
            setValidated(true);
            return
        }

        addFood(data)
        .then(res=>{
            handleClose();
            foodAdd(res);            
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
                        <Button type="submit" className="mt-1" variant="dark">Add</Button>
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

export default connect(mapStateToProps, {foodsError, foodAdd})(AddFood);