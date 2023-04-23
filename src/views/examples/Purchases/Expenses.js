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


const Expenses= () => {
    return (
        <>
        <title>Expenses | ZOHO Books</title>
            <Row>
                <Col sm={9}>

                    <Nav>
                        <Dropdown menu={menu} name="All Expenses" header="DEFAULT FILTERS" key="all Expenses"></Dropdown>
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
            <Container fluid className="bg-white mt-0 justify-content-center">

            <Row xs={1} md={2} className="mt-3 pt-6 justify-content-center">
        <Col >
          <Card className="align-items-center" style={{ height: '18rem' }}>
            <Card.Body>
                <Row className="d-flex align-items-center">
                    <Col sm={5}>
                    <i className="bi-play-circle"/>
                    </Col>
                    <div class="d-flex" style={{height: "200px;"}}>
  <div class="vr"></div>
</div>
                    <Col sm={7}>
                    <h6>ZOHO Books</h6>
                    <p>How to create a credit note</p>
                    </Col>
                </Row>
              
            </Card.Body>
          </Card>
        </Col>
    </Row>



        <div className="text-center mt-3">
        <h1>Time To Manage Your Expenses!</h1>
            <p>Create and Manage expenses that are part of your organization's opening costs</p>
            <Button variant="primary">Record Expense</Button>
           <p> <Button variant="link">Import Expenses</Button></p>
            
        </div>
       </Container>

        </>
    )
}
export default Expenses;