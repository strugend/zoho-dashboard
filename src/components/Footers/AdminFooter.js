/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/

// reactstrap components
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";
import Carousel from "./Carousel.js";
const Footer = () => {
  return (
    <footer className="footer">
      <hr />
      <Row className="align-items-center justify-content-xl-between">
        <Col xl="5">
          {/* <div className="copyright text-center text-xl-left text-muted">
            © {new Date().getFullYear()}{" "}
            <a
              className="font-weight-bold ml-1"
              href="https://www.creative-tim.com?ref=adr-admin-footer"
              rel="noopener noreferrer"
              target="_blank"
            >
              Creative Tim
            </a>
          </div> */}
          <Carousel />
        </Col>

        <Col xl="7">
          <Row>
            <Col>
              <h4>OTHER ZOHO APPS</h4>
              <Nav vertical>
                <NavItem>
                  <NavLink href="#">
                    Expense Reporting
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    Subscription Billling
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    Invoice Software
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink

                    href="#"
                  >
                    Inventory Management
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink

                    href="#"
                  >
                    CRM & other Apps
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col>
              <h4>HELP & SUPPORT</h4>
              <Nav vertical>
                <NavItem>
                  <NavLink href="#">
                    Contact Support
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    Request a feature
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    Knowledge Base
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink

                    href="#"
                  >
                    Help Documentation
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink

                    href="#"
                  >
                    Webinar
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col>
              <h4>QUICK LINKS</h4>
              <Nav vertical>
                <NavItem>
                  <NavLink href="#">
                    Getting started
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    Mobile Apps
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    Add-ons
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink

                    href="#"
                  >
                    Realease Notes
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink

                    href="#"
                  >
                    Devepolers API
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
          <hr />
          <Row>
            <div>
              <i className="bi-telephone mb-5"> You can directly talk to us every<b> Monday to Friday 9:00 AM to 7:00 PM</b></i>

            </div>
            <div>
              <p className="text-dark"><b>GST Helpline - 18005726671</b></p>
            </div>
            
          </Row>
          <Row>
          <div >
              <p>&#169; 2022, Zoho Corporation Pvt. Ltd. All Rights Reserved.</p>
            </div>
          </Row>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
