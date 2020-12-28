import { REQUEST_DOG } from '../actions/requestDog';

import { REQUEST_DOG_SUCCEEDED } from '../actions/requestDogSuccess';
import { REQUEST_DOG_FAILED } from '../actions/requestDogError';

const initialState = {
  url: '',
  loading: 'false',
  error: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DOG: {
      return { src: '', loading: true, error: null };
    }
    case REQUEST_DOG_SUCCEEDED: {
      return { src: action.payload, loading: false, error: null };
    }
    case REQUEST_DOG_FAILED: {
      return { src: '', loading: false, error: action.payload };
    }
    default:
      return state;
  }
};

export default rootReducer;
