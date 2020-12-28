import { takeEvery } from 'redux-saga/effects';
import { FETCH_DOG } from '../redux/actions/fetchDog';
import fetchDogAsync from './fetchDogAsync';

function* watchFetchDog() {
  yield takeEvery(FETCH_DOG, fetchDogAsync);
}
export default watchFetchDog;
