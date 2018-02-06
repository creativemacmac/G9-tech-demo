import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Header, Button } from 'semantic-ui-react';

// Components
import Posts from './subComponents/posts';
import PostNew from './subComponents/postNew';
import PostContent from './subComponents/postContent';

const ReduxDemo = ({match}) => {
    return (
        <div>
            <Header as='h2' content='Demo using Redux' dividing />

            <Button>
                <Link to={`${match.path}/post`}> See Posts </Link>
            </Button>
            <Button>
                <Link to={`${match.path}/post/new`}> Add a posts </Link>
            </Button>

            <Switch>
                <Route path={`${match.path}/post/new`} component={PostNew} />
                <Route path={`${match.path}/post/:id`} component={PostContent} />
                <Route path={`${match.path}/post`} component={Posts} />
            </Switch>

        </div>
    )

}
export default ReduxDemo;