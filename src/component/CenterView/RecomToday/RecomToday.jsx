import "../Content.scss";
import avt from "../../../assets/images.jfif";
const RecomToday = () => {
  return (
    <>
      <div className="content-container container">
        <div className="content-header">
          <span className="title-header">Recommended for today</span>
          <span className="show-all">Show all</span>
        </div>
        <div className="content-main">
          <div className="col-2 info-content">
            <img src={avt}></img>
            <i className="fa-solid fa-play start-icon"></i>
            <div className="name-content">heiu thu 2</div>
          </div>
          <div className="col-2 info-content">
            <img src={avt}></img>
            <i className="fa-solid fa-play start-icon"></i>
            <div className="name-content">heiu thu 2</div>
          </div>
          <div className="col-2 info-content">
            <img src={avt}></img>
            <i className="fa-solid fa-play start-icon"></i>
            <div className="name-content">heiu thu 2</div>
          </div>
          <div className="col-2 info-content">
            <img src={avt}></img>
            <i className="fa-solid fa-play start-icon"></i>
            <div className="name-content">heiu thu 2</div>
          </div>
          <div className="col-2 info-content">
            <img src={avt}></img>
            <i className="fa-solid fa-play start-icon"></i>
            <div className="name-content">heiu thu 2</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RecomToday;
