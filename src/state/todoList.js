import {database} from "../firebase";

const UPDATE_ARR = 'todoList/UPDATE_ARR'
const ON_CHANGE = 'todoList/ON_CHANGE'
const ADD_TASK = 'todoList/ADD_TASK'

export const onChange = (newValue) => ({
    type: ON_CHANGE,
    newValue
})

export const updateArr = (newValue) => ({
    type: UPDATE_ARR,
    newValue
})

export const addTask = () => (dispatch, getState) => {
    const state = getState()
    database.ref('tasks').set(state.todoList.tasks.concat(
        state.todoList.newText
    ))
}

const mapObjectToArray = (obj) => (
    Object.entries(obj || {})
        .map(([key, value]) => (
            typeof value === 'object' ?
                {...value, key}
                :
                {key, value}
        ))
)
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
        default:
            return state
    }
}