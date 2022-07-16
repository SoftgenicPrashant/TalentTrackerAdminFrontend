import React, { useRef, useState} from 'react'
import { useFilePicker } from 'use-file-picker';
import { Container, Form, Button, Dropdown , Modal } from 'react-bootstrap'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
import { Link } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import { Editor } from '@tinymce/tinymce-react';
const TemplateList = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show9, setShow9] = useState(false);
    const handleClose9 = () => setShow9(false);
    const handleShow9 = () => setShow9(true);


    const [openFileSelector] = useFilePicker({
        accept: '.txt , .pdf, .csv, .docs', 
      });
    
    const editorRef = useRef(null);
    const log = () => {
      if (editorRef.current) {
        console.log(editorRef.current.getContent());
      }
    };

    const [Templates, setTemplates] = useState("Default Template..")
    const Template1 = ()=>setTemplates("This is template First.........")
    const Template2 = ()=>setTemplates("This is template second.........")
    const Template3 = ()=>setTemplates("This is template Third.........")
    const Template4 = ()=>setTemplates("This is template Fourth.........")
  return (
    <div className='submit' onLoad={()=>{toast.warning("Work is on Progress...")}}>
        <ToastContainer position='top-center' />
        <NavbarMenu />
        <Container className='email-template'>
        <Button className='btn btn-warning mb-2 mx-2 ms-auto' onClick={handleShow9}><i className='fas fa-info-circle '/> Guidlines </Button>

        <div className="cardTitle mb-4 d-flex justify-content-between align-items-center bg-light mt-2"><h5 className='text-primary '>Create Templates</h5>
                    <div className='d-flex'>
                    <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic" size='sm'>
                        Templates 
                    </Dropdown.Toggle>

                    <Dropdown.Menu>

                        <Dropdown.Item onClick={Template1}>Template 1</Dropdown.Item>
                        <Dropdown.Item onClick={Template2}>Template 2</Dropdown.Item>
                        <Dropdown.Item onClick={Template3}>Template 3</Dropdown.Item>
                        <Dropdown.Item onClick={Template4}>Template 4</Dropdown.Item>
                        
                    </Dropdown.Menu>
                    </Dropdown>
                    <Button className='mx-2' size='sm' onClick={() => openFileSelector()}>Attach tracker sheet</Button>
                    <Button className='mx-2' size='sm' onClick={() => openFileSelector()}>Attach CV's</Button>
                    </div>
                    </div>
                    <hr></hr>
                    <div className="cardTitle mb-4 d-flex justify-content-between align-items-center bg-light mt-2"><span></span>
                    <div className=' d-flex'>
                        <Button size='sm' onClick={()=>{toast.success("Saved")}}>Save</Button>
                        <Button variant='danger' size='sm' className='mx-2' as={Link} to="/templatelist">Discard</Button>
                        <Button variant='success' size='sm' className='mx-2' onClick={(handleShow)}>Add signature</Button>
                    </div>
                    </div>
                    <hr></hr>
            <Form>
            <Form.Group className='mb-2'>
                    <Form.Label>Template Name</Form.Label>
                    <Form.Control type="text" size='sm' />
                </Form.Group>
                <Form.Group className='mb-2'>
                    <Form.Label>From</Form.Label>
                    <Form.Control type="text" size='sm' />
                </Form.Group>
                <Form.Group className='mb-2'>
                    <Form.Label>To</Form.Label>
                    <Form.Control type="text" size='sm' />
                </Form.Group>
                <Form.Group className='mb-2'>
                    <Form.Label>Cc</Form.Label>
                    <Form.Control type="text" size='sm' />
                </Form.Group>
                <Form.Group className='mb-2'>
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" size='sm' defaultValue="client name_ jd title, Location , userId" />
                </Form.Group>
                <Editor
                    apiKey='ru49dfoaikbq4wfagwpdj8xzwi0pxbkwyre28606w2hlfayb'
                    onInit={(evt, editor) => editorRef.current = editor}
                    initialValue={Templates}
                    init={{
                    menubar: false,
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                />
                <button className='btn btn-primary mt-3' onClick={log}><i className='fa fa-arrow-right me-2'></i>Send</button>
            </Form>
        </Container>
        <Sidebar />
        
      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mt-3 mb-3 mx-3'>
                <Form.Label>Full name of the User : </Form.Label>
              
            </Form.Group>
            <Form.Group className='mt-3 mb-3 mx-3'>
            <Form.Label>Designation : </Form.Label>
              
            </Form.Group>
            <Form.Group className='mt-3 mb-3 mx-3'>
            <Form.Label>Talent Trackers Consulting Pvt Ltd</Form.Label>
              
            </Form.Group>
            <Form.Group className='mt-3 mb-3 mx-3'>
            <Form.Label>https://www.talenttrackers.in</Form.Label>
              
            </Form.Group>
            <div>
              <a href="https://facebook.com"><i className="fab fa-facebook ms-2 fa-2x"  /></a>
              <a href="https://facebook.com"><i className="fab fa-instagram me-2 ms-2 fa-2x" /></a>
              <a href="https://facebook.com"><i className="fab fa-twitter me-2 fa-2x" /></a>
              <a href="https://facebook.com"><i className="fab fa-linkedin me-2 fa-2x" /></a>
            </div>          
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={show9} onHide={handleClose9} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title><i className='fas fa-info-circle'></i>Guidlines For Submit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p><span className='fw-bold'>T</span>he purpose of “submit” area is to enable you to send CVs submission to client via an official Email ID assigned to you. Once clicked, an email panel will open with TO, CC emails. 
<br/>
        <span className='fw-bold'>Tracker sheet & CVs attachment: </span>You need to attach the tracker sheet and doc/pdf CVs from your local machine. Please verify the candidate names in the tracker sheet with the attached CVs.
<br/>
        <span className='fw-bold'>Subject line: </span>There will be system generated “subject line” of the email which contains the format “client name_JD title_location_user ID”. To maintain standardization, please don’t change the subject line.<br/>
        <span className='fw-bold'>Signature: </span>Your auto signature will be pasted in the email body for every outgoing email. You can alter the content of signature after discussing with admin.
<br/>
        <span className='fw-bold'>Templates: </span>Admin has created ready templates for you to design your email body. To maintain uniformity, we request you to use the ready templates only. Client spoc name will be a “Merge Field” in every template to ensure personalization in salutation of client spoc.
<br/>
        <span className='fw-bold'>To/CC emails-  </span>System will pick up the To/CC Email addresses from the master data & you are recommended to maintain the same To/CC IDs. Based on who is doing the client coordination &=or whether admin’s CVs quality check is required for a particular JD or not, the To/CC email IDs will be decided.<br/>
        <span className='fw-bold'>Email set up: </span>You can set up the mailbox in outlook/webmail for your convenience. The email checking/replies can happen from these mailboxes. Also you can configure the mailbox on android phone. The SMTP/POP/IMAP settings are given in the platform. Or admin can help you to configure the required set up. Please note, the “Submit” email panel is designed only for the purpose of CVs submission. The regular email replies to be made via outlook/webmail or any other email client you like!

        </p>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose9}>
            Close
          </Button>
        </Modal.Footer>
        </Modal>
    </div>
  )
}

export default TemplateList