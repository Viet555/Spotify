import actiontypes from "../Action/ActionType";
const INITIAL_STATE = {
  Song: {},
};

const AdminReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    // case actiontypes.GET_ALL_SONG_SUCCESS:
    //   return {
    //     ...state,
    //     song: data,
    //   };
    // case actiontypes.GET_ALL_SONG_FAIL:
    //   return {
    //     ...state,
    //     song: {},
    //   };
    default: // need this for default case
      return state;
  }
};

export default AdminReducer;
