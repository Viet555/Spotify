import avt from "../../../assets/images.jfif";
import "./PodCasts.scss";
const PodCasts = () => {
  return (
    <>
      <div className="PodCasts-container container">
        <div className="content-podcasts col-4 my-4">
          <img src={avt} />
          <div className="info-podcasts ">
            <img src={avt} />
            <span className="name-podcasts">
              <span className="name">This is name</span>
              <span className="category">This is name2</span>
            </span>
          </div>
          <div className="tool">
            <span className="preview">
              <i className="fa-solid fa-bullhorn"></i>
              Preview
            </span>
            <span>
              <i className="fa-solid fa-play start-icon"></i>
            </span>
          </div>
        </div>
        <div className="content-podcasts col-4 my-4">
          <img src={avt} />
          <div className="info-podcasts ">
            <img src={avt} />
            <span className="name-podcasts">
              <span className="name">This is name</span>
              <span className="category">This is name2</span>
            </span>
          </div>
          <div className="tool">
            <span className="preview">
              <i className="fa-solid fa-bullhorn"></i>
              Preview
            </span>
            <span>
              <i className="fa-solid fa-play start-icon"></i>
            </span>
          </div>
        </div>
        <div className="content-podcasts col-4 my-4">
          <img src={avt} />
          <div className="info-podcasts ">
            <img src={avt} />
            <span className="name-podcasts">
              <span className="name">This is name</span>
              <span className="category">This is name2</span>
            </span>
          </div>
          <div className="tool">
            <span className="preview">
              <i className="fa-solid fa-bullhorn"></i>
              Preview
            </span>
            <span>
              <i className="fa-solid fa-play start-icon"></i>
            </span>
          </div>
        </div>
        <div className="content-podcasts col-4 my-4">
          <img src={avt} />
          <div className="info-podcasts ">
            <img src={avt} />
            <span className="name-podcasts">
              <span className="name">This is name</span>
              <span className="category">This is name2</span>
            </span>
          </div>
          <div className="tool">
            <span className="preview">
              <i className="fa-solid fa-bullhorn"></i>
              Preview
            </span>
            <span>
              <i className="fa-solid fa-play start-icon"></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default PodCasts;
