import { all, call, put, takeLatest } from 'redux-saga/effects';

import { getCarById, getCarList } from '@Global/api/get';
import { CHANGE_MODAL_STATUS, GET_CAR, GET_CAR_LIST } from './constrant';
import { finishLoading, startLoading, failLoading, action } from './action';

function* abstractGenerator({ ACTION, axiosRequest }) {
  yield put(startLoading(ACTION));

  try {
    const response = yield axiosRequest;
    yield put(finishLoading(ACTION, response.data));
  } catch (error) {
    yield put(failLoading(ACTION));
  }
}

function* getCarListGenerator() {
  yield abstractGenerator({ ACTION: GET_CAR_LIST, axiosRequest: call(getCarList) });
}

function* getCarByIdGenerator(status: { id: number; type: string }) {
  const { id } = status;
  yield put(action(CHANGE_MODAL_STATUS, true));
  yield abstractGenerator({ ACTION: GET_CAR, axiosRequest: call(getCarById, id) });
}

function* getListSaga() {
  yield takeLatest(GET_CAR_LIST, getCarListGenerator);
}

function* getCarByIdSaga() {
  yield takeLatest(GET_CAR, getCarByIdGenerator);
}

export function* rootSaga() {
  yield all([getListSaga(), getCarByIdSaga()]);
}
