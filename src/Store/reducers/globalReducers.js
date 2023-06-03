const counterReducer = (state, action = {}) => {
  const { type } = action;
  switch (type) {
    case "toggleSideBar": {
      return {
        ...state,
        openCloseSideBar: action.data.openCloseSideBar,
      };
    }
    default:
      return state;
  }
};

export default counterReducer;
