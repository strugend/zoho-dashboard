
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
import AdminFooter from "components/Footers/AdminFooter.js";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.js";


import Tooltip from "../components/tools/ToolTips.js"
import Header from "components/Headers/Header.js";
import Dropdown from "../components/tools/dropdown.js"
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

  const cash_menu=[
    {name:"This Fiscal Year",link:"#"},
    {name:"Previous Fiscal Year",link:"#"},
    {name:"Last 12 months",link:"#"}];
  
    const income_menu=[
      {name:"This Fiscal Year",link:"#"},
      {name:"Previous Fiscal Year",link:"#"},
      {name:"Last 12 months",link:"#"}];

      const expense_menu=[
        {name:"This Fiscal Year",link:"#"},
        {name:"This Quater",link:"#"},
        {name:"This Month",link:"#"},
        {name:"Previous Fiscal Year",link:"#"},
        {name:"Previous Quater",link:"#"},
        {name:"Previous month",link:"#"},
        {name:"Last 12 months",link:"#"},
        {name:"Last 6 months",link:"#"}
      ];
  return (
    <>
    <title>Dashboard | ZOHO Books</title>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="12">
            <div className="text-dark">
              Cash Flow
              <Tooltip name="Cash"class="bi-question-octagon" val="Amount of money moving in and ou of your bussiness"/>
              <div className="float-right">
                <Dropdown key="cash_fiscal" name="This Fiscal Year" icon="bi-caret-fill" menu={cash_menu}/>
                
              </div>
            </div>
            <Card className="shadow mt-2">
              
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
          
        </Row>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="6">

            <Card>
              <CardHeader tag="h3" className="bg-light">Income and Expense 
              <Tooltip name="Income"class="bi-question-octagon" val="Displays total sales, receipts and expenses for the current year"/>
                <div className="float-right">
                <Dropdown key="income_fiscal" name="This Fiscal Year" icon="bi-caret-fill" menu={income_menu}/>
                 
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

           
          </Col>
          <Col xl="6">
            
            <Card>
              <CardHeader tag="h3" className="bg-light"> Your Top Expenses
              <Tooltip name="Expenses"class="bi-question-octagon" val="Top expenses across various categories for the chosen period"/>
                <div className="float-right">
                <Dropdown key="expense_fiscal" name="This Fiscal Year" icon="bi-caret-fill" menu={expense_menu}/>
                  
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
              <Tooltip name="Projects"class="bi-question-octagon" val="Projects that are on your watchlist are displayed here"/>
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
            
          </Col>
          <Col xl="6">
            
            <Card>
              <CardHeader tag="h3" className="bg-light">
                Bank and Credit Cards
                <Tooltip name="Bank"class="bi-question-octagon" val="Overview bank and credit cards added in Zoho Books"/>
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
               
              </CardHeader>
              <CardBody className="h-500">
                
              </CardBody>

            </Card>
          </Col>
        </Row>
      </Container>
      <Container fluid>
          <AdminFooter />
        </Container>
    </>
  );
};

export default Index;
