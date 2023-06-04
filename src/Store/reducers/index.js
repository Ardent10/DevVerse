import { initialState } from "./initialState";
import globalReducers from "./globalReducers";

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
  globalReducer: globalReducers, // Corrected key name
});

export { initialState, appReducers };
