import actiontypes from "../Action/ActionType";
const INITIAL_STATE = {
  songOption: {},
  // dataAllPlaylist: {},
};

const AdminReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case actiontypes.FETCH_OPTION_SONG_SUCCESS:
      return {
        ...state,
        songOption: action.data,
      };
    // case actiontypes.FETCH_ALL_PLAYLIST_SUCCESS:
    //   return {
    //     ...state,
    //     dataAllPlaylist: action.data,
    //   };
    // case actiontypes.FETCH_ALL_PLAYLIST_FAIL:
    //   return {
    //     ...state,
    //     dataAllPlaylist: null,
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
