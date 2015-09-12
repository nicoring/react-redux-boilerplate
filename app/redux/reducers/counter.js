import { handleActions } from "redux-actions"
import update from "react/lib/update";

const reducers = handleActions({
  INCREMENT(state, action) {
    return update(state, {counter: {$set: state.counter + action.payload}})
  },

  DECREMENT(state, action) {
    return update(state, {counter: {$set: state.counter - action.payload}})
  }
}, { counter: 0 })

export default reducers
