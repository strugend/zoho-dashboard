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
import { useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
 
  CardFooter,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col, ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.js";

import Tooltip from "../views/examples/ToolTip.js";
import Header from "components/Headers/Header.js";

const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const [toolOpen,setToolOpen]=useState(false);
  const toolToggle=()=>{
    setToolOpen(!toolOpen);
  }
  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="12">
            <div className="text-dark">
              Cash Flow
              <Tooltip/>
              <div className="float-right">
                <ButtonDropdown isOpen={isOpen} toggle={toggle} >
                  <DropdownToggle caret size="sm">
                    This Fiscal Year
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>This Fiscal Year</DropdownItem>
                    <DropdownItem>Previous Fiscal Year</DropdownItem>
                    <DropdownItem>Last 12 Months</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </div>
            </div>
            <Card className="shadow mt-2">
              {/* <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-light ls-1 mb-1">
                      Overview
                    </h6>
                    <h2 className="text-white mb-0">Sales value</h2>
                  </div>
                  <div className="col">
                    <Nav className="justify-content-end" pills>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 1
                          })}
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 1)}
                        >
                          <span className="d-none d-md-block">Month</span>
                          <span className="d-md-none">M</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 2
                          })}
                          data-toggle="tab"
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 2)}
                        >
                          <span className="d-none d-md-block">Week</span>
                          <span className="d-md-none">W</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </Row>
              </CardHeader> */}
              <CardBody>
                {/* Chart */}
                <Row>
                <Col xl="9">
                <div className="chart">
                  <Line
                    data={chartExample1[chartExample1Data]}
                    options={chartExample1.options}
                    getDatasetAtEvent={(e) => console.log(e)}
                  />
                </div>
                <div className="vr"></div>
                </Col>
                <Col xl="3">
                <div className="float-right">
                <p className="font-weight-normal">Cash as on 01/01/2021 <div className="text-dark "><h2 >&#8377; 10,000.00</h2></div></p>
                <p className="text-success font-weight-normal">Incoming <div className="text-dark "><h2 >&#8377; 18,269.00</h2></div></p>
                <p className="text-danger font-weight-normal">Outgoing <div className="text-dark "><h2 >&#8377; 10,000.00</h2></div></p>
                <p className="text-primary font-weight-normal">Cash as on 01/01/2021 <div className="text-dark "><h2 >&#8377; 19,618.00</h2></div></p>
                </div>
              </Col>
                
                </Row>
              </CardBody>
            </Card>
          </Col>
          {/* <Col xl="4">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Performance
                    </h6>
                    <h2 className="mb-0">Total orders</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                
                <div className="chart">
                  <Bar
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col> */}
        </Row>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="6">

            <Card>
              <CardHeader tag="h3" className="bg-light">Income and Expense 
              <Tooltip/>
                <div className="float-right">
                  <ButtonDropdown isOpen={isOpen} toggle={toggle} >
                    <DropdownToggle caret size="sm">
                      This Fiscal Year
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>This Fiscal Year</DropdownItem>
                      <DropdownItem>Previous Fiscal Year</DropdownItem>
                      <DropdownItem>Last 12 Months</DropdownItem>
                      <DropdownItem>Last 6 Months</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </div>
              </CardHeader>
              <CardBody>
              <div className="chart">
                  <Bar
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
              <CardFooter className="text-muted">
                <Row>
                  <Col>
                  <div className="text-success">
                    Total Income
                    </div>
                    <span className="text-dark"> &#8377; 2,11,506</span>
                  </Col>
                  <Col>
                    <div className="text-danger">
                    Total Expenses
                    </div>
                    <span className="text-dark"> &#8377; 2,11,506</span>
                  </Col>
                </Row>
              </CardFooter>
            </Card>
            <p>* Income and expense values displayed are exclusive of taxes</p>

            {/* <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Page visits</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Page name</th>
                    <th scope="col">Visitors</th>
                    <th scope="col">Unique users</th>
                    <th scope="col">Bounce rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">/argon/</th>
                    <td>4,569</td>
                    <td>340</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 46,53%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">/argon/index.html</th>
                    <td>3,985</td>
                    <td>319</td>
                    <td>
                      <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                      46,53%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">/argon/charts.html</th>
                    <td>3,513</td>
                    <td>294</td>
                    <td>
                      <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                      36,49%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">/argon/tables.html</th>
                    <td>2,050</td>
                    <td>147</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 50,87%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">/argon/profile.html</th>
                    <td>1,795</td>
                    <td>190</td>
                    <td>
                      <i className="fas fa-arrow-down text-danger mr-3" />{" "}
                      46,53%
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card> */}
          </Col>
          <Col xl="6">
            {/* <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Social traffic</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Referral</th>
                    <th scope="col">Visitors</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Facebook</th>
                    <td>1,480</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">60%</span>
                        <div>
                          <Progress
                            max="100"
                            value="60"
                            barClassName="bg-gradient-danger"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Facebook</th>
                    <td>5,480</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">70%</span>
                        <div>
                          <Progress
                            max="100"
                            value="70"
                            barClassName="bg-gradient-success"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Google</th>
                    <td>4,807</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">80%</span>
                        <div>
                          <Progress max="100" value="80" />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Instagram</th>
                    <td>3,678</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">75%</span>
                        <div>
                          <Progress
                            max="100"
                            value="75"
                            barClassName="bg-gradient-info"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">twitter</th>
                    <td>2,645</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">30%</span>
                        <div>
                          <Progress
                            max="100"
                            value="30"
                            barClassName="bg-gradient-warning"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card> */}
            <Card>
              <CardHeader tag="h3" className="bg-light"> Your Top Expenses
              <Tooltip/>
                <div className="float-right">
                  <ButtonDropdown isOpen={isOpen} toggle={toggle} >
                    <DropdownToggle caret size="sm">
                      This Fiscal Year
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>This Fiscal Year</DropdownItem>
                      <DropdownItem>This Quarter</DropdownItem>
                      <DropdownItem>This Month</DropdownItem>
                      <DropdownItem>Previous Fiscal Year</DropdownItem>
                      <DropdownItem>Previous Quarter</DropdownItem>
                      <DropdownItem>Previous Month</DropdownItem>
                      <DropdownItem>Last 12 Months</DropdownItem>
                      <DropdownItem>Last 6 Months</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </div>
              </CardHeader>
              <CardBody>
                No Data to show
              </CardBody>

            </Card>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col className="mb-2 mb-xl-0" xl="6">

            <Card>
              <CardHeader tag="h3" className="bg-light">Projects
              <Tooltip/>
              </CardHeader>
              <CardBody>
              <Row>
                <Col>
                UNBILLED HOURS
                </Col>
                <Col>
                <div className="text-dark"> <h2>&#8377; 0.00</h2></div>
                UNBILLED EXPENSES
                </Col>
              </Row>
              <hr/>
              <Row>
                <Col>
                <div className="text-center"> 
                <NavLink href="#"  className="text-center text-primary">Add Projects to this watchlist</NavLink>
                </div>
                </Col>
              </Row>
              </CardBody>
              <CardFooter className="text-muted bg-light">
                <div >
           
                <NavLink href="#"  className=" text-primary">Show All Projects</NavLink>
                </div>
              </CardFooter>
              
            </Card>
            {/* <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Page visits</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Page name</th>
                    <th scope="col">Visitors</th>
                    <th scope="col">Unique users</th>
                    <th scope="col">Bounce rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">/argon/</th>
                    <td>4,569</td>
                    <td>340</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 46,53%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">/argon/index.html</th>
                    <td>3,985</td>
                    <td>319</td>
                    <td>
                      <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                      46,53%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">/argon/charts.html</th>
                    <td>3,513</td>
                    <td>294</td>
                    <td>
                      <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                      36,49%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">/argon/tables.html</th>
                    <td>2,050</td>
                    <td>147</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 50,87%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">/argon/profile.html</th>
                    <td>1,795</td>
                    <td>190</td>
                    <td>
                      <i className="fas fa-arrow-down text-danger mr-3" />{" "}
                      46,53%
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card> */}
          </Col>
          <Col xl="6">
            {/* <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Social traffic</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Referral</th>
                    <th scope="col">Visitors</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Facebook</th>
                    <td>1,480</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">60%</span>
                        <div>
                          <Progress
                            max="100"
                            value="60"
                            barClassName="bg-gradient-danger"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Facebook</th>
                    <td>5,480</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">70%</span>
                        <div>
                          <Progress
                            max="100"
                            value="70"
                            barClassName="bg-gradient-success"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Google</th>
                    <td>4,807</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">80%</span>
                        <div>
                          <Progress max="100" value="80" />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Instagram</th>
                    <td>3,678</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">75%</span>
                        <div>
                          <Progress
                            max="100"
                            value="75"
                            barClassName="bg-gradient-info"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">twitter</th>
                    <td>2,645</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">30%</span>
                        <div>
                          <Progress
                            max="100"
                            value="30"
                            barClassName="bg-gradient-warning"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card> */}
            <Card>
              <CardHeader tag="h3" className="bg-light">
                Bank and Credit Cards
                <Tooltip/>
              </CardHeader>
              <CardBody>
                <div className="text-center">
                  <p> Yet to add Bank and Credit Card details</p>
                 
                <NavLink href="#"  className="text-center text-primary">Add Bank Account</NavLink>
                
                </div>
              </CardBody>

            </Card>
          </Col>
        </Row>
        <Row>
          <Col xl="6" className="mt-3 ">
          <Card className="h-500">
              <CardHeader tag="h3" className="bg-light">
               Account Watchlist
               <Tooltip/>
              </CardHeader>
              <CardBody className="h-500">
                
              </CardBody>

            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
