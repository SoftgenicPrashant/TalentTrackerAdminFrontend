import React, { useState, useEffect } from 'react'
import { Container, Table, Modal, Button, Form, Row, Col } from 'react-bootstrap'
import { ButtonGroup } from 'react-bootstrap';
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
import { ToastContainer, toast } from 'react-toastify';
import { FaStar } from "react-icons/fa";
import { Radio, Rating } from "./RatingStyles";
import './MyProfile.css'
import { Link } from 'react-router-dom';
import { CSVLink } from "react-csv"
import axios from 'axios';


const RecruiterMaster = () => {
  // const [getdata,setgetdata] = useState([])

  // useEffect=()=>{
  //    axios.get("http://localhost:4000/api/allClient").then((Response)=>{

  //        setgetdata(Response.data)
  //    },[])
  // }


  const Studentlist = [
    { id: 1, Date: "2", Clientname: "prashant Kumar", JDtitle: "Automobile", JDlocation: "Patna", RecruiterID: "A", Candidatename: "yes", Currentdesignation: "n/a", Currentsalary: "null", LastAppraisal: "18-may-2022" },
    { id: 2, Date: "003", Clientname: "neeraj Kumar", JDtitle: "Automobile", JDlocation: "Ranchi", RecruiterID: "B", Candidatename: "no", Currentdesignation: "n/a", Currentsalary: "null", LastAppraisal: "19-may-2022" },
    { id: 3, Date: "33", Clientname: "prashant Kumar", JDtitle: "Automobile", JDlocation: "Haryana", RecruiterID: "C", Candidatename: "yes", Currentdesignation: "n/a", Currentsalary: "null", LastAppraisal: "20-may-2022" },
    { id: 4, Date: "33", Clientname: "dd Kumar", JDtitle: "Automobile", JDlocation: "Delhi", RecruiterID: "in-house", Candidatename: "yes", Currentdesignation: "n/a", Currentsalary: "null", LastAppraisal: "21-may-2022" }
  ]
  const headers = [
    { lable: "User Id ", key: "id" },
    { label: "User Name ", key: "Clientname" },
    { label: "Date of addition", key: "LastAppraisal" },
    { label: "User Category", key: "RecuriterID" },
    { label: "How many Jd's", key: "id" },
    { label: "Cv quality check", key: "Candidatename" },

    { label: "User name who accepted the JD", key: "JDlocation" },

    { label: "How many JDs a user can unlock in a day?", key: "id" },
    { label: "Detail JD (doc, pdf file sent by client) to be shown to a particular user even if he or she is accepting the JD?", key: "Candidatename" },
    { label: "Cvs quality check", key: "Candidatename" },
    { label: "Password", key: "Date" },
    { label: "Suspension of user account", key: "candidatename" },
    { label: "Allow user to remove candidate’s mobile number from the tracker sheet", key: "candidatename" },
    { label: "Allow user to write special remarks, comments in the tracker shee", key: "candidatename" },
    { label: "Admin can make it compulsory for user to use own / our database", key: "candidatename" },
    { label: "Don't allow user to edit the status", key: "candidatename" },
    { label: " Fix Payout", key: "candidatename" },
    { label: "Designation", key: "candidatename" },
    { label: "System generated Official email ID of user", key: "candidatename" },
    { label: "Allow one candidate submission by user?", key: "candidatename" },
    { label: "Client Spoc mobile number to be shown to this user?", key: "candidatename" },
    { label: "The user is a consultancy or individual?", key: "candidatename" },
    { label: "Allow user to update the “status” field in “My Workspace", key: "candidatename" },
    { label: "Client coordination", key: "candidatename" },

    { label: "Rating", key: "id" },
    { label: "Consultancy or Individual", key: "Candidatename" },
    { label: "Mobile No.", key: "candidatename" },
    { label: "Current location", key: "JDlocation" },
    { label: "Prefrence IT/non-IT", key: "candidatename" },
    { label:"First Name" , key: "candidatename "},
    { label:"Last Name" , key: "candidatename "},
    { label:"Personal Email" , key: "candidatename "},
    { label:"Mobile Number" , key: "candidatename "},
    { label:"Current Location-City,State" , key: "candidatename "},
    { label:"Password" , key: "candidatename "},
    { label:"Highest Qualification" , key: "candidatename "},
    { label:"Graduation" , key: "candidatename "},
    { label:"Date of Birth" , key: "candidatename "},
    { label:"Languages Known" , key: "candidatename "},
    { label:"No. of Years Recruitment Experience (india/International)" , key: "candidatename "},
    { label:"preferred sectors to JDs? - IT/non IT/ Both" , key: "candidatename "},
    { label:"Currently employed for some organization as a full time employee?" , key: "candidatename "},
    { label:"Are you a consultancy or an individual?" , key: "candidatename "},
    { label:"Do you have Own portal for candidate sourcing? (Naukri, Monster, Times jobs, shine etc?)" , key: "candidatename "},
    { label:"preferred industries to take JDs?" , key: "candidatename "},
    { label:"handle PAN India JDs or only regional?" , key: "candidatename "},
    { label:"Name as per bank account" , key: "candidatename "},
    { label:"Bank Name" , key: "candidatename "},
    { label:"Account Number" , key: "candidatename "},
    { label:"IFSC" , key: "candidatename "},
    { label:"Account Type" , key: "candidatename "},
    { label:"Branch Location" , key: "candidatename "}



  ]
  const csvReport = {
    filename: 'Studentlist.csv',
    headers: headers,
    data: Studentlist
  }

  const [rate, setRate] = useState(0);
  const [show, setShow] = useState(false);

  

  const [show4, setShow4] = useState(false);

  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  return (
    <div>
      <Sidebar />
      <NavbarMenu />
      <ToastContainer />
      <Container>
        <div className='top-button'>

          <div className='mb-2'>

            <ButtonGroup>
              <Button variant='success' as={Link} to='/Filter' className=' mb-3 mt-3'><i className="fa fa-filter me-2" style={{ color: '#fff' }} ></i>Filter</Button>

            </ButtonGroup>

            <Button variant='danger' className='mx-5 mb-3 mt-3'><CSVLink {...csvReport} style={{ textDecoration: "none", color: "white" }}><i className='fa fa-download'></i></CSVLink></Button>
          </div>
        </div>
      </Container>
      <div className='jd-wraper' >
        <Container fluid className='table-data'>

          <Table responsive className='data-table' hover >
            <thead>
              <tr>
                <th></th>
                <th>User Id</th>
                <th>User name</th>
                <th>Date Of adddition </th>
                <th>User Category</th>
                <th>How Many JD's</th>
                <th>Cv Quality Check</th>
                <th>How many JDs a user can unlock in a day?</th>
                <th>CVs quality check required for this user ID? </th>
                <th>Detail JD(doc, pdf file sent by client) to be shown to a particular user even if he or she is  accepting the JD?  </th>
                <th>Password</th>
                <th>Suspension of user account</th>
                <th>Allow user to remove candidate’s mobile number from the tracker sheet</th>
                <th>Allow user to write special remarks, comments in the tracker shee</th>
                <th>Admin can make it compulsory for user to use own / our database</th>
                <th>Don't allow user to edit the status</th>
                <th> Fix Payout</th>
                <th>Designation</th>
                <th>System generated Official email ID of user </th>
                <th>Allow one candidate submission by user? </th>
                <th>Client Spoc mobile number to be shown to this user? </th>
                <th>The user is a consultancy or individual?</th>
                <th>Allow user to update the “status” field in “My Workspace</th>
                <th>Client coordination</th>
                <th>Rating</th>
                
                
                <th>Current Location</th>
                <th>Prefrence IT/NON-IT</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Personal Email</th>
                <th>Mobile Number</th>
                <th>Current Location-City,State</th>
                <th>Password</th>
                <th>Highest Qualification</th>
                <th>Graduation</th>
                <th>Date of Birth</th>
                <th>Languages Known</th>
                <th>No. of Years Recruitment Experience (india/International)</th>
                <th>preferred sectors to JDs? - IT/non IT/ Both</th>
                <th>Currently employed for some organization as a full time employee?</th>
                <th>Are you a consultancy or an individual?</th>
                <th>Do you have Own portal for candidate sourcing? (Naukri, Monster, Times jobs, shine etc?)</th>
                <th>preferred industries to take JDs?</th>
                <th>handle PAN India JDs or only regional?</th>
                <th>Name as per bank account</th>
                <th>Bank Name</th>
                <th>Account Number</th>
                <th>IFSC</th>
                <th>Account Type</th>
                <th>Branch Location</th>
                

              </tr>
            </thead>
            <tbody>
              {/* {/* {getdata.map((jd)=>{
              return(
                <> */}
              <tr>
                <td><Form.Check type='checkbox' /></td>
                <td>UserId</td>
                <td>Username</td>
                <td>DateOfadddition</td>
                <td>UserCategory</td>
                <td>HowManyJDs</td>
                <td>CvQualityCheck</td>
                <td>8</td>
                <td>yes</td>
                <td>yes</td>
                <td>657899</td>
                <td  >yes</td>
                <td>YES</td>
                <td>yes</td>
                <td>na</td>
                <td>Na</td>
                <td>657899</td>
                <td  >yes</td>
                <td>YES</td>
                <td>yes</td>
                <td>na</td>
                <td>yes</td>
                <td>na</td>
                <td>Na</td>
                <td onClick={handleShow4} style={{ color: 'yellow', textDecoration: 'underline' }}><i class="fa fa-star" aria-hidden="true"></i></td>
                
                
                <td>CurrentLocation</td>
                <td>PrefrenceIT</td>
                <td>UserId</td>
                <td>Username</td>
                <td>DateOfadddition</td>
                <td>UserCategory</td>
                <td>HowManyJDs</td>
                <td>CvQualityCheck</td>
                <td>8</td>
                <td>yes</td>
                <td>yes</td>
                <td>657899</td>
                <td  >yes</td>
                <td>YES</td>
                <td>yes</td>
                <td>na</td>
                <td>Na</td>
                <td>657899</td>
                <td  >yes</td>
                <td>YES</td>
                <td>yes</td>
                <td>na</td>
                <td>yes</td>
                <td>na</td>
                <td>Na</td>

              </tr>
              {/*                 
                </>
                )
              })} */}
            </tbody>
          </Table>



        </Container>
      </div>

      {/* <Modal
        show={show}
        size="lg"
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Admin Assigned Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <Row>
              <Col xs={6}>
                <h6 className='fw-bold mt-5 mb-5 mx-3' >User Category :<span className='text-muted'> A</span></h6 >

                <h6 className='fw-bold mt-5 mb-5 mx-3'>How many JDs a user can unlock in a day? :<span className='text-muted'> 20</span></h6 >
                <h6 className='fw-bold mt-5 mb-5 mx-3'>CVs quality check required for this user ID? :<span className='text-muted'> 20%</span></h6 >
                <h6 className='fw-bold mt-5 mb-5 mx-3'>Detail JD (doc, pdf file sent by client) to be shown to a particular user even if he or she is  accepting the JD?  :<span className='text-muted'> na</span></h6 >
                <h6 className='fw-bold mt-5 mb-5 mx-3' >Password :<span className='text-muted'> Na</span></h6 >
                <h6 className='fw-bold mt-5 mb-5 mx-3'>Suspension of user account :<span className='text-muted'> 20%</span></h6 >
                <h6 className='fw-bold mt-5 mb-5 mx-3'>Allow user to remove candidate’s mobile number from the tracker sheet :<span className='text-muted'> 20%</span></h6 >
                <h6 className='fw-bold mt-5 mb-5 mx-3'>Allow user to write special remarks, comments in the tracker sheet :<span className='text-muted'> 20%</span></h6 >
              </Col><Col xs={6}><h6 className='fw-bold mt-5 mb-5 mx-3'>Admin can make it compulsory for user to use own / our database :<span className='text-muted'> 20%</span></h6 >
                <h6 className='fw-bold mt-5 mb-5 mx-3'>Don't allow user to edit the status :<span className='text-muted'> 20%</span></h6 >
                <h6 className='fw-bold mt-5 mb-5 mx-3'>Payout :<span className='text-muted'> 20%</span></h6 >
                <h6 className='fw-bold mt-5 mb-5 mx-3'>Designation :<span className='text-muted'> 20%</span></h6 >
                <h6 className='fw-bold mt-5 mb-5 mx-3'>System generated Official email ID of user :<span className='text-muted'> 20%</span></h6 >
                <h6 className='fw-bold mt-5 mb-5 mx-3'>Allow one candidate submission by user? :<span className='text-muted'> yes</span></h6 >
                <h6 className='fw-bold mt-5 mb-5 mx-3'>Client Spoc mobile number to be shown to this user? :<span className='text-muted'> yess</span></h6 >
                <h6 className='fw-bold mt-5 mb-5 mx-3'>The user is a consultancy or individual?:<span className='text-muted'> individual</span></h6 >
                <h6 className='fw-bold mt-5 mb-5 mx-3'>Allow user to update the “status” field in “My Workspace :<span className='text-muted'> yes</span></h6 >
                <h6 className='fw-bold mt-5 mb-5 mx-3'>Client coordination :<span className='text-muted'> 20%</span></h6 >
              </Col></Row>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={notify}>Save</Button>
        </Modal.Footer>
      </Modal> */}

      {/* <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Personal Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>First Name </Form.Label>
                <Form.Control type='text' value='Isha' />
              </Col>
              <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>Last Name </Form.Label>
                <Form.Control type='text' Value='jaiswal' />
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>Personal Email</Form.Label>
                <Form.Control type='text' value='eshajaiswal98@gmail.com' />
              </Col>
              <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>Mobile Number</Form.Label>
                <Form.Control type='text' value='7654328965' />
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>Current Location-City,State</Form.Label>
                <Form.Control type='text' value='patna , Bihar' />
              </Col>
              <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>Password</Form.Label>
                <Form.Control type='password' value='7654328965' />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Work Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>Highest Qualification</Form.Label>
                <Form.Control type='text' value='Mca' />
              </Col>
              <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>Graduation</Form.Label>
                <Form.Control type='text' value='Bca' />
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>Date of Birth</Form.Label>
                <Form.Control type='text' value='17-oct-1998' />
              </Col>
              <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>Languages Known</Form.Label>
                <Form.Control type='text' value='Hindi,English' />
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>No. of Years Recruitment Experience (india/International)</Form.Label>
                <Form.Control type='text' value='4' />
              </Col>
              <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>preferred sectors to JDs? - IT/non IT/ Both</Form.Label>
                <Form.Control type='text' value='IT' />
              </Col>
            </Row>
            <Row>

              <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>Currently employed for some organization as a full time employee?</Form.Label>
                <Form.Control type='text' value='YES' />
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>Are you a consultancy or an individual?</Form.Label>
                <Form.Control type='text' value='Individual' />
              </Col>
              <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>Do you have Own portal for candidate sourcing? (Naukri, Monster,  Times jobs, shine etc?)</Form.Label>
                <Form.Control type='text' value='yes' />
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>preferred industries to take JDs?
                </Form.Label>
                <Form.Control type='text' value='services' />
              </Col>
              <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>handle PAN India JDs or only regional?</Form.Label>
                <Form.Control type='text' value='yes' />
              </Col>
            </Row>


          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
      <Modal show={show3} onHide={handleClose3}>
        <Modal.Header closeButton>
          <Modal.Title>User Bank Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <Row>
              <Col sx={6}>
                <Form.Label className='fw-bold mb-3 mt-3'> Name as per bank account</Form.Label>
                <Form.Control type="text" value=' isha '></Form.Control>
              </Col>
              <Col sx={6}>
                <Form.Label className='fw-bold mb-3 mt-3'> Bank Name</Form.Label>
                <Form.Control type="text" value='central bank of india '></Form.Control>
              </Col>
            </Row>
            <Row>
              <Col sx={6}>
                <Form.Label className='fw-bold mb-3 mt-3'> Account Number</Form.Label>
                <Form.Control type="text" value='3461027255 '></Form.Control>
              </Col>
              <Col sx={6}>
                <Form.Label className='fw-bold mb-3 mt-3'> IFSC</Form.Label>
                <Form.Control type="text" value=' CBIN0283353'></Form.Control>
              </Col>
            </Row>
            <Row>
              <Col sx={6}>
                <Form.Label className='fw-bold mb-3 mt-3'> Account Type</Form.Label>
                <Form.Control type="text" value=' saving'></Form.Control>
              </Col>
              <Col sx={6}>
                <Form.Label className='fw-bold mb-3 mt-3'> Branch Location</Form.Label>
                <Form.Control type="text" value=' hanuman nagar'></Form.Control>
              </Col>
            </Row>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose3}>
            Close
          </Button>

        </Modal.Footer>
      </Modal> */}
      <Modal show={show4} onHide={handleClose4}>
        <Modal.Header closeButton>
          <Modal.Title>Rating</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <Row>
              <Col xs={6}>
                <Form.Label className='fw-bold mb-3'>Category</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>select</option>
                  <option value="1">A</option>
                  <option value="2">B</option>
                  <option value="3">C</option>
                </Form.Select>

              </Col>
              <Col xs={6}>
                <Form.Label className='fw-bold mb-3'>User ID</Form.Label>
                <Form.Control type='text' placeholder='Enter your user Id' />
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <Form.Label className='fw-bold mb-3'>Months & Year</Form.Label>
                <Form.Control type='text' placeholder=' Enter Months & Year' />
              </Col>
              <Col xs={6}>
                <Form.Label className='fw-bold mb-3'>Rating Parameter</Form.Label>
                <Form.Control type='text' placeholder=' Out of 10' />
                <i className='fas fa-star' />
                <i className='fas fa-star' />
                <i className='fas fa-star' />
                <i className='fas fa-star' />
                {/* <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' /> */}
                <Button variant="primary" onClick={handleClose4}>
                  Save
                </Button>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <Form.Label className='fw-bold mb-3'>Final Rating</Form.Label>

                <Container>
                  {[...Array(10)].map((item, index) => {
                    const givenRating = index + 1;
                    return (
                      <label>
                        <Radio
                          type="radio"
                          value={givenRating}
                          onClick={() => {
                            setRate(givenRating);
                            alert(`Are you sure you want to give ${givenRating} stars ?`);
                          }}
                        />
                        <Rating>
                          <FaStar
                            color={
                              givenRating < rate || givenRating === rate
                                ? "FFDF00"
                                : "rgb(192,192,192)"
                            }
                          />
                        </Rating>
                      </label>
                    );
                  })}
                </Container>


              </Col>
            </Row>
          </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose4}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default RecruiterMaster