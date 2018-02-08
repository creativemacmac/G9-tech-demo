import React from 'react';
import { Route, Link, Switch} from 'react-router-dom';
import { Header, Button } from 'semantic-ui-react';

// Components
import Posts from './subComponents/posts';
import PostNew from './subComponents/postNew';
import PostContent from './subComponents/postContent';
import MMD from '../MMD';
import MediaDetail from '../mediaDetail';

const ReduxDemo = ({match, loggedIn}) => {

    // check that state if logged in has been triggered.
    const renderLoginButton = typeof loggedIn  === 'boolean' ? loggedIn : false;

    if(!renderLoginButton) {
        return (
            <div>
                <Header as='h2' content='Please login above first' />
            </div>
        )
    }

    return (
        <div>
            <Header as='h2' content='Demo using Redux' dividing />

            <Button>
                <Link to={`${match.path}/post`}> See Blog Posts </Link>
            </Button>
            <Button>
                <Link to={`${match.path}/post/new`}> Add a posts </Link>
            </Button>
            <Button>
                <Link to={`${match.path}/mmd`}>See basic mmd example</Link>
            </Button>

            <Switch>
                <Route path={`${match.path}/post/new`} component={PostNew} />
                <Route path={`${match.path}/post/:id`} component={PostContent} />
                <Route path={`${match.path}/post`} component={Posts} />
                <Route path={`${match.path}/mmd/:id`} component={MediaDetail} />
                <Route path={`${match.path}/mmd`} component={MMD} />
            </Switch>

        </div>
    )

}

export default ReduxDemo;