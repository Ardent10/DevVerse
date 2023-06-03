import globalReducer from "./globalReducers";
import { initialState } from "./initialState";

const combineReducers = (reducers) => {
  return (state, action) => {
    return Object.keys(reducers).reduce((acc, prop) => {
      return {
        ...acc,
        ...reducers[prop]({ [prop]: acc[prop] }, action),
      };
    }, state);
  };
};

const appReducers = combineReducers({
  reducers: globalReducer,
});

export { initialState, appReducers };
