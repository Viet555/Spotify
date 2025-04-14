import actiontypes from "../Action/ActionType";
const INITIAL_STATE = {
  account: {
    email: "",
    avatar: "",
    roleId: "",
    firstName: "",
    lastName: "",
    gender: "",
    phoneNumber: "",
    id: "",
    accessToken: "",
    refreshToken: "",
  },

  isauthentic: false,
  dataOptionArtist: [],
};

const UserReducer = (state = INITIAL_STATE, action) => {
  console.log(">>>action", action);
  switch (action.type) {
    case actiontypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        account: {
          accessToken: action?.data?.payloadToken?.accessToken,
          refreshToken: action?.data?.payloadToken?.refreshToken,
          email: action?.data?.data?.email,
          avatar: action?.data?.data?.avatar,
          roleId: action?.data?.data?.roleId,
          firstName: action?.data?.data?.firstName,
          lastName: action?.data?.data?.lastName,
          gender: action?.data?.data?.gender,
          phoneNumber: action?.data?.data?.phoneNumber,
          id: action?.data?.data?._id,
        },

        isauthentic: true,
      };

    case actiontypes.USER_LOGIN_FAIL:
      return {
        ...state,
        account: null,
        isauthentic: false,
      };
    case actiontypes.USER_LOGOUT:
      return {
        ...state,
        account: null,
        isauthentic: false,
      };
    case actiontypes.FETCH_OPTION_ARTIST_SUCCESS:
      return {
        ...state,
        dataOptionArtist: action.data,
      };
    case actiontypes.FETCH_OPTION_ARTIST_FAIL:
      return {
        ...state,
        dataOptionArtist: [],
      };

    default: // need this for default case
      return state;
  }
};

export default UserReducer;
