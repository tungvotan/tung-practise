// @flow

import React from 'react'
import { render } from 'react-dom'
import store from './stores';
import { Provider } from 'react-redux'
import App from './components/App'

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
