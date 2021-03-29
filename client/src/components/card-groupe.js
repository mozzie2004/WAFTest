import React from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import ErrorPage from './errorPage';
import CardItem from './card-item';

const CardGroupe = ({foods, loading, error}) => {

    

    const foodsList = (
        foods.map( item => <CardItem 
        key={item.id}
        title={item.title} 
        img={item.img}
        price={item.price}
        description={item.description}
        id={item.id}
        />) 
        );

    const content = error ? <ErrorPage /> : foodsList;

    return (
        <div className="d-flex flex-wrap justify-content-center">
           {
            loading ? <Spinner className="spin" animation="border" variant="secondary" /> : content 
           }
        </div>
    )
}

const mapStateToProps = ({foods, loading, error}) => {
    return {
        foods,
        loading,
        error
    }
}

export default connect(mapStateToProps)(CardGroupe);