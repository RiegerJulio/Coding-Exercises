import { SEARCH_FAIL, SEARCH_SUC, SEARCH_FAIL, SEARCH_INIT } from "../actions";

const initialState = {
  loading: false,
  character: '',
}

function charReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_INIT:
      return {
        ...state,
        loading: true
      }
    case SEARCH_SUC:
      return {
        ...state,
        loading: true,
        character: action.character,
      }
    case SEARCH_FAIL:
      return {
        ...state,
        loading: true,
        error: action.error,
      }
    default:
      return state;
  }
}

export default charReducer;