import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MediaDetail from './component';

export default withRouter(connect(null)(MediaDetail));