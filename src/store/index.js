import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
const indexstate = {
  comment: 1,
};
function reducer(state = indexstate, action) {
  switch (action.type) {
    case 'ADD':
      return { ...state, comment: state.comment + action.num };
    default:
      return state;
  }
}
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
