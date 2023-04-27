import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import Reports from "./Reports";
import Dropdown from "../../../components/tools/dropdown.js"

const menu=[
    {name:"Today",link:""},
    {name:"This week",link:""},
    {name:"This Quater",link:""},
    {name:"This Year",link:""},
    {name:"Yesterday",link:""},
    {name:"Previous Week",link:""},
    {name:"Previous Month",link:""},
    {name:"Previous Quater",link:""},
    {name:"Previous Year",link:""},
    {name:"Custom",link:""},

]
const headers=()=>{
    return(
    <>
        <Container fluid>
            <Row>
                <Col>
                    <Reports/>
                </Col>
                <Col>
                <Dropdown menu={menu} icon="bi-calender" key="all Expenses"></Dropdown>
                </Col>
            </Row>
        </Container>
    
    
    </>
    );
}

export default headers;