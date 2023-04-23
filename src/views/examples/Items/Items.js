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
    { name: "Active", link: "#" },
    { name: "Inactive", link: "#" },
    { name: "Sales", link: "#" },
    { name: "Purchases", link: "#" },
    { name: "Servies", link: "#" },
    { name: "Inventory Items", link: "#" },
    { name: "Non-Inventory Items", link: "#" }
]

const heading=["Name","Description","Rate","Stock on Hand","HSN/AC","Usage Limit"];
const row=[
    ["Item 0","Item 0 - Sales Description ","212.00","","97939","Mtr"],
    ["Item 1","Item 1 - Sales Description ","126.00","","42266","Mtr"],
    ["Item 2","Item 2 - Sales Description ","","","83330","Mtr"],
    ["Item 3","Item 3 - Sales Description ","","","59378","Kg"],
    ["Item 4","Item 4 - Sales Description ","625.00","","4781","Mtr"],
    ["Item 5","Item 5 - Sales Description ","166.00","","6918","Mtr"],
    ["Item 6","Item 6 - Sales Description ","724.00","349","74908","Mtr"],
    ["Item 7","Item 7 - Sales Description ","629.00","347","22996","Mtr"]
]
const Items = () => {
    return (
        <>
        <title>Items | ZOHO Books</title>
            <Row>
                <Col sm={9}>

                    <Nav>
                        <Dropdown menu={menu} name="All items" header="DEFAULT FILTERS" key="all items"></Dropdown>
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
export default Items;