import { useEffect, useState } from "react";
import Select from "react-select";
import { ApiCreatePlaylist, ApiCreateUser } from "../../../Service/ApiService";
import { toast } from "react-toastify";

const CreatePlaylist = (props) => {
  const { isPublicOption, dataOptionSong, getTablePlaylist } = props;

  const [formPlaylist, setFormPlaylist] = useState({
    namePlaylist: "",
    note: "",
    image: "",
    imagePrev: "",
    user: "",
    song: "",
    isPublic: "",
  });
  const [errors, setErrors] = useState({
    namePlaylist: "",
    note: "",
    image: "",
    imagePrev: "",
    user: "",
    song: "",
    isPublic: "",
  });

  const isValidInput = () => {
    if (!formPlaylist.namePlaylist) {
      setErrors({
        ...errors,
        namePlaylist: "namePlaylist has not been entered",
      });
      return false;
    }
    if (!formPlaylist.image) {
      setErrors({
        ...errors,
        image: "image has not been choose ",
      });
      return false;
    }
    if (!formPlaylist.song) {
      setErrors({
        ...errors,
        song: "song has not been choose ",
      });
      return false;
    }
    return true;
  };
  const handleOnchange = (e) => {
    setFormPlaylist({
      ...formPlaylist,
      [e.target.name]: e.target.value,
    });
    if (e.target.value)
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
  };
  const handleSubmit = async (e) => {
    let isValid = isValidInput();
    if (!isValid) {
      toast.error("Missing input params");
      return;
    } else {
      let res = await ApiCreatePlaylist(formPlaylist);
      if (res?.EC === 0) {
        toast.success(res.MES);

        setFormPlaylist({
          ...formPlaylist,
          namePlaylist: "",
          note: "",
          image: "",
          imagePrev: "",
          user: "",
          song: "",
          isPublic: "",
        });
        getTablePlaylist();
      } else {
        toast.error(res?.MES);
      }
    }
  };
  const handleChooseFile = (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () =>
        setFormPlaylist({
          ...formPlaylist,
          [e.target.name]: reader.result,
          imagePrev: URL.createObjectURL(e.target.files[0]),
        });
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  return (
    <>
      <div className="manage-container ">
        <div className="manage-main container">
          <div className="header-manage">Create Playlist</div>
          <div className="content-main">
            <div className="form-group col-4 ">
              <label>
                Name Playlist<span style={{ color: "red" }}> (*)</span>
              </label>
              <input
                className="form-control mt-2"
                value={formPlaylist["namePlaylist"]}
                name="namePlaylist"
                onChange={handleOnchange}
              />
              {errors.namePlaylist && (
                <p style={{ color: "red" }}>Name Song has not been entered</p>
              )}
            </div>

            <div className="form-group col-2 ">
              <label>isPublic</label>
              <Select
                className="mt-2"
                options={isPublicOption}
                name="isPublic"
                styles={{
                  option: (base, state) => ({
                    ...base,
                    color: state.isSelected ? "white" : "black",
                  }),
                }}
                onChange={(e) =>
                  setFormPlaylist({
                    ...formPlaylist,
                    isPublic: e.value,
                  })
                }
              />
            </div>

            <div className="form-group col-4 ">
              <label>Note</label>
              <textarea
                className="form-control mt-2"
                value={formPlaylist["note"]}
                name="note"
                onChange={handleOnchange}
              />
            </div>
            <div className="form-group col-4 ">
              <label>Song</label>
              <Select
                isMulti={true}
                className="mt-2"
                options={dataOptionSong}
                name="song"
                styles={{
                  option: (base, state) => ({
                    ...base,
                    color: state.isSelected ? "white" : "black",
                  }),
                }}
                onChange={(e) => {
                  const selectedValues = e.map((item) => item.value);
                  setFormPlaylist({
                    ...formPlaylist,
                    song: selectedValues,
                    namePlaylist:
                      formPlaylist.namePlaylist || e[0]?.label || "",
                  });
                  if (e?.length > 0) {
                    setErrors({
                      ...errors,
                      song: "",
                    });
                  }
                }}
              />
              {errors.song && (
                <p style={{ color: "red" }}> Song has not been entered</p>
              )}
            </div>
            <div className="form-group col-3 ">
              <label>User</label>
              <Select
                className="mt-2"
                name="isPublic"
                styles={{
                  option: (base, state) => ({
                    ...base,
                    color: state.isSelected ? "white" : "black",
                  }),
                }}
                onChange={(e) =>
                  setFormPlaylist({
                    ...formPlaylist,
                    isPublic: e.value,
                  })
                }
              />
            </div>
            <div className="form-group col-3 ">
              <label
                htmlFor="btn-imagePlaylist"
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
                {formPlaylist["imagePrev"] ? (
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
                      src={formPlaylist["imagePrev"]}
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
                        setFormPlaylist({
                          ...formPlaylist,
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
                id="btn-imagePlaylist"
                hidden
                className="form-control mt-2"
                type="file"
                onChange={(e) => handleChooseFile(e)}
              />
            </div>
          </div>
          <div className="text-center my-2">
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
export default CreatePlaylist;
