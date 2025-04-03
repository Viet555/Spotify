import avt from "../../../assets/images.jfif";
import "./RecentlyPlayer.scss";
const RecentlyPlayer = () => {
  return (
    <>
      <div className="Recently-container container">
        <div className="content-header">
          <span className="title-header">Recently Player</span>
          <span className="show-all">Show all</span>
        </div>
        <div className="recently-main">
          <div className="info-content">
            <img src={avt}></img>
            <i className="fa-solid fa-play start-icon"></i>
            <div className="name-content">tlinh</div>
          </div>
          <div className="info-content">
            <img src={avt}></img>
            <i className="fa-solid fa-play start-icon"></i>
            <div className="name-content">tlinh</div>
          </div>
          <div className="info-content">
            <img src={avt}></img>
            <i className="fa-solid fa-play start-icon"></i>
            <div className="name-content">tlinh</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RecentlyPlayer;
