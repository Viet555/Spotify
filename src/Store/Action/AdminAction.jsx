import { ApiGetAllSong } from "../../Service/ApiService";

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
