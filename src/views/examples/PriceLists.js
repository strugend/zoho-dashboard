

import React from "react";
import AdminNavbar from "components/Navbars/AdminNavbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';
import ToolTip from "components/tools/ToolTips.js";
import Dropdown from '../../components/tools/dropdown.js'
import Table from "../../components/tools/Tabels.js"


const menu=[
    {name:"All",link:"#"},
    {name:"Sales",link:"#"},
    {name:"Purchases",link: "#"}
]

const heading=["Name and Description","Currency","Details","Rounding"];

const row=[
    ["Pricebook0","USD","2% Markdown","Never Mind"],
    ["Pricebook1","USD","37% Markdown","Never Mind"],
    ["Pricebook2","INR","13% Markup","Never Mind"],
    ["Pricebook3","USD","71% Markdown","Never Mind"],
]

const PriceLists=()=>{
    return(
        <>
        <div className="mt-2 ml-2">
        <Row className="">
                <Col sm={10}>

                    <Nav>
                        <Dropdown menu={menu} name="All Price Lists"  key="all price"></Dropdown>
                    </Nav>
                </Col>
                <Col sm={2} className="justify-content-end">
                    <Stack direction="horizontal" gap={3}>
                        <Nav>
                            <Nav.Link href="#" size="lg">
                                <i className="bi-plus" />New Price List
                            </Nav.Link>
                            <Nav.Link href="#" size="lg">
                                <i className="bi-list" />
                            </Nav.Link>
                            <div className="vr" />
                            
                        </Nav>
                    </Stack>
                </Col>
            </Row>
            </div>
            <Container fluid className="mt-2">
              
                <Table  heading={heading} row={row}/>
            </Container>
        </>
    )
}
 export default PriceLists;