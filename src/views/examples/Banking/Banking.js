import React from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import AdminNavbar from "components/Navbars/AdminNavbar";
const Banking=()=>{
    return(
        <>
        <title>Banking | ZOHO Books</title>
       <Container fluid className="bg-white mt-0">
        <div className="float-right mb-5">
            <i className="bi-x-lg"></i>
        </div>
        <div className="text-center">
            <h1>Stay on the top of your money game</h1>
            <p>Connect your bank and credit cards to fetch all your transactions. Create,<br/> categorize and match these transactions to those you have in Zoho Books.</p>
            <Button variant="primary">Connect Bank/Credit Card</Button>
            <Button variant="outline-dark">Add Manually</Button>
            <p>Don't use banking for your bussiness?<Button variant="link">Skip this step</Button></p>
            <div  >
                <hr className="m-0"/>
            <Button variant="link" className="text-dark mb-5"><i className="bi-play-circle text-primary mr-2" />Watch how to connect your bank account to Zoho Books</Button>
            
            </div>
        </div>
       </Container>
       </>
    )
}
 export default Banking;