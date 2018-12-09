import { FETCH_USERS_REQ, FETCH_USERS_FAIL, FETCH_USERS_SUCCESS } from '../actions'

const users = (state = [], action) => {
    switch (action.type) {
        case FETCH_USERS_REQ:
        case FETCH_USERS_FAIL:
            return state;
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.data,
            };
        default:
            return state;
    }
};

export default users