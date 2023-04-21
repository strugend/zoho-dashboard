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
    { name: "Billed", link: "#" },
    { name: "Partially Billed", link: "#" },
    { name: "Closed", link: "#" },
    { name: "Canceled", link: "#" },
    { name:"New Custom View",link:"#"}

]

const heading=["Date","Purchase Order#","Reference#","Vendor Name","Status","Billed Status","Amount","Expected Delivery Date"];
const row=[
    ["11 Oct 2022","PO-0000","38768","Registered Vendor","Draft","","69606","22 Apr 2023"],
    ["17 Oct 2022","PO-0001","2296","Oversea Vendor","Draft","","25618","27 Mar 2024"],
    ["29 Apr 2022","PO-0002","25472","SEZ Vendor","Draft","","8790","16 Feb 2024"],
    ["26 May 2022","PO-0003","13690","Deemed Export Vendor","Draft","","73628","5 Nov 2023"],
    ["28 Apr 2022","PO-0004","32397","Unregistered Vendor","Draft","","40800","10 Nov 2023"],
    ["11 Apr 2022","PO-0005","858","Composition Reg Customer","Draft","","44695","3 Sep 2023"]
    
]
const PurchasesOrders = () => {
    return (
        <>
            <Row>
                <Col sm={9}>

                    <Nav>
                        <Dropdown menu={menu} name="All Purchase Orders" header="DEFAULT FILTERS" key="all purchase orders"></Dropdown>
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
export default PurchasesOrders;