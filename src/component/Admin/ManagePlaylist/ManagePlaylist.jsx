import CreatePlaylist from "./CreatePlaylist";
import { isPublicOption } from "../../../constant";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../../Store/Export";
import { useEffect, useState } from "react";
import _ from "lodash";
import TablePlaylist from "./TablePlaylist";
import { ApiGetAllPlaylist } from "../../../Service/ApiService";
import ModelEditPlaylist from "./EditPlaylist";

const ManagePlaylist = () => {
  const dispatch = useDispatch();
  const [totalPages, setTotalpages] = useState(0);
  const [currentPages, setCurrentPages] = useState(1);
  const [isShow, setIsShow] = useState(false);
  const [ListPlaylist, setListPlaylist] = useState();
  const [dataEditPlaylist, setDataEditPlaylist] = useState();
  const [dataOptionSong, setDataOptionSong] = useState();
  useEffect(() => {
    dispatch(action.optionSongRedux());
  }, []);
  const optionSong = useSelector((state) => state.admin.songOption);

  useEffect(() => {
    if (optionSong && !_.isEmpty(optionSong)) {
      setDataOptionSong(optionSong);
    }
  }, [optionSong]);
  useEffect(() => {
    getTablePlaylist();
  }, [currentPages]);

  const getTablePlaylist = async () => {
    let res = await ApiGetAllPlaylist("", currentPages);
    if (res && res.EC === 0) {
      setListPlaylist(res.data);
    }
    if (res?.totalPages) {
      setTotalpages(res.totalPages);
    }
    if (res?.EC !== 0) {
      toast.error(res?.MES);
    }
  };
  const handleEditPlaylist = (data) => {
    setDataEditPlaylist(data);
    setIsShow(!isShow);
  };
  return (
    <>
      <CreatePlaylist
        isPublicOption={isPublicOption}
        dataOptionSong={dataOptionSong}
        getTablePlaylist={getTablePlaylist}
      />
      <TablePlaylist
        ListPlaylist={ListPlaylist}
        getTablePlaylist={getTablePlaylist}
        handleEditPlaylist={handleEditPlaylist}
      />
      <ModelEditPlaylist
        dataEditPlaylist={dataEditPlaylist}
        show={isShow}
        setShow={setIsShow}
        getTablePlaylist={getTablePlaylist}
        isPublicOption={isPublicOption}
        dataOptionSong={dataOptionSong}
      />
    </>
  );
};
export default ManagePlaylist;
