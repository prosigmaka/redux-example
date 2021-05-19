import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import LoginBox from "./LoginBoxed";
import RegisterBoxed from "./RegisterBoxed"

// Theme Options

// import ThemeOptions from '../../Layout/ThemeOptions';

const OverviewPages = ({ match }) => (
  <Fragment>
    <AppHeader />
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__inner">
        <Route path={`${match.url}/loginbox`} component={LoginBox} />
        <Route path={`${match.url}/register-boxed`} component={RegisterBoxed} />
      </div>
      <div className="app-wrapper-footer">
        <AppFooter />
      </div>
    </div>
  </Fragment>
);

export default OverviewPages;
