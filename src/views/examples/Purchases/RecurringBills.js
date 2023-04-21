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
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const menu = [
    { name: "All", link: "#" },
    { name: "Acive", link: "#" },
    { name: "Stopped", link: "#" },
    { name: "Expired", link: "#" },
    { name: "New Custom View", link: "#" }

]


const RecurringBills = () => {
    return (
        <>
            <Row>
                <Col sm={9}>

                    <Nav>
                        <Dropdown menu={menu} name="All Recurring Bills" header="DEFAULT FILTERS" key="all recurring bills"></Dropdown>
                    </Nav>
                </Col>
                <Col sm={3} className="justify-content-end">
                    <Stack direction="horizontal" gap={3}>
                        <Nav>
                            <Nav.Link href="#" size="lg">
                                <i className="bi-plus" />New
                            </Nav.Link>
                            <Nav.Link href="#" size="lg">
                                <i className="bi-list" />
                            </Nav.Link>
                            <Nav.Link href="#" className="text-primary">
                                <i className="bi-lightbulb" />Page Tips</Nav.Link>
                        </Nav>
                    </Stack>
                </Col>
            </Row>
            <Container fluid className="bg-white mt-0 pt-5 justify-content-center">




        <div className="text-center mt-3 ">
        <h1>Create. Set. Repeat. </h1>
            <p>Do you pay bills every so often? Start paying your vendors on time by creating recurring bills.</p>
            <Button variant="primary">CREATE RECURRING Bill</Button>
           <p> <Button variant="link">Import Recurring Bills</Button></p>
            
        </div>
       </Container>

        </>
    )
}
export default RecurringBills;