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
import Ratio from 'react-bootstrap/Ratio';


const menu = [
    { name: "All", link: "#" },
    { name: "Draft", link: "#" },
    { name: "Pending Approval", link: "#" },
    { name: "Open", link: "#" },
    { name: "Closed", link: "#" },
    { name: "Void", link: "#" },
    { name: "New Custom View", link: "#" }

]


const VendorCredits = () => {
    return (
        <>
        <title>Vendor Credit | ZOHO Books</title>
            <Row>
                <Col sm={9}>

                    <Nav>
                        <Dropdown menu={menu} name="All Vendors Credits" header="DEFAULT FILTERS" key="all vendor credits"></Dropdown>
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

            <Row xs={2} md={2} className="mt-3 pt-6 justify-content-center">
        <Col >
          {/* <Card className="align-items-center" style={{ height: '18rem' }}>
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
                    <p>How to create a vendor credit </p>
                    </Col>
                </Row> 
                 </Card.Body>
    </Card>*/}
              <Ratio aspectRatio="16x16" >
  <iframe src="https://youtu.be/embed/0e4ilLC6t-I" title="YouTube video" allowFullScreen></iframe>
</Ratio>

           
        </Col>
    </Row>


    
        <div className="text-center mt-3">
        <h1>You deserve some credit too.</h1>
            <p>Create vendor credits and apply them to multiple bills when buying stuff from your vendor.</p>
            <Button variant="primary">CREATE VENDOR CREDITS</Button>
           <p> <Button variant="link">Import Vendor Credits</Button></p>
            
        </div>
       </Container>

        </>
    )
}
export default VendorCredits;