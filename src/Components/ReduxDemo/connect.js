// @flow

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReduxDemo from './component';

const mapStateToProps = (state) => {
    return {
        loggedIn:/*state.loggedIn */ true
    }
}

export default withRouter(connect(mapStateToProps)(ReduxDemo));