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
    { name: "Pending Approval", link: "#" },
    { name: "Approved", link: "#" },
    { name: "Sent", link: "#" },
    { name: "Client Viewed", link: "#" },
    { name: "Accepted", link: "#" },
    { name: "Invoiced", link: "#" },
    { name: "Declined", link: "#" },
    { name: "Expired", link: "#" },
    { name: "New Custom View", link: "#" }

]

const heading=["Date","Estimate Number","Reference Number","Customer Name","Status","Amount"];
const row=[
    ["2 June 2022","EST-0000","52870","Registered Customer","Sent","858.00"],
    ["3 Apr 2023","EST-0001","62417","Oversea Customer","Sent","884.00"],
    ["1 June 2022","EST-0002","63479","SEZ Customer","Invoiced","386.00"],
    ["23 Feb 2023","EST-0003","19571","Deemed Export Customer","Drapt","565.00"],
    ["28 Apr 2022","EST-0004","63336","Unregistered Customer","Accepted","229.00"],
    ["9 Nov 2022","EST-0005","18376","Composition Reg Customer","Sent","275.00"],
    ["10 Nov 2022","EST-0006","11394","Consumer Customer","Expired","518.00"],
    
]
const Estimates = () => {
    return (
        <>
        <title>Estimates | ZOHO Books</title>
            <Row>
                <Col sm={9}>

                    <Nav>
                        <Dropdown menu={menu} name="All Estimates" header="DEFAULT FILTERS" key="all Estimated"></Dropdown>
                    </Nav>
                </Col>
                <Col sm={3} className="justify-content-end">
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
                            <Nav.Link href="#" className="text-primary">
                                <i className="bi-lightbulb" />Page Tips</Nav.Link>
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
export default Estimates;