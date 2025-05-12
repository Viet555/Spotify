import "../Content.scss";
import avt from "../../../assets/images.jfif";
import * as action from "../../../Store/Export";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const RecomToday = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Playlist = useSelector((state) => state.user.categoryPlaylist);
  useEffect(() => {
    dispatch(action.getPlaylistByCategoryRedux("recommended"));
  }, []);
  console.log(Playlist);

  const handleDetailPlaylist = (playlistId) => {
    if (!playlistId) {
      toast.error("no provide Id");
    } else {
      navigate(`detail-playlist/${playlistId}`);
    }
  };
  return (
    <>
      <div className="content-container container">
        <div className="content-header">
          <span className="title-header">Recommended for today</span>
          <span className="show-all">Show all</span>
        </div>
        <div className="content-main">
          {Playlist &&
            Playlist.length > 0 &&
            Playlist.map((item, index) => {
              return (
                <div
                  key={`playlist-${item._id}`}
                  className="col-2 info-content"
                  onClick={() => handleDetailPlaylist(item._id)}
                >
                  <img src={item.image}></img>
                  <i className="fa-solid fa-play start-icon"></i>
                  <div className=" ">{item.namePlaylist}</div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
export default RecomToday;
