import React,{useState,useEffect} from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { ToastContainer } from 'react-toastify'
import { Container,Button,Table ,Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import {CSVLink} from "react-csv"
import axios from 'axios';

const ListOfCandi = () => {
    // const [getdata,setgetdata] = useState([])
    // useEffect=()=>{
    //     axios.get("http://localhost:4000/api/allClient").then((Response)=>{
    
    //         setgetdata(Response.data)
    //     },[])
    //  }

    const Studentlist = [
        {id:1, Date:"2", Clientname:"prashant Kumar",JDtitle:"Automobile",JDlocation:"Patna",RecruiterID:"A",Candidatename:"yes", Currentdesignation:"n/a",Currentsalary:"null", LastAppraisal:"18-may-2022"},
        {id:2, Date:"003", Clientname:"neeraj Kumar", JDtitle:"Automobile",JDlocation:"Ranchi", RecruiterID:"B",Candidatename:"no", Currentdesignation:"n/a", Currentsalary:"null",LastAppraisal:"19-may-2022"},
        {id:3, Date:"33", Clientname:"prashant Kumar", JDtitle:"Automobile",JDlocation:"Haryana",RecruiterID:"C", Candidatename:"yes", Currentdesignation:"n/a", Currentsalary:"null", LastAppraisal:"20-may-2022"},
        {id:4, Date:"33", Clientname:"dd Kumar", JDtitle:"Automobile",JDlocation:"Delhi", RecruiterID:"in-house", Candidatename:"yes", Currentdesignation:"n/a",Currentsalary:"null",LastAppraisal:"21-may-2022"}
    ]
    const headers = [
        {lable:"JD number ", key:"id"},
        {label:"Client Name ", key:"Date"},
        {label:"JD title", key:"Clientname"},
        {label:"JD location", key:"JDlocation"},
        {label:"Recruiter ID", key:"id"},
        {label:"Candidate Name", key:"Candidatename"},
        {label:"Current Designation", key:"Currentdesignation"},
        {label:"Current Salary", key:"Currentsalary"},
        {label:"Expected Salary", key:"Currentsalary"},
        {label:"Experience", key:"id"},
        {label:"Education", key:"Candidatename"},
        {label:"Current Organisation", key:"Jobdescription"},
        {label:"Current Location", key:"JDlocation"},
        {label:"Candidate Mobile Number", key:"Candidatename"},
        {label:"Notice Period", key:"SubmissionDate"},
        {label:"JD sent to candidate", key:"jdtitle"},
        {label:"Candidate Availability for the Interview?", key:"Candidatename"},
        {label:"Recuriter Remarks", key:"Remarks"},
        {label:"Date and Time Of Adding a Candidate", key:"Date"},
        {label:"Special Comments", key:"Date"},
        {label:"Candidate ID", key:"id"}
       
    
    ]
    const csvReport = {
      filename: 'Studentlist.csv',
      headers: headers,
      data: Studentlist
    }
  return (
    <div>
        <Sidebar />
      <NavbarMenu />
      <ToastContainer/>
      <Container className="jd-cont">
          <Button variant='success' as={Link} to='/filter-of-candidate' className='mx-5 mb-3'><i className='fa fa-filter'></i>Filter</Button>

          <Button variant='danger'  className='mx-5 mb-3'><CSVLink {...csvReport} style={{textDecoration:"none", color:"white"}}><i className=' fa fa-download'/></CSVLink></Button>
      </Container>
      <div className='jd-wraper' >
      <Container fluid className='table-data'>
                <Table responsive  className='data-table' hover>
                    <thead>
                        <tr>
                            <th></th>
                <th>Jd number</th>
                
                <th>Client Name</th>
                <th>JD title </th>
                <th>JD location </th>
                <th>Recuriter ID</th>
                <th>Candidate name</th>
                <th>Current Designation</th>
                <th>Current salary</th>
                <th>Expected salary</th>
                <th>Experience</th>
                <th>Education</th>
                <th>Current organisation</th>
                <th>Current location</th>
                <th>Candidate mobile number</th>
                <th>Notice period</th>
                <th>Last Appraisal of the candidate</th>
                <th>JD sent to candidate?</th>
                <th>Candidate availability for the interview</th>
                <th>Recuriter remarks</th>
                <th>Date and time of adding a candidate </th>
                <th>Special comments</th>
                <th>candidate ID</th>
                <th>Action</th>
               </tr>
               </thead>
               <tbody>
               {Studentlist.map((jd)=>{
              return(
                <>

               <tr>
                   <td><Form.Check type='checkbox'></Form.Check></td>
                       <td>{jd.Jdnumber}</td>
                       <td>{jd.ClientName}</td>
                       <td>{jd.JDtitle }</td>
                       <td>{jd.JDlocation}</td>
                       <td>{jd.RecuriterID}</td>
                       <td>{jd.Candidatename}</td>
                       <td>{jd.CurrentDesignation}</td>
                       <td>{jd.Currentsalary}</td>
                       <td>{jd.Expectedsalary}</td>
                       <th>{jd.Experience}</th>
                       <td>{jd.Education}</td>
                       <td>{jd.Currentorganisation}</td>
                       <td>{jd.Currentlocation}</td>
                       <td>{jd.Candidatemobilenumber}</td>
                       <td>{jd.Noticeperiod}</td>
                       <td>{jd.LastAppraisalofthecandidate}</td>
                       <td>{jd.JDsenttoandidate}</td>
                       <td>{jd.Candidateavailabilityfortheinterview}</td>
                       <td>{jd.Recuriterremarks}</td>
                       <td>{jd.Dateandtimeofaddingacandidate}</td>
                       <td>{jd.Specialcomments}</td>
                       <td>{jd.candidateID}</td>
                       <td><Button variant='success' as={Link} to='/Edit-List-of-candidate'><i className='fa fa-edit'>Edit</i></Button></td>
                   </tr>
                   </>
                )
              })}
               </tbody>
               </Table>
               </Container>
               </div>

    </div>
  )
}

export default ListOfCandi