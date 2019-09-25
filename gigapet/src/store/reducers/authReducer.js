import { LOGIN_SUCCESS, SIGN_OUT, DELETE_ACCOUNT } from '../actions'

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
        
        case DELETE_ACCOUNT:
            return initialState
        
        default:
            return state
    }
}