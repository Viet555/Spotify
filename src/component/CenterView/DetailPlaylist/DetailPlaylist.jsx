import avt from "../../../assets/logo.png";
import "../Detail.scss";
const DetailPlaylist = () => {
  return (
    <>
      <div className="details-container">
        <div className="content-details">
          <div>
            <img src={avt} />
          </div>
          <div className="px-3">
            <div className="category">Playlist</div>
            <div className="name">Đài Phát Thanh VPOP</div>
            <div className="description">
              Bắt ngay tần số nhạc việt mới nhất không thể bỏ lở
            </div>
            <div className="more-detail">
              <div className="author">
                <img src={avt} /> <span>jacob</span>
              </div>
              <div className="">-</div>
              <div className="total-song">25 songs</div>
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
        <div className="tbody p-3">
          <div className="stt-body">1</div>
          <div className="song-body">
            <img src={avt} />
            <div className="info-song ">
              <span className="name-song">AB3</span>
              <span className="author-song">DEF</span>
            </div>
          </div>
          <div className="album-body">Gia nhu</div>
          <div className="date-body">23h ago</div>
          <div className="time-body">2p33s</div>
          <div className="add-song">
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
      </div>
    </>
  );
};
export default DetailPlaylist;
