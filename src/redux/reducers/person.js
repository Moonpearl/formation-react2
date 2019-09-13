import { GET_PERSON_PENDING, GET_PERSON_RESOLVED, GET_PERSON_FAILED } from "../actions/person";

const initialState = {
  data: {},
  finished: false,
  error: null,
};

export default function (state = initialState, action) {
  const { type, data, error } = action;

  switch (type) {
    case GET_PERSON_PENDING:
      return Object.assign({}, state, { finished: false, error: null });
    case GET_PERSON_RESOLVED:
      return Object.assign({}, state, { finished: true, data });
    case GET_PERSON_FAILED:
      return Object.assign({}, state, { finished: true, error });
    default:
      return state;
  }
}
