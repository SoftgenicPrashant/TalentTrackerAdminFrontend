import React,{useState} from 'react'
import { Container,Dropdown,Row,Col,Form,Button} from 'react-bootstrap'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { ToastContainer } from 'react-toastify'
import Select from 'react-select'
import {Link} from 'react-router-dom'
const FilterClientmaster = () => {
    const [selected9, Setselected9]=useState(false)
  const handleselected9 = () => Setselected9(!selected9)
  const [selected10, Setselected10]=useState(false)
  const handleselected10 = () => Setselected10(!selected9)
    const options = [
        { value: 'Services', label: 'Services' },
        { value: 'Manufacturing', label: 'Manufacturing' },
        { value: 'IT- Information Technology', label: 'IT- Information Technology' },
        { value: 'Education', label: 'Education' },
        { value: 'Real estate/Construction', label: 'Real estate/Construction' },
        { value: 'Finance/BFSI', label: 'Finance/BFSI' },
        { value: 'Healthcare/Pharm', label: 'Healthcare/Pharm' },
        { value: 'Retail', label: 'Retail' },
        { value: 'Hospitality', label: 'Hospitality' },
        { value: 'Public Sector/Philonthropy/Associations', label: 'Public Sector/Philonthropy/Associations' },
        { value: 'FMCG', label: 'FMCG' },
        { value: 'Textile', label: 'Textile' },
        { value: 'Telecom', label: 'Telecom' },
        { value: 'logistics/supply chain', label: 'logistics/supply chain' },
        { value: 'Media/Publishing/Entertainment', label: 'Media/Publishing/Entertainment' },
        { value: 'Others', label: 'Others' },
        { value: 'Create', label: 'Create' }
      
      ]
   
  return (
    <div>
         <Sidebar />
      <NavbarMenu />
      <ToastContainer/>
      <Container className='myprofile'>
      
              
            <Form >
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client ID</Form.Label>
                <Form.Control type='text' value='2345676' name="client_id" />
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client Name</Form.Label>
                <Form.Control type='text' name="client_name" placeholder='Enter Client Name'/>
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Group className='mt-3'>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client location   </Form.Label>
                <Dropdown>
  <Dropdown.Toggle variant="light" id="dropdown-basic">
    Select
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item  >Delhi</Dropdown.Item>
    <Dropdown.Item   >Gurgaon</Dropdown.Item>
    <Dropdown.Item  >Noida</Dropdown.Item>
    <Dropdown.Item   >Mumbai</Dropdown.Item>
    <Dropdown.Item  >Pune</Dropdown.Item>
    <Dropdown.Item   >Ahmedabad</Dropdown.Item>
    <Dropdown.Item  >Chennai</Dropdown.Item>
    <Dropdown.Item   >Kolkata</Dropdown.Item>
    <Dropdown.Item  >Hyderabad</Dropdown.Item>
    <Dropdown.Item   >Banglore</Dropdown.Item>
    <Dropdown.Item   >Jaipur</Dropdown.Item>
    <Dropdown.Item  onClick={handleselected10} >Create</Dropdown.Item>
    
  </Dropdown.Menu>
</Dropdown>
                   
                  {selected10? <div>
                    <Form.Control type='text'></Form.Control>
                    </div>:<></>}
                    
                    
                  </Form.Group>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client industry </Form.Label>
                <Select isMulti options={options} name="client_industry" />
                </Col>
                </Row>
                <Row>
            <Col xs={4}>
               <Form.Label className='fw-bold mb-3 mt-3'>Client Spoc1 Name</Form.Label>  
               <Row>
                <Col xs={6}>
                <Form.Control type='text' name="" placeholder="First name" />  
                </Col>
                <Col xs={6}>
                <Form.Control type='text' name="" placeholder="Last name" />  
                </Col>
               </Row>
                    
                      
            </Col>
            <Col xs={4}>
               <Form.Label className='fw-bold mb-3 mt-3'>Client Spoc2 Name</Form.Label>  
               <Row>
                <Col xs={6}>
                <Form.Control type='text' name="" placeholder="First name" />  
                </Col>
                <Col xs={6}>
                <Form.Control type='text' name="" placeholder="Last name" />  
                </Col>
               </Row>      
                      
            </Col>
            <Col xs={4}>
               <Form.Label className='fw-bold mb-3 mt-3'>Client Spoc3 Name</Form.Label>  
               <Row>
                <Col xs={6}>
                <Form.Control type='text' name="" placeholder="First name" />  
                </Col>
                <Col xs={6}>
                <Form.Control type='text' name="" placeholder="Last name" />  
                </Col>
               </Row>      
                      
            </Col>
            </Row>
            <Row>
            <Col xs={4}>
               <Form.Label className='fw-bold mb-3 mt-3'>Client Spoc1 Email</Form.Label>  
               <Form.Control type='text' name="" />        
                      
            </Col>
            <Col xs={4}>
               <Form.Label className='fw-bold mb-3 mt-3'>Client Spoc2 Email</Form.Label>  
               <Form.Control type='text' name="" />        
                      
            </Col>
            <Col xs={4}>
               <Form.Label className='fw-bold mb-3 mt-3'>Client Spoc3 Email</Form.Label>  
               <Form.Control type='text' name="" />        
                      
            </Col>
            </Row>
            <Row>
            <Col xs={4}>
               <Form.Label className='fw-bold mb-3 mt-3'>Client Spoc1 Mobile Number</Form.Label>  
               <Form.Control type='text' name="" />        
          
            
            </Col>
            <Col xs={4}>
               <Form.Label className='fw-bold mb-3 mt-3'>Client Spoc2 Mobile Number</Form.Label>  
               <Form.Control type='text' name="" />        
                      
            </Col>
            <Col xs={4}>
               <Form.Label className='fw-bold mb-3 mt-3'>Client Spoc3 Mobile Number</Form.Label>  
               <Form.Control type='text' name="" />        
          
            
            </Col>
            </Row>
            <Row>
            <Col xs={4}>
               <Form.Label className='fw-bold mb-3 mt-3'>Client Spoc1 Designation</Form.Label>  
               <Form.Control type='text' name="" />        
          
            
            </Col>
            <Col xs={4}>
               <Form.Label className='fw-bold mb-3 mt-3'>Client Spoc2 Designation</Form.Label>  
               <Form.Control type='text' name="" />        
          
            
            </Col>
            <Col xs={4}>
               <Form.Label className='fw-bold mb-3 mt-3'>Client Spoc3 Designation</Form.Label>  
               <Form.Control type='text' name="" />
               </Col>
    
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client GST   </Form.Label>
                <Form.Control type='text' name="client_GST" placeholder=''/>
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client type</Form.Label>
                <Form.Select aria-label="Default select example" name="client_type">
                    <option>select</option>
                    <option value="Start up">Start Up</option>
                    <option value="sme">Sme</option>
                    <option value="Public limited">public limited</option>
                    <option value="Mnc">Mnc</option>
                    <option value="Mid size private limited">Mid size private limited</option>
                    <option value="Large corporation">Large corporation</option>
                    <option value="Not known">Not known</option>
                    
                    </Form.Select>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Date/month/year of adding</Form.Label>
                <Form.Control type="date" name="" />
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Agreed sign up rate </Form.Label>
                <Form.Select aria-label="Default 8.33% example" name="Agreed_signup_rate">
                    
                    <option value="1">8.33%</option>
                    <option value="2">7.5%</option>
                    <option value="3">7%</option>
                    <option value="4">10%</option>
                    <option value="5">6%</option>
                    <option value="6">12%</option>
                    </Form.Select>
                    <Button variant='primary' onClick={handleselected9} >Create</Button>
                    
                    </Col>
                    {selected9? <div>
                    <Form.Control type='text'></Form.Control>
                    </div>:<></>}
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Agreed payment terms</Form.Label>
                <Form.Select aria-label="Default 30days example" name="Agreed_payment_term">
                    
                    <option value="1">Immediate</option>
                    <option value="1">30 days</option>
                    <option value="2">45 days</option>
                    <option value="1">60 days</option>
                    <option value="2">90 days</option>
                    </Form.Select>

                    
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Agreed replacement period</Form.Label>
                <Form.Select aria-label="Default 3 months example" name="Agreed_replacement_period">
                    <option>3 months</option>
                    <option value="1">3 months</option>
                    <option value="2">6 months</option>
                    </Form.Select>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Admin comments/remarks </Form.Label>
                <Form.Control type='text' name="Admin_remarks" placeholder=''/>
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Company Address </Form.Label>
                <Form.Control type='text' name="" placeholder=''/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>List Of preferred companies to source candidate </Form.Label>
                <Form.Control type='text' placeholder=''/>
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client Company Website </Form.Label>
                <Form.Control type='text' placeholder=''/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client Company Linkedin URL </Form.Label>
                <Form.Control type='text' placeholder=''/>
                </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Company Size </Form.Label>
                <Form.Select aria-label="Default select Company Size example">
                    <option>select Company Size</option>
                    <option value="0-1">0-1</option>
                    <option value="2-10">2-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-200">51-200</option>
                    <option value="201-500">201-500</option>
                    <option value="501-1000">501-1000</option>
                    <option value="1001-5000">1001-5000</option>
                    <option value="10000+">10000+</option>
                    </Form.Select>
                    </Col>
                </Row>
                </Form>
                <Button variant='info' as={Link} to='/' className='mt-3 mx-5'>Save</Button>
                <Button variant='dark' as={Link} to='/' className='mt-3 mx-5'>Reaet</Button>
                
      </Container>
    </div>
  )
}

export default FilterClientmaster