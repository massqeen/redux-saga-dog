export const REQUEST_DOG_SUCCEEDED = 'REQUEST_DOG_SUCCEEDED';

export const requestDogSuccess = (data) => ({
  type: REQUEST_DOG_SUCCEEDED,
  payload: data.message,
});
