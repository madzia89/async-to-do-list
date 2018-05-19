import {database} from "../firebase";

const NEW_TASK = 'todoList/NEW_TASK'
const SET = 'todoList/ADD'

export const newTask = (newValue) => ({
    type: NEW_TASK,
    newValue
})
export const set = () => ({ type: SET })

export const add = () => (dispatch, getState) => {
    const state = getState()
    database.ref('/tasks').set(state.todoList.tasks)
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

export const initListSync = () => (dispatch, getState) => {
    database.ref('/tasks').on(
        'value',
        (snapshot) => dispatch(
            add(snapshot.val()
            )
        )
    )
}

const initialState = {
    newTaskText: '',
    tasks: ['mytask', 'aaa', 'bbb', 'sdgs']
}

export default (state = initialState, action) => {
    switch (action.type) {
        case NEW_TASK :
            return {
                ...state,
                newTaskText: action.newValue
            }
        case SET :
            return state.newTaskText ?
                {
                    ...state,
                    tasks: state.tasks.concat(state.newTaskText)
                }
                : state
        default:
            return state

    }
}