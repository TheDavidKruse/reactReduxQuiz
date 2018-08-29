import { combineReducers } from 'redux'

import postReducer from './postReducer'
import loadingReducer from './loadingReducer'

const rootReducer = combineReducers({
  posts:postReducer,
  isLoading: loadingReducer
})
export default rootReducer