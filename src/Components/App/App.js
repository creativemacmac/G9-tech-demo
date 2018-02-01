// @flow

import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

// Styles
import './__styles__/App.css';
import { Menu } from 'semantic-ui-react';

// Components
import AlgoliaDemo from '../AlgoliaDemo';
import ReduxDemo from '../ReduxDemo';
import SemanticDemo from '../SemanticDemo';
import SemanticThemeDemo from '../SemanticThemeDemo';
import ReactRouterDemo from '../ReactRouterDemo';
import Page404 from '../Page404';

type State = {
  activeItem: string
}

class App extends Component<{}, State> {

  state = {
    activeItem: 'React Router'
  }

  handleItemClick = (e: any, { name }: any) => this.setState({activeItem: name});

  render() {

    const {activeItem} = this.state;
    return (
      <div className="App">
        <div>
          <header className="App-header">
            <h1 className="App-title">Fanny Pack tech stack demos</h1>
          </header>

          <Menu pointing secondary>
            <Menu.Item as={Link} to='/reactRouter/demo1' name='React Router' active={activeItem === 'React Router'} onClick={this.handleItemClick} />
            <Menu.Item as={Link} to='/semanticUiBasic' name='Semantic UI - Basic' active={activeItem === 'Semantic UI - Basic'} onClick={this.handleItemClick} />
            <Menu.Item as={Link} to='/semanticUiTheme' name='Semantic UI - Theme' active={activeItem === 'Semantic UI - Theme'} onClick={this.handleItemClick} />
            <Menu.Item as={Link} to='/algolia' name='Algolia' active={activeItem === 'Algolia'} onClick={this.handleItemClick} />
            <Menu.Item as={Link} to='/redux' name='Redux' active={activeItem === 'Redux'} onClick={this.handleItemClick} />
          </Menu>
        </div>

        {/* We must add Switch component here so that the route renders immediately at th first match. without it, page 404 component will always render with all of
        the otehr components as well */}
        <Switch>
          <Route exact path='/' render={() =>  <Redirect to='/reactRouter/demo1' /> } />
          <Route path='/reactRouter' component={ReactRouterDemo} />
          <Route path='/semanticUiBasic' component={SemanticDemo} />
          <Route path='/semanticUiTheme' component={SemanticThemeDemo} />
          <Route path='/algolia' component={AlgoliaDemo} />
          <Route path='/redux' component={ReduxDemo} />
          <Route component={Page404} />
        </Switch>

      </div>
    );
  }
}

export default App;
