import JumpBackIn from "./JumpBackIn/JumpBackIn";
import MadeFor from "./MadeFor/MadeFor";

import TopBanner from "./TopBanner/TopBanner";
import PopularAlbums from "./PopularAlbums/PopularAlbums";
import RecentlyPlayer from "./RecentlyPlayer/RecentlyPlayer";
import RecomToday from "./RecomToday/RecomToday";
import PodCasts from "./PodCasts/PodCasts";

const DashboardCenter = () => {
  console.log("DashboardCenter render");
  return (
    <>
      <div className="container p-2 ">
        <TopBanner />
        <MadeFor />
        <JumpBackIn />
        <RecomToday />
        <RecentlyPlayer />
        <PopularAlbums />
        <PodCasts />
      </div>
    </>
  );
};
export default DashboardCenter;
