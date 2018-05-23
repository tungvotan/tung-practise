// @flow

import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'

const store = createStore(rootReducer)
const element = document.getElementById('root');
if (!element) {
  throw new Error("couldn't find element with id root")
}
render(
  <Provider store={store}>
    <App />
  </Provider>,
  element
)
