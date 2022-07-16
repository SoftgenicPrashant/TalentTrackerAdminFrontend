import React,{useState,useEffect} from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { Container, Row, Col,Form ,Button} from 'react-bootstrap'
import { ToastContainer  } from 'react-toastify'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ClientAgreement = () => {
//   const [getdata,setgetdata] = useState({})

//   useEffect(()=>{
//     axios.get("http://localhost:4000/api/allClient").then((Response)=>{

//         setgetdata(Response.data)
//     })
//  },[])

  return (
    <div>
         <Sidebar />
        <NavbarMenu />
        <ToastContainer />   
        <Container className="jd-cont">
            <form >
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Date of agreement </Form.Label>
                <Form.Control type='text' name="DateOfAgreement" placeholder='dd-mm-yyyy'/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>client company name </Form.Label>
                <Form.Control type='text' name="ClientCompanyName" placeholder=''/>
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>sign up rate  </Form.Label>
                <Form.Control type='text' name="SignUpRate" placeholder=''/>
                
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>payment terms  </Form.Label>
                <Form.Control type='text' name="PaymentTerms" placeholder=''/>
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>replacement period  </Form.Label>
                <Form.Control type='text' name="ReplacementPeriod" placeholder=''/>
                </Col>
                </Row>
            
                    <Button variant='info' className='mr-3 my-3 mx-3' type="submit" >Save</Button>
                    <Button variant='dark' className='ml-3 my-3 mx-3'>Close</Button>
                    <Button variant='danger' ><i className=' ml-3 fa fa-download'></i></Button> 
                    <Button variant='warning' className='mr-3 my-3 mx-3' as={Link} to='/'>Create</Button>  
                
                </form>
                </Container>
    </div>
  )
}

export default ClientAgreement