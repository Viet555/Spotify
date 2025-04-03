import avt from "../../../assets/logo.png";
import avt1 from "../../../assets/images.jfif";
import "./TopBanner.scss";

const TopBanner = () => {
  return (
    <>
      <div className="container mt-2">
        <div className="TopBanner-container">
          <div className="content-TopBanner">
            <div>
              <img src={avt} />
            </div>
            <div className="px-3">
              <div className="category">Playlist</div>
              <div className="name">Đài Phát Thanh VPOP</div>
              <div className="description">
                Bắt ngay tần số nhạc việt mới nhất không thể bỏ lở
              </div>
              <div className="action">
                <button className="btn-play">Play</button>
                <button className="btn-follow">Follow</button>
              </div>
            </div>
          </div>
        </div>
        <div className="MusicDiscovery-content">
          <div className="MusicCategory">
            <span className="active-route">All</span>
            <span>Music</span>
            <span>Podcasts</span>
          </div>
          <div className="symbolic-song">
            <div className=" content-song">
              <img src={avt1} />
              <span className="name-content">Hieu thu 2</span>
            </div>
            <div className=" content-song">2</div>
            <div className=" content-song">3</div>
            <div className=" content-song">4</div>
            <div className=" content-song">
              <img src={avt1} />
              <span className="name-content">Hieu thu 2</span>
            </div>
            <div className=" content-song">3</div>
            <div className=" content-song">4</div>
            <div className=" content-song">4</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TopBanner;
