import {database} from "../firebase";
import auth from './auth'

const UPDATE_ARR = 'todoList/UPDATE_ARR'
const ON_CHANGE = 'todoList/ON_CHANGE'
const CLEAR = 'todoList/CLEAR'
const FILTER = 'todoList/FILTER'
const DELETE_TASK = 'todoList/DELETE_TASK'

export const onChange = (newValue) => ({
    type: ON_CHANGE,
    newValue
})

export const updateArr = (newValue) => ({
    type: UPDATE_ARR,
    newValue
})

export const clear = () => ({type: CLEAR})

export const filter = (newFilterValue) => ({
    type: FILTER,
    newFilterValue
})

export const deleteTask = (index) => ({
    type: DELETE_TASK,
    index
})

export const addTask = () => (dispatch, getState) => {
    const state = getState()
    database.ref(`users/${state.auth.user.uid}/tasks`).set(state.todoList.tasks.concat(
        state.todoList.newText
    ))
}
export const updateAfterDelete = () => (dispatch, getState) => {
    const state = getState()
    database.ref(`users/${state.auth.user.uid}/tasks`).set(state.todoList.tasks)
}

export const initTasksSync = () => (dispatch, getState) => {
    const state = getState()
    database.ref(`users/${state.auth.user.uid}/tasks`).on(
        'value',
        (snapshot) => dispatch(
            updateArr(snapshot.val() || [])
        )
    )
}


const initialState = {
    newText: '',
    newFilter: '',
    tasks: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ON_CHANGE:
            return {
                ...state,
                newText: action.newValue
            }
        case UPDATE_ARR:
            return{
                    ...state,
                    tasks: action.newValue
                }
        case CLEAR :
            return{
                ...state,
                newText: ''
            }
        case FILTER:
            return {
                ...state,
                newFilter: action.newFilterValue
            }
        case DELETE_TASK:
            return{
                ...state,
                tasks: state.tasks.filter((task, index) => index !== action.index )
            }
        default:
            return state
    }
}