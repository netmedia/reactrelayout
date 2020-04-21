import {getLoginUrl} from "../../app/services/appUrls";
import appconfig from "../../app/appconfig";
import LoginPage from "./LoginPage";

export default [
    {
      path: getLoginUrl(),
      name: "Login",
      component: LoginPage,
      layout: appconfig.layouts.login
    }
];