

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

const ManuualJournals = () =>{
    return(
        <>
        <title>Manual Journals | ZOHO Books</title>
        <Container fluid>
        <Row className="mt-1 mb-1" >
                <Col sm={6}>
                    <h2 className="">Projects</h2>
                </Col>
            
                <Col sm={6} className="justify-content-end">
                    <Stack direction="horizontal" gap={3}>
                        <Nav>
                            <Nav.Link href="#" size="lg">
                                <i className="bi-plus" />New Project
                            </Nav.Link>
                            <Nav.Link href="#" size="lg">
                                <i className="bi-clock" />Start
                            </Nav.Link>
                            <Nav>
                            <Dropdown menu={menu} name="Log Time" header="Sort By" key="log time"></Dropdown>
                    
                            <Dropdown menu={menu} icon="bi-gear" header="Sort By" key="setting"></Dropdown>
                    </Nav>
                            
                            <div className="vr" />
                            <Nav.Link href="#" className="text-primary">
                                <i className="bi-lightbulb" />Page Tips</Nav.Link>
                        </Nav>
                    </Stack>
                </Col>
                
            </Row>
            <Row className=" bg-white" >
            <Col sm={9}>
                <Nav>
                    <h5 className="text-uppercase text-muted">Projects:</h5>
                    
                    <Dropdown menu={menu} name="All Projects" header="Sort By" key="setting"></Dropdown>
                    </Nav>
                </Col>
            
                <Col sm={3} className="justify-content-end">
                
                </Col>
                
            </Row>
            


            <hr className="mt-0"/>
            <Row>
                <Col sm={9}>
                    
                </Col>
            </Row>
            <Container fluid className="mt-2">
              
                <Table  heading={heading} row={row}/>
            </Container>
            </Container>
        </>
    )
}
 export default ManuualJournals;