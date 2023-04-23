

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

import Button from "react-bootstrap/Button"





const Budgets = () =>{
    return(
        <>
        <title>Budgets | ZOHO Books</title>
        <Container fluid className=" bg-white">
        <Row className="mt-1 mb-1" >
                <Col sm={10}>
                    <h2 className="">Budgets</h2>
                </Col>
            
                <Col sm={2} className="justify-content-end">
                    

                            <Nav.Link href="#" size="lg">
                                <i className="bi-plus" />New Budgets
                            </Nav.Link>
                          
                    
                </Col>
                
            </Row>
            
            <Row className=" bg-white justify-content-center" >
            <Col sm={10} className="pt-5 text-center">
                <h1 className="text-center">Budget your business finance. Stay on top of your expenses.</h1>
                <p>Create budgets for the various activities of your business, compare them with the actuals, and see how your business is performing.</p>
                <Button variant="primary" >Create Budget</Button>
            </Col>
                
            </Row>
            


            
            </Container>
        </>
    )
}
 export default Budgets;