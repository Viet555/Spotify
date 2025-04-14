import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Select from "react-select";
import _ from "lodash";
import { ApiPutaUser } from "../../../Service/ApiService";
import { toast } from "react-toastify";
const ModelEditUser = (props) => {
  const {
    show,
    setShow,
    dataUserEdit,
    OptionGen,
    roleIdOption,
    getAllUserTable,
  } = props;

  const [formEdit, setFormEdit] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    roleId: "",
    avatar: "",
    avatarPrev: "",
    phoneNumber: "",
    _id: "",
  });
  const handleClose = () => {
    setShow(!show);
    setFormEdit({
      ...formEdit,
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      roleId: "",
      avatar: "",
      avatarPrev: "",
      phoneNumber: "",
      _id: "",
    });
  };
  const handleOnchange = (e) => {
    setFormEdit({
      ...formEdit,
      [e.target.name]: e.target.value,
    });
  };
  const handleChooseFileEdit = (event) => {
    if (event?.target?.files[0]) {
      const reader = new FileReader();
      reader.onload = () =>
        setFormEdit({
          ...formEdit,
          [event.target.name]: reader.result,
          avatarPrev: URL.createObjectURL(event.target.files[0]),
        });
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  useEffect(() => {
    if (dataUserEdit && !_.isEmpty(dataUserEdit) && show) {
      setFormEdit({
        ...formEdit,
        firstName: dataUserEdit.firstName || "",
        lastName: dataUserEdit.lastName || "",
        email: dataUserEdit.email || "",
        gender: dataUserEdit.gender || "",
        roleId: dataUserEdit.roleId || "",
        avatar: dataUserEdit.avatar || "",
        avatarPrev: dataUserEdit.avatar || "",
        phoneNumber: dataUserEdit.phoneNumber || "",
        _id: dataUserEdit._id,
      });
    }
  }, [dataUserEdit, show]);

  const handleSubmitEdit = async () => {
    let res = await ApiPutaUser(formEdit);
    if (res?.EC === 0) {
      toast.success(res.MES);
      handleClose();
      getAllUserTable();
    } else {
      toast.error(res?.MES);
    }
  };
  return (
    <>
      <Modal
        show={show}
        onHide={setShow}
        backdrop="static"
        keyboard={false}
        size="xl"
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="content-main row">
            <div className="form-group col-4 ">
              <label>
                First Name<span style={{ color: "red" }}> (*)</span>
              </label>
              <input
                className="form-control mt-2"
                value={formEdit["firstName"]}
                name="firstName"
                onChange={handleOnchange}
              />
            </div>
            <div className="form-group col-4 ">
              <label>Last Name</label>
              <input
                className="form-control mt-2"
                value={formEdit["lastName"]}
                name="lastName"
                onChange={handleOnchange}
              />
            </div>
            <div className="form-group col-4 ">
              <label>Email</label>
              <input
                disabled
                className="form-control mt-2"
                value={formEdit["email"]}
              />
            </div>

            <div className="form-group col-3 mt-3">
              <label>Gender</label>
              <Select
                name="gender"
                defaultInputValue={OptionGen[0].label}
                className="mt-2"
                options={OptionGen}
                styles={{
                  control: (base) => ({
                    ...base,
                    color: "black",
                    borderColor: "black",
                  }),
                  singleValue: (base) => ({
                    ...base,
                    color: "black",
                  }),
                  option: (base, state) => ({
                    ...base,
                    color: state.isSelected ? "white" : "black",
                  }),
                }}
                onChange={(e) =>
                  setFormEdit({
                    ...formEdit,
                    gender: e.label,
                  })
                }
              />
            </div>
            <div className="form-group col-3 mt-3">
              <label>RoleId</label>
              <Select
                name="roleId"
                defaultInputValue={roleIdOption[0].label}
                className="mt-2"
                options={roleIdOption}
                styles={{
                  control: (base) => ({
                    ...base,
                    color: "black",
                    borderColor: "black",
                  }),
                  singleValue: (base) => ({
                    ...base,
                    color: "black",
                  }),
                  option: (base, state) => ({
                    ...base,
                    color: state.isSelected ? "white" : "black",
                  }),
                }}
                onChange={(e) =>
                  setFormEdit({
                    ...formEdit,
                    roleId: e.label,
                  })
                }
              />
            </div>
            <div className="form-group col-2 mt-3">
              <label>Phone Number</label>
              <input
                className="form-control mt-2"
                value={formEdit["phoneNumber"]}
                name="phoneNumber"
                onChange={handleOnchange}
              />
            </div>
            <div className="form-group col-3 mt-3">
              <label
                htmlFor="avt-edit"
                style={{
                  border: "1px solid",
                  margin: "30px 30px",
                  cursor: "pointer",
                  width: "120px",
                  borderRadius: "10px",
                  textAlign: "center",
                  padding: "6px",
                }}
              >
                Avatar
              </label>
              <input
                name="avatar"
                id="avt-edit"
                hidden
                className="form-control mt-2"
                type="file"
                onChange={(e) => handleChooseFileEdit(e)}
              />
              <div className="avt-prev mx-3">
                {formEdit["avatarPrev"] ? (
                  <div className="d-flex ">
                    <img
                      style={{
                        height: "170px",
                        width: "150px",
                        borderRadius: "5px",
                      }}
                      src={formEdit["avatarPrev"]}
                    />
                    <span
                      style={{
                        marginLeft: "10px",
                        backgroundColor: " rgba(176, 173, 173, 0.67)",
                        padding: "5px",
                        cursor: "pointer",
                        height: "fit-content",
                      }}
                      onClick={() =>
                        setFormEdit({
                          ...formEdit,
                          avatar: "",
                          avatarPrev: "",
                        })
                      }
                    >
                      X
                    </span>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitEdit()}>
            Confirm Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModelEditUser;
