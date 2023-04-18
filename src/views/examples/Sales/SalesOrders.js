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
    { name: "Open", link: "#" },
    { name: "Overdue", link: "#" },
    { name: "Partially Invoiced", link: "#" },
    { name: "Invoiced", link: "#" },
    { name: "Closed", link: "#" },
    { name: "Void", link: "#" },
    { name: "New Custom View", link: "#" }

]

const heading=["Date","Sales Order#","Reference#","Customer Name","Status","Invoiced","Payment","Amount","Expected Shipment Date","Order Status"];
const row=[
    ["9 Apr 2023","SO-0000","REF-SO-00","Registered Customer","Draft",".",".","61000","3 Jul 2023","Draft"],
    ["9 Apr 2023","SO-0001","REF-SO-01","Oversea Customer","Draft",".",".","30184","3 Jul 2023","Draft"],
    ["9 Apr 2023","SO-0002","REF-SO-02","SEZ Customer","Draft",".",".","50113","3 Jul 2023","Draft"],
    ["9 Apr 2023","SO-0003","REF-SO-03","Deemed Export Customer","Draft",".",".","19236","3 Jul 2023","Draft"],
    ["9 Apr 2023","SO-0004","REF-SO-04","Unregistered Customer","Draft",".",".","25020","3 Jul 2023","Draft"],
    ["9 Apr 2023","SO-0005","REF-SO-05","Composition Reg Customer","Draft",".",".","42648","3 Jul 2023","Draft"],
    ["9 Apr 2023","SO-0006","REF-SO-06","Consumer Customer","Draft",".",".","3521","3 Jul 2023","Draft"],
   
    
]
const SalesOrder = () => {
    return (
        <>
            <Row>
                <Col sm={9}>

                    <Nav>
                        <Dropdown menu={menu} name="All Sales Orders" header="DEFAULT FILTERS" key="all Sales Order"></Dropdown>
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
export default SalesOrder;