

import React from "react";
import { useState } from "react";
import AdminNavbar from "components/Navbars/AdminNavbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';
import ToolTip from "components/tools/ToolTips.js";
import Dropdown from '../../../components/tools/dropdown.js'
import Table from "../../../components/tools/Tabels.js"
import Form from 'react-bootstrap/Form';
import { Button } from "reactstrap";



const heading=["Customer Name","Project Name","","Billing method","Rate"];

const row=[
    ["Registered Customer","Project-1","","Based on Tasks Hours","50763"],
    ["Oversea Customer","Project-2","","Fixed Cost For Projects","16796"],
    ["SEZ Customer","Project-3","","Based on Tasks Hours","85646"],
    ["Deemed Export Customer","Project-4","","Fixed Cost for Projects","19379"],
    ["Unregistered Customer","Project-5","","Fixed cost for Projects","22114"],
    ["Composition Reg Customer","Project-6","","Based on Tasks Hours","17585"],
    ["Consumer Customer","Project-7","","Based on staff Hours","38679"]
]

const menu=[
    {name:"Export Projects",link:"#"},
    {name:"Export Tasks",link:"#"},
    {name:"Export Timesheet",link:"#"},
    {name:"Import Projects",link:"#"},
    {name:"Import Tasks",link:"#"},
    {name:"Import Timesheet",link:"#"},
    {name:"Project Preferences",link:"#"},

]

const TranscationLocking = () =>{
    const [visible,setvisible]=useState(false)

    const handleCheck=()=>{
        setvisible(!visible)
    }
    return(
        <>
        <title>Transaction Locking | ZOHO Books</title>
        <Container fluid className=" bg-white">
        <Row className="mt-1 mb-1" >
                <Col sm={9}>
                    <h2 className="">Transcation Locking</h2>
                </Col>
            
                <Col sm={3} className="justify-content-end">
                    <Stack direction="horizontal" gap={3}>
                        <Nav>
                            <Nav.Link href="#" size="lg">
                                <i className="bi-person-add" />Find Accountant
                            </Nav.Link>
            
                            
                            
                            <div className="vr" />
                            <Nav.Link href="#" className="text-primary">
                                <i className="bi-lightbulb" />Page Tips</Nav.Link>
                        </Nav>
                    </Stack>
                </Col>
                
            </Row>
            <Row  >
            <Col sm={10}>
                <p>Transaction locking prevents you from making any changes that affect accounting prior to a specified date. You cannot add, modify or delete transactions before this date.</p>
            </Col>
                
            </Row>
            <Row>
                <Col sm={10}>
                <Form>
      
        <div  className="">
          <Form.Check // prettier-ignore
            type="checkbox"
            id="jkd"
            label="Enable Transcation Locking"
            checked={visible}
            onChange={handleCheck}
          />
          </div>
          </Form>
                </Col>
            </Row>

            <div className={visible?"":"d-none"}>
            <Row className="mb-3">
                <Col sm={4}>
                <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="text-danger">Lock Date</Form.Label>
        <Form.Control type="date"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className="text-danger">Reason</Form.Label>
        <Form.Control as="textarea" rows={2} />
      </Form.Group>
    </Form>
                
                </Col>
                
                
            
            </Row>
            <Button variant="primary">save</Button>
            </div>
            </Container>
        </>
    )
}
 export default TranscationLocking;