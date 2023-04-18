// /*!

// =========================================================
// * Argon Dashboard React - v1.2.2
// =========================================================

// * Product Page: https://www.creative-tim.com/product/argon-dashboard-react
// * Copyright 2022 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

// * Coded by Creative Tim

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// */
// import { Link } from "react-router-dom";
// // reactstrap components
// import {
//   DropdownMenu,
//   DropdownItem,
//   UncontrolledDropdown,
//   DropdownToggle,
//   Form,
//   FormGroup,
//   InputGroupAddon,
//   InputGroupText,
//   Input,
//   InputGroup,
//   Navbar,
//   Nav,
//   Container,
//   Media
// } from "reactstrap";

// const AdminNavbar = (props) => {

//   return (
//     <>
//       <Navbar className="navbar navbar-top  navbar-dark bg-gradient-info " expand="md" id="navbar-main" fixed="top" sticky="top">
//         <Container fluid>
//           <Link
//             className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
//             to="/"
//           >
//             {props.brandText}
//           </Link>
//           <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
//             <FormGroup className="mb-0">
//               <InputGroup className="input-group-alternative">
//                 <InputGroupAddon addonType="prepend">
//                   <InputGroupText>
//                     <i className="fas fa-search" />
//                   </InputGroupText>
//                 </InputGroupAddon>
//                 <Input placeholder="Searchnbvkhj" type="text" />
//               </InputGroup>
//             </FormGroup>
//           </Form>
//           <Nav className="align-items-center d-none d-md-flex" navbar>
//             <UncontrolledDropdown nav>
//               <DropdownToggle className="pr-0" nav>
//                 <Media className="align-items-center">
//                   <span className="avatar avatar-sm rounded-circle">
//                     <img
//                       alt="..."
//                       src={require("../../assets/img/theme/team-4-800x800.jpg")}
//                     />
//                   </span>
//                   <Media className="ml-2 d-none d-lg-block">
//                     <span className="mb-0 text-sm font-weight-bold">
//                       Jessica Jones
//                     </span>
//                   </Media>
//                 </Media>
//               </DropdownToggle>
//               <DropdownMenu className="dropdown-menu-arrow" right>
//                 <DropdownItem className="noti-title" header tag="div">
//                   <h6 className="text-overflow m-0">Welcome!</h6>
//                 </DropdownItem>
//                 <DropdownItem to="/admin/user-profile" tag={Link}>
//                   <i className="ni ni-single-02" />
//                   <span>My profile</span>
//                 </DropdownItem>
//                 <DropdownItem to="/admin/user-profile" tag={Link}>
//                   <i className="ni ni-settings-gear-65" />
//                   <span>Settings</span>
//                 </DropdownItem>
//                 <DropdownItem to="/admin/user-profile" tag={Link}>
//                   <i className="ni ni-calendar-grid-58" />
//                   <span>Activity</span>
//                 </DropdownItem>
//                 <DropdownItem to="/admin/user-profile" tag={Link}>
//                   <i className="ni ni-support-16" />
//                   <span>Support</span>
//                 </DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
//                   <i className="ni ni-user-run" />
//                   <span>Logout</span>
//                 </DropdownItem>
//               </DropdownMenu>
//             </UncontrolledDropdown>
//           </Nav>
//         </Container>
//       </Navbar>
//     </>
//   );
// };

// export default AdminNavbar;

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