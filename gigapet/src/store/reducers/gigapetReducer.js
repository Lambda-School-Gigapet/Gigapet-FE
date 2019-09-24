import { DELETE_ACCOUNT } from '../actions'

const initialState = {
    level: 0,
    points: 0,
    mood: 'neutral'
}

export default function gigapetReducer(state=initialState, action) {
    switch(action.type) {
        case DELETE_ACCOUNT: 
            return initialState
        default: 
            return state
    }
}