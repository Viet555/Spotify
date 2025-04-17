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
};
