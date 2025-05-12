import { toast } from "react-toastify";
import { ApiGetAllPlaylist, ApiGetAllSong } from "../../Service/ApiService";
import actiontypes from "./ActionType";

// export const getAllSongRedux = (limit, page) => {
//   return async (dispatch, getState) => {
//     let res = await ApiGetAllSong(limit, page);
//     try {
//       if (res?.EC === 0) {
//         dispatch({
//           type: actiontypes.GET_ALL_SONG_SUCCESS,
//           data: res.data,
//         });
//       } else {
//         toast.error(dataUser?.MES);
//         dispatch({
//           type: actiontypes.GET_ALL_SONG_FAIL,
//         });
//       }
//     } catch (e) {
//       console.log("err", e);
//       dispatch({
//         type: actiontypes.GET_ALL_SONG_FAIL,
//       });
//     }
//   };
// };
//*********************** */
// export const getAllPlaylistRedux = (limit, page) => {
//   return async (dispatch, getState) => {
//     let res = await ApiGetAllPlaylist(limit, page);
//     try {
//       if (res?.EC === 0) {
//         console.log(res);
//         dispatch({
//           type: actiontypes.FETCH_ALL_PLAYLIST_SUCCESS,
//           data: res.data,
//         });
//       } else {
//         dispatch({
//           type: actiontypes.FETCH_ALL_PLAYLIST_FAIL,
//         });
//       }
//     } catch (e) {
//       console.log(e);
//       dispatch({
//         type: actiontypes.FETCH_ALL_PLAYLIST_FAIL,
//       });
//     }
//   };
// };
export const optionSongRedux = () => {
  return async (dispatch, getState) => {
    let res = await ApiGetAllSong();
    try {
      if (res?.EC === 0) {
        const optionSong = res.song.map((item) => ({
          value: item._id,
          label: item.nameSong,
          image: item.image,
        }));
        dispatch({
          type: actiontypes.FETCH_OPTION_SONG_SUCCESS,
          data: optionSong,
        });
      } else {
        toast.error(res?.MES);
        dispatch({
          type: actiontypes.FETCH_OPTION_SONG_FAIL,
        });
      }
    } catch (e) {
      console.log("err", e);
      dispatch({
        type: actiontypes.FETCH_OPTION_SONG_FAIL,
      });
    }
  };
};
