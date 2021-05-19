import { Route, Redirect } from "react-router-dom";
import React, { Suspense, lazy, Fragment } from "react";
import Loader from "react-loaders";

import { ToastContainer } from "react-toastify";

const UserPages = lazy(() => import('../../DemoPages/UserPages'));
const Applications = lazy(() => import('../../DemoPages/Applications'));
const Dashboards = lazy(() => import('../../DemoPages/Dashboards'));

const Widgets = lazy(() => import('../../DemoPages/Widgets'));
const Elements = lazy(() => import('../../DemoPages/Elements'));
const Components = lazy(() => import('../../DemoPages/Components'));
const Charts = lazy(() => import('../../DemoPages/Charts'));
const Forms = lazy(() => import('../../DemoPages/Forms'));
const Tables = lazy(() => import('../../DemoPages/Tables'));
const OverviewPages = lazy(() => import("../../DemoPages/OverviewPages"));
const LoginBox = lazy(() => import("../../DemoPages/Login/LoginBoxed"));
const RegisterBoxed = lazy(() => import("../../DemoPages/Login/RegisterBoxed"));

const AppMain = () => {
  if (sessionStorage.getItem("auth")) {
    return (
      <Fragment>
        <Suspense
          fallback={
            <div className="loader-container">
              <div className="loader-container-inner">
                <div className="text-center">
                  <Loader type="ball-pulse-rise" />
                </div>
                <h6 className="mt-5">
                  Please wait while we load all the Components examples
                  <small>
                    Because this is a demonstration we load at once all the
                    Components examples. This wouldn't happen in a real live
                    app!
                  </small>
                </h6>
              </div>
            </div>
          }
        >
          <Route path="/components" component={Components} />
        </Suspense>
        <Suspense
          fallback={
            <div className="loader-container">
              <div className="loader-container-inner">
                <div className="text-center">
                  <Loader type="ball-pulse-rise" />
                </div>
                <h6 className="mt-5">
                  Please wait while we load all the Forms examples
                  <small>
                    Because this is a demonstration we load at once all the
                    Forms examples. This wouldn't happen in a real live app!
                  </small>
                </h6>
              </div>
            </div>
          }
        >
          <Route path="/forms" component={Forms} />
        </Suspense>

        {/* Charts */}

        <Suspense
          fallback={
            <div className="loader-container">
              <div className="loader-container-inner">
                <div className="text-center">
                  <Loader type="ball-rotate" />
                </div>
                <h6 className="mt-3">
                  Please wait while we load all the Charts examples
                  <small>
                    Because this is a demonstration we load at once all the
                    Charts examples. This wouldn't happen in a real live app!
                  </small>
                </h6>
              </div>
            </div>
          }
        >
          <Route path="/charts" component={Charts} />
        </Suspense>

        {/* Tables */}

        <Suspense
          fallback={
            <div className="loader-container">
              <div className="loader-container-inner">
                <div className="text-center">
                  <Loader type="ball-pulse-rise" />
                </div>
                <h6 className="mt-5">
                  Please wait while we load all the Tables examples
                  <small>
                    Because this is a demonstration we load at once all the
                    Tables examples. This wouldn't happen in a real live app!
                  </small>
                </h6>
              </div>
            </div>
          }
        >
          <Route path="/tables" component={Tables} />
        </Suspense>

        {/* Elements */}

        <Suspense
          fallback={
            <div className="loader-container">
              <div className="loader-container-inner">
                <div className="text-center">
                  <Loader type="line-scale" />
                </div>
                <h6 className="mt-3">
                  Please wait while we load all the Elements examples
                  <small>
                    Because this is a demonstration we load at once all the
                    Elements examples. This wouldn't happen in a real live app!
                  </small>
                </h6>
              </div>
            </div>
          }
        >
          <Route path="/elements" component={Elements} />
        </Suspense>

        {/* Dashboard Widgets */}

        <Suspense
          fallback={
            <div className="loader-container">
              <div className="loader-container-inner">
                <div className="text-center">
                  <Loader type="ball-pulse-sync" />
                </div>
                <h6 className="mt-3">
                  Please wait while we load all the Dashboard Widgets examples
                  <small>
                    Because this is a demonstration we load at once all the
                    Dashboard Widgets examples. This wouldn't happen in a real
                    live app!
                  </small>
                </h6>
              </div>
            </div>
          }
        >
          <Route path="/widgets" component={Widgets} />
        </Suspense>

        {/* Pages */}

        <Suspense
          fallback={
            <div className="loader-container">
              <div className="loader-container-inner">
                <div className="text-center">
                  <Loader type="line-scale-party" />
                </div>
                <h6 className="mt-3">
                  Please wait while we load all the Pages examples
                  <small>
                    Because this is a demonstration we load at once all the
                    Pages examples. This wouldn't happen in a real live app!
                  </small>
                </h6>
              </div>
            </div>
          }
        >
          <Route path="/pages" component={UserPages} />
        </Suspense>

        {/* Applications */}

        <Suspense
          fallback={
            <div className="loader-container">
              <div className="loader-container-inner">
                <div className="text-center">
                  <Loader type="ball-pulse" />
                </div>
                <h6 className="mt-3">
                  Please wait while we load all the Applications examples
                  <small>
                    Because this is a demonstration we load at once all the
                    Applications examples. This wouldn't happen in a real live
                    app!
                  </small>
                </h6>
              </div>
            </div>
          }
        >
          <Route path="/apps" component={Applications} />
        </Suspense>

        {/* Dashboards */}

        <Suspense
          fallback={
            <div className="loader-container">
              <div className="loader-container-inner">
                <div className="text-center">
                  <Loader type="ball-grid-cy" />
                </div>
                <h6 className="mt-3">
                  Please wait while we load all the Dashboards examples
                  <small>
                    Because this is a demonstration, we load at once all the
                    Dashboards examples. This wouldn't happen in a real live
                    app!
                  </small>
                </h6>
              </div>
            </div>
          }
        >
          <Route path="/dashboards" component={Dashboards} />
        </Suspense>
        <Suspense
          fallback={
            <div className="loader-container">
              <div className="loader-container-inner">
                <div className="text-center">
                  <Loader type="ball-grid-pulse" />
                </div>
                <h6 className="mt-3">
                  Selamat Datang
                  <small>Mohon tunggu sebentar</small>
                </h6>
              </div>
            </div>
          }
        >
          <Route path="/overview" component={OverviewPages} />
        </Suspense>

        <Route
          exact
          path="/"
          render={() => <Redirect to="/overview/candidate" />}
        />
        <ToastContainer />
      </Fragment>
    );
  }
  return (
    <Fragment>
      {/* LoginPage */}

      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <div className="text-center">
                <Loader type="semi-circle-spin" />
              </div>
              <h6 className="mt-3">
                Selamat Datang
                <small>Mohon tunggu sebentar</small>
              </h6>
            </div>
          </div>
        }
      >
        <Route path="/login" component={LoginBox} />
        <Route path="/register" component={RegisterBoxed} />
      </Suspense>

      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <ToastContainer />
    </Fragment>
  );
};

export default AppMain;
