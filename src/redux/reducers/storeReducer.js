import { FETCH_TEAM_LIST_REQ, FETCH_TEAM_LIST_SUCCESS, FETCH_TEAM_LIST_FAIL, FETCH_TEAM_MEMBERS_REQ, FETCH_TEAM_MEMBERS_FAIL, FETCH_TEAM_MEMBERS_SUCCESS, FETCH_USERS_REQ, FETCH_USERS_FAIL, FETCH_USERS_SUCCESS } from '../actions'

const store = (state = [], action) => {
    switch (action.type) {
        case FETCH_TEAM_LIST_REQ:
        case FETCH_USERS_REQ:
        case FETCH_TEAM_MEMBERS_REQ:
        case FETCH_TEAM_LIST_FAIL:
        case FETCH_TEAM_MEMBERS_FAIL:
        case FETCH_USERS_FAIL:
            return state
        case FETCH_TEAM_LIST_SUCCESS:
            return {
                ...state,
                teamList: action.data,
                users: [],
            }
        case FETCH_TEAM_MEMBERS_SUCCESS:
            return {
                ...state,
                teamMembers: action.data,
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.data,
            };
        default:
            return state
    }
};

export default store