import React, { Fragment } from 'react';
import { createBrowserHistory } from 'history';

import cx from 'classnames';
export const browserHistory = createBrowserHistory();
class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
        }
        this.handleChangeSearch = this.handleChangeSearch.bind(this);
    };

    handleChangeSearch = (event) => {
        this.setState({ search: event.target.value });
        this.props.passingSearch(event.target.value);
        window.location.href = '#/user/searchpage'
    };


    render() {
        return (
            <Fragment>
                <div className={cx("search-wrapper", {
                    'active': this.state.activeSearch
                })}>
                    <div className="input-holder">
                        {/* <FormGroup> */}
                        <input type="text" className="search-input" placeholder="Type to search" value={this.state.search} onChange={this.handleChangeSearch}></input>
                        {/* </FormGroup> */}
                        <button onClick={() => this.setState({ activeSearch: !this.state.activeSearch, search: "" })}
                            className="search-icon"><span /></button>

                    </div>
                </div>
            </Fragment>
        )
    }
}

export default SearchBox;