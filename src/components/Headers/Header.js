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

// reactstrap components
import { Tooltip } from "chart.js";
import { useState } from "react";
import { Card, CardBody, CardTitle, Container, Row, Col, Progress, NavLink, ButtonDropdown,DropdownToggle,DropdownItem,DropdownMenu } from "reactstrap";
import Tooltips from "../../views/examples/ToolTip.js";
const Header = () => {
  const [isOpen,setIsOpen]=useState(false);
  const toggle=()=>{
    setIsOpen(!isOpen)
  }
  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="6">
                <p className="text-dark"><b>Total Receivables</b> <Tooltips/></p>
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-muted mb-1"
                        >
                          Total Unpaid Invoices
                          <span>&nbsp; &#8377; 2,11,506</span>
                        </CardTitle>

                        <Progress multi>
                          <Progress bar color="info" value="65" />
                          <Progress bar color="warning" value="35" />
                        </Progress>

                        {/* <span className="h2 font-weight-bold mb-0">
                          350,897
                        </span> */}
                      </div>
                      {/* <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <i className="fas fa-chart-bar" />
                        </div>
                      </Col> */}
                    </Row>
                    {/* <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" /> 3.48%
                      </span>{" "}
                      <span className="text-nowrap">Since last month</span>
                    </p> */}
                    <Row>
                      <div className="col">
                        <NavLink
                          active
                          href="#"
                          className="text-primary text-uppercase"
                        >
                          current
                          <div className="text-dark">
                            <span> &#8377; 2,11,506</span>
                          </div>
                        </NavLink>
                      </div>
                      <div className="col">
                        <h4 className="text-uppercase text-danger">Overdue</h4>
                        <ButtonDropdown isOpen={isOpen} toggle={toggle}>
                          <DropdownToggle caret size="sm">
                            <span> &#8377; 2,11,506</span>
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                          </DropdownMenu>
                        </ButtonDropdown>
                      </div>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="6">
                <p className="text-dark"><b>Total Payables </b> <Tooltips/></p>
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className=" text-muted mb-1"
                        >
                          Total Unpaid Bills<span>&nbsp; &#8377; 1,67,077</span>
                        </CardTitle>

                        <Progress multi>
                          <Progress bar color="info" value="65" />
                          <Progress bar color="warning" value="35" />
                        </Progress>
                        {/* <span className="h2 font-weight-bold mb-0">2,356</span> */}
                      </div>
                      {/* <Col className="col-auto">
                        <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                          <i className="fas fa-chart-pie" />
                        </div>
                      </Col> */}
                    </Row>
                    {/* <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-danger mr-2">
                        <i className="fas fa-arrow-down" /> 3.48%
                      </span>{" "}
                      <span className="text-nowrap">Since last week</span>
                    </p> */}
                    <Row>
                      <div className="col">
                        <NavLink
                          active
                          href="#"
                          className="text-primary text-uppercase"
                        >
                          current
                          <div className="text-dark">
                            <span> &#8377; 2,11,506</span>
                          </div>
                        </NavLink>
                      </div>
                      <div className="col">
                        <h4 className="text-uppercase text-danger">Overdue</h4>
                        <ButtonDropdown isOpen={isOpen} toggle={toggle}>
                          <DropdownToggle caret size="sm">
                            <span> &#8377; 2,11,506</span>
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                          </DropdownMenu>
                        </ButtonDropdown>
                      </div>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              {/* <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Sales
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">924</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                          <i className="fas fa-users" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-warning mr-2">
                        <i className="fas fa-arrow-down" /> 1.10%
                      </span>{" "}
                      <span className="text-nowrap">Since yesterday</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Performance
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">49,65%</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                          <i className="fas fa-percent" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        <i className="fas fa-arrow-up" /> 12%
                      </span>{" "}
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </CardBody>
                </Card>
              </Col> */}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
