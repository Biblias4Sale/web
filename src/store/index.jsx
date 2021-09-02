import { createStore, applyMiddleware, compose } from 'redux'
<<<<<<< HEAD
import rootReducer from '../reducer'
=======
// import rootReducer from '../reducer'
>>>>>>> 184d46d6832085ea3b5923cd3609ef77728a86f7
import thunk from 'redux-thunk'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

<<<<<<< HEAD
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
=======
export const store = createStore(composeEnhancers(applyMiddleware(thunk)))
>>>>>>> 184d46d6832085ea3b5923cd3609ef77728a86f7
