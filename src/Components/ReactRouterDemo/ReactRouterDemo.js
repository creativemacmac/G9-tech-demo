// @flow

import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

// Styles
import { Header, Menu, Dropdown } from 'semantic-ui-react';
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
                <Header as='h2' content='Demo using React Router 4' dividing />

                <Menu secondary vertical className='demo-sidebar'>
                    <Menu.Item as={Link} to='/reactRouter/demo1' name='Demo 1: Blocking page transitions' active={activeItem === 'Demo 1: Blocking page transitions'} onClick={this.handleItemClick} />
                    {/* <Menu.Item as={Link} to='/reactRouter/demo2' name='Demo 2: Params and ids' active={activeItem === 'Demo 2: Params and ids'} onClick={this.handleItemClick} /> */}
                    <Dropdown item text='Demo 2: (ids) Alien Workshop Mind Field Team'>
                        <Dropdown.Menu>
                            <Dropdown.Header>Parts in MindField</Dropdown.Header>
                            <Dropdown.Item as={Link} to='/reactRouter/demo2/0'>Heath Kirchart</Dropdown.Item>
                            <Dropdown.Item as={Link} to='/reactRouter/demo2/1'>Arto Saari</Dropdown.Item>
                            <Dropdown.Item as={Link} to='/reactRouter/demo2/2'>Mikey Taylor</Dropdown.Item>
                            <Dropdown.Item as={Link} to='/reactRouter/demo2/3'>AVE</Dropdown.Item>
                            <Dropdown.Item as={Link} to='/reactRouter/demo2/4'>Josh Kalis</Dropdown.Item>
                            <Dropdown.Item as={Link} to='/reactRouter/demo2/5'>Dylan Reider (RIP)</Dropdown.Item>
                            <Dropdown.Item as={Link} to='/reactRouter/demo2/6'>Omar Salazar</Dropdown.Item>
                            <Dropdown.Item as={Link} to='/reactRouter/demo2/7'>Jason Dill</Dropdown.Item>
                            <Dropdown.Item as={Link} to='/reactRouter/demo2/8'>Jake Johnson</Dropdown.Item>
                            <Dropdown.Item as={Link} to='/reactRouter/demo2/9'>Tyler Bledsoe</Dropdown.Item>
                            <Dropdown.Item as={Link} to='/reactRouter/demo2/10'>Grant Taylor</Dropdown.Item>
                            <Dropdown.Item as={Link} to='/reactRouter/demo2/11'>Rob Dyrdek</Dropdown.Item>
                            <Dropdown.Item as={Link} to='/reactRouter/demo2/12'>Steve Berra</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu>

                <Switch>
                    <Route path='/reactRouter/demo1' component={Demo1} />
                    <Route path='/reactRouter/demo2/:id' component={Demo2} />
                </Switch>

            </div>
        )
    }
}

export default ReactRouterDemo;