import { LOGIN_SUCCESS, SIGN_OUT } from '../actions'

const initialState = {
    loggedIn: false,
    authToken: null
}

export default function authReducer(state=initialState, action) {
    switch(action.type) {
        case LOGIN_SUCCESS: 
            return {
                ...state,
                loggedIn: true,
                authToken: action.payload
            }

        case SIGN_OUT:
            return {
                ...state,
                loggedIn: false,
                authToken: null
            }
        
        default:
            return state
    }
}