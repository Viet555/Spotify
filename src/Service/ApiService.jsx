import axios from "../utils/CustomizeAxios";
const UserLogin = (dataLog) => {
  return axios.post("/api/LoginUser", dataLog);
};
const ApiCreateUser = (dataUser) => {
  return axios.post("/api/CreateUSer", dataUser);
};
const ApiGetAllUserPaginate = (limit, page) => {
  return axios.get(`/api/GetAllUser?limit=${limit}&page=${page}`);
};
const ApiPutaUser = (dataEdit) => {
  return axios.put(`/api/UpdateUser`, dataEdit);
};
const ApiDeleteUser = (UserId) => {
  return axios.delete(`/api/DeleteUser?id=${UserId}`);
};
const ApiCreateArtist = (dataArtist) => {
  return axios.post(`/api/Create-Artist`, dataArtist);
};
const ApiGetAllArtist = (limit, page) => {
  return axios.get(`/api/get-all-Artist?limit=${limit}&page=${page}`);
};
const ApiUpdateArtist = (dataArtistEdit) => {
  return axios.put(`/api/Update-a-Artist`, dataArtistEdit);
};
const ApiDeleteArtist = (artistId) => {
  return axios.delete(`/api/delete-a-Artist?id=${artistId}`);
};
const ApiGetSelectArtist = () => {
  return axios.get(`/api/get-select-Artist`);
};
const ApiCreateASong = (dataSong) => {
  return axios.post(`/api/create-song`, dataSong);
};
const ApiGetAllSong = (limit, page) => {
  return axios.get(`/api/get-all-Songs?limit=${limit}&page=${page}`);
};
const ApiDeleteSong = (songId) => {
  return axios.delete(`/api/delete-a-song?id=${songId}`);
};
const ApiUpdateSong = (dataEdit) => {
  return axios.put(`/api/update-a-song`, dataEdit);
};
const ApiCreatePlaylist = (dataPlaylist) => {
  return axios.post(`/api/create-playlist`, dataPlaylist);
};
const ApiGetAllPlaylist = (limit, page) => {
  return axios.get(`/api/get-all-playlist?limit=${limit}&page=${page}`);
};
const ApiUpdatePlaylist = (dataEdit) => {
  return axios.put(`/api/update-a-playlist`, dataEdit);
};
const ApiDeletePlaylist = (idplaylist) => {
  return axios.delete(`/api/delete-a-playlist?id=${idplaylist}`);
};
const ApiGetPlaylistByCategory = (category) => {
  return axios.get(`/api/get-playlist-by-category?category=${category}`);
};
const ApiGetDetailPlaylist = (playlistId) => {
  return axios.get(`/api/get-detail-playlist?id=${playlistId}`);
};

export {
  UserLogin,
  ApiCreateUser,
  ApiGetAllUserPaginate,
  ApiPutaUser,
  ApiDeleteUser,
  ApiCreateArtist,
  ApiGetAllArtist,
  ApiUpdateArtist,
  ApiDeleteArtist,
  ApiGetSelectArtist,
  ApiCreateASong,
  ApiGetAllSong,
  ApiDeleteSong,
  ApiUpdateSong,
  ApiCreatePlaylist,
  ApiGetAllPlaylist,
  ApiUpdatePlaylist,
  ApiDeletePlaylist,
  ApiGetPlaylistByCategory,
  ApiGetDetailPlaylist,
};
