import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Select from "react-select";
import _ from "lodash";
import {
  ApiPutaUser,
  ApiUpdateArtist,
  ApiUpdatePlaylist,
} from "../../../Service/ApiService";
import { toast } from "react-toastify";
const ModelEditPlaylist = (props) => {
  const {
    show,
    setShow,
    dataEditPlaylist,
    getTablePlaylist,
    isPublicOption,
    dataOptionSong,
  } = props;

  const [formEdit, setFormEdit] = useState({
    namePlaylist: "",
    note: "",
    image: "",
    imagePrev: "",
    user: "",
    song: "",
    isPublic: "",
    _id: "",
  });
  const handleClose = () => {
    setShow(!show);
    setFormEdit({
      ...formEdit,
      namePlaylist: "",
      note: "",
      image: "",
      imagePrev: "",
      user: "",
      song: "",
      isPublic: "",
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
          image: reader.result,
          imagePrev: URL.createObjectURL(event.target.files[0]),
        });
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  useEffect(() => {
    if (dataEditPlaylist && !_.isEmpty(dataEditPlaylist) && show) {
      setFormEdit({
        ...formEdit,
        namePlaylist: dataEditPlaylist.namePlaylist || "",
        note: dataEditPlaylist.note || "",
        image: dataEditPlaylist.image || "",
        imagePrev: dataEditPlaylist.image || "",
        user: dataEditPlaylist.user || "",
        song: dataEditPlaylist.song || "",
        isPublic: dataEditPlaylist.isPublic || "",
        _id: dataEditPlaylist._id || "",
      });
    }
  }, [dataEditPlaylist, show]);

  const handleSubmitEdit = async () => {
    let res = await ApiUpdatePlaylist(formEdit);
    if (res?.EC === 0) {
      toast.success(res.MES);
      handleClose();
      getTablePlaylist();
    } else {
      toast.error(res?.MES);
    }
  };

  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(!show)}
        backdrop="static"
        keyboard={false}
        size="xl"
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Playlist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="content-main row " style={{ display: "flex" }}>
            <div className="form-group col-11 ">
              <label className="mt-3">
                Name Playlist<span style={{ color: "red" }}></span>
              </label>
              <input
                className="form-control mt-2"
                value={formEdit["namePlaylist"]}
                name="namePlaylist"
                onChange={handleOnchange}
              />
            </div>
            <div className="form-group col-2 ">
              <label className="mt-3">
                Public<span style={{ color: "red" }}></span>
              </label>
              <Select
                placeholder={formEdit.isPublic ? "True" : "False"}
                options={isPublicOption}
                name="isPublic"
                styles={{
                  option: (base, state) => ({
                    ...base,
                    color: state.isSelected ? "white" : "black",
                  }),
                }}
                onChange={(e) =>
                  setFormEdit({
                    ...formEdit,
                    isPublic: e,
                  })
                }
              />
            </div>
            <div className="form-group col-9 ">
              <label className="mt-3">Description Artist</label>
              <textarea
                className="form-control mt-2"
                value={formEdit["descriptionArtist"]}
                name="descriptionArtist"
                onChange={handleOnchange}
              />
            </div>
            <div className="form-group col-7 ">
              <label className="mt-3">
                song Playlist<span style={{ color: "red" }}></span>
              </label>
              <Select
                isMulti={true}
                placeholder={
                  Array.isArray(formEdit.song)
                    ? formEdit.song.map((s) => s.nameSong).join(", ")
                    : "Select songs"
                }
                options={dataOptionSong}
                name="song"
                styles={{
                  option: (base, state) => ({
                    ...base,
                    color: state.isSelected ? "white" : "black",
                  }),
                }}
                onChange={(e) =>
                  setFormEdit({
                    ...formEdit,
                    song: e.value,
                  })
                }
              />
            </div>
            <div className="form-group col-3 ">
              <label
                htmlFor="btn-imagePlaylist-edit"
                style={{
                  display: "flex",
                  height: "250px",
                  border: "1px solid",
                  margin: "30px 30px",
                  cursor: "pointer",
                  width: "220px",
                  borderRadius: "10px",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "6px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {" "}
                {formEdit["imagePrev"] ? (
                  <>
                    <img
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: "10px",
                        top: 0,
                        left: 0,
                      }}
                      src={formEdit["imagePrev"]}
                    />
                    <span
                      style={{
                        position: "absolute",
                        top: "5px",
                        right: "5px",
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        color: "#fff",
                        padding: "4px 8px",
                        borderRadius: "50%",
                        cursor: "pointer",
                        zIndex: 2,
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        setFormEdit({
                          ...formEdit,
                          image: "",
                          imagePrev: "",
                        });
                      }}
                    >
                      X
                    </span>
                  </>
                ) : (
                  <i className="fa-solid fa-pen"></i>
                )}
              </label>
              <input
                name="image"
                id="btn-imagePlaylist-edit"
                hidden
                className="form-control mt-2"
                type="file"
                onChange={(e) => handleChooseFileEdit(e)}
              />
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
export default ModelEditPlaylist;
