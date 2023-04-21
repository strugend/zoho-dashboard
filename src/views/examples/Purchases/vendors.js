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
    { name: "All Vendors", link: "#" },
    { name: "Active Vectors", link: "#" },
    { name: "CRM Vendors", link: "#" },
    { name: "Duplicate Vendors", link: "#" },
    { name: "Inactive Vendors", link: "#" },
    { name: "Vendor Portal Enabble", link: "#" },
    { name: "Vendor Portal Disable", link: "#" },
    {name:"New Custom View",link:"#"}
]

const heading=["Name","Company Name","Email","Work Phone","Payables"];
const row=[
    ["Registered Vendor","Johnston, Bogisican and Cassing","RegisteredVendor_747@zylker.com","","695"],
    ["Oversea Vendor","Feil, Barrows and DuBuque","OverseasVendor_833@zylker.com","","805"],
    ["SEZ Vendor","Bernhard, Bechtelar, Paucek","SEZVendor55@zylker.com","","578"],
    ["Deemed Export Vendor","Abshire, Reichart and Brakus","DeemedExportVendor88@zylker.com","","669"],
    ["Unregistered Vendor","Bode, Nader and McCullough","UnregisteredVendor26@zylker.com","","553"],
    ["Composition Reg Vendor","Johnston, Marvin and Sons","CompositionRegVendor40@zylker.com","","659"],
]
const Vendors = () => {
    return (
        <>
            <Row>
                <Col sm={9}>

                    <Nav>
                        <Dropdown menu={menu} name="All Vendors" header="DEFAULT FILTERS" key="all vendors"></Dropdown>
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
export default Vendors;