import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends React.Component {
  render () { return <div>hello</div> }
}

class Bye extends React.Component {
  render () { return <div>goodbye</div> }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path='/hello' component={Hello} />
        <Route path='/bye' component={Bye} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
