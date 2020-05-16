import * as actionTypes from './actionTypes'

const saveResult = (counter) => {
  // const updatedCounter = counter * 2;
  return {
    type: actionTypes.STORE_RESULT,
    result: counter
  }
}

export const storeResult = (counter) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveResult(counter))
    },2000)
  }
}
export const deleteResult = (id) => {
  return {
    type: actionTypes.DELETE_RESULT,
    id: id
  }
}
