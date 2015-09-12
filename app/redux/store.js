import * as reducers from './reducers'
import { createStore, combineReducers, compose } from 'redux'
import { devTools, persistState } from "redux-devtools"

const finalCreateStore = compose(
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  )(createStore)

const combined = combineReducers(reducers);
const store = finalCreateStore(combined);

if (module.hot) {
	module.hot.accept('./reducers', () => {
		const nextRootReducer = require('./reducers')
        store.replaceReducer(nextRootReducer)
    });
}

export default store;
