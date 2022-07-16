import React,{useState,useEffect} from 'react'
import { Container,Row, Col, Form ,Button} from 'react-bootstrap'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { ToastContainer } from 'react-toastify'
import axios from 'axios'

const EditInvoice = () => {
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
      <Form >
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Invoice Number</Form.Label>
                <Form.Control type='number' name="InvoiceNumber" placeholder=''></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Invoice Date</Form.Label>
                 <Form.Control type="date"  name="InvoiceDate"/>
                </Col>
                </Row>
                <Row>
                  <Col xs={6}>
                  <Form.Label  className='fw-bold mb-3 mt-3'>User ID</Form.Label>
                <Form.Control type='number' name=" UserID" placeholder=''></Form.Control>
                  </Col>
                  <Col xs={6}>
                  <Form.Label  className='fw-bold mb-3 mt-3'>Candidate  ID</Form.Label>
                <Form.Control type='number' name="andidateID" placeholder=''></Form.Control>
                  </Col>
                </Row>
                <Row>
                <Col xs={6}>
                  <Form.Label  className='fw-bold mb-3 mt-3'>JD Number</Form.Label>
                <Form.Control type='number' name="JDNumber" placeholder=''></Form.Control>
                  </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client ID</Form.Label>
                <Form.Control type='number' name="ClientID" placeholder=''></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client Name</Form.Label>
                 <Form.Control type="text" name="ClientName" />
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client Address</Form.Label>
                <Form.Control type='number' name="ClientAddress" placeholder='Line 1'></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client Address</Form.Label>
                 <Form.Control type="text" name="ClientAddress" placeholder='Line 2' />
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client Address - City</Form.Label>
                <Form.Control type='number' name="City" placeholder='City'></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client Address - State</Form.Label>
                 <Form.Control type="text" name=" State" placeholder='State'/>
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client GST</Form.Label>
                <Form.Control type='number' name="ClientGST" placeholder=''></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Kind attn</Form.Label>
                 <Form.Control type="text" name="Kindattn"/>
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Candidate Name</Form.Label>
                <Form.Control type='number' name="CandidateName" placeholder=''></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Designation</Form.Label>
                 <Form.Control type="text" name="Designation" />
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Sign up rate</Form.Label>
                <Form.Control type='number' name="ignUpRate" placeholder=''></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Date Of Joining</Form.Label>
                 <Form.Control type="date" name="ateOfJoining" />
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>CTC</Form.Label>
                <Form.Control type='text' name="CTC" placeholder=''></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Invoice Base Value</Form.Label>
                 <Form.Control type="text" name="InvoiceBaseValue" />
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Subtotal</Form.Label>
                <Form.Control type='number' name="Subtotal" placeholder=''></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>CGST</Form.Label>
                 <Form.Control type="text" name="CGST"/>
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>IGST</Form.Label>
                <Form.Control type='text' name="IGST" placeholder=''></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>SGST</Form.Label>
                 <Form.Control type="text" name="SGST" />
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Total Invoice Value</Form.Label>
                <Form.Control type='text' name=" TotalInvoiceValue" placeholder=''></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Amount In Words</Form.Label>
                 <Form.Control type="text" name="AmountInWords" />
                </Col>
                </Row>
                <Button variant='primary' className='mx-5 mt-3 mb-3' type="submit" >Save</Button>
                <Button variant='dark' className='mx-5 mt-3 mb-3'>Close</Button>
                </Form>
      </Container>
    </div>
  )
}

export default EditInvoice