import { TimerContainer } from './components/Timer';
import TimerWithState from './components/TimerWithState';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import thunkMiddleware from 'redux-thunk';

function setupStore () {
  const createStoreWithMiddleware = applyMiddleware(
      thunkMiddleware
  )(createStore);

  return createStoreWithMiddleware(reducer);
}

ReactDOM.render(
    <Provider store={setupStore()}>
      <TimerContainer />
    </Provider>,
  document.getElementById('app')
);


//ReactDOM.render(
//      <TimerWithState startCount={0} />,
//  document.getElementById('app')
//);
