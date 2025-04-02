import "./Playlist.scss";
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
        <div className="content-playlist "></div>
      </div>
    </>
  );
};
export default PlayList;
