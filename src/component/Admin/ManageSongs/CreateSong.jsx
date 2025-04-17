import { useEffect, useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";
import { isPublicOption, genreOption } from "../../../constant";
import { ApiCreateASong } from "../../../Service/ApiService";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../../Store/Export";
const CreateSong = (props) => {
  const { optionArtist, getAllSongsTable } = props;

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
    duration: "",
    artist: "",
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
    duration: "",
    artist: "",
  });
  useEffect(() => {
    if (isPublicOption && genreOption) {
      setFormData({
        ...formData,
        genre: genreOption[0]?.value,
        isPublic: isPublicOption[0]?.value,
      });
    }
  }, [isPublicOption, genreOption]);
  const isValidInput = () => {
    const newErrors = {};
    const requiredFields = [
      "audio",
      "image",
      "nameSong",
      "isPublic",
      "lyrics",
      "genre",
      "imagePrev",
      "audioPrev",
    ];
    requiredFields.forEach((field) => {
      if (!formData[field] || formData[field].trim() === "") {
        newErrors[field] = `${field} has not been entered`;
      }
    });
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
    const file = e?.target?.files?.[0];

    if (file) {
      const audio = document.createElement("audio");
      audio.preload = "metadata";

      audio.onloadedmetadata = () => {
        window.URL.revokeObjectURL(audio.src);
        const duration = audio.duration;

        const reader = new FileReader();
        reader.onload = () => {
          setFormData((prev) => ({
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
  const handleSubmit = async (e) => {
    let isValid = isValidInput();
    if (!isValid) {
      toast.error("Missing input please fill in the info ");
      return;
    } else {
      let res = await ApiCreateASong(formData);
      if (res?.EC === 0) {
        toast.success(res.MES);

        setFormData({
          audio: "",
          image: "",
          nameSong: "",
          genre: "",
          releaseDate: getToday(),
          isPublic: "",
          lyrics: "",
          imagePrev: "",
          audioPrev: "",
          duration: "",
          artist: "",
        });
        getAllSongsTable();
      }
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
                defaultInputValue={genreOption[0].value}
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
                defaultInputValue={isPublicOption[0].value}
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
            <div className="form-group col-10 ">
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
                htmlFor="audio-file"
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

            <div
              className="form-group col-3 "
              style={{ paddingBottom: "10px", margin: "30px 30px" }}
            >
              <label
                htmlFor="btn-avt"
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
                id="btn-avt"
                hidden
                className="form-control mt-2"
                type="file"
                onChange={(e) => handleChooseFile(e)}
              />
              <div className="avt-prev my-2">
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

            <div className="form-group col-3" style={{ margin: "30px 30px" }}>
              <Select
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
                  setFormData({
                    ...formData,
                    artist: dataOptionArtist,
                  });
                }}
              />
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
