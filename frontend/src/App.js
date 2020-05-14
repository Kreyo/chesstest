import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route } from 'react-router-dom';

import { initialState } from './constants';
import configureStore, { history } from './configureStore';
import './App.css';
import ItemsList from './pages/list/list';
import ItemsDetails from "./pages/details/details";

const store = configureStore(initialState);

function App() {
  return (
    <Provider store={store}>
      <div className="items-app">
        <header>
          <a href="/">Main page</a>
        </header>
          <ConnectedRouter history={history}>
              <Switch>
                  <Route exact path="/" render={() => (<ItemsList></ItemsList>)} />
                  <Route path="/item/:itemId" render={() => (<ItemsDetails></ItemsDetails>)} />
                  <Route render={() => (<div>That's a 404 alright!</div>)} />
              </Switch>
          </ConnectedRouter>
      </div>
    </Provider>
  );
}

export default App;
