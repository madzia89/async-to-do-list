import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import auth, {initAuthUserSync} from './state/auth'
import todoList from './state/todoList'
import formState from './state/formsState'
import countLogins from './state/countLogins'


export const reducer = combineReducers({
    countLogins,
    formState,
    auth,
    todoList,

})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)
store.dispatch(initAuthUserSync())
