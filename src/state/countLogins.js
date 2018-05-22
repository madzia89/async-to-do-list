import {database} from "../firebase";

const UPDATE_LOGINS = 'countLogins/UPDATE_LOGINS'

export const mapObjectToArray = (obj) => (
    Object.entries(obj || {})
        .map(([key, value]) => (
            typeof value === 'object' ?
                {...value, key}
                :
                {key, value}
        ))
)

export const updateLogins = (newValue) => ({
        type: UPDATE_LOGINS,
        newValue
    })

export const logInsSyncer = () => (dispatch, getState) => {
    const state = getState()
    database.ref(`users/${state.auth.user.uid}/loginsLogs`).on(
        'value',
        (snapshot) => dispatch(
            updateLogins(mapObjectToArray(snapshot.val() || []))
        )
    )
}

const initialState = {
    loginsNumber: []
}

export default (state = initialState, action) => {
    switch (action.type) {

        case UPDATE_LOGINS:
            return {
                ...state,
                loginsNumber: action.newValue
            }

        default:
            return state
    }
}