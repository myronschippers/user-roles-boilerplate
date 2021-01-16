import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchRoles() {
  try {
    const response = yield axios.get('/api/user/roles');

    yield put({ type: 'SET_ROLES', payload: response.data });
  } catch (error) {
    console.log('User Roles get request failed', error);
  }
}

function* rolesSaga() {
  yield takeLatest('FETCH_ROLES', fetchRoles);
}

export default rolesSaga;
