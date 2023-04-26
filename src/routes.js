
import Index from "views/Index.js";
import CreditNotes from "views/examples/Sales/CreditNotes.js";
import Customers from "views/examples/Sales/Customers.js";
import DeliveryChallans from "views/examples/Sales/DeliveryChallans.js";
import Esimates from "views/examples/Sales/Estimates.js";
import InventoryAdjustments from "views/examples/Items/InventoryAdjustments.js";
import Invoices from "views/examples/Sales/Invoices.js";
import PaymentsReceived from "views/examples/Sales/PaymentsReceived.js";
import PriceLists from "views/examples/Items/PriceLists.js";
import RecurringInvoices from "views/examples/Sales/RecurringInvoices.js";
import RetainerInvoices from "views/examples/Sales/RetainerInvoices.js";

import Items from "views/examples/Items/Items.js";


import Banking from "views/examples/Banking/Banking.js";
import E_way from "views/examples/E-way.js";
import Report from "views/examples/Report.js"



import SalesOrder from "views/examples/Sales/SalesOrders";

import Vendors from "views/examples/Purchases/vendors.js";
import Expenses from "views/examples/Purchases/Expenses";
import RecurringExpenses from "views/examples/Purchases/RecurringExpenses";
import PurchasesOrders from "views/examples/Purchases/PurchasesOrders";
import Bills from "views/examples/Purchases/Bills";
import PaymentsMade from "views/examples/Purchases/PaymentsMade";
import RecurringBills from "views/examples/Purchases/RecurringBills";
import VendorCredits from "views/examples/Purchases/VendorCredits";
import Projects from "views/examples/TimeTracking/Projects";
import ManuualJournals from "views/examples/Accountant/ManuualJournals";
import BulkUpdate from "views/examples/Accountant/BulkUpdate";
import CurrencyAdjustments from "views/examples/Accountant/CurrencyAdjustments";
import ChartsOfAccount from "views/examples/Accountant/ChartsOfAccount";
import Budgets from "views/examples/Accountant/Budgets";
import TranscationLocking from "views/examples/Accountant/TranscationLocking";
import TiimeSheet from "views/examples/TimeTracking/TimeSheet";
import Reports from "views/examples/Reports/Reports";
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
    layout: "/admin",
    children:[
      {
        path: "/items/items",
        name: "Items",
        // icon: "ni ni-basket text-blue",
        component: Items,
        layout: "/admin",
      },
      {
        path: "/items/PriceLists",
        name: "PriceLists",
        // icon: "ni ni-basket text-blue",
        component: PriceLists,
        layout: "/admin",
      },
      {
        path: "/items/inventory Adjustments",
        name: "Inventory Adjustments",
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
    // component: Sales,
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
        path: "/Sales/Retainer Invoices",
        name: "Retainer Invoices",
        // icon: "ni ni-basket text-blue",
        component: RetainerInvoices,
        layout: "/admin",
      },
      {
        path: "/Sales/Sales Order",
        name: "Sales Order",
        // icon: "ni ni-basket text-blue",
        component: SalesOrder,
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
        name: "Invoices",
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
    // component: Purchases,
    layout: "/admin",
    children:[
      {
        path: "/purchases/vendors",
        name: "vendors",
        // icon: "ni ni-basket text-blue",
        component: Vendors,
        layout: "/admin",
      },
      {
        path: "/purchases/Expenses",
        name: "Expenses",
        // icon: "ni ni-basket text-blue",
        component: Expenses,
        layout: "/admin",
      },
      {
        path: "/purchases/Recurring expenses",
        name: "Recurring Expenses",
        // icon: "ni ni-basket text-blue",
        component: RecurringExpenses,
        layout: "/admin",
      },
      {
        path: "/purchases/purchases orders",
        name: "purchases orders",
        // icon: "ni ni-basket text-blue",
        component: PurchasesOrders,
        layout: "/admin",
      },
      {
        path: "/purchases/Bills",
        name: "Bills",
        // icon: "ni ni-basket text-blue",
        component: Bills,
        layout: "/admin",
      },
      {
        path: "/purchases/payment made",
        name: "Payment made",
        // icon: "ni ni-basket text-blue",
        component: PaymentsMade,
        layout: "/admin",
      },
      {
        path: "/purchases/Recurring Bills",
        name: "Recurring Bills",
        // icon: "ni ni-basket text-blue",
        component: RecurringBills,
        layout: "/admin",
      },
      {
        path: "/purchases/Vendor Credit",
        name: "Vendor Credit",
        // icon: "ni ni-basket text-blue",
        component: VendorCredits,
        layout: "/admin",
      }
    ]
  },
  {
    path: "/Time-Tracking",
    name: "Time-Tracking",
    icon: "ni ni-time-alarm text-info",
    // component: TimeTracking,
    layout: "/admin",
    children:[{
      path: "/Time-Tracking/Projects",
      name: "Projects",
      // icon: "ni ni-time-alarm text-info",
      component: Projects,
      layout: "/admin",
     },
    {
      path: "/Time-Tracking/TimeSheet",
      name: "TimeSheet",
      // icon: "ni ni-time-alarm text-info",
      component: TiimeSheet,
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
    // component: Accountant,
    layout: "/admin",
    children:[{
      path: "/Accountant/Manual Journals",
      name: "Manual Journals",
      // icon: "ni ni-single-02 text-pink",
      component: ManuualJournals,
      layout: "/admin"
      },
      {
        path: "/Accountant/Bulk Update",
        name: "Bulk Update",
        // icon: "ni ni-single-02 text-pink",
        component: BulkUpdate,
        layout: "/admin"
      },
      {
        path: "/Accountant/Currency Adjustments",
      name: "Currency Adjustments",
      // icon: "ni ni-single-02 text-pink",
      component: CurrencyAdjustments,
      layout: "/admin"
      },
      {
        path: "/Accountant/Chart of Accountants",
      name: "Chart of Accountants",
      // icon: "ni ni-single-02 text-pink",
      component: ChartsOfAccount,
      layout: "/admin"
      },
      {
        path: "/Accountant.Budgets",
      name: "Budgets",
      // icon: "ni ni-single-02 text-pink",
      component: Budgets,
      layout: "/admin"
      },
      {
        path: "/Accountant/Transaction Locking",
      name: "Transaction Locking",
      // icon: "ni ni-single-02 text-pink",
      component: TranscationLocking,
      layout: "/admin"
      }
  ]
    //regidter
  },
  {
    path: "/Reports",
    name: "Reports",
    icon: "ni ni-chart-pie-35 text-pink",
    component: Reports,
    layout: "/admin"
    //regidter
  }
];
export default routes;
