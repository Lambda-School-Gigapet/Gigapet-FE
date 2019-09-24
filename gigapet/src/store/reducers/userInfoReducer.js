import { REGISTER_SUCCESS } from '../actions'

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
        
        default: 
            return state
    }
}