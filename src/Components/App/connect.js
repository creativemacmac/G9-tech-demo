import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { authenticateUser } from '../../Redux/actions';

import App from './component';

// pass state of login as prop to component
const mapStateToProps = (state) => {

    return {
        loggedIn: state.loggedIn
    }
}

// pass Action Creator function 'authenticateUser' as a prop to component
const mapDispatchToProps = (dispatch) => bindActionCreators(
    { authenticateUser},
    dispatch
);

// MUST wrap connect()() with withRouter() in order for react-router to work with redux
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));