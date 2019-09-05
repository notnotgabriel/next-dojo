// ACTION TYPES

export const types = {
  FETCH_SHOWS_REQUEST: 'SHOWS/FETCH_SHOWS_REQUEST',
  FETCH_SHOWS_FULFILlED: 'SHOWS/FETCH_SHOWS_FULFILlED',
  FETCH_SHOWS_REJECTED: 'SHOWS/FETCH_SHOWS_REJECTED'
};

// REDUCER
const initialState = {
  isLoading: false,
  error: undefined,
  list: [1]
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.FETCH_SHOWS_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case types.FETCH_SHOWS_FULFILLED:
      return {
        ...state,
        list: payload.shows,
        isLoading: false
      };

    case types.FETCH_SHOWS_FULFILLED:
      return {
        ...state,
        error: payload.error,
        isLoading: false
      };

    default:
      return {
        ...initialState
      };
  }
}

// Action Creators
export function fetchShowsRequest() {
  return {
    type: types.FETCH_SHOWS_REQUEST
  };
}

export function fetchShowsFulfilled(data) {
  const list = data.map(entry => entry.show);

  return {
    type: types.FETCH_SHOWS_REQUEST,
    payload: {
      list
    }
  };
}

export function fetchShowsRejected(error) {
  return {
    type: types.FETCH_SHOWS_REJECTED,
    payload: {
      error
    }
  };
}
