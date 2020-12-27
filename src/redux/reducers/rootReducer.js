import { REQUEST_DOG } from '../actions/requestDog';

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
    default:
      return state;
  }
};

export default rootReducer;
