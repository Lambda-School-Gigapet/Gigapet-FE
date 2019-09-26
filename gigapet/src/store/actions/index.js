import { 
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    registerUser,

    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    loginUser,

    SIGN_OUT,
    signOut,

    DELETE_ACCOUNT,
    deleteAccount
} from './authActions'

import { 
    ADD_NEW_CHILD_START,
    ADD_NEW_CHILD_SUCCESS,
    ADD_NEW_CHILD_FAILURE,
    addNewChild,

    ADD_NEW_MEAL_ENTRY_START,
    ADD_NEW_MEAL_ENTRY_SUCCESS,
    ADD_NEW_MEAL_ENTRY_FAILURE,
    addNewMealEntry,

    FETCH_CHILDREN_START,
    FETCH_CHILDREN_SUCCESS,
    FETCH_CHILDREN_FAILURE,
    fetchChildren,

    FEED_GIGAPET,
    feedGigapet,

    UPDATE_GIGAPET_MOOD,
    updateGigapetMood
} from './childrenActions'

export {
    // Auth actions
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    registerUser ,

    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    loginUser,

    SIGN_OUT,
    signOut,

    DELETE_ACCOUNT,
    deleteAccount,

    // Children Actions
    ADD_NEW_CHILD_START,
    ADD_NEW_CHILD_SUCCESS,
    ADD_NEW_CHILD_FAILURE,
    addNewChild,

    ADD_NEW_MEAL_ENTRY_START,
    ADD_NEW_MEAL_ENTRY_SUCCESS,
    ADD_NEW_MEAL_ENTRY_FAILURE,
    addNewMealEntry,

    FETCH_CHILDREN_START,
    FETCH_CHILDREN_SUCCESS,
    FETCH_CHILDREN_FAILURE,
    fetchChildren,

    FEED_GIGAPET,
    feedGigapet,

    UPDATE_GIGAPET_MOOD,
    updateGigapetMood
}