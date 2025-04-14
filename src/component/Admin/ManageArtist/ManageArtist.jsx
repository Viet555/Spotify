import { useEffect, useState } from "react";
import CreateArtist from "./CreateArtist";
import { ApiGetAllArtist } from "../../../Service/ApiService";
import TableArtist from "./TableArtist";
import ModelEditArtist from "./EditArtis";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../../Store/Export";
const ManageArtist = () => {
  const dispatch = useDispatch();

  const [listArtist, setListArtist] = useState();
  const [totalPages, setTotalpages] = useState(0);
  const [currentPages, setCurrentPages] = useState(1);
  const [isShow, setIsShow] = useState(false);
  const [dataEditArtist, setDataEditArtist] = useState();
  useEffect(() => {
    dispatch(action.fetchOptionArtist());
  }, []);
  const optionArtist = useSelector((state) => state.user.dataOptionArtist);
  useEffect(() => {}, [optionArtist]);
  useEffect(() => {
    handleGetListArtist("", currentPages);
  }, [currentPages]);
  const handleGetListArtist = async () => {
    let res = await ApiGetAllArtist("", currentPages);
    if (res?.EC === 0) {
      setListArtist(res.data);
    }
    if (res?.totalPages) {
      setTotalpages(res.totalPages);
    }
    if (res?.EC !== 0) {
      toast.error(res?.MES);
    }
  };
  const handleEditArtist = (dataArtist) => {
    setIsShow(!isShow);
    setDataEditArtist(dataArtist);
  };
  return (
    <>
      <CreateArtist handleGetListArtist={handleGetListArtist} />
      <TableArtist
        optionArtist={optionArtist}
        currentPages={currentPages}
        totalPages={totalPages}
        setCurrentPages={setCurrentPages}
        handleGetListArtist={handleGetListArtist}
        listArtist={listArtist}
        handleEditArtist={handleEditArtist}
      />
      <ModelEditArtist
        show={isShow}
        setShow={setIsShow}
        handleGetListArtist={handleGetListArtist}
        dataEditArtist={dataEditArtist}
      />
    </>
  );
};
export default ManageArtist;
