import React from 'react'
import Router from 'react-router'
import routes from './routes'
import { Provider } from 'react-redux'
import createHistory from 'history/lib/createBrowserHistory'
import Root from './components/root'
import store from './redux/store'
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react'

class App extends React.Component {
	render() {
		return (
      <div>
        <Provider store={store}>
          {() => <Router history={createHistory()} routes={routes} /> }
        </Provider>
        <DebugPanel top right bottom >
          <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
      </div>
		)
	}
}

React.render(<App />, document.body)
