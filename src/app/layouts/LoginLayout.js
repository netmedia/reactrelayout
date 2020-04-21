import React, { Fragment } from "react";
import { Switch } from "react-router-dom";
import appconfig from "../appconfig";
import prepareRoutesFrom from "../infrastructure/routing/prepareRoutes";
import publicRoutes from "../routes/publicRoutes";

const LoginLayout = props => {

  return (
      <Fragment>
          <div>LOGIN LAYOUT</div>
          <div>
            <Switch>
              {prepareRoutesFrom(publicRoutes, appconfig.layouts.login, false)}
            </Switch>
          </div>
      </Fragment>
    );

};

export default LoginLayout;