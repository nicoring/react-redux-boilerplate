import { createAction } from "redux-actions"
import createActionsWrapper from './createActionsWrapper'

const ActionCreators = createActionsWrapper(
  "increment",
  "decrement"
);

export default ActionCreators
