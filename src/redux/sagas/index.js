import {
    call,
    put,
    takeEvery,
    all,
    fork,
} from 'redux-saga/effects';

import Service from '../../services';
import { FETCH_TEAM_LIST_REQ, fetchTeamListSuccess, fetchTeamListFail, FETCH_TEAM_MEMBERS_REQ, fetchTeamMembersSuccess, fetchTeamMembersFail, FETCH_USERS_REQ, fetchUsersSuccess, fetchUsersFail, fetchUsersReq } from '../actions';

function* fetchTeamListReq(){
    try {
        const response = yield call(Service.fetchTeamList);
        if(response){
            yield put(fetchTeamListSuccess(response))
        }
    } catch (error) {
        yield put(fetchTeamListFail(error))
    }
}

function* fetchTeamMembersReq(action){
    try {
        const response = yield call(Service.fetchTeamMembers, action.id);
        if(response){
            yield put(fetchUsersReq(response.members));
            yield put(fetchTeamMembersSuccess(response))
        }
    } catch (error) {
        yield put(fetchTeamMembersFail(error))
    }
}

function* fetchUsersRequest(action){
    try {
        const response = yield call(Service.fetchUsers);
        if(response){
            const members = action.data.map(item => {
                return response.filter(user => user.id === item)[0];
            })
            yield put(fetchUsersSuccess(members))
        }
    } catch (error) {
        yield put(fetchUsersFail(error))
    }
}

function* watchFetchTeamList(){
    yield takeEvery(FETCH_TEAM_LIST_REQ, fetchTeamListReq)
}

function* watchFetchTeamMembers(){
    yield takeEvery(FETCH_TEAM_MEMBERS_REQ, fetchTeamMembersReq)
}

function* watchFetchUsers(){
    yield takeEvery(FETCH_USERS_REQ, fetchUsersRequest)
}

export default function* root(){
    yield all([
        fork(watchFetchTeamList),
        fork(watchFetchTeamMembers),
        fork(watchFetchUsers)
    ])
}