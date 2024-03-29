export const GET_PERSON_PENDING = 'GET_PERSON_PENDING';
export const GET_PERSON_RESOLVED = 'GET_PERSON_RESOLVED';
export const GET_PERSON_FAILED = 'GET_PERSON_FAILED';

export const actionGetPersonPending = () => ({
  type: GET_PERSON_PENDING,
});

export const actionGetPersonResolved = (data, id) => ({
  type: GET_PERSON_RESOLVED,
  data,
  id,
});

export const actionGetPersonFailed = (error) => ({
  type: GET_PERSON_FAILED,
  error,
});
