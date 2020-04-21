import React from 'react';
import 'typeface-roboto';
import { getPublicPagePrefixUrl, getAuthorizedPagePrefixUrl } from './app/services/appUrls';
import { Switch, Route } from 'react-router-dom';
import LoginLayout from './app/layouts/LoginLayout'
import BackofficeLayout from './app/layouts/BackofficeLayout'

const App = () => {
  return (
    <>
      <Switch>
        <Route path={getPublicPagePrefixUrl()}>
          <LoginLayout />
        </Route>
        <Route path={getAuthorizedPagePrefixUrl()}>
          <BackofficeLayout />
        </Route>
      </Switch>
    </>
  );
};

export default App;