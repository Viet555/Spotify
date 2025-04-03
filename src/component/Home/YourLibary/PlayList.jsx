import "./Playlist.scss";
import avtPlaylist from "../../../assets/logo.png";
const PlayList = () => {
  return (
    <>
      <div className="playlist-container">
        <div className="icon-header">
          <span>
            <i className="fa-solid fa-magnifying-glass search-icon icon-search"></i>
          </span>
          <span className="recent">
            Recent<i className="fa-solid fa-bars mx-2 "></i>
          </span>
        </div>
        <div className="content-playlist">
          <div className="info-playlist">
            <div className="">
              <img src={avtPlaylist} />
            </div>
            <div className="px-2">
              <div className="name-playlist">
                ai cung phat bat dau tu dau do
              </div>
              <div className="type">
                <span className="category ">playlist</span>
                <span className="px-1">-</span>
                <span className="author ">author</span>
              </div>
            </div>
          </div>
        </div>
        <div className="content-playlist">
          <div className="info-playlist">
            <div className="">
              <img src={avtPlaylist} />
            </div>
            <div className="px-2">
              <div className="name-playlist">
                ai cung phat bat dau tu dau do
              </div>
              <div className="type">
                <span className="category ">playlist</span>
                <span className="px-1">-</span>
                <span className="author ">author</span>
              </div>
            </div>
          </div>
        </div>
        <div className="content-playlist">
          <div className="info-playlist">
            <div className="">
              <img src={avtPlaylist} />
            </div>
            <div className="px-2">
              <div className="name-playlist">
                ai cung phat bat dau tu dau do
              </div>
              <div className="type">
                <span className="category ">playlist</span>
                <span className="px-1">-</span>
                <span className="author ">author</span>
              </div>
            </div>
          </div>
        </div>
        <div className="content-playlist">
          <div className="info-playlist">
            <div className="">
              <img src={avtPlaylist} />
            </div>
            <div className="px-2">
              <div className="name-playlist">
                ai cung phat bat dau tu dau do
              </div>
              <div className="type">
                <span className="category ">playlist</span>
                <span className="px-1">-</span>
                <span className="author ">author</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PlayList;
