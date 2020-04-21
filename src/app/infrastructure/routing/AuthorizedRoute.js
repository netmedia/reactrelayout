import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuthenticatedSelector } from "../../state/authStateSlice";
import { getLoginUrl } from "../../services/appUrls";

const AuthorizedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  let location = useLocation();
  return (
    <Route {...rest}>
      {isAuthenticated ? (
        <Component {...rest} />
      ) : (
        <Redirect from={location.pathname} to={getLoginUrl()} />
      )}
    </Route>
  );
};

export default AuthorizedRoute;
