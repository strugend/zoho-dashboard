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
    { name: "All Customers", link: "#" },
    { name: "Active Customers", link: "#" },
    { name: "CRM Customers", link: "#" },
    { name: "Duplicate Customers", link: "#" },
    { name: "Inactive Customers", link: "#" },
    { name: "Client Portal Enabled", link: "#" },
    { name: "Overdue Customers", link: "#" },
    { name: "Unpaid Customers", link: "#" },
    { name: "Add New Custom View", link: "#" }
]

const heading=["Name","Company Name","Wmail","Work Phone","Receivables"];
const row=[
    ["Registered Customers","Grant, Witting and Purdy ","RegisteredCustomers66@zylker.com","","319"],
    ["Oversea Customers","Schimmel-Dickinson","OverseaCustomers.1@zylker.com","","736"],
    ["SEZ Customers","Bode Kelling and Hessel ","SEZCustomers.25@zylker.com","","12"],
    ["Deemed Export Customers","Metx, Jerde and koch ","DeemedExportCustomers81@zylker.com","","368"],
    ["Unregistered Customers","Boehm Inc","UnregisteredCustomers.492@zylker.com","","806"],
    ["Composition registered Customers","Moore-Hoeger","CompositionRegCustomers.5@zylker.com","","441"],
    ["Consumer Customers","Carter, Ryanand white","ConsumerCustomers_6@zylker.com","","146"],
]
const Customers = () => {
    return (
        <>
            <Row>
                <Col sm={9}>

                    <Nav>
                        <Dropdown menu={menu} name="All Customers" header="DEFAULT FILTERS" key="all items"></Dropdown>
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
export default Customers;