import {
  REQUEST_DOG,
  REQUEST_DOG_SUCCEEDED,
  REQUEST_DOG_FAILED,
} from '../actions/requestDog';

const initialState = {
  url: '',
  loading: 'false',
  error: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DOG: {
      return { url: '', loading: true, error: false };
    }
    case REQUEST_DOG_SUCCEEDED: {
      return { url: action.payload, loading: false, error: false };
    }
    case REQUEST_DOG_FAILED: {
      return { url: '', loading: false, error: true };
    }
    default:
      return state;
  }
};

export default rootReducer;
