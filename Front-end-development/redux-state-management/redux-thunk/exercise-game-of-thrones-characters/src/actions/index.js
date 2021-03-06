import charApi from '../services/charAPI';

export const SEARCH_INIT = 'SEARCH_INIT';
export const SEARCH_SUC = 'SEARCH_SUC';
export const SEARCH_FAIL= 'SEARCH_FAIL';

export const searchInit = (characterInit) => ({
  type: SEARCH_INIT,
  loading: true,
  characterInit,
})

export const searchSuc = (character) => ({
  type: SEARCH_SUC,
  loading: false,
  character
})

export const searchFail = (error) => ({
  type: SEARCH_SUC,
  loading: false,
  error
})

export function thunkChar(char) {
  return (dispatch) => {
    dispatch(searchInit(char));
    return charApi(char)
    .then(
      (character) => dispatch(searchSuc(character)),
      (error) => dispatch(searchFail(error)),
    )
  }
}