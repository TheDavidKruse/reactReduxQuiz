import { combineReducers } from 'redux'

import postReducer from './postReducer'
import authorReducer from './authorReducer'
import commentReducer from './commentReducer'
// import loadingReducer from './loadingReducer'

const rootReducer = combineReducers({
  posts:postReducer,
  authors: authorReducer,
  comments:commentReducer
  // isLoading: loadingReducer
})
export default rootReducer