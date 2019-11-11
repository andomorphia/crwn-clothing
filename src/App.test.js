import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import { MemoryRouter } from 'react-router-dom'
import logger from 'redux-logger'

import App from './App'

const middlewares = [logger]
const mockStore = configureMockStore(middlewares)
const store = mockStore({ user: { currentUser: null } })

it('should render without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    </Provider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
