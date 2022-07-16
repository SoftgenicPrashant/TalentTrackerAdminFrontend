import React from 'react'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
import { ToastContainer } from 'react-toastify';
import { Form  , Container , Row , Col , Button } from 'react-bootstrap';
const Userinformation = () => {
  return (
    <div>
         <Sidebar />
        <NavbarMenu />
        <ToastContainer />
        <Container className='myprofile' >
            <Form>
                <Row>
                    <Col xs={4}>
                    <Button variant="success" >User Email setting</Button>
                    </Col>
                    <Col xs={4}>
                    <Button variant="primary" >User login information</Button>
                    </Col>
                    <Col xs={4}>
                    <Button variant="warning" >Portal search </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    </div>
  )
}

export default Userinformation