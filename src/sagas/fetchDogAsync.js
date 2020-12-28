import { put, call } from 'redux-saga/effects';
import { requestDog } from '../redux/actions/requestDog';
import { requestDogSuccess } from '../redux/actions/requestDogSuccess';
import { requestDogError } from '../redux/actions/requestDogError';
import fetchAPI from '../assets/helpers/fetchAPI';

function* fetchDogAsync() {
  yield put(requestDog());
  try {
    const data = yield call(fetchAPI);
    if (data.status === 'success') {
      yield put(requestDogSuccess(data));
    } else {
      yield put(requestDogError(data.message));
    }
  } catch (err) {
    yield put(requestDogError(err.message));
  }
}

export default fetchDogAsync;
