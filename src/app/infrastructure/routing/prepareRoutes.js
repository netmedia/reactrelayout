import React from "react";
import { Route } from "react-router-dom";
import AuthorizedRoute from "./AuthorizedRoute";

const prepareRoutesFrom = (routes, ofLayout, shouldForceAuthorizedAccess) => {
  return routes.map((prop, key) => {
    if (prop.collapse) {
      return prepareRoutesFrom(prop.pages, ofLayout, shouldForceAuthorizedAccess);
    }
    if (prop.layout === ofLayout) {
      return (
        shouldForceAuthorizedAccess 
          ?
            <AuthorizedRoute
              path={prop.path}
              component={prop.component}
              exact={prop.exact}
              key={key}
            />
          :
            <Route
              path={prop.path}
              component={prop.component}
              exact={prop.exact}
              key={key}
            />
      );
    } else {
      return null;
    }
  });
};

export default prepareRoutesFrom; 