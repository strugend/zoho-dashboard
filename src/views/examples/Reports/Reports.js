
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
import { Row,Col } from 'react-bootstrap';
import {NavLink} from 'reactstrap';
import AgingDetails from './Receivables/AgingDetails';
const AllTabs=[
    {
        heading:"Bussiness Overview",
        class:"bi-building-fill",
        children:[{
            name:"Profit and Loss",
            link:"",
        },
        {
            name:"Profit and Loss (Schedule III)",
            link:"",
        },{
            name:"Horizontal Profit and Loss ",
            link:"",
        },{
            name:"Cash Flow Statement",
            link:"",
        },{
            name:"Balance Sheet",
            link:"",
        },{
            name:"Horizontal Balance Sheet",
            link:"",
        },{
            name:"Balance Sheet (Schedule III)",
            link:"",
        },
        ]
    },
    {
        heading:"Sales",
        class:"bi-building-fill",
        children:[
            {
                name:"Sales by Customer",
                link:""
            },
            {
                name:"Sales by Item",
                link:""
            },
            {
                name:"Sales by sales person",
                link:""
            }
        ]
    },
    {
        heading:"Inventory",
        class:"bi-building-fill",
        children:[
            {
                name:"Inventory Summary",
                link:"",
            },
            {
                name:"Inventory Valuation Summary",
                link:"",
            },{
                name:"Fifo Cost Lot Tracking",
                link:"",
            },
            {
                name:"Product Sales Report",
                link:"",
            },
        ]
    },
    {
        heading:"Receivalbes",
        class:"bi-building-fill",
        children:[
            {
                name:"Customer Balances",
                link:"",
            },
            {
                name:"Aging Summary",
                link:"",
            },{
                path:"/receivables/Aging Details",
                name:"Aging Detailske",
                component:AgingDetails,
                layout:"/admin/reports"
            },
            {
                name:"Invoice Details",
                link:"",
            },
            {
                name:"Retainer Invoice Details",
                link:"",
            },{
                name:"Sales Order Details",
                link:"",
            },{
                name:"Delivery Challans Details",
                link:"",
            },{
                name:"Estimate Details",
                link:"",
            },
        ]
    },
    {
        heading:"Payments Received",
        class:"bi-building-fill",
        children:[
            {
                name:"Payments Received",
                link:"",
            },
            {
                name:"Time to get Paid",
                link:"",
            },{
                name:"Credit Note Details",
                link:"",
            },
            {
                name:"Refund History",
                link:"",
            }
        ]
    },
    {
        heading:"Recurring Invoices",
        class:"bi-building-fill",
        children:[
            {
                name:"Recurring Invoice Details",
                link:"",
            },
            
        ]
    },
    {
        heading:"Payalbes",
        class:"bi-building-fill",
        children:[
            {
                name:"Vendor Balances",
                link:"",
            },
            {
                name:"Aging Summary",
                link:"",
            },{
                name:"Aging Details",
                link:"",
            },
            {
                name:"Bills Details",
                link:"",
            },
            {
                name:"Vendor Credit Details",
                link:"",
            },{
                name:"Payment Made",
                link:"",
            },{
                name:"Refund History",
                link:"",
            },{
                name:"Purchase Order Details",
                link:"",
            },
        ]
    },
    {
        heading:"Purchase and Expenses",
        class:"bi-building-fill",
        children:[
            {
                name:"Purchases by Vendor",
                link:"",
            },
            {
                name:"Purchase by Item",
                link:"",
            },{
                name:"Expense Details",
                link:"",
            },
            {
                name:"Expenses by Category",
                link:"",
            },
            {
                name:"Expenses by Customer",
                link:"",
            },{
                name:"Expenses by Project",
                link:"",
            },{
                name:"Expenses by Employee",
                link:"",
            },
        ]
    },
    {
        heading:"Taxes",
        class:"bi-building-fill",
        children:[
            {
                name:"tax Summary",
                link:"",
            },
            {
                name:"TDS Summary",
                link:"",
            },{
                name:"GSTR-3B Summary",
                link:"",
            },
            {
                name:"Summary of Outward Supplies",
                link:"",
            },
            {
                name:"Summary of Inward Supplies",
                link:"",
            },{
                name:"Self Invoice Summary",
                link:"",
            },{
                name:"Annual Summary (GSTR-9)",
                link:"",
            },{
                name:"Oversea Digital Tax Summary",
                link:"",
            },
        ]
    },
    {
        heading:"Project and Timesheet",
        class:"bi-building-fill",
        children:[
            {
                name:"Project Summary",
                link:"",
            },
            {
                name:"Project Details",
                link:"",
            },{
                name:"Timesheet Details",
                link:"",
            }
        ]
    },
    {
        heading:"Accountant",
        class:"bi-building-fill",
        children:[
            {
                name:"Accountant Transcations",
                link:"",
            },
            {
                name:"Account Type Summary",
                link:"",
            },{
                name:"Account Type Transcations",
                link:"",
            },
            {
                name:"Book Day",
                link:"",
            },
            {
                name:"General Ledger",
                link:"",
            },{
                name:"Journal Report",
                link:"",
            },{
                name:"Trial Balance",
                link:"",
            }
        ]
    },
    {
        heading:"Budgets",
        class:"bi-building-fill",
        children:[
            {
                name:"Budgets bs Actuals",
                link:"",
            }
        ]
    },
    {
        heading:"Currency",
        class:"bi-building-fill",
        children:[
            {
                name:"Realized Gain or Loss",
                link:"",
            },
            {
                name:"Unrealized Gain or Loss",
                link:"",
            }
        ]
    },
    {
        heading:"Activity",
        class:"bi-building-fill",
        children:[
            {
                name:"System Mails",
                link:"",
            },
            {
                name:"Activity Logs",
                link:"",
            },{
                name:"Exception Report",
                link:"",
            },
            {
                name:"Portal Activities",
                link:"",
            },
            {
                name:"Client Reviews",
                link:"",
            },{
                name:"API Usage",
                link:"",
            }
        ]
    }
]

function Reports(props) {
  return (
    <>
    <title>Reports | ZOHO Books</title>
    <Navbar  expand="lg">
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Row>
        {
            AllTabs.map((tabs,idx)=>{
                return(
                    <>
                    <Col  xs={12} md={12}lg={4} className="mb-3" kay={idx}>
                    <span className='mr-2 font-weight-normal'><i className={tabs.class}/></span>{tabs.heading}
                    {tabs.children.map((item,key)=>{
                        console.log(item.component +"fj" )
                        return(
                            <>
                           
                                <Nav>
                                    <i className="bi-star text-muted mb-1"/>
                                    <NavLink 
                                        to={item.layout + item.path}
                                        key={key} 
                                        tag={NavLinkRRD}
                                        activeClassName="active"
                                        className="text-primary font-weight-light mb-1">{item.name}</NavLink>
                                </Nav>
                                <hr className='m-0 pl-4'/>
                               
                            </>
                        )
                    })}
                    </Col>
                    </>
                )
            })
        } 
        </Row>
        </Navbar.Collapse>
      
    </Navbar>
    </>
  );
}

export default Reports;