import React, {useState} from 'react'
import Sidebar from '../Sidebar/Sidebar';
import NavbarMenu from '../NavbarMenu/NavbarMenu';
import { Container, Button, Tooltip,OverlayTrigger, Form, Table, Modal, Row, Col, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useLocalStorage from 'use-local-storage'
// import Select from 'react-select'
import { ToastContainer, toast } from 'react-toastify';
import Pdf from "./Pdf.pdf"
import ReactAudioPlayer from "react-audio-player";
import './ListOfjd.css'
import {CSVLink} from "react-csv"


const Listofjds = () => {
  const Studentlist = [
    {id:1, Date:"2", Clientname:"prashant Kumar",JDtitle:"Automobile",JDlocation:"Patna",RecruiterID:"A",Candidatename:"yes", Currentdesignation:"n/a",Currentsalary:"null", LastAppraisal:"18-may-2022"},
    {id:2, Date:"003", Clientname:"neeraj Kumar", JDtitle:"Automobile",JDlocation:"Ranchi", RecruiterID:"B",Candidatename:"no", Currentdesignation:"n/a", Currentsalary:"null",LastAppraisal:"19-may-2022"},
    {id:3, Date:"33", Clientname:"prashant Kumar", JDtitle:"Automobile",JDlocation:"Haryana",RecruiterID:"C", Candidatename:"yes", Currentdesignation:"n/a", Currentsalary:"null", LastAppraisal:"20-may-2022"},
    {id:4, Date:"33", Clientname:"dd Kumar", JDtitle:"Automobile",JDlocation:"Delhi", RecruiterID:"in-house", Candidatename:"yes", Currentdesignation:"n/a",Currentsalary:"null",LastAppraisal:"21-may-2022"}
]
const headers = [
    {lable:"Status", key:"id"},
    {label:"JD No. ", key:"Clientname"},
    {label:"JDs upload date and time", key:"LastAppraisal"},
    {label:"Client Details", key:"RecuriterID"},
    {label:"JD Details", key:"id"},
    {label:"Special Comments/Remarks by admin about JD", key:"Candidatename"},
    {label:"Term of JD", key:"Candidatename"},
    {label:"My payout", key:"id"},
    {label:"JD Discription", key:"Candidatename"},
    {label:"Assured delivery required by the client (TAT)", key:"candidatename"},
    {label:"Client coordination to be done by whom?", key:"JDlocation"},
    {label:"CVs quality check required by Admin?", key:"candidatename"},
    {label:"Personal Information", key:"candidatename"},
    {label:"Work information", key:"candidatename"},
    {label:"Bank Details", key:"candidatename"}
   

]
const csvReport = {
  filename: 'Studentlist.csv',
  headers: headers,
  data: Studentlist
}

    
    function refreshPage(){ 
        window.location.reload(); 
    }
 

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

 
    const [show4, setShow4] = useState(false);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);
    const [show5, setShow5] = useState(false);
    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);
    const [show6, setShow6] = useState(false);
    const handleClose6 = () => setShow6(false);
    const handleShow6 = () => setShow6(true);
    const [show7, setShow7] = useState(false);
    const handleClose7 = () => setShow7(false);
    const handleShow7 = () => setShow7(true);
    
    const [show8, setShow8] = useState(false);

    const handleClose8 = () => setShow8(false);
    const handleShow8 = () => setShow8(true);    

    const [theme] = useLocalStorage('theme' ? 'dark' : 'light')
    const notify = () => toast.success("Locked");
  return (
    <div data-theme={theme} style={{overflow:'hidden', height:'100vh'}}>
    <ToastContainer position={'top-center'}/>
 <Sidebar />
     <NavbarMenu />
     <Container className='jd-list' style={{marginTop:'8rem'}}>
         <div className='d-flex text mb-2'>
         <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Number of JD's</Tooltip>}><p >Number of JDs (7)</p></OverlayTrigger><span className='mx-3 fw-bold'>|</span>
         <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Reload Page</Tooltip>}>
         <Button variant='light' size='sm' onClick={refreshPage}><i className="fas fa-redo-alt mb-3"></i></Button>
         </OverlayTrigger>
         <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Filter Search of Jd list</Tooltip>}>
      <Link to="/JdListFilter"><Button variant='danger' className='mx-3' size='sm'><i className="fas fa-filter me-2"style={{color:'#fff'}} ></i>Filter</Button></Link>
      </OverlayTrigger>
      <Button variant='danger' className='mx-3' ><CSVLink {...csvReport} ><i className='fa fa-download'style={{color:'#fff'}}></i></CSVLink></Button>

         </div>
         </Container>
         <div className='jd-wraper' >
         <Container  className='table-data' fluid data-theme={theme}>
             <Table responsive className='data-table' hover >
                 <thead >
                     <tr>
                       <th></th>
                         <th>Status</th>
                         <th>JD No.</th>
                         
                         <th>JDs upload<br></br> date and time</th>
                         <th>Client Details</th>
                         <th>JD Details</th>
                         <th>Special <br></br>Comments/Remarks<br></br> by admin about JD</th>
                         <th>Term of JD</th>
                         <th>My payout</th>
                         <th>JD Discription</th>
                         
                         
                         <th>Assured delivery<br></br> required by<br></br> the client (TAT)</th>
                        
                         <th>Client coordination <br></br>to be done by whom?</th>
                         <th>CVs quality<br></br> check required<br></br> by Admin?</th>
                         
                     
                     </tr>
                 </thead>
                 <tbody data-theme={theme}>
                     <tr>
                       <td className='text-danger fw-bold text-center'>(P)</td>
                         <td className='jdstatus'><Button variant='warning' className='me-2'>open</Button></td>
                         <td>1</td>
                         
                         <td>11/05/22</td>
                         <td className='position'>Client Name<br></br> <span > <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View Client Details</Tooltip>}><i className="fas fa-user me-2" onClick={handleShow}></i></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Client Website</Tooltip>}><a href="https://example.com"><i className='fas fa-globe me-2'></i></a></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Client LinkedIn</Tooltip>}><a href='https://linkedin.com'><i className="fab fa-linkedin me-2"></i></a></OverlayTrigger> | <span className='comapnyname'>Automobile</span> |</span> 1000+</td>
                         <td className='deatail'>Jd Name <br></br><span><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Work Location of JD</Tooltip>}><a href='https://googlemap.com' >India</a></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">₹ 10000+</Tooltip>}><span className='fw-bold text-muted'>₹ 10000+</span></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View All details</Tooltip>}><i className="fas fa-eye ms-2"  onClick={handleShow1}></i></OverlayTrigger></span> </td>
                         <td>Special Comments/Remarks</td>
                         <td className='jd-terms'><i className="fas fa-info-circle" onClick={handleShow4}></i></td>
                         <td className = 'jd-terms'><i className='fas fa-info-circle' onClick={handleShow7}></i></td>
                         <td><a href={Pdf} style={{color:'red', textDecoration:'none'}}><i className="fas fa-file-pdf"></i></a></td>
                         
                         
                         
                         <td>N/A</td>
                         <td>Admin</td>
                         <td >yes</td>
                         {/* <td><Button variant='success' size='sm' onClick={handleShow5}><i className="fas fa-lock me-1" ></i> Lock</Button></td> */}
                     </tr>
                     <tr>
                       <td></td>
                         <td className='jdstatus'><Button variant='danger' className='me-2'>Pending delivery</Button></td>
                         <td>2</td>
                         
                         <td>11/05/22</td>
                         <td className='position'>Client Name 1<br></br> <span > <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View Client Details</Tooltip>}><i className="fas fa-user me-2" onClick={handleShow}></i></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Client Website</Tooltip>}><a href="https://example.com"><i className='fas fa-globe me-2'></i></a></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Client LinkedIn</Tooltip>}><a href='https://linkedin.com'><i className="fab fa-linkedin me-2"></i></a></OverlayTrigger> | <span className='comapnyname'>Banking</span> |</span> 500+</td>
                          <td className='deatail'>Jd Name <br></br><span><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Work Location of JD</Tooltip>}><a href='https://googlemap.com' >India</a></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">₹ 30000+</Tooltip>}><span className='fw-bold text-muted'>₹ 30000+</span></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View All details</Tooltip>}><i className="fas fa-eye ms-2"  onClick={handleShow1}></i></OverlayTrigger></span> </td>
                         <td>Special Comments/Remarks</td>
                         <td className='jd-terms'><i className="fas fa-info-circle" onClick={handleShow4}></i></td>
                         <td className = 'jd-terms'><i className='fas fa-info-circle' onClick={handleShow7}></i></td>
                         <td><a href={Pdf} style={{color:'red', textDecoration:'none'}}><i className="fas fa-file-pdf"></i></a></td>
                         <td>N/A</td>
                         <td>Admin</td>
                         <td >yes</td>
                     </tr>
                     <tr>
                     <td className='text-danger fw-bold text-center'>(P)</td>
                     <td className='jdstatus'><Button style={{backgroundColor:'cyan', color:'black', border:'none'}}>Delivery done-await client feedback</Button></td>
                         <td>3</td>
                         
                         <td>11/05/22</td>
                         <td className='position'>Client Name 3<br></br> <span > <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View Client Details</Tooltip>}><i className="fas fa-user me-2" onClick={handleShow}></i></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Client Website</Tooltip>}><a href="https://example.com"><i className='fas fa-globe me-2'></i></a></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Client LinkedIn</Tooltip>}><a href='https://linkedin.com'><i className="fab fa-linkedin me-2"></i></a></OverlayTrigger> | <span className='comapnyname'>Tech</span> | </span> 2000+</td>
                          <td className='deatail'>Jd Name <br></br><span><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Work Location of JD</Tooltip>}><a href='https://googlemap.com' >India</a></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">₹ 20000+</Tooltip>}><span className='fw-bold text-muted'>₹ 20000+</span></OverlayTrigger>| <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View All details</Tooltip>}><i className="fas fa-eye ms-2"  onClick={handleShow1}></i></OverlayTrigger></span> </td>
                         <td>Special Comments/Remarks</td>
                         <td className='jd-terms'><i className="fas fa-info-circle" onClick={handleShow4}></i></td>
                         <td className = 'jd-terms'><i className='fas fa-info-circle' onClick={handleShow7}></i></td>
                         <td><a href={Pdf} style={{color:'red', textDecoration:'none'}}><i className="fas fa-file-pdf"></i></a></td>
                         
                         <td>N/A</td>
                        
                         <td>user</td>
                         <td>No</td>
                     </tr>
                     <tr>
                     <td className='text-danger fw-bold text-center'>(P)</td>
                     <td className='jdstatus'><Button variant='secondary'>Interview stage</Button></td>
                         <td>4</td>
                         
                         <td>11/05/22</td>
                         <td className='position'>Client Name 4<br></br> <span > <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View Client Details</Tooltip>}><i className="fas fa-user me-2" onClick={handleShow}></i></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Client Website</Tooltip>}><a href="https://example.com"><i className='fas fa-globe me-2'></i></a></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Client LinkedIn</Tooltip>}><a href='https://linkedin.com'><i className="fab fa-linkedin me-2"></i></a></OverlayTrigger> | <span className='comapnyname'>Social Marketing</span> | </span>3000+</td>
                           <td className='deatail'>Jd Name <br></br><span><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Work Location of JD</Tooltip>}><a href='https://googlemap.com' >India</a></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">₹ 40000+</Tooltip>}><span className='fw-bold text-muted'>₹ 40000+</span></OverlayTrigger>| <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View All details</Tooltip>}><i className="fas fa-eye ms-2"  onClick={handleShow1}></i></OverlayTrigger></span> </td>
                         <td>Special Comments/Remarks</td>
                         <td className='jd-terms'><i className="fas fa-info-circle" onClick={handleShow4}></i></td>
                         <td className = 'jd-terms'><i className='fas fa-info-circle' onClick={handleShow7}></i></td>
                           <td><a href={Pdf} style={{color:'red', textDecoration:'none'}}><i className="fas fa-file-pdf"></i></a></td>
                         
                         <td>N/A</td>
                         
                         <td>user</td>
                         <td>No</td>
                     </tr>
                     <tr>
                       <td></td>
                     <td className='jdstatus'><Button variant='success'>Offer stage</Button></td>
                         <td>5</td>
                         
                         <td>11/05/22</td>
                         <td className='position'>Client Name 5<br></br> <span >  <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View Client Details</Tooltip>}><i className="fas fa-user me-2" onClick={handleShow}></i></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Client Website</Tooltip>}><a href="https://example.com"><i className='fas fa-globe me-2'></i></a></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Client LinkedIn</Tooltip>}><a href='https://linkedin.com'><i className="fab fa-linkedin me-2"></i></a></OverlayTrigger> | <span className='comapnyname'>Marketing</span> | </span>9000+</td>
                         <td className='deatail'>Jd Name <br></br><span><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Work Location of JD</Tooltip>}><a href='https://googlemap.com'><i className="fas fa-map-marker-alt me-2"></i></a></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Salary $ 500</Tooltip>}><i class="far fa-money-bill-alt ms-2 me-2"></i></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View All details</Tooltip>}><i className="fas fa-eye ms-2"  onClick={handleShow1}></i></OverlayTrigger></span> </td>
                         <td>Special Comments/Remarks</td>
                         <td className='jd-terms'><i className="fas fa-info-circle" onClick={handleShow4}></i></td>
                         <td className = 'jd-terms'><i className='fas fa-info-circle' onClick={handleShow7}></i></td>
                         <td><a href={Pdf} style={{color:'red', textDecoration:'none'}}><i className="fas fa-file-pdf"></i></a></td>
                         
                         <td>N/A</td>
                      
                         <td>user</td>
                         <td>No</td>
                     </tr>
          
                     <tr>
                     <td className='text-danger fw-bold text-center'>(P)</td>
                     <td className='jdstatus'><Button style={{backgroundColor:'pink', color:'black', border:'none'}}>JD successfully closed</Button></td>
                         <td>6</td>
                         
                         <td>11/05/22</td>
                         <td className='position'>Client Name 6<br></br> <span >  <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View Client Details</Tooltip>}><i className="fas fa-user me-2" onClick={handleShow}></i></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Client Website</Tooltip>}><a href="https://example.com"><i className='fas fa-globe me-2'></i></a></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Client LinkedIn</Tooltip>}><a href='https://linkedin.com'><i className="fab fa-linkedin me-2"></i></a></OverlayTrigger> | <span className='comapnyname'>Mobile shop</span> | </span>200+</td>
                          <td className='deatail'>Jd Name <br></br><span><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Work Location of JD</Tooltip>}><a href='https://googlemap.com' >India</a></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">₹ 80000+</Tooltip>}><span className='fw-bold text-muted'>₹ 80000+</span></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View All details</Tooltip>}><i className="fas fa-eye ms-2"  onClick={handleShow1}></i></OverlayTrigger></span> </td>
                         <td>Special Comments/Remarks</td>
                         <td className='jd-terms'><i className="fas fa-info-circle" onClick={handleShow4}></i></td>
                         <td className = 'jd-terms'><i className='fas fa-info-circle' onClick={handleShow7}></i></td>
                         <td><a href={Pdf} style={{color:'red', textDecoration:'none'}}><i className="fas fa-file-pdf"></i></a></td>
                         
                         <td>N/A</td>
                        
                         <td>user</td>
                         <td>No</td>
                     </tr>
                     <tr>
                     <td className='text-danger fw-bold text-center'>(P)</td>
                     <td className='jdstatus'><Button >Open-Rework</Button><br></br>Client changed the JD criteria</td>
                         <td>7</td>
                         
                         <td>11/05/22</td>
                         <td className='position'>Client Name 7<br></br> <span >  <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View Client Details</Tooltip>}><i className="fas fa-user me-2" onClick={handleShow}></i></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Client Website</Tooltip>}><a href="https://example.com"><i className='fas fa-globe me-2'></i></a></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Client LinkedIn</Tooltip>}><a href='https://linkedin.com'><i className="fab fa-linkedin me-2"></i></a></OverlayTrigger> | <span className='comapnyname'>Web Tech</span> | </span>100+</td>
                                                     <td className='deatail'>Jd Name <br></br><span><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Work Location of JD</Tooltip>}><a href='https://googlemap.com'><i className="fas fa-map-marker-alt me-2"></i></a></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Salary $ 100</Tooltip>}><i class="far fa-money-bill-alt ms-2 me-2"></i></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View All details</Tooltip>}><i className="fas fa-eye ms-2"  onClick={handleShow1}></i></OverlayTrigger></span> </td>
                         <td>Special Comments/Remarks</td>
                         <td className='jd-terms'><i className="fas fa-info-circle" onClick={handleShow4}></i></td>
                         <td className = 'jd-terms'><i className='fas fa-info-circle' onClick={handleShow7}></i></td>
                         <td><a href={Pdf} style={{color:'red', textDecoration:'none'}}><i className="fas fa-file-pdf"></i></a></td>
                         
                         <td>N/A</td>
                        
                         <td>user</td>
                         <td>No</td>
                     </tr>
                 </tbody>
             </Table>
         </Container>
         </div>
     <Modal show={show} onHide={handleClose} size='lg'>
     <Modal.Header closeButton>
       <Modal.Title> <i className="fas fa-building me-3" ></i>Company Name / Title</Modal.Title>
     </Modal.Header>
     <Modal.Body>
         <Row>
             <Col xs={6}>
         <h6 className='fw-bold mt-5 mb-3'> <i className="fas fa-user me-3"></i> Client Id: <span className='text-muted'>001</span></h6>
         <h6 className='fw-bold mt-5 mb-3'> <i className="fas fa-building me-3"></i> Company Name: <span className='text-muted'>Automobile</span></h6>
         <h6 className='fw-bold mt-5 mb-3'> <i className="fas fa-building me-3"></i> Industry: <span className='text-muted'>n/a</span></h6>
         <h6 className='fw-bold mt-5 mb-3'> <i className="fas fa-user me-3"></i> Client type: <span className='text-muted'>Client type</span></h6>

         <h6 className='fw-bold mt-5 mb-3 mx-2'>Employee Size : <span className='text-muted'>1000+</span></h6>
         </Col>
         <Col xs={6}>
         <h6 className='fw-bold mt-5 mb-3'> <i className="fas fa-map me-2"></i> Company location- HQ: <span className='text-muted'>India</span></h6>
         <h6 className='fw-bold mt-5 mb-3'> <i className="fas fa-map me-2"></i> Company address: <span className='text-muted'>Patna</span></h6>
         <h6 className='fw-bold mt-5 '> <i className="fab fa-firefox me-2"></i> Website: </h6>
         <a href="https://example.com">https://example.com</a>
         <h6 className='fw-bold mt-5 '> <i className="fab fa-linkedin me-2"></i>LinkedIn: </h6>
         <a href="https://linkedin.com" className='mx-3'>https://linkedin.com</a>
         </Col>
         </Row>
     </Modal.Body>
     <Modal.Footer>
       <Button variant="secondary" onClick={handleClose}>
         Close
       </Button>
     </Modal.Footer>
   </Modal>
   {/* Second Modal for jd details */}
   <Modal show={show1} onHide={handleClose1} size='xl'>
     <Modal.Header closeButton>
       <Modal.Title> <i className="fas fa-suitcase me-3" ></i>Jd's Name Title</Modal.Title>
     </Modal.Header>
     <Modal.Body>
         <Row>
             <Col xs={6}>
         <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-user"></i> Client name: <span className='text-muted'> pk</span></h6>
         <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> JD title: <span className='text-muted'> N/A</span></h6>
         <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-comment me-2"></i> Special comments/remarks by Admin about JD: <span className='text-muted'> Awesome</span></h6>
         <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-list me-2"></i> List of preferred companies to source candidates?: <span className='text-muted'> N/A</span></h6>
         <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-audio me-2"></i> Audio JD: <span className='mt-5'> <ReactAudioPlayer
   src="http://slider.kz/download/214/psv4.vkuseraudio.net/c815526/u211915439/audios/8e9a9be0b9e5/Caballero%20&%20Jeanjass%20(Chef)%20-%201.Chef.mp3"
   autoPlay
   controls
   style={{height:"4vh"}}
 /></span></h6>
         <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-money-bill-alt me-2"></i> Salary Budget : <span className='text-muted'> n/a</span></h6>
         <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-sort-amount-down me-2"></i> Experience: <span className='text-muted'> n/a</span></h6>
         <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-book me-2"></i> Education: <span className='text-muted'> n/a</span></h6>
         </Col>
         <Col xs={6}>
         
         <h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-map-marked-alt"></i> Work location of JD: <span className='text-muted'> Patna, Bihar , India</span></h6>
         <h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-map-marked-alt"></i> Company address <span className='text-primary text-small'><i className='fas fa-info ms-2 me-2' onClick={()=>{toast.info("Interview location address can be different from this address")}}/></span>: <span className='text-muted'> N/a</span></h6>
         <h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-building"></i> Client company name can be disclosed to the candidate? : <span className='text-muted'> Yes</span></h6>
         <h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-file-csv"></i> Minimum number of CVs submission as required by the client? : <span className='text-muted'> 10</span></h6>
         <h6 className='fw-bold mt-5 mb-5'> <i className="fab fa-intercom"></i> Rounds of an interview: <span className='text-muted mt-2'> Face to Face</span></h6>
         <h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-sticky-note"></i> Notice period preference given by the client: <span className='text-muted'> n/a</span></h6>
<h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-list"></i> No. of Vacancies : <span className='text-muted'> 50</span></h6>
<h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-sort-numeric-up-alt me-2"></i> No. of working days
: <span className='text-muted'> 20</span></h6>
         </Col>
         </Row>
     </Modal.Body>
     <Modal.Footer>
       <Button variant="secondary" onClick={handleClose1}>
         Close
       </Button>
     </Modal.Footer>
   </Modal>
 
   {/* Jd terms modal */}
   <Modal show={show4} onHide={handleClose4} size='lg'>
     <Modal.Header closeButton>
       <Modal.Title>Terms Of JD</Modal.Title>
     </Modal.Header>
     <Modal.Body>
     <Row>
       <Col xs={6}>
         <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i>  Sign up rate with client: <span className='text-muted'> 0</span></h6>
         <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-money-bill-alt me-2"></i> payment terms: <span className='text-muted'> N/A</span></h6>
         <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-calendar-alt me-2"></i> Replacement period: <span className='text-muted'> n/a</span></h6>
       </Col>
       <Col xs={6}>
       <h6 className='fw-bold mt-5 mb-5 mx-3'>  Number of submissions required: <span className='text-muted'> N/A</span></h6>
         <h6 className='fw-bold mt-5 mb-5 mx-3'>Your payout : <span className='text-muted'> n/a</span></h6> 
         <h6 className='fw-bold mt-5 mb-5 mx-3'>Assured delivery required by client (TAT) : <span className='text-muted'> 23-05-2022 6:00 P.M</span></h6> 
         
       </Col>
     </Row>
     </Modal.Body>
     <Modal.Footer>
       <Button variant="secondary" onClick={handleClose4}>
         Close
       </Button>
     </Modal.Footer>
   </Modal>
   {/* Lock For me yes/no Modal  */}
   {/* <Modal show={show5} onHide={handleClose5} size='lg'>
     <Modal.Header closeButton>
       <Modal.Title>Lock For Me</Modal.Title>
     </Modal.Header>
     <Modal.Body>
       <h4 className='text-center'>Would you like to use “Own portal” (Naukri, Monster, Times jobs, Shine etc) or use “Talent Tracker’s Candidate Database?</h4>
         <div className='d-flex justify-content-center mt-5 mb-5'>
           <Button variant='success' className='me-5' onClick={handleShow6} size='sm' >Own Database (Naukri, Monster, Times Jobs, Shine etc)</Button>
         <Button variant="danger"  className='me-5' onClick={handleShow8} size='sm'>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Talent Tracker’s Candidate Database &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       </Button>
         </div>
     </Modal.Body>
     <Modal.Footer>

     </Modal.Footer>
   </Modal> */}
   {/* After Clicking Yes Lock For me yes open jd lock modal with check box */}
   {/* <Modal show={show6} onHide={handleClose6} size='lg'>
     <Modal.Header closeButton>
       <Modal.Title>Lock For Me</Modal.Title>
     </Modal.Header>
     <Modal.Body>
       <Form>
         <Form.Group className='mt-3 mb-3 mx-3'>
           <Form.Check type='checkbox' label="% Payout if use our candidate database." />
         </Form.Group>
         <Form.Group className='mb-3 mx-3'>
           <Form.Check type='checkbox' label="% Payout if use your own portal naukri/monster/times job etc." />
         </Form.Group>
         <Form.Group className='mb-3 mx-3'>
           <Form.Check type='checkbox' label="Absolute value payout if user uses own portal, " />
         </Form.Group>
         <Form.Group className='mb-3 mx-3'>
           <Form.Check type='checkbox' label="Absolute value payout---if use our database" />
         </Form.Group>
         <Form.Group className='mb-3'>
           <Form.Check type='checkbox' label="I accept the assured delivery date" />
         </Form.Group>
         <Form.Group className='mb-3'>
           <Form.Check type='checkbox' label=" I accept the terms of JD" />
         </Form.Group>
         <Button variant='success' onClick={notify}><i className='fas fa-lock me-2'></i>Lock</Button>
       </Form>
     </Modal.Body>
     <Modal.Footer>
     <Button variant="secondary" onClick={handleClose6}>
         Close
       </Button>
     </Modal.Footer>
   </Modal> */}

   <Modal show={show7} onHide={handleClose7} size='lg'>
     <Modal.Header closeButton>
       <Modal.Title>MY Payout</Modal.Title>
     </Modal.Header>
     <Modal.Body>
       <Form>
         <Form.Group className='mt-3 mb-3 mx-3'>
           <Form.Check type='checkbox' label="Payout .......- if you use Own Portal" />
         </Form.Group>
         <Form.Group className='mb-3 mx-3'>
           <Form.Check type='checkbox' label=" Payout......-if you use talent trackers candidate database" />
         </Form.Group>
         
       </Form>
     </Modal.Body>
     <Modal.Footer>
     <Button variant="secondary" onClick={handleClose7}>
         Close
       </Button>
     </Modal.Footer>
   </Modal>

   <Modal show={show8} onHide={handleClose8} size='lg'>
     <Modal.Header closeButton>
       <Modal.Title>Lock For Me</Modal.Title>
     </Modal.Header>
     <Modal.Body>
       <Form>
         <Form.Group className='mt-3 mb-3 mx-3'>
           <Form.Check type='checkbox' label="Your payout will be ........ for this JD" />
         </Form.Group>
         
         <Button variant='success' onClick={notify}><i className='fas fa-lock me-2'></i>Lock</Button>
       </Form>
     </Modal.Body>
     <Modal.Footer>
     <Button variant="secondary" onClick={handleClose8}>
         Close
       </Button>
     </Modal.Footer>
   </Modal>
 </div>
  )
}

export default Listofjds