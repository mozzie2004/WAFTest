import React, { useState } from 'react';
import { connect } from 'react-redux';
import { foodUpdate, foodDel, foodsLoaded, foodsRequested, foodsError } from '../actions';
import { updateFood, deleteFood, getAllFoods, } from '../services/foodsApiService';
import { Card, Button, Form } from 'react-bootstrap';


const CardItem = (props) => {

    const [edit, setEdit] = useState(false);
    const [data, setData] = useState({
        title: props.title,
        price: props.price,
        img: props.img,
        description: props.description,
        id: props.id
    })

    const {title, img, price, description, id} = data;

    const onChange = (e) => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const onUpdate = (e) => {
        e.preventDefault();

        updateFood(data)
        .then(res=>{
            setEdit(false)
            props.foodUpdate(res)
        })
        .catch(er=>console.log(er))
    }

    const onDelete = (id) => {
        deleteFood(id)
        .then(res=>{
            props.foodDel(id)
        })
        .catch(e=>console.log(e))
    }


    const onEdit = () => {
        setEdit(true)
    }

    const cardBody = (
        <Card.Body className="body-card">
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{`${price}$`}</Card.Subtitle>
            <Card.Text className="mb-5">{description}</Card.Text>
            <Button onClick={onEdit} className="w-100 button-card" variant="secondary">Edit</Button>
        </Card.Body>
    );

    const editCardBody = (
        <Form onSubmit={onUpdate}>
             <Form.Control onChange={onChange} name="img" type="text" value={img} />
             <Form.Control onChange={onChange} name="title" type="text" value={title} />
             <Form.Control onChange={onChange} name="price" type="text" value={price} />
             <Form.Control onChange={onChange} name="description" as="textarea" value={description} />
             <Form.Control name="id" type="hidden" value={id} />
             <Button type="submit" className="w-100 mt-1" variant="secondary">Update</Button>
             <Button onClick={()=>onDelete(id)} type="button" className="w-100 mt-1" variant="secondary">Delete</Button>
        </Form>
    );

    const body = edit ? editCardBody : cardBody;


    return (
        <div className="d-flex">
            <Card className="mr-3 ml-3 mt-3" style={{ width: '18rem' }}>
                <Card.Img style={{minHeight: '250px'}} variant="top" src={img} />
                {body}
            </Card>
        </div>
    )
}



export default connect(null, {foodUpdate, foodDel, foodsLoaded, foodsRequested, foodsError})(CardItem);