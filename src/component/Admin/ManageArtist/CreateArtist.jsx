import { useEffect, useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";
import "../ManageUser/Manage.scss";
import { ApiCreateArtist } from "../../../Service/ApiService";
const CreateArtist = (props) => {
  const { handleGetListArtist } = props;
  const [formData, setFormData] = useState({
    nameArtist: "",
    avatar: "",
    descriptionArtist: "",
    avatarPrev: "",
  });
  const [errors, setErrors] = useState({
    nameArtist: "",
    avatar: "",
    descriptionArtist: "",
  });

  const isValidInput = () => {
    if (!formData.nameArtist) {
      setErrors({
        ...errors,
        nameArtist: "nameArtist has not been entered",
      });
      return false;
    }
    if (!formData.avatar) {
      setErrors({
        ...errors,
        avatar: "avatar has not been choose ",
      });
      return false;
    }
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = isValidInput();
    if (!isValid) {
      toast.error("Missing Input");
    } else {
      let res = await ApiCreateArtist(formData);
      if (res?.EC === 0) {
        toast.success(res.MES);
        setFormData({
          nameArtist: "",
          avatar: "",
          descriptionArtist: "",
          avatarPrev: "",
        });
        handleGetListArtist();
      } else {
        toast.error(res?.MES);
      }
    }
  };

  const handleChooseFile = (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
      const reader = new FileReader();
      reader.onload = () =>
        setFormData({
          ...formData,
          [e.target.name]: reader.result,
          avatarPrev: URL.createObjectURL(e.target.files[0]),
        });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <>
      <div className="manage-container ">
        <div className="manage-main artist container">
          <div className="header-manage">Create Artist</div>
          <div className="content-main">
            <div className="form-group col-10 ">
              <label>
                Name Artist<span style={{ color: "red" }}> (*)</span>
              </label>
              <input
                className="form-control mt-2"
                value={formData["nameArtist"]}
                name="nameArtist"
                onChange={handleOnchange}
              />
              {errors.nameArtist && (
                <p style={{ color: "red" }}>Name Artist has not been entered</p>
              )}
            </div>
            <div className="form-group col-10 ">
              <label>Description Artist</label>
              <textarea
                className="form-control mt-2"
                value={formData["descriptionArtist"]}
                name="descriptionArtist"
                onChange={handleOnchange}
              />
            </div>

            <div className="form-group col-5 ">
              <label
                htmlFor="btn-avt"
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
                id="btn-avt"
                hidden
                className="form-control mt-2"
                type="file"
                onChange={(e) => handleChooseFile(e)}
              />
              {errors.avatar && (
                <p style={{ color: "red", textAlign: "center" }}>
                  avatar Artist has not been choose
                </p>
              )}
              <div className="avt-prev mx-3">
                {formData["avatarPrev"] ? (
                  <div className="d-flex ">
                    <img
                      style={{
                        height: "170px",
                        width: "150px",
                        borderRadius: "50%",
                      }}
                      src={formData["avatarPrev"]}
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
          <div className="text-center my-3">
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
export default CreateArtist;
