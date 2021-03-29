import React, { useState } from 'react';
import { connect } from 'react-redux';
import { foodUpdate, foodDel, foodsLoaded, foodsRequested, foodsError } from '../actions';
import { updateFood, deleteFood, getAllFoods } from '../services/foodsApiService';
import { Card, Button, Form, Spinner } from 'react-bootstrap';


const CardItem = (props) => {

    const [validated, setValidated] = useState(false);
    const [edit, setEdit] = useState(false);
    const [buttonUpdateDisabled, setButtonUpdateDisabled] = useState(false);
    const [buttonDelDisabled, setButtonDelDisabled] = useState(false);
    const [data, setData] = useState({
        title: props.title,
        price: props.price,
        img: props.img,
        description: props.description,
        id: props.id
    })

    const {title, img, price, description, id} = data;

    const onChange = (e) => {
        setValidated(false);
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const onUpdate = (e) => {
        e.preventDefault();
        setButtonUpdateDisabled(true);
        setValidated(false);

        if (props.foods.find(item=>item.title.trim().toLowerCase() === data.title.trim().toLowerCase() && item.id !== data.id)) {
            setValidated(true);
            setButtonUpdateDisabled(false);
            return
        }

        updateFood(data)
        .then(res=>{
            setEdit(false);
            setButtonUpdateDisabled(false)
            props.foodsRequested();

            getAllFoods()
            .then(res=>props.foodsLoaded(res))
            .catch(er=>props.foodsError());

        })
        .catch(er=>{
            console.log(er);
            setButtonUpdateDisabled(false)
        })
    }

    const onDelete = (id) => {
        setButtonDelDisabled(true);

        deleteFood(id)
        .then(res=>{ 
            props.foodsRequested();

            getAllFoods()
            .then(res=>props.foodsLoaded(res))
            .catch(er=>props.foodsError());

        })
        .catch(e=>{
            console.log(e);
            setButtonDelDisabled(false);
        })
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
        <Form validated={validated} onSubmit={onUpdate}>
             <Form.Control onChange={onChange} name="img" type="text" value={img} />
             {/* <Form.Group> */}
                <Form.Control isInvalid={validated} onChange={onChange} name="title" type="text" value={title} />
                <Form.Control.Feedback type="invalid">This title already exists</Form.Control.Feedback>
             {/* </Form.Group> */}
             <Form.Control onChange={onChange} name="price" type="number" value={price} />
             <Form.Control onChange={onChange} name="description" as="textarea" value={description} />
             <Form.Control name="id" type="hidden" value={id} />
             <Button disabled={buttonUpdateDisabled} type="submit" className="w-100 mt-1" variant="secondary">
                 Update {buttonUpdateDisabled ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true"/> : ''}
            </Button>
             <Button onClick={()=>onDelete(id)} type="button" className="w-100 mt-1" variant="secondary">
                 Delete {buttonDelDisabled ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true"/> : ''}
            </Button>
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

const mapStateToProps = ({foods}) => {
    return {
        foods
    }
}


export default connect(mapStateToProps, {foodUpdate, foodDel, foodsLoaded, foodsRequested, foodsError})(CardItem);