import { 
    REGISTER_SUCCESS, 
    DELETE_ACCOUNT, 
    LOGIN_SUCCESS,
    FETCH_CHILDREN_SUCCESS
} from '../actions'

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

        case LOGIN_SUCCESS: 
            return {
                ...state,
                id: action.payload.id
            }
        
        case DELETE_ACCOUNT:
            return initialState

        case FETCH_CHILDREN_SUCCESS: 
            return {
                ...state,
                children: action.payload
            }
        
        default: 
            return state
    }
}