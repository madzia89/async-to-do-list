import {auth} from "../firebase";

const SIGN_UP_EMAIL = 'formState/SIGN_UP_WITH_EMAIL'
const SIGN_UP_PASSWORD = 'formState/SIGN_UP_PASSWORD'
const SIGN_UP_RETYPE_PASSWORD = 'formState/SIGN_UP_RETYPE_PASSWORD'
const LOG_IN_EMAIL = 'formState/LOG_IN_EMAIL'
const LOG_IN_PASSWORD = 'formState/LOG_IN_PASSWORD'


export const signUpEmail = (signUpEmail) => ({type: SIGN_UP_EMAIL, signUpEmail})
export const signUpPassword = (signUpPassword) => ({type: SIGN_UP_PASSWORD, signUpPassword})
export const signUpRetypePassword = (signUpRetypePassword) => ({type: SIGN_UP_RETYPE_PASSWORD, signUpRetypePassword})
export const logInPassword = (value) => ({type: LOG_IN_PASSWORD, value})
export const logInEmail = (value) => ({type: LOG_IN_EMAIL, value})

export const onSignUpClick = () => (dispatch, getState) => {
    console.log(arguments)
    const signUpRetypePassword = getState().formState.signUpRetypePassword
    const email = getState().formState.signUpEmail
    const password = getState().formState.signUpPassword

    if (password !== signUpRetypePassword) {
        alert('Passwords do not match')
        return
    }
    auth.createUserWithEmailAndPassword(email, password)
}


export const logInWithEmail = () => (dispatch, getState) => {
    const email = getState().formState.loginEmail
    const password = getState().formState.loginPassword
    auth.signInWithEmailAndPassword(email, password)
}


const initialState = {
    loginEmail: '',
    loginPassword: '',
    signUpEmail: '',
    signUpPassword: '',
    signUpRetypePassword: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP_EMAIL :
            return {
                ...state,
                signUpEmail: action.signUpEmail
            }
        case SIGN_UP_PASSWORD :
            return {
                ...state,
                signUpPassword: action.signUpPassword
            }
        case SIGN_UP_RETYPE_PASSWORD :
            return {
                ...state,
                signUpRetypePassword: action.signUpRetypePassword
            }
        case LOG_IN_EMAIL :
            return {
                ...state,
                loginEmail: action.value
            }
        case LOG_IN_PASSWORD :
            return {
                ...state,
                loginPassword: action.value
            }
        default:
            return state
    }
}