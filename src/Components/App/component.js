// @flow
/* eslint-disable */
import React, { Component } from 'react';
import { Route, Link, Switch, Redirect} from 'react-router-dom';
import { GoogleLogin, GoogleLogout} from 'react-google-login';
import axios from 'axios';

// Styles
import './__styles__/App.css';
import { Menu, Button } from 'semantic-ui-react';

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

type Props = {
  loggedIn?: bool
}

class App extends Component<Props, State> {

  state = {
    activeItem: 'React Router'
  }

  responseGoogle = (response: any) => {
    if (response) {
      axios.get(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${response.tokenObj.id_token}`)
        .then((res) => {
          this.props.authenticateUser(true);
        })
    }
  }

  logout = () => {
    this.props.authenticateUser(false);
  }

  handleItemClick = (e: any, { name }: any) => this.setState({activeItem: name});

  render() {

    const {activeItem} = this.state;
    const { loggedIn } = this.props;

   let renderLoginButton = typeof loggedIn  === 'boolean' ? loggedIn : false;

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
            <Menu.Item position='right'>
              { !renderLoginButton ? (
                  <Button
                    as={GoogleLogin}
                    color='blue'
                    position='right'
                    clientId="90007972842-0iln7e5l5n21pt6320cajebtq3pustd7.apps.googleusercontent.com"
                    content='Login'
                    onSuccess={this.responseGoogle}
                  />
                ) : (
                  <Button
                    as={GoogleLogout}
                    color='red'
                    position='right'
                    content='Logout'
                    onLogoutSuccess={this.logout}
                  />
                )
              }
              </Menu.Item>
          </Menu>
        </div>

        {/* We must add Switch component here so that the route renders immediately at th first match. without it, page 404 component will always render with all of
        the other components as well */}
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
