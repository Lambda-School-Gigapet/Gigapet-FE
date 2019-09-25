import { REGISTER_SUCCESS, DELETE_ACCOUNT} from '../actions'

const initialState = {
    id: null,
    username: '', 
    children: [],
}

export default function userInfoReducer(state=initialState, action) {
    switch(action.type) {
        case REGISTER_SUCCESS: 
            return {
                ...state,
                id: action.payload.id,
                username: action.payload.username
            }

        // TODO: upon LOGIN_SUCCESS, set the id to the response
        // I need this for deleting a user's account. Right now, the only way
        // I can access the id is if the user is registering an account for the 
        // first time (I then set the id on state), but not if they're a returning user who went through the regular 
        // login process. I need the id to be updated not just on registration, but also on login.

        case DELETE_ACCOUNT:
            return initialState
        
        default: 
            return state
    }
}