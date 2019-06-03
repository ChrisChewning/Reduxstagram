import React from 'react';
//if you don't say a path in front of it, it's coming from node_modules folder

import { render } from 'react-dom';
//allows us to render out to html. React will work with things like Canvas and Native, etc.
//the dom stuff is in this package.

//import CSS
import css from './styles/style.styl';

//Import Components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

//import react-router dependendcies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
//store not { store } b.c it's a named export const store = '...'

//Provider exposes the store to the application. You wrap the Router in the Provider
//component and you pass it the store through the store prop.
const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

//if it matches / grab the Main component. Then depending on the URL structure
//either pass photogrid or single. they are children of the main component.



render(router, document.getElementById('root'));
//renders two things:
//1. jsx
//2. mounting point: 'root' is coming from idnex.html div id="root"

//in the render part, you pass in the children here.
