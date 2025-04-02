import "./HeaderApp.scss";
import avt from "../../../assets/logo.png";
const HeaderApp = () => {
  return (
    <>
      <div className="container-header">
        <div className="content-header-left">
          <span>
            <i className="fa-solid fa-ellipsis"></i>
            <i className="fa-solid fa-arrow-right"></i>
            <i className="fa-solid fa-arrow-left"></i>
          </span>
        </div>
        <div className="content-header-center">
          <div className="content-center">
            <div className="icon-home">
              <i className="fa-solid fa-house"></i>
            </div>
            <div className="search-bar">
              <i className="fa-solid fa-magnifying-glass search-icon"></i>
              <input
                className="form-control col-8"
                placeholder="What do you want to play?"
              />
              <i className="fa-solid fa-window-maximize browse-icon"></i>
            </div>
          </div>
        </div>
        <div className="content-header-right">
          <div className="content-right">
            <i className="fa-solid fa-bell"></i>
            <i className="fa-solid fa-people-group"></i>
            <img src={avt} />
          </div>
        </div>
      </div>
    </>
  );
};
export default HeaderApp;
