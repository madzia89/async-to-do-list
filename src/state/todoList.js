import {database} from "../firebase";

const UPDATE_ARR = 'todoList/UPDATE_ARR'
const ON_CHANGE = 'todoList/ON_CHANGE'
const CLEAR = 'todoList/CLEAR'

export const onChange = (newValue) => ({
    type: ON_CHANGE,
    newValue
})

export const updateArr = (newValue) => ({
    type: UPDATE_ARR,
    newValue
})

export const clear = () => ({type: CLEAR})

export const addTask = () => (dispatch, getState) => {
    const state = getState()
    database.ref('tasks').set(state.todoList.tasks.concat(
        state.todoList.newText
    ))
}

export const initTasksSync = () => (dispatch, getState) => {
    database.ref('/tasks').on(
        'value',
        (snapshot) => dispatch(
            updateArr
                (snapshot.val())
        )
    )
}


const initialState = {
    newText: '',
    tasks: ['aa', 'bb']
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
        default:
            return state
    }
}