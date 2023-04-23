

import React from "react";
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




const heading=["Date","Currency","Exchange Rate","Gain or Loss","Notes"];

const row=[
  ["","","","",""]
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

const CurrencyAdjustments = () =>{
    return(
        <>
        <title>Currency Adjustment | ZOHO Books</title>
        <Container fluid className=" bg-white">
        <Row className="mt-1 mb-1" >
                <Col sm={7}>
                    <h2 className="">Base Currency Adjustments</h2>
                </Col>
            
                <Col sm={5} className="justify-content-end">
                    <Stack direction="horizontal" gap={3}>
                        <Nav>
                        <Nav.Link href="#" size="lg">
                                <i className="bi-plus" />Make an Adjustment
                            </Nav.Link>
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
            <Container fluid className="mt-2">
              
                <Table  heading={heading} row={row}/>
            </Container>
            </Container>
        </>
    )
}
 export default CurrencyAdjustments;