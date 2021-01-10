import { combineReducers } from 'redux'
import schedulesReducer from './schedulesReducer'
import taskReducer from './taskReducer'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  schedules: schedulesReducer,
  tasks: taskReducer,
  form: formReducer
})
