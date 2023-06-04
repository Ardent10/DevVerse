const globalReducers = (state, action={}) => {
  const { type } = action;
  switch (type) {
    case "toggleSideBar": {
      return {
        ...state,
        openCloseSideBar: action.data.openCloseSideBar,
      };
    }
    case "setToggleSnackbar": {
      return {
        ...state,
        toggleSnackbar: {
          open: action.payload.open,
          severity: action.payload.severity,
          message: action.payload.message,
        },
      };
    }
    default:
      return state;
  }
};

export default globalReducers;
