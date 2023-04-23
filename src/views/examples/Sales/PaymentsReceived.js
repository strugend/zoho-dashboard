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
    { name: "Client Viewed", link: "#" },
    { name: "Partially Paid", link: "#" },
    { name: "Unpaid", link: "#" },
    { name: "Overdue", link: "#" },
    { name: "Payment Initiated", link: "#" },
    { name: "Paid", link: "#" },
    { name: "Void", link: "#" },
    { name: "New Custom View", link: "#" }

]

const heading=["Date","payment#","Type","Reference Number","Customer Name","Invoice#","Mode","Amount","Unused Amount"];
const row=[
    ["17 April 2023","6","","123456789","Registered Customer","1942","Square","47.00","409"],
    ["17 April 2023","10","","","Oversea Customer","4840","Cash","670.00","172"],
    ["17 April 2023","8","","123456789","SEZ Customer","8552","Square","218","785"],
    ["17 April 2023","1","","123456789","Deemed Export Customer","1252","Stripe","490.00","862"],
    ["17 April 2023","2","","123456789","Unregistered Customer","581","Forte","617.00","298"],
    ["17 April 2023","1","","123456789","Composition Reg Customer","9671","Forte","812.00","637"],
    ["17 April 2023","0","","123456789","Consumer Customer","4051","Square","275.00","101"],
]
const PaymentReceived = () => {
    return (
        <>
        <title>Payments Received | ZOHO Books</title>
            <Row>
                <Col sm={8}>

                    <Nav>
                        <Dropdown menu={menu} name="All Received Payments" header="" key="all Invoices"></Dropdown>
                    </Nav>
                </Col>
                <Col sm={4} className="justify-content-end">
                    <Stack direction="horizontal" gap={3}>
                        <Nav>
                            <Nav.Link href="#" size="lg">
                                <i className="bi-plus" />New
                            </Nav.Link>
                            <Nav.Link href="#" size="lg" >
                                <ToolTip class="bi-arrow-clockwise" val="Refresh" name="Resfresh"/>
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
export default PaymentReceived;