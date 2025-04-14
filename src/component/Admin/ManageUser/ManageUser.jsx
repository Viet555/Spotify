import { useEffect, useState } from "react";
import "./Manage.scss";
import CreateUser from "./CreateUser";
import { genderOption, roleIdOption } from "../../../constant";
import TableUser from "./TableUser";
import "./manage.scss";
import { ApiGetAllUserPaginate } from "../../../Service/ApiService";
import { toast } from "react-toastify";
import ModelEditUser from "./ModelEditUser";
const ManageUser = () => {
  const [totalPages, setTotalpages] = useState(0);
  const [currentPages, setCurrentPages] = useState(1);
  const [listUSer, setListUser] = useState("");
  const [dataUserEdit, setDataUserEdit] = useState("");
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    getAllUserTable("", currentPages);
  }, [currentPages]);
  const getAllUserTable = async () => {
    let res = await ApiGetAllUserPaginate("", currentPages);
    if (res?.EC === 0) {
      setListUser(res.data);
    }
    if (res?.totalPages) {
      setTotalpages(res.totalPages);
    }
    if (res?.EC !== 0) {
      toast.error(res?.MES);
    }
  };
  const handleEditUser = (data) => {
    setIsShow(!isShow);
    setDataUserEdit(data);
  };
  return (
    <>
      <CreateUser
        OptionGen={genderOption}
        roleIdOption={roleIdOption}
        getAllUserTable={getAllUserTable}
      />
      <TableUser
        handleEditUser={handleEditUser}
        listUSer={listUSer}
        getAllUserTable={getAllUserTable}
        totalPages={totalPages}
        setCurrentPages={setCurrentPages}
      />
      <ModelEditUser
        getAllUserTable={getAllUserTable}
        OptionGen={genderOption}
        roleIdOption={roleIdOption}
        show={isShow}
        setShow={setIsShow}
        dataUserEdit={dataUserEdit}
      />
    </>
  );
};
export default ManageUser;
