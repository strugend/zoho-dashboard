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

const heading=["Date","Retainer Invoice Number","Reference#","Customer Name","Project/Estimate","Status","Amount","Balance"];
const row=[
    ["27 Aus 2022","RET-00001","","Registered Customer","--","Overdue","2312","2312"],
    ["27 Aus 2022","RET-00002","","Oversea Customer","--","Open","2312","2312"],
    ["27 Aus 2022","RET-00003","","SEZ Customer","--","Open","2312","2312"],
    ["27 Aus 2022","RET-00004","","Deemed Export Customer","--","Overdue","2312","2312"],
    ["27 Aus 2022","RET-00005","","Unregistered Customer","--","Paid","2312","0"],
    ["27 Aus 2022","RET-00006","","Composition Reg Customer","--","Open","2312","2312"],
    ["27 Aus 2022","RET-00007","","Consumer Customer","--","Overdue","2312","2312"],
    
]
const RetainerInvoices = () => {
    return (
        <>
        <title>Retainer Invoices | ZOHO Books</title>
            <Row>
                <Col sm={9}>

                    <Nav>
                        <Dropdown menu={menu} name="All Estimates" header="DEFAULT FILTERS" key="Retainer Invoices"></Dropdown>
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
export default RetainerInvoices;