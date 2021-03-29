import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { foodsLoaded, foodsRequested, foodsError } from '../actions';
import Header from '../components/header';
import CardGroupe from '../components/card-groupe';
import { getAllFoods } from '../services/foodsApiService';
import { Container, Jumbotron } from 'react-bootstrap';

function App({foodsLoaded, foodsRequested}) {

  useEffect(() => {

    foodsRequested();
    getAllFoods().then(res=>foodsLoaded(res)).catch(e=>foodsError())
    
  }, [foodsLoaded, foodsRequested]);

  return (
    <> 
        <Header />
        <Jumbotron className="jambo">
            <Container>
                <CardGroupe />
            </Container>
        </Jumbotron>
    </>
   
  );
}



export default connect(null, {foodsLoaded, foodsRequested, foodsError})(App);