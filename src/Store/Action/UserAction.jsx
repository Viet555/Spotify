import { toast } from "react-toastify";
import { ApiGetSelectArtist, UserLogin } from "../../Service/ApiService";
import actiontypes from "./ActionType";

export const UserLoginRedux = (dataLog) => {
  return async (dispatch, getState) => {
    let dataUser = await UserLogin(dataLog);
    try {
      if (dataUser?.EC === 0) {
        dispatch({
          type: actiontypes.USER_LOGIN_SUCCESS,
          data: dataUser,
        });
      } else {
        toast.error(dataUser?.MES);
        dispatch({
          type: actiontypes.USER_LOGIN_FAIL,
        });
      }
    } catch (e) {
      console.log("err", e);
      dispatch({
        type: actiontypes.USER_LOGIN_FAIL,
      });
    }
  };
};
export const userLogout = () => ({
  type: actiontypes.USER_LOGOUT,
});

export const fetchOptionArtist = () => {
  return async (dispatch, getState) => {
    let res = await ApiGetSelectArtist();
    try {
      if (res?.EC === 0) {
        const dataOptionArtist = res?.data.map((artist) => ({
          value: artist._id,
          label: artist.nameArtist,
        }));
        dispatch({
          type: actiontypes.FETCH_OPTION_ARTIST_SUCCESS,
          data: dataOptionArtist,
        });
      } else {
        toast.error(res?.MES);
        dispatch({
          type: actiontypes.FETCH_OPTION_ARTIST_FAIL,
        });
      }
    } catch (e) {
      console.log("err", e);
      dispatch({
        type: actiontypes.FETCH_OPTION_ARTIST_FAIL,
      });
    }
  };
};
