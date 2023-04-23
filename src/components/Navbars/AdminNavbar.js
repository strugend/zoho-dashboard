

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'components/tools/dropdown.js';
// import Tooltip from "../../views/examples/ToolTip.js"

import ToolTips from 'components/tools/ToolTips.js';

const menu=[
  {name:"Customers",link:"#"},
  {name:"Vendors",link:"#"},
  {name:"Banking",link:"#"},
  {name:"Invoices",link:"#"},
  {name:"Estimates",link:"#"},
  {name:"Retainer Invoices",link:"#"},
  {name:"Sales Orders",link:"#"},
  {name:"Delivery Challans",link:"#"},
  {name:"Expenses",link:"#"},
  {name:"Bills",link:"#"},
  {name:"Vendor Credit",link:"#"},
  {name:"Purchase Orders",link:"#"},
  {name:"TimeSheet",link:"#"},
  {name:"Items",link:"#"},
  {name:"Inventory Adjustments",link:"#"},
  {name:"Documents",link:"#"},
]

function AdminNavbar() {
  return (

      <>
      <Navbar >
      <Nav.Link href="#" size="md">
      <ToolTips class="bi-plus-circle-fill" val="Quick create" name="plus"/>
      </Nav.Link>
      <Nav.Link href="#" size="lg">
        <ToolTips class="bi-bootstrap-reboot" val="Recent Activities" name="reboot"></ToolTips>

      </Nav.Link>
      <InputGroup className="d-flex ">
        <Dropdown menu={menu} icon="bi-search" key="search"/>

        <Form.Control
          placeholder="Search"
          aria-label="Username"
          aria-describedby="basic-addon1"
          
        />
      </InputGroup>
      
      
      

      <ToolTips val="The data in this organization will be reset in every 30 days" text="This is a Test organization."></ToolTips>
      <Dropdown name="Demo Org" menu={[""]} key="demo"></Dropdown>
      <Nav.Link href="#" size="lg">
        <ToolTips class="bi-bell" val="Notifications" name="bell"></ToolTips>
      </Nav.Link>
      <Nav.Link href="#" size="lg">
        <ToolTips class="bi-files" val="Documents" name="files"></ToolTips>
      </Nav.Link>
      <Nav.Link href="#" size="lg">
        <ToolTips class="bi-gear" val="Settings" name="gear"></ToolTips>
      </Nav.Link>
      <Nav.Link href="#" size="lg">
        <ToolTips class="bi-question octagon" val="Help & Support" name="octagon"></ToolTips>
      </Nav.Link>
      <Nav.Link className="align-items-center">
        <span className="avatar avatar-sm rounded-circle">
          <img
            alt="..."
            src={require("../../assets/img/theme/team-4-800x800.jpg")}
          />
        </span>
      </Nav.Link>
     
      
      </Navbar>
      <hr className='m-0 '/>
    </>
  );
}

export default AdminNavbar;