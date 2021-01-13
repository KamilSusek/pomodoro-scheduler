import { SET_TASK } from '../actions/actionsTypes'

const reducer = (state = {}, action: any) => {
  switch (action.type) {
    case SET_TASK:
      return { ...state, task: action.payload }
    default:
      return state
  }
}
export default reducer
