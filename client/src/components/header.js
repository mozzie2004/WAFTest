import React, { useState } from 'react';
import AddFood from './add-food';
import { Navbar, Button } from 'react-bootstrap';

const Header = () => {

    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <AddFood show={modalShow} handleClose={()=>setModalShow(false)}/>
            <Navbar className="d-flex justify-content-between" bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    CRUD
                </Navbar.Brand>
                <Button onClick={()=>setModalShow(true)} variant="outline-light">Add hot-dog</Button>{' '}
            </Navbar>
        </>
    )
}

export default Header;