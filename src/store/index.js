import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  comment: 1,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, comment: state.comment + action.num };
    default:
      return state;
  }
}

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
