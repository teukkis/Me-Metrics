import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ChakraProvider } from "@chakra-ui/react"

import store from './store'
import App from './App'
import theme from 'themes/index'

ReactDOM.render(
  <>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Router>
        <Switch>

          <App />
          </Switch>

        </Router>
      </ChakraProvider>
    </Provider>
  </>,
  document.getElementById('root')
)
