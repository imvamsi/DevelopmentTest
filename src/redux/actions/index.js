export const FETCH_TEAM_LIST_REQ = 'FETCH_TEAM_LIST_REQ';
export const FETCH_TEAM_LIST_SUCCESS = 'FETCH_TEAM_LIST_SUCCESS';
export const FETCH_TEAM_LIST_FAIL = 'FETCH_TEAM_LIST_FAIL';

export const fetchTeamListReq = () => ({
    type:FETCH_TEAM_LIST_REQ,
})

export const fetchTeamListSuccess = data => ({
    type:FETCH_TEAM_LIST_SUCCESS,
    data,
})

export const fetchTeamListFail= error => ({
    type:FETCH_TEAM_LIST_FAIL,
    error,
});

export const FETCH_TEAM_MEMBERS_REQ = 'FETCH_TEAM_MEMBERS_REQ';
export const FETCH_TEAM_MEMBERS_SUCCESS = 'FETCH_TEAM_MEMBERS_SUCCESS';
export const FETCH_TEAM_MEMBERS_FAIL = 'FETCH_TEAM_MEMBERS_FAIL';

export const fetchTeamMembersReq = id => ({
    type:FETCH_TEAM_MEMBERS_REQ,
    id,
})

export const fetchTeamMembersSuccess = data => ({
    type:FETCH_TEAM_MEMBERS_SUCCESS,
    data,
})

export const fetchTeamMembersFail= error => ({
    type:FETCH_TEAM_MEMBERS_FAIL,
    error,
});

export const FETCH_USERS_REQ = 'FETCH_USERS_REQ';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAIL = 'FETCH_USERS_FAIL';

export const fetchUsersReq = data => ({
    type:FETCH_USERS_REQ,
    data
})

export const fetchUsersSuccess = data => ({
    type:FETCH_USERS_SUCCESS,
    data,
})

export const fetchUsersFail= error => ({
    type:FETCH_USERS_FAIL,
    error,
});

