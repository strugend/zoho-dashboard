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


const menu = [
    { name: "All", link: "#" },
    { name: "Drapt", link: "#" },
    { name: "Open", link: "#" },
    { name: "Delivered", link: "#" },
    { name: "Returned", link: "#" },
    { name: "Partially Invoiced", link: "#" },
    { name: "Invoiced", link: "#" }

]

const heading=["Date","Delivery Challans#","Reference#","Customer Name","Status","Invoice status","Amount"];
const row=[
    ["22 Nov 2022","DC-000","61465","Registered Customer","Open","Open","79616"],
    ["6 Oct 2022","DC-001","70349","Oversea Customer","Open","Open","21334"],
    ["28 Jan 2023","DC-002","21135","SEZ Customer","Delivered","Delivered","73702"],
    ["7 Jun 2022","DC-003","4691","Deemed Export Customer","Returned","Returned","71981"],
    ["10 Nov 2022","DC-004","77629","Unregistered Customer","Draft","Draft","71233"],
    ["24 Sep 2022","DC-005","63106","Composition Reg Customer","Delivered","Delivered","61435"],
    ["4 Jan 2022","DC-006","51750","Consumer Customer","Deliverd","Delivered","64725"],
    
]
const DeliverChallans = () => {
    return (
        <>
        <title>Delivery Challans | ZOHO Books</title>
            <Row>
                <Col sm={10}>

                    <Nav>
                        <Dropdown menu={menu} name="All Delivery Challans" header="" key="all Delivery Challans"></Dropdown>
                    </Nav>
                </Col>
                <Col sm={2} className="justify-content-end">
                    <Stack direction="horizontal" gap={3}>
                        <Nav>
                            <Nav.Link href="#" size="lg">
                                <i className="bi-plus" />New
                            </Nav.Link>
                            <Nav.Link href="#" size="lg" >
                                <ToolTip class="bi-gear" val="Items Preferences" name="items_Preferences"/>
                            </Nav.Link>
                            <Nav.Link href="#" size="lg">
                                <i className="bi-list" />
                            </Nav.Link>
                            <div className="vr" />
                            {/* <Nav.Link href="#" className="text-primary">
                                <i className="bi-lightbulb" />Page Tips</Nav.Link> */}
                        </Nav>
                    </Stack>
                </Col>
            </Row>
            <Container fluid className="mt-2">
              
                <Table  heading={heading} row={row}/>
            </Container>

        </>
    )
}
export default DeliverChallans;