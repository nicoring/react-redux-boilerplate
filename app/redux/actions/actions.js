import ActionCreators from './actionCreators'
import store from '../store'

// Trigger actions
const triggeredActions = _.transform(ActionCreators, function (acc, value, key) {
  acc[key] = function () {
    store.dispatch(value.apply(ActionCreators, arguments))
  }
}, {})

export default triggeredActions
