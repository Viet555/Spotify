import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Select from "react-select";
import { isPublicOption, genreOption } from "../../../constant";
import _ from "lodash";
import { ApiUpdateSong } from "../../../Service/ApiService";
import { toast } from "react-toastify";
const ModalEditSong = (props) => {
  const { show, setIsShow, getAllSongsTable, dataSongEdit, optionArtist } =
    props;

  const [formEdit, setFormEdit] = useState({
    audio: "",
    image: "",
    nameSong: "",
    genre: "",
    releaseDate: "",
    isPublic: "",
    lyrics: "",
    imagePrev: "",
    audioPrev: "",
    duration: "",
    artist: "",
    _id: "",
  });
  const handleClose = () => {
    setIsShow(!show);
    setFormEdit({
      ...formEdit,
      audio: "",
      image: "",
      nameSong: "",
      genre: "",
      releaseDate: "",
      isPublic: "",
      lyrics: "",
      imagePrev: "",
      audioPrev: "",
      duration: "",
      artist: "",
      _id: "",
    });
  };
  useEffect(() => {
    if (dataSongEdit && !_.isEmpty(dataSongEdit)) {
      setFormEdit({
        ...formEdit,
        audio: dataSongEdit.audio,
        image: dataSongEdit.image,
        nameSong: dataSongEdit.nameSong,
        genre: dataSongEdit.genre,
        releaseDate: new Date(dataSongEdit.releaseDate)
          .toISOString()
          .split("T")[0],
        isPublic: dataSongEdit.isPublic,
        lyrics: dataSongEdit.lyrics,
        imagePrev: dataSongEdit.image,
        audioPrev: dataSongEdit.audio,
        duration: dataSongEdit.duration,
        artist: dataSongEdit.artist,
        _id: dataSongEdit._id,
      });
    }
  }, [dataSongEdit, show]);
  const handleOnchange = (e) => {
    setFormEdit({
      ...formEdit,
      [e.target.name]: e.target.value,
    });
  };
  const handleChooseFile = (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () =>
        setFormEdit({
          ...formEdit,
          [e.target.name]: reader.result,
          imagePrev: URL.createObjectURL(e.target.files[0]),
        });
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const handleChooseFileAudio = (e) => {
    const file = e?.target?.files?.[0];
    if (file) {
      const audio = document.createElement("audio");
      audio.preload = "metadata";

      audio.onloadedmetadata = () => {
        window.URL.revokeObjectURL(audio.src);
        const duration = audio.duration;

        const reader = new FileReader();
        reader.onload = () => {
          setFormEdit((prev) => ({
            ...prev,
            [e.target.name]: reader.result, // base64
            audioPrev: file.name,
            duration: duration,
          }));
        };
        reader.readAsDataURL(file);
      };

      audio.src = URL.createObjectURL(file);
    }
  };
  const handleConfirmEdit = async () => {
    console.log(formEdit);
    let res = await ApiUpdateSong(formEdit);
    if (res?.EC === 0) {
      toast.success(res.MES);
      handleClose();
      getAllSongsTable();
    } else {
      toast.error(res?.MES);
    }
  };
  console.log(formEdit.isPublic);
  return (
    <>
      <Modal
        show={show}
        onHide={setIsShow}
        backdrop="static"
        keyboard={false}
        size="xl"
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Song</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            className="content-main"
            style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
          >
            <div className="form-group col-3 ">
              <label>
                Name songs<span style={{ color: "red" }}> (*)</span>
              </label>
              <input
                className="form-control "
                value={formEdit["nameSong"]}
                name="nameSong"
                onChange={handleOnchange}
              />
            </div>

            <div className="form-group col-3 ">
              <label>
                genre<span style={{ color: "red" }}> (*)</span>
              </label>
              <Select
                placeholder={
                  Array.isArray(formEdit.genre) && formEdit.genre.length > 0
                    ? formEdit.genre.join(", ")
                    : "Select"
                }
                options={genreOption}
                name="genre"
                styles={{
                  option: (base, state) => ({
                    ...base,
                    color: state.isSelected ? "white" : "black",
                  }),
                }}
                onChange={(e) =>
                  setFormEdit({
                    ...formEdit,
                    genre: e.value,
                  })
                }
              />
            </div>
            <div className="form-group col-3 ">
              <label>
                Release Date<span style={{ color: "red" }}> (*)</span>
              </label>
              <input
                type="date"
                className="form-control"
                value={formEdit["releaseDate"]}
                name="releaseDate"
                onChange={handleOnchange}
              />
            </div>
            <div className="form-group col-2 ">
              <label>
                Is Public<span style={{ color: "red" }}> (*)</span>
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
                    isPublic: e.value,
                  })
                }
              />
            </div>
            <div className="form-group col-10 ">
              <label>
                lyric<span style={{ color: "red" }}> (*)</span>
              </label>
              <textarea
                className="form-control mt-2"
                value={formEdit["lyrics"]}
                name="lyrics"
                onChange={handleOnchange}
              />
            </div>
          </div>
          <div className="container">
            <div
              className="form-group "
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <label
                htmlFor="audio-file-edit"
                style={{
                  border: "1px solid",
                  margin: "30px 30px",
                  cursor: "pointer",
                  width: "120px",
                  borderRadius: "8px",
                  textAlign: "center",
                  padding: "6px",
                }}
              >
                Audio
              </label>
              <input
                id="audio-file-edit"
                hidden
                type="file"
                className="form-control mt-2"
                name="audio"
                onChange={handleChooseFileAudio}
              />
              {formEdit.audioPrev && (
                <div style={{ fontSize: "12px" }}>
                  {formEdit.audioPrev || ""}
                </div>
              )}
            </div>

            <div
              className="form-group col-3 "
              style={{ paddingBottom: "10px", margin: "30px 30px" }}
            >
              <label
                htmlFor="btn-avt-edit"
                style={{
                  border: "1px solid",

                  cursor: "pointer",
                  width: "120px",
                  borderRadius: "8px",
                  textAlign: "center",
                  padding: "6px",
                }}
              >
                Image Song
              </label>
              <input
                name="image"
                id="btn-avt-edit"
                hidden
                className="form-control mt-2"
                type="file"
                onChange={(e) => handleChooseFile(e)}
              />
              <div className="avt-prev my-2">
                {formEdit["imagePrev"] ? (
                  <div className="d-flex ">
                    <img
                      style={{
                        height: "170px",
                        width: "150px",
                        borderRadius: "5px",
                      }}
                      src={formEdit["imagePrev"]}
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
                          image: "",
                          imagePrev: "",
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

            <div className="form-group col-3" style={{ margin: "30px 30px" }}>
              <Select
                placeholder={
                  formEdit.artist && formEdit.artist.length > 0
                    ? formEdit.artist.map((e) => e.nameArtist).join(", ")
                    : "Select artist..."
                }
                options={optionArtist}
                isMulti={true}
                styles={{
                  option: (base, state) => ({
                    ...base,
                    color: state.isSelected ? "white" : "black",
                  }),
                }}
                onChange={(e) => {
                  let dataOptionArtist = e.map((item) => item.value);
                  setFormEdit({
                    ...formEdit,
                    artist: dataOptionArtist,
                  });
                }}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleConfirmEdit()}>
            Confirm Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalEditSong;
