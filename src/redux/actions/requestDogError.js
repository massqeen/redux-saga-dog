export const REQUEST_DOG_FAILED = 'REQUEST_DOG_FAILED';

export const requestDogError = (err) => ({
  type: REQUEST_DOG_FAILED,
  payload: err,
});
