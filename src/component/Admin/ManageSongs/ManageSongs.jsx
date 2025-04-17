import CreateSong from "./CreateSong";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../../Store/Export";
import { useEffect, useState } from "react";
import _ from "lodash";
import TableSongs from "./TableSongs";
import { ApiGetAllSong } from "../../../Service/ApiService";
import { toast } from "react-toastify";
import ModalEditSong from "./ModalEditSong";
import { isPublicOption, genreOption } from "../../../constant";
const ManageSongs = () => {
  const option = useSelector((state) => state.user.dataOptionArtist);
  const [optionArtist, setOptionArtist] = useState("");
  const dispatch = useDispatch();
  const [totalPages, setTotalpages] = useState(0);
  const [dataSongEdit, setDataSongEdit] = useState("");
  const [listSongs, setListSongs] = useState("");
  const [currentPages, setCurrentPages] = useState(1);
  const [playingSongId, setPlayingSongId] = useState(null);
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    dispatch(action.fetchOptionArtist());
    if (option && !_.isEmpty(option)) {
      setOptionArtist(option);
    }
  }, []);

  useEffect(() => {
    getAllSongsTable();
  }, [currentPages]);

  const toggleAudio = (songId) => {
    const audioEl = document.getElementById(`audio-${songId}`);

    if (!audioEl) return;

    // Nếu đang play bài đó → thì dừng
    if (playingSongId === songId) {
      audioEl.pause();
      setPlayingSongId(null);
    } else {
      // Dừng tất cả audio khác
      const allAudio = document.querySelectorAll("audio");
      allAudio.forEach((el) => el.pause());

      // Phát bài được chọn
      audioEl.play();
      setPlayingSongId(songId);
    }
  };
  const getAllSongsTable = async () => {
    let res = await ApiGetAllSong("", currentPages);
    if (res?.EC === 0) {
      setListSongs(res.data);
    }
    if (res?.totalPages) {
      setTotalpages(res.totalPages);
    }
    if (res?.EC !== 0) {
      toast.error(res?.MES);
    }
  };
  const handleEditSong = (dataSong) => {
    setDataSongEdit(dataSong);
    setIsShow(!isShow);
  };
  return (
    <>
      <CreateSong
        optionArtist={optionArtist}
        getAllSongsTable={getAllSongsTable}
      />
      <TableSongs
        listSongs={listSongs}
        currentPages={currentPages}
        totalPages={totalPages}
        setCurrentPages={setCurrentPages}
        getAllSongsTable={getAllSongsTable}
        toggleAudio={toggleAudio}
        playingSongId={playingSongId}
        handleEditSong={handleEditSong}
      />
      <ModalEditSong
        dataSongEdit={dataSongEdit}
        setIsShow={setIsShow}
        show={isShow}
        getAllSongsTable={getAllSongsTable}
        optionArtist={optionArtist}
      />
    </>
  );
};
export default ManageSongs;
