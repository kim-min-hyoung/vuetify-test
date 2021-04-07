import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard";
import GridSystem from "../views/GridSystem";
import GridListPage from "../views/GridListPage";
import BreaksPoints from "../views/BreaksPoints";
import Typography from "../views/Typography";
import ChatComponent from "../views/ChatComponent";
import FormConponent from "../views/FormConponent";
import TableComponent from "../views/TableComponent";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },

  {
    path: "/gridsystem",
    name: "GridSystem",
    component: GridSystem,
  },
  {
    path: "/grid-list-page",
    name: "GridListPage",
    component: GridListPage,
  },
  {
    path: "/breaks-points",
    name: "BreaksPoints",
    component: BreaksPoints,
  },
  {
    path: "/typography",
    name: "Typography",
    component: Typography,
  },
  {
    path: "/chat-component",
    name: "ChatComponent",
    component: ChatComponent,
  },
  {
    path: "/form-component",
    name: "FormConponent",
    component: FormConponent,
  },
  {
    path: "/table-component",
    name: "TableComponent",
    component: TableComponent,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
