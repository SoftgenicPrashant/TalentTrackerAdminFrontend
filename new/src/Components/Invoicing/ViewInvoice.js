import React,{useEffect,useState} from 'react'
import { Container,Form,Col,Row,Button} from 'react-bootstrap'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { ToastContainer } from 'react-toastify'
import {Link} from 'react-router-dom'
import axios from 'axios'

const ViewInvoice = () => {
  // const [getdata,setgetdata] = useState([])

  // useEffect=()=>{
  //    axios.get("http://localhost:4000/api/allClient").then((Response)=>{
 
  //        setgetdata(Response.data)
  //    },[])
  // }
  return (
    <div>
        <Sidebar />
      <NavbarMenu />
      <ToastContainer/>
      <Container className='myprofile'>
      <Form>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Enter Year</Form.Label>
                <Form.Control type='text'  name="EnterYear"/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Enter Month</Form.Label>
                <Form.Control type='text' name="EnterMonth" placeholder='Enter Month'/>
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Enter Client name</Form.Label>
                <Form.Control type='text' name="EnterclientName" placeholder=''/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Enter Year </Form.Label>
                <Form.Control type='text' name="EnterYear" placeholder='Enter Year'/>
                </Col>
                </Row>
                <Button variant='success' as={Link} to='/' className='mt-3'>seacrh</Button>
                </Form>
                
      </Container>
    </div>
  )
}

export default ViewInvoice