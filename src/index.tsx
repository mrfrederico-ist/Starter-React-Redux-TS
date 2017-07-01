import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { injectGlobal } from 'styled-components'

import { logoAnimation } from './reducers/logoAnimation'
import App from './components/App'
import registerServiceWorker from './utils/registerServiceWorker'

// Types ===================================
export interface StoreState {
  readonly animationDuration: number
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any
  }
}

// Global Styles ===========================
injectGlobal`
    body {
      margin: 0;
      padding: 0;
      font-family: sans-serif;
    }
`
// =========================================
const store = createStore<StoreState>(
  logoAnimation,
  { animationDuration: 5 },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement,
)

registerServiceWorker()
