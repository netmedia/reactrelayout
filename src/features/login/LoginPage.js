import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { isAuthenticatedSelector, loginAsync } from "../../app/state/authStateSlice";
import { Fragment } from "react";
import { getLoginUrl, getHomeUrl } from "../../app/services/appUrls";
import { Redirect } from "react-router-dom";

const LoginPage = () => {
  
    const isAuthenticated = useSelector(isAuthenticatedSelector);
    const dispatch = useDispatch();
  
    if (isAuthenticated) {
        return <Redirect from={getLoginUrl()} to={getHomeUrl()} />;
    }
    
    return (
        <Fragment>
            <div>LOGIN PAGE</div>
            <button onClick={() => dispatch(loginAsync("vladan", "password", true))}>Login</button>
        </Fragment>
    );
};
  
export default LoginPage;
  