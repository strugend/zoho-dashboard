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
import Index from "views/Index.js";
// import Profile from "views/examples/Profile.js";
// import Maps from "views/examples/Maps.js";
// import Register from "views/examples/Register.js";
// import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
// import Icons from "views/examples/Icons.js";
import CreditNotes from "views/examples/CreditNotes.js";
import Customers from "views/examples/Customers.js";
import DeliveryChallans from "views/examples/DeliveryChallans.js";
import Esimates from "views/examples/Estimates.js";
import InventoryAdjustments from "views/examples/InventoryAdjustments.js";
import Invoices from "views/examples/Invoives.js";
import PaymentsReceived from "views/examples/PaymentsReceived.js";
import PriceLists from "views/examples/PriceLists.js";
import RecurringInvoices from "views/examples/RecurringInvoices.js";
import RetainerInvoices from "views/examples/RetainerInvoices.js";
import SalesOrders from "views/examples/SalesOrders.js";

import Items from "views/examples/Items.js";
import Purchases from "views/examples/Purchases.js";
import Accountant from "views/examples/Accountant.js";
import Banking from "views/examples/Banking.js";
import E_way from "views/examples/E-way.js";
import Report from "views/examples/Report.js"
import TimeTracking from "views/examples/TimeTracking.js";
import Sales from "views/examples/Sales.js"
import Profile from "views/examples/Profile";
var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/items",
    name: "Items",
    icon: "ni ni-basket text-blue",
    // component: Items,
    layout: "/admin",
    children:[
      {
        path: "/items",
        name: "Items",
        // icon: "ni ni-basket text-blue",
        component: Items,
        layout: "/admin",
      },
      {
        path: "/items/price-lists",
        name: "price-lists",
        // icon: "ni ni-basket text-blue",
        component: PriceLists,
        layout: "/admin",
      },
      {
        path: "/items/inventory Adjustments",
        name: "inventory Adjustments",
        // icon: "ni ni-basket text-blue",
        component: InventoryAdjustments,
        layout: "/admin",
      }
    ]
  },
  {
    path: "/Banking",
    name: "Banking",
    icon: "ni ni-credit-card text-orange",
    component: Banking,
    layout: "/admin"
  },
  {
    path: "/Sales",
    name: "Sales",
    icon: "ni ni-bullet-list-67 text-yellow",
    component: Sales,
    layout: "/admin",
    children:[
      {
        path: "/Sales/Customers",
        name: "Customers",
        // icon: "ni ni-basket text-blue",
        component: Customers,
        layout: "/admin",
      },
      {
        path: "/Sales/Esimates",
        name: "Esimates",
        // icon: "ni ni-basket text-blue",
        component: Esimates,
        layout: "/admin",
      },
      {
        path: "/Sales/Retained Invoices",
        name: "inventory Adjustments",
        // icon: "ni ni-basket text-blue",
        component: RetainerInvoices,
        layout: "/admin",
      },
      {
        path: "/Sales/Delivery Challans",
        name: "Delivery Challans",
        // icon: "ni ni-basket text-blue",
        component: DeliveryChallans,
        layout: "/admin",
      },
      {
        path: "/Sales/Invoices",
        name: "invoices",
        // icon: "ni ni-basket text-blue",
        component: Invoices,
        layout: "/admin",
      },
      {
        path: "/Sales/Payments Received",
        name: "Payments Received",
        // icon: "ni ni-basket text-blue",
        component: PaymentsReceived,
        layout: "/admin",
      },
      {
        path: "/Sales/Recurring invoices",
        name: "Recurring invoices",
        // icon: "ni ni-basket text-blue",
        component: RecurringInvoices,
        layout: "/admin",
      },
      {
        path: "/Sales/Credit Notes",
        name: "Credit Notes",
        // icon: "ni ni-basket text-blue",
        component: CreditNotes,
        layout: "/admin",
      }
    ]
  },
  {
    path: "/purchases",
    name: "Purchases",
    icon: "ni ni-shop text-red",
    component: Purchases,
    layout: "/admin",
    children:[
      {
        path: "/purchases/vendors",
        name: "vendors",
        // icon: "ni ni-basket text-blue",
        component: Items,
        layout: "/admin",
      },
      {
        path: "/purchases/Expenses",
        name: "Expenses",
        // icon: "ni ni-basket text-blue",
        component: Items,
        layout: "/admin",
      },
      {
        path: "/purchases/Recurring expenses",
        name: "Recurring Expenses",
        // icon: "ni ni-basket text-blue",
        component: Items,
        layout: "/admin",
      },
      {
        path: "/purchases/purchases orders",
        name: "purchases orders",
        // icon: "ni ni-basket text-blue",
        component: Items,
        layout: "/admin",
      },
      {
        path: "/purchases/Bills",
        name: "Bills",
        // icon: "ni ni-basket text-blue",
        component: Items,
        layout: "/admin",
      },
      {
        path: "/purchases/payment made",
        name: "Payment made",
        // icon: "ni ni-basket text-blue",
        component: Items,
        layout: "/admin",
      },
      {
        path: "/purchases/Recurring Bills",
        name: "Recurring Bills",
        // icon: "ni ni-basket text-blue",
        component: Items,
        layout: "/admin",
      },
      {
        path: "/purchases/Vendor Credit",
        name: "Vendor Credit",
        // icon: "ni ni-basket text-blue",
        component: Items,
        layout: "/admin",
      }
    ]
  },
  {
    path: "/Time-Tracking",
    name: "Time-Tracking",
    icon: "ni ni-time-alarm text-info",
    component: TimeTracking,
    layout: "/admin",
    children:[{
      path: "/Time-Tracking/Projects",
      name: "Projects",
      // icon: "ni ni-time-alarm text-info",
      component: TimeTracking,
      layout: "/admin",
     },
    {
      path: "/Time-Tracking/TimeSheet",
      name: "TimeSheet",
      // icon: "ni ni-time-alarm text-info",
      component: TimeTracking,
      layout: "/admin",
    }]
    //login
  },
  {
    path: "/E-way bills",
    name: "E-way Bills",
    icon: "ni ni-circle-08 text-pink",
    component: E_way,
    layout: "/admin"
    //regidter
  },
  {
    path: "/Accountant",
    name: "Accountant",
    icon: "ni ni-single-02 text-pink",
    component: Accountant,
    layout: "/admin",
    children:[{
      path: "/Accountant/Manual Journals",
      name: "Manual Journals",
      // icon: "ni ni-single-02 text-pink",
      component: Accountant,
      layout: "/admin"
      },
      {
        path: "/Accountant/Bulk Update",
        name: "Bulk Update",
        // icon: "ni ni-single-02 text-pink",
        component: Accountant,
        layout: "/admin"
      },
      {
        path: "/Accountant/Currency Adjustments",
      name: "Currency Adjustments",
      // icon: "ni ni-single-02 text-pink",
      component: Accountant,
      layout: "/admin"
      },
      {
        path: "/Accountant/Chart of Accountants",
      name: "Chart of Accountants",
      // icon: "ni ni-single-02 text-pink",
      component: Accountant,
      layout: "/admin"
      },
      {
        path: "/Accountant.Budgets",
      name: "Budgets",
      // icon: "ni ni-single-02 text-pink",
      component: Accountant,
      layout: "/admin"
      },
      {
        path: "/Accountant/Transaction Locking",
      name: "Transaction Locking",
      // icon: "ni ni-single-02 text-pink",
      component: Accountant,
      layout: "/admin"
      }
  ]
    //regidter
  },
  {
    path: "/Reports",
    name: "Reports",
    icon: "ni ni-chart-pie-35 text-pink",
    component: Report,
    layout: "/admin"
    //regidter
  }
];
export default routes;
