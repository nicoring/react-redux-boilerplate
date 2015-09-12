import { handleActions } from 'redux-actions'
import update from "react/lib/update";

const reducers = handleActions({
  MESSAGE(state, action) {
    return update({message: {$set: action.payload}})
  },
}, { message: 'test' })

export default reducers
