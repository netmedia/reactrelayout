import {getHomeUrl} from "../../app/services/appUrls";
import appconfig from "../../app/appconfig";
import DashboardPage from "./DashboardPage";

export default [
    {
      path: getHomeUrl(),
      name: "Dashboard",
      component: DashboardPage,
      layout: appconfig.layouts.backoffice
    }
];