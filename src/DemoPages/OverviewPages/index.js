import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

// Pages

import OverviewCandidate from './OverviewCandidate';

// Layout
import AppHeader from '../../Layout/AppHeader';
import AppFooter from '../../Layout/AppFooter';
import AppSidebar from '../../Layout/AppSidebar';


const OverviewPages = ({ match }) => (
    <Fragment>
        <AppHeader />
        <div className="app-main">
            <AppSidebar />
            <div className="app-main__inner">

                {(() => {
                    if (sessionStorage.getItem('role') === 'admin') {
                        return (<>
                            <Route path={`${match.url}/candidate`} component={OverviewCandidate} />
                        </>);
                    } else {
                        return <h1>Access denied!!</h1>;
                    }
                })()}
            </div>
            <div className="app-wrapper-footer">
                <AppFooter />

            </div>
        </div>
    </Fragment>
);

export default OverviewPages;