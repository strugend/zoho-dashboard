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

const heading=["Date","Invoice#","Order Number","Customer Name","Status","Due date","Amount","Balance Due"];
const row=[
    ["25 May 2022","INV-0000","","Registered Customer","Draft","29 March 2024","504407","504407"],
    ["25 May 2022","INV-0001","","Oversea Customer","Draft","29 March 2024","595199","595199"],
    ["25 May 2022","INV-0002",""," SEZ Customer","Draft","29 March 2024","753718","753718"],
    ["25 May 2022","INV-0003","","Deemed Export Customer","Draft","29 March 2024","363372","363372"],
    ["25 May 2022","INV-0004","","Unregistered Customer","Draft","29 March 2024","286714","286714"],
    ["25 May 2022","INV-0005","","Composition Reg Customer","Draft","29 March 2024","640914","640914"],
    ["25 May 2022","INV-0000","","Consumer Customer","Draft","29 March 2024","759467","759467"],
]
const Invoices = () => {
    return (
        <>
        <title>Invoices | ZOHO Books</title>
            <Row>
                <Col sm={10}>

                    <Nav>
                        <Dropdown menu={menu} name="All Invoices" header="" key="all Invoices"></Dropdown>
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
export default Invoices;