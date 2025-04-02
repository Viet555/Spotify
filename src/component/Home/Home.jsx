import "./Home.scss";
import PlayList from "./YourLibary/PlayList";
import YourLibary from "./YourLibary/YourLibay";
const Home = () => {
  return (
    <>
      <div className="container-Home">
        <div className="content-home-left">
          <YourLibary />
          <PlayList />
        </div>
        <div className="content-home-center">123</div>
        <div className="content-home-right">123</div>
      </div>
    </>
  );
};
export default Home;
