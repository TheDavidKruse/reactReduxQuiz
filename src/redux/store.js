import { applyMiddleware, createStore } from 'redux';
import rootReducer from  './reducers';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger'

export default(initialState) => {
    return createStore(
      rootReducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      applyMiddleware(promise(), logger)
    );
}