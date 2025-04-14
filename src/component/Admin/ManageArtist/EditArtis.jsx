import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Select from "react-select";
import _ from "lodash";
import { ApiPutaUser, ApiUpdateArtist } from "../../../Service/ApiService";
import { toast } from "react-toastify";
const ModelEditArtist = (props) => {
  const { show, setShow, handleGetListArtist, dataEditArtist } = props;

  const [formEdit, setFormEdit] = useState({
    nameArtist: "",
    avatar: "",
    descriptionArtist: "",
    avatarPrev: "",
    _id: "",
  });
  const handleClose = () => {
    setShow(!show);
    setFormEdit({
      ...formEdit,
      nameArtist: "",
      avatar: "",
      descriptionArtist: "",
      avatarPrev: "",
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
    if (dataEditArtist && !_.isEmpty(dataEditArtist) && show) {
      setFormEdit({
        ...formEdit,
        nameArtist: dataEditArtist.nameArtist || "",
        descriptionArtist: dataEditArtist.descriptionArtist || "",
        avatar: dataEditArtist.avatar || "",
        avatarPrev: dataEditArtist.avatar || "",
        _id: dataEditArtist._id || "",
      });
    }
  }, [dataEditArtist, show]);
  const handleSubmitEdit = async () => {
    let res = await ApiUpdateArtist(formEdit);
    if (res?.EC === 0) {
      toast.success(res.MES);
      handleClose();
      handleGetListArtist();
    } else {
      toast.error(res?.MES);
    }
  };
  return (
    <>
      <Modal
        show={show}
        onHide={() => setIsshowConfirm(!show)}
        backdrop="static"
        keyboard={false}
        size="md"
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Artist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            className="content-main row "
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="form-group col-11 ">
              <label>
                Name Artist<span style={{ color: "red" }}></span>
              </label>
              <input
                className="form-control mt-2"
                value={formEdit["nameArtist"]}
                name="nameArtist"
                onChange={handleOnchange}
              />
            </div>
            <div className="form-group col-11 ">
              <label>Description Artist</label>
              <textarea
                className="form-control mt-2"
                value={formEdit["descriptionArtist"]}
                name="descriptionArtist"
                onChange={handleOnchange}
              />
            </div>

            <div className="form-group col-4 mt-3">
              <label
                htmlFor="avt-edit"
                style={{
                  border: "1px solid",
                  marginBottom: "30px",
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
              <div className="avt-prev ">
                {formEdit["avatarPrev"] ? (
                  <div className="d-flex ">
                    <img
                      style={{
                        height: "170px",
                        width: "150px",
                        borderRadius: "50%",
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
export default ModelEditArtist;
