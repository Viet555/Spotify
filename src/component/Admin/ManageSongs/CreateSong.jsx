import { useEffect, useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";
import { isPublicOption, genreOption } from "../../../constant";
const CreateSong = (props) => {
  const getToday = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };
  const [formData, setFormData] = useState({
    audio: "",
    image: "",
    nameSong: "",
    genre: "",
    releaseDate: getToday(),
    isPublic: "",
    lyrics: "",
    imagePrev: "",
    audioPrev: "",
  });
  const [errors, setErrors] = useState({
    audio: "",
    image: "",
    nameSong: "",
    genre: "",
    releaseDate: "",
    isPublic: "",
    lyrics: "",
    imagePrev: "",
    audioPrev: "",
  });

  const isValidInput = () => {
    const newErrors = {};
    for (const key in formData) {
      if (!formData[key]) {
        newErrors[key] = `${key} has not been entered`;
      }
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return false;
    }
    setErrors({});
    return true;
  };
  const handleOnchange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (e.target.value)
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
  };

  const handleSubmit = async (e) => {};

  const handleChooseFile = (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () =>
        setFormData({
          ...formData,
          [e.target.name]: reader.result,
          imagePrev: URL.createObjectURL(e.target.files[0]),
        });
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const handleChooseFileAudio = (e) => {
    if (e?.target?.files[0]) {
      const reader = new FileReader();
      reader.onload = () =>
        setFormData({
          ...formData,
          [e.target.name]: reader.result,
          audioPrev: e?.target?.files[0]?.name,
        });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <>
      <div className="manage-container ">
        <div className="manage-main container">
          <div className="header-manage">Create A Songs</div>
          <div className="content-main">
            <div className="form-group col-3 ">
              <label>
                Name songs<span style={{ color: "red" }}> (*)</span>
              </label>
              <input
                className="form-control "
                value={formData["nameSong"]}
                name="nameSong"
                onChange={handleOnchange}
              />
              {errors.nameSong && (
                <p style={{ color: "red" }}>name Song has not been entered</p>
              )}
            </div>
            <div className="form-group col-2 ">
              <label>
                genre<span style={{ color: "red" }}> (*)</span>
              </label>
              <Select
                defaultInputValue={genreOption[0].label}
                options={genreOption}
                name="genre"
                styles={{
                  option: (base, state) => ({
                    ...base,
                    color: state.isSelected ? "white" : "black",
                  }),
                }}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    genre: e.value,
                  })
                }
              />
              {errors.genre && (
                <p style={{ color: "red" }}>genre has not been entered</p>
              )}
            </div>
            <div className="form-group col-2 ">
              <label>
                Release Date<span style={{ color: "red" }}> (*)</span>
              </label>
              <input
                type="date"
                className="form-control"
                value={formData["releaseDate"]}
                name="releaseDate"
                onChange={handleOnchange}
              />
              {errors.releaseDate && (
                <p style={{ color: "red" }}>releaseDate has not been entered</p>
              )}
            </div>
            <div className="form-group col-2 ">
              <label>
                Is Public<span style={{ color: "red" }}> (*)</span>
              </label>
              <Select
                defaultInputValue={isPublicOption[0].label}
                options={isPublicOption}
                name="isPublic"
                styles={{
                  option: (base, state) => ({
                    ...base,
                    color: state.isSelected ? "white" : "black",
                  }),
                }}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    isPublic: e.value,
                  })
                }
              />

              {errors.isPublic && (
                <p style={{ color: "red" }}>isPublic has not been entered</p>
              )}
            </div>
            <div className="form-group col-5 ">
              <label>
                lyric<span style={{ color: "red" }}> (*)</span>
              </label>
              <textarea
                className="form-control mt-2"
                value={formData["lyrics"]}
                name="lyrics"
                onChange={handleOnchange}
              />
              {errors.lyrics && (
                <p style={{ color: "red" }}>Lyric has not been entered</p>
              )}
            </div>
            <div
              className="form-group col-2"
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <label
                htmlFor="audio-file"
                style={{
                  border: "1px solid",
                  margin: "30px 30px",
                  cursor: "pointer",
                  width: "120px",
                  borderRadius: "12px",
                  textAlign: "center",
                  padding: "6px",
                }}
              >
                Audio
              </label>
              <input
                id="audio-file"
                hidden
                type="file"
                className="form-control mt-2"
                name="audio"
                onChange={handleChooseFileAudio}
              />
              {errors.audio && (
                <p style={{ color: "red" }}>audio has not been entered</p>
              )}
              {formData.audioPrev && (
                <div style={{ fontSize: "12px" }}>
                  {formData.audioPrev || ""}
                </div>
              )}
            </div>

            <div className="form-group col-3 mx-5">
              <label
                htmlFor="btn-avt"
                style={{
                  border: "1px solid",
                  margin: "30px 30px",
                  cursor: "pointer",
                  width: "120px",
                  borderRadius: "12px",
                  textAlign: "center",
                  padding: "6px",
                }}
              >
                Image Song
              </label>
              <input
                name="image"
                id="btn-avt"
                hidden
                className="form-control mt-2"
                type="file"
                onChange={(e) => handleChooseFile(e)}
              />
              <div className="avt-prev mx-3">
                {formData["imagePrev"] ? (
                  <div className="d-flex ">
                    <img
                      style={{
                        height: "170px",
                        width: "150px",
                        borderRadius: "5px",
                      }}
                      src={formData["imagePrev"]}
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
                        setFormData({
                          ...formData,
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
          </div>

          <div className="text-center my-4">
            <button
              className="btn btn-success p-3"
              onClick={(e) => handleSubmit(e)}
            >
              Comfirm Create
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CreateSong;
