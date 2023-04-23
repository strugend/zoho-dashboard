

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




const heading=["Name and Description","Currency","Details","Rounding"];

const row=[
    ["Pricebook0","USD","2% Markdown","Never Mind"],
    ["Pricebook1","USD","37% Markdown","Never Mind"],
    ["Pricebook2","INR","13% Markup","Never Mind"],
    ["Pricebook3","USD","71% Markdown","Never Mind"],
]

const menu=[
    {name:"Date",link:"#"},
    {name:"Reason",link:"#"},
    {name:"import Quantity Adjustments",link:"#"},
    {name:"import value Adjustments",link:"#"},
    {name:"Export inventory Adjustments",link:"#"},
    {name:"Refresh",link:"#"},

]

const InventoryAdjustments=()=>{
    return(
        <>
        <title>Inventory Adjustment | ZOHO Books</title>
        <Container fluid>
        <Row className="mt-1 mb-1" >
                <Col sm={9}>
                    <h2 className="">Inventory Adjustments</h2>
                </Col>
            
                <Col sm={3} className="justify-content-end">
                    <Stack direction="horizontal" gap={3}>
                        <Nav>
                            <Nav.Link href="#" size="lg">
                                <i className="bi-plus" />New 
                            </Nav.Link>
                            <Nav>
                            <Dropdown menu={menu} icon="bi-gear" header="Sort By" key="all items"></Dropdown>
                    </Nav>
                            
                            <div className="vr" />
                            <Nav.Link href="#" className="text-primary">
                                <i className="bi-lightbulb" />Page Tips</Nav.Link>
                        </Nav>
                    </Stack>
                </Col>
                
            </Row>
            <Row className="mt-1 mb-1 bg-white" >
                <Col sm={9} className="">
                    <p>Filter:
                    
                    </p>
                </Col>
            
                <Col sm={3} className="justify-content-end">
                    <Nav>
                        <Nav.Link className="text-primary">FiFo Cost Lot Tracking Report</Nav.Link>
                    </Nav>
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
 export default InventoryAdjustments;