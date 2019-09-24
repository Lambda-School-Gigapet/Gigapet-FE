import { combineReducers } from 'redux'

import authReducer from './authReducer'
import userInfoReducer from './userInfoReducer'
import gigapetReducer from './gigapetReducer'

export default combineReducers({
    auth: authReducer,
    user: userInfoReducer,
    gigapet: gigapetReducer
})