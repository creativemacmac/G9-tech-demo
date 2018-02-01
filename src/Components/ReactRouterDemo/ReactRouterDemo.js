// @flow

import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

// Styles
import { Header, Menu } from 'semantic-ui-react';
import './__styles__/index.css';

// Components
import Demo1 from './subComponents/Demo1';
import Demo2 from './subComponents/Demo2';

type State = {
    activeItem: string
}

class ReactRouterDemo extends React.Component<{}, State> {

    state = {
        activeItem: 'Demo 1: Blocking page transitions'
    }

    handleItemClick = (e: any, { name }: any) => this.setState({activeItem: name});

    render() {

        const {activeItem} = this.state;

        return (
            <div>
                <Header as='h2' content='Demo using React Router 4 with 4 nested routes' dividing />

                <Menu secondary vertical className='demo-sidebar'>
                    <Menu.Item as={Link} to='/reactRouter/demo1' name='Demo 1: Blocking page transitions' active={activeItem === 'Demo 1: Blocking page transitions'} onClick={this.handleItemClick} />
                    <Menu.Item as={Link} to='/reactRouter/demo2' name='Demo 2: Params and ids' active={activeItem === 'Demo 2: Params and ids'} onClick={this.handleItemClick} />
                </Menu>

                <Switch>
                    <Route path='/reactRouter/demo1' component={Demo1} />
                    <Route path='/reactRouter/demo2' component={Demo2} />
                </Switch>

            </div>
        )
    }
}

export default ReactRouterDemo;