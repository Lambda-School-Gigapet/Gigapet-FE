import { DELETE_ACCOUNT, FEED_GIGAPET, UPDATE_GIGAPET_MOOD } from '../actions'

const initialState = {
    level: 0,
    points: 0,
    mood: 'neutral'
}

export default function gigapetReducer(state=initialState, action) {
    switch(action.type) {
        case DELETE_ACCOUNT: 
            return initialState

        case FEED_GIGAPET:
                return {
                    ...state,
                    points: action.payload.points * action.payload.servings
                }
                
        case UPDATE_GIGAPET_MOOD:
            return {
                ...state,
                mood: action.payload
            }
        
        default: 
            return state
    }
}