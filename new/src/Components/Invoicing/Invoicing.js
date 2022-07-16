import React,{useState,useEffect} from 'react'
import { Container,Row, Col, Form ,Modal,Button, Table} from 'react-bootstrap'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { ToastContainer,toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import {CSVLink} from "react-csv"
import axios from 'axios'

const Invoicing = () => {
//   const [getdata,setgetdata] = useState([])

//   useEffect(()=>{
//     axios.get("http://localhost:4000/api/allClient").then((Response)=>{

//         setgetdata(Response.data)
//     })
//  },[])


  const invoice = [
    {id:1, Date:"2-02-22", Clientname:"prashant Kumar",JDtitle:"Automobile",JDlocation:"Patna",RecruiterID:"A",Candidatename:"yes", Currentdesignation:"n/a",Currentsalary:"null", LastAppraisal:"18-may-2022"},
    {id:2, Date:"03-02-22", Clientname:"neeraj Kumar", JDtitle:"Automobile",JDlocation:"Ranchi", RecruiterID:"B",Candidatename:"no", Currentdesignation:"n/a", Currentsalary:"null",LastAppraisal:"19-may-2022"},
    {id:3, Date:"12-02-22", Clientname:"prashant Kumar", JDtitle:"Automobile",JDlocation:"Haryana",RecruiterID:"C", Candidatename:"yes", Currentdesignation:"n/a", Currentsalary:"null", LastAppraisal:"20-may-2022"},
    {id:4, Date:"22-02-22", Clientname:"dd Kumar", JDtitle:"Automobile",JDlocation:"Delhi", RecruiterID:"in-house", Candidatename:"yes", Currentdesignation:"n/a",Currentsalary:"null",LastAppraisal:"21-may-2022"}
]
const headers = [
    {lable:"invoice Number ", key:"id"},
    {label:" Date ", key:"Date"},
    {label:"Client Name", key:"Clientname"},
    {label:"Client address", key:"JDlocation"},
    {label:"Client Address Line1", key:"JDlocation"},
    {label:"Client Address Line2", key:"JDlocation"},
    {label:"Client Address City", key:"JDlocation"},
    {label:"Client Address State", key:"Jdlocation"},
    {label:"Client Gst", key:"Currentsalary"},
    {label:"kind attn", key:"RecuriterID"},
    {label:"Candidate Name", key:"Clientename"},
    {label:"Designation", key:"Currentdesignation"},
    {label:"Date of joining", key:"Date"},
    {label:"Sign up rate", key:"Currentdesignation"},
    {label:"Submission Date", key:"SubmissionDate"},
    {label:"CTC", key:"Currentdesignation"},
    {label:"Invoice base value", key:"Currentdesignation"},
    {label:"Subtotal", key:"Currentdesignation"},
    {label:"CGST", key:"Currentdesignation"},
    {label:"SGST", key:"Currentdesignation"},
    {label:"IGST", key:"Currentdesignation"},
    {label:"Total invoice value", key:"Currentdesignation"},
    {label:"Amount in words", key:"Currentdesignation"}
   

]
const csvReport = {
  filename: 'invoice.csv',
  headers: headers,
  data: invoice
}

  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const notify = () => toast.success("saved");
  return (
    <div>
         <Sidebar />
      <NavbarMenu />
      <ToastContainer/>
      <Container className='myprofile'>
            <Button variant='primary' onClick={handleShow} className='mb-2 mx-5'>Add Invoice </Button>&nbsp;
            <Button variant='success' as={Link} to='/filter-invoice'><i className='fa fa-filter'>Filter</i></Button>

            <Button variant='danger'className='mb-2 mx-5'><CSVLink {...csvReport} style={{textDecoration:"none", color:"white"}}><i className='fa fa-download'></i></CSVLink></Button>
        </Container>
        <div className='jd-wraper' >
        <Container fluid className='table-data' >
        <Table responsive className='data-table' hover>
                    <thead>
                        <tr>
                            <th></th>
                <th>Invoice Number</th>
                
                <th>Date</th>
                <th>User ID</th>
                       <th>Candidate ID</th>
                       <th>JD Number</th>
                <th>Client Name </th>
                
                <th>Client Address-Line 1</th>
                <th>Client Address-Line 2</th>
                <th>Client Address - City</th>
                <th>Client Address - State</th>
                <th>Client GST </th>
                <th>Kind attn </th>
                <th>Candidate Name</th>
                <th>Designation</th>
                <th>Date of joining </th>
                <th>Sign up rate </th>
                <th>CTC</th>
                <th>Inoice Base value </th>
                <th>Subtota</th>
                <th>CGST</th>
                <th>SGST</th>
                <th>IGST</th>
                <th>Total invoice value </th>
                <th>Amount in words </th>
                <th>Create</th>
                <th>Action</th>
                <th></th>
              
               </tr>
               </thead>
               <tbody>
               {/* {getdata.map((jd)=>{
                return(
                  <>   */}
                   <tr>
                       <td><Form.Check type='checkbox'></Form.Check></td>
                       <td>InvoiceNumber</td>
                       <td>InvoiceDate</td>
                       <td>User ID</td>
                       <td>Candidate ID</td>
                       <td>JD Number</td>
                       <td>Clientname</td>
                       <td>ClientAddress</td>
                       <td>ClientAddress</td>
                       <td>City</td>
                       <td>State</td>
                       <td>ClientGST</td>
                       <td>Kindattn</td>
                       <td>CandidateName</td>
                       <td>Designation</td>
                       <td>DateOfJoining</td>
                       <td>SignUpRate</td>
                       <td>CTC</td>
                       <td>InvoiceBaseValue</td>
                       <td>Subtotal</td>
                       <td>CGST</td>
                       <td>IGST</td>
                       <td>SGST</td>
                       <td>TotalInvoiceValue</td>
                       <td>AmountInWords</td>
                      <td><Button variant='primary'  className='mb-2 '>create  </Button></td>
                       
                       
                       <td><Button variant='success' as={Link} to='/invoice-edit' ><i className='fa fa-edit'></i> </Button></td>
                      
                       <td><Button variant="warning"  as={Link} to="/view-invoice"><i className='fa fa-eye'></i></Button></td>
                      
                      
                   </tr>
                   {/* </>
                )
              })} */}
                   </tbody>
               </Table>
            </Container> 
            </div>
            <Modal
        show={show}
        size="lg"
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Client</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <Form>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Invoice Number</Form.Label>
                <Form.Control type='number' placeholder=''></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Invoice Date</Form.Label>
                 <Form.Control type="date" />
                </Col>
                </Row>
                <Row>
                  <Col xs={6}>
                  <Form.Label  className='fw-bold mb-3 mt-3'>User ID</Form.Label>
                <Form.Control type='number' placeholder=''></Form.Control>
                  </Col>
                  <Col xs={6}>
                  <Form.Label  className='fw-bold mb-3 mt-3'>Candidate  ID</Form.Label>
                <Form.Control type='number' placeholder=''></Form.Control>
                  </Col>
                </Row>
                <Row>
                <Col xs={6}>
                  <Form.Label  className='fw-bold mb-3 mt-3'>JD Number</Form.Label>
                <Form.Control type='number' placeholder=''></Form.Control>
                  </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client ID</Form.Label>
                <Form.Control type='number' placeholder=''></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client Name</Form.Label>
                 <Form.Control type="text" />
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client Address</Form.Label>
                <Form.Control type='number' placeholder='Line 1'></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client Address</Form.Label>
                 <Form.Control type="text" placeholder='Line 2' />
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client Address - City</Form.Label>
                <Form.Control type='number' placeholder='City'></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client Address - State</Form.Label>
                 <Form.Control type="text" placeholder='State'/>
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client GST</Form.Label>
                <Form.Control type='number' placeholder=''></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Kind attn</Form.Label>
                 <Form.Control type="text" />
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Candidate Name</Form.Label>
                <Form.Control type='number' placeholder=''></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Designation</Form.Label>
                 <Form.Control type="text" />
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Sign up rate</Form.Label>
                <Form.Control type='number' placeholder=''></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Date Of Joining</Form.Label>
                 <Form.Control type="date" />
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>CTC</Form.Label>
                <Form.Control type='text' placeholder=''></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Invoice Base Value</Form.Label>
                 <Form.Control type="text" />
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Subtotal</Form.Label>
                <Form.Control type='number' placeholder=''></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>CGST</Form.Label>
                 <Form.Control type="text" />
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>IGST</Form.Label>
                <Form.Control type='text' placeholder=''></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>SGST</Form.Label>
                 <Form.Control type="text" />
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Total Invoice Value</Form.Label>
                <Form.Control type='text' placeholder=''></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Amount In Words</Form.Label>
                 <Form.Control type="text" />
                </Col>
                </Row>
                </Form>

                </Modal.Body>
                <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={notify}>Save</Button>
        </Modal.Footer>
                </Modal>
        
        
    </div>
  )
}

export default Invoicing