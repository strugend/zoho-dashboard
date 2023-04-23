

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
import Alert from 'react-bootstrap/Alert';
import Button from "react-bootstrap/Button"





const BulkUpdate = () =>{
    return(
        <>
        <title>Bulk Update | ZOHO Books</title>
        <Container fluid className=" bg-white">
       
            
            <Row className=" bg-white justify-content-center" >
            <Col sm={10} className="pt-5 text-center">
                <h1 className="text-center">Bulk Update Accounts in Transactions</h1>
                <p>Filter transactions (Invoices, Credit Notes, Purchase Orders, Expenses, Bills, Vendor Credits) and bulk-update its accounts with a new account</p>
                <Alert variant="warning"><i className="bi-exclamation-circle-fill">Bulk-updating accounts in transactions will cause significant changes to the financial data of your business. We recommend that you do this with the assistance of an accountant.</i></Alert>
                <Button variant="primary" >Filter and Bulk Update</Button>
            </Col>
                
            </Row>
            


            
            </Container>
        </>
    )
}
 export default BulkUpdate;