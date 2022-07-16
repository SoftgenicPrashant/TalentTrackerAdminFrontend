import React,{useEffect,useState} from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { ToastContainer } from 'react-toastify'
import { Container,Row,Col ,Form,Button } from 'react-bootstrap'
import axios from 'axios'

const EditListOfCandidate = () => {
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
      <Container className="jd-cont">
      <Form >
            <Row>
                <Col xs={6}>
                    <Row>
                        <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>Date of adding a candidate</Form.Label>
                <Form.Control type='date' name="" />
                </Col>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'> time of adding a candidate</Form.Label>
                <Form.Control type='time' name="" />
                </Col>
                </Row>
                </Col>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>Candidate ID</Form.Label>
                <Form.Control type='text' name="" placeholder='Enter Candidate ID'/>
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>JD number </Form.Label>
                <Form.Control type='text' name="" placeholder=' '/>
                </Col>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>Client name</Form.Label>
                <Form.Control type='text' name="" placeholder=''/>
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>JD title </Form.Label>
                <Form.Control type='text' name="" placeholder=' '/>
                </Col>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>User ID</Form.Label>
                <Form.Control type='text' name="" placeholder=''/>
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>User name</Form.Label>
                <Form.Control type='text' name="" placeholder=' '/>
                </Col>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>JD Tittle</Form.Label>
                <Form.Control type='text' name="" placeholder=' '/>
               
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>current organization</Form.Label>
                <Form.Control type='text' name="" placeholder=' '/>
                </Col>
               
            </Row>
           
            
            <Button variant='success' type="submit">Apply Filter</Button> &nbsp;
              <Button variant='dark' className='mx-5 my-4'>Close</Button>&nbsp;
                            
             
              <Button variant='primary'>Reset</Button>
              
            
            </Form>
      </Container>
    </div>
  )
}

export default EditListOfCandidate