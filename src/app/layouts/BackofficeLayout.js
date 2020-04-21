import React, { Fragment, useState } from "react";
import { NavLink, Switch, useLocation } from 'react-router-dom';
import prepareRoutesFrom from "../infrastructure/routing/prepareRoutes";
import appconfig from "../appconfig";
import authorizedRoutes from "../routes/authorizedRoutes";
import { getLoginUrl, getHomeUrl } from "../services/appUrls";
import { classNames } from '@progress/kendo-react-common';

export function BackofficeLayout() {

    const location = useLocation();
    const loginUrl = getLoginUrl();
    const homeUrl = getHomeUrl();

    const [isNavShown, setMenuState] = useState(false);
    const [isLoading, setLoading] = useState(false);

    const notSignIn = location.pathname !== loginUrl;
    
    const navbarClassName = classNames('sticky-top material-color text-white py-3 py-sm-5 k-vbox shadow col-xl-2 d-xl-flex', (isNavShown ? 'show' : 'hide'));
    const className = classNames('navbar sticky-top bg-white d-xl-none', { 'k-shadow': !isNavShown });
      
    const currentYear = (new Date()).getFullYear();

    const handleMenuShowHideClick = () => {
        setMenuState(!isNavShown);
    }
    
    return (
        <Fragment>
        <div className={className}>
          <div onClick={handleMenuShowHideClick} className={isNavShown ? 'open' : 'closed'} id="nav-icon" data-toggle="collapse" data-target="#side-nav" aria-controls="side-nav" >
            {/* Using dummy span elements for animating the 'hamburger' menu */}
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        {isLoading 
            ? <span className="k-icon k-i-loading"></span> 
            : 
                <div id="app" className="app">
                <div className="container-fluid">
                    <div className="row">
                        {notSignIn && (<div id="nav" className={navbarClassName}>
                            <div className="container">
                                <h1 id="app-title" className="mb-0">{appconfig.title}</h1>
                                <h4 id="app-subtitle" className="mb-4">{appconfig.subtitle}</h4>
                                <hr className="k-hr" />
                                <h4 className="mt-3 mt-sm-5">Project</h4>
                                <ul className="nav nav-pills flex-column">
                                    <li className="nav-item" id="dashbaord">
                                        <NavLink to={homeUrl} className="nav-link" activeClassName="active">Dashboard</NavLink>
                                    </li>
                                    <li className="nav-item" id="issues">
                                        <NavLink to="/issues" className="nav-link" activeClassName="active">Issues</NavLink>
                                    </li>
                                </ul>
                                <h4 className="mt-3 mt-sm-5">Account</h4>
                                <ul className="nav nav-pills flex-column">
                                    <li className="nav-item" id="profile">
                                        <NavLink to="/profile" className="nav-link" activeClassName="active">My Profile</NavLink>
                                    </li>
                                    <li className="nav-item" id="signout">
                                        <NavLink to={loginUrl} className="nav-link" activeClassName="active">Sign Out</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="container mt-sm-auto">
                                <hr className="k-flex k-hr k-hr-bottom" />
                                <div id="copy">
                                    <p>Copyright &copy; {currentYear} <a href={appconfig.companyWeb}>{appconfig.companyName}</a>.</p>
                                    <p>All Rights Reserved.</p>
                                </div>
                            </div>
                        </div>)}
                        <div className={'content-wrapper col'}>
                            <Switch>
                                {prepareRoutesFrom(authorizedRoutes, appconfig.layouts.backoffice, true)}
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
            }
      </Fragment>
    );
}

export default BackofficeLayout