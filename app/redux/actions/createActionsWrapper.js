import _ from "lodash"
import { createAction } from "redux-actions"


export default function createActionsWrapper() {
  let actions = {}

  for (let actionString of arguments) {
    const upperCaseActionString = actionString.split(/(?=[A-Z])/).join("_").toUpperCase()
    actions[actionString] = createAction(upperCaseActionString)
  }
  return actions
}
