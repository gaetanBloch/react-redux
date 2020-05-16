import * as ActionTypes from '../actions/action';

const initialState = {
  counter: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1
      return newState;
    case ActionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter -1
      }
    case ActionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.value
      }
    case ActionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.value
      }
    default:
      return state;
  }
}

export default reducer;

