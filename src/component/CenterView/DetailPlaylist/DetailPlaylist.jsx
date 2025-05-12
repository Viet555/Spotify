import { useParams } from "react-router-dom";
import avt from "../../../assets/logo.png";
import "../Detail.scss";
import { useEffect, useState } from "react";
import {
  ApiGetDetailPlaylist,
  ApiGetPlaylistByCategory,
} from "../../../Service/ApiService";
import { toast } from "react-toastify";
import { formatDuration } from "../../../constant";
const DetailPlaylist = () => {
  const params = useParams();
  const playlistId = params.id;
  const [playlistDetail, setPlaylistDetail] = useState();
  useEffect(() => {
    if (playlistId) {
      getDetailPlaylist(playlistId);
    }
  }, [playlistId]);
  const getDetailPlaylist = async (playlistId) => {
    let response = await ApiGetDetailPlaylist(playlistId);
    if (response?.EC === 0) {
      setPlaylistDetail(response.data);
    } else {
      toast.error(response?.MES);
    }
  };
  console.log(playlistDetail);
  return (
    <>
      <div className="details-container">
        <div className="content-details">
          <div>
            <img src={playlistDetail?.image || avt} />
          </div>
          <div className="px-3">
            <div className="category">Playlist</div>
            <div className="name">{playlistDetail?.namePlaylist || ""}</div>
            <div className="description">
              {playlistDetail?.note ||
                "Bắt ngay tần số nhạc việt mới nhất không thể bỏ lở"}
            </div>
            <div className="more-detail">
              <div className="author">
                <img src={avt} /> <span>jacob</span>
              </div>
              <div className="">-</div>
              <div className="total-song">{playlistDetail?.totalSong}songs</div>
            </div>
          </div>
        </div>
      </div>
      <div className="icon-action ">
        <span>
          <i className="fa-solid fa-play start-icon"></i>
          <i className="fa-solid fa-plus plus-icon"></i>
        </span>
        <span>
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
        </span>
      </div>
      <div className="list-songs-main container">
        <div className="thead ">
          <div className="stt">#</div>
          <div className="title"> Title</div>
          <div className="album">album</div>
          <div className="date">Date added </div>
          <div className="time">Time</div>
          <div className="add-song"></div>
        </div>
        {playlistDetail &&
          playlistDetail.song &&
          playlistDetail.song.length > 0 &&
          playlistDetail.song.map((item, index) => {
            return (
              <div className="tbody p-3" key={`playlist-detail${item._id}`}>
                <div className="stt-body">{index + 1}</div>
                <div className="song-body">
                  <img src={item.image || avt} />
                  <div className="info-song">
                    <span className="name-song">{item.nameSong || ""}</span>
                    <span className="author-song">
                      {item.artist.map((a, index) => (
                        <span key={a._id}>
                          {a.nameArtist}
                          {index < item.artist.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </span>
                  </div>
                </div>
                <div className="album-body">{item.album || ""}</div>
                <div className="date-body">
                  {item.releaseDate?.split("T")[0] || ""}
                </div>
                <div className="time-body">
                  {formatDuration(item.duration) + " s" || ""}
                </div>
                <div className="add-song">
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default DetailPlaylist;
