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
    { name: "Unbilled", link: "#" },
    { name: "Invoiced", link: "#" },
    { name: "Reimbursed", link: "#" },
    { name: "Billable", link: "#" },
    { name: "Non-Billable", link: "#" },
    { name: "With Receipts", link: "#" },
    { name: "Without Receipts", link: "#" },
    { name: "New Custom View", link: "#" }

]


const RecurringExpenses= () => {
    return (
        <>
            <Row>
                <Col sm={10}>

                    <Nav>
                        <Dropdown menu={menu} name="All Profiles" header="DEFAULT FILTERS" key="all profile"></Dropdown>
                    </Nav>
                </Col>
                <Col sm={2} className="justify-content-end">
                    <Stack direction="horizontal" gap={3}>
                        <Nav>
                            <Nav.Link href="#" size="lg">
                                <i className="bi-plus" />New
                            </Nav.Link>
                            <Nav.Link href="#" size="lg">
                                <i className="bi-list" />
                            </Nav.Link>
                        </Nav>
                    </Stack>
                </Col>
            </Row>
            <Container fluid className="bg-white mt-0 justify-content-center">




        <div className="text-center mt-3">
        <h1>Create. Set. Repeat. </h1>
            <p>Create recurring expenses to handle and pay for stuff you spend on periodically.</p>
            <Button variant="primary">NEW RECURRING EXPENSE</Button>
           <p> <Button variant="link">Import Recurring Expenses</Button></p>
            
        </div>
       </Container>

        </>
    )
}
export default RecurringExpenses;