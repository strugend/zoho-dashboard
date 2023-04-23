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
    { name: "Open", link: "#" },
    { name: "Overdue", link: "#" },
    { name: "Unpaid", link: "#" },
    { name: "Partially Paid", link: "#" },
    { name: "Paid", link: "#" },
    { name: "Void", link: "#" },
    { name:"New Custom View",link:"#"}

]

const heading=["Date","Bill#","Reference Number","Vendor Name","Status","Due Date","Amount","Balance Due"];
const row=[
    ["1 Jan 2023","Bill-0","77415","Registered Vendor","Draft","6 Feb 2024","6.0088","5.0088"],
    ["1 Jan 2023","Bill-1","48820","Oversea Vendor","Draft","6 Feb 2024","962.0069","660.0069"],
    ["1 Jan 2023","Bill-2","92079","SEZ Vendor","Draft","6 Feb 2024","132.00272","15.00272000000001"],
    ["1 Jan 2023","Bill-3","57933","Deemed Export Vendor","Draft","6 Feb 2024","748.00214","147.002140000000005"],
    ["1 Jan 2023","Bill-4","62889","Unregistered Vendor","Draft","6 Feb 2024","685.00820","644.0082"],
    ["1 Jan 2023","Bill-5","94714","Composition Reg Vendor","Draft","6 Feb 2024","963.00914","298.00914"],
]
const Bills = () => {
    return (
        <>
        <title>Bills | ZOHO Books</title>
            <Row>
                <Col sm={9}>

                    <Nav>
                        <Dropdown menu={menu} name="All Bills" header="DEFAULT FILTERS" key="all purchase orders"></Dropdown>
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
export default Bills;