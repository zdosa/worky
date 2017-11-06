const EXAMPLE = 'EXAMPLE'
const EXAMPLE_SUCCESS = 'EXAMPLE_SUCCESS'
const EXAMPLE_FAIL = 'EXAMPLE_FAIL'

const initialState = {
  data: [],
  loading: false,
  error: null,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case EXAMPLE:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case EXAMPLE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: null,
      }
    case EXAMPLE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    default:
      return state
  }
}

export const start = () => (dispatch, getState) => {
  dispatch({ type: EXAMPLE })
}