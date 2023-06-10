const globalReducers = (state, action = {}) => {
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
    case "setUserProfile": {
      return {
        ...state,
        userProfile: action.payload,
      };
    }
    case "setPosts": {
      return {
        ...state,
        posts: action.payload,
      };
    }
    case "setIsLoading": {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    default:
      return state;
  }
};

export default globalReducers;
