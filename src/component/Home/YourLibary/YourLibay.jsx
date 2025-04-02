import "./YourLibay.scss";
const YourLibary = () => {
  return (
    <>
      <div className="YourLibary-container">
        <div className="content-libary">
          <div className="text-libary">
            <span>
              <i className="fa-solid fa-book-open-reader"></i>
            </span>
            <span className="text">Your Libary</span>
          </div>
          <div className="icon-libary">
            <i className="fa-solid fa-plus plus-icon"></i>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        <div className="content-end">
          <span>Playlist</span>
          <span>Albums</span>
        </div>
      </div>
    </>
  );
};
export default YourLibary;
