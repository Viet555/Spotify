import { useEffect, useState } from "react";
import Select from "react-select";
import { ApiCreateUser } from "../../../Service/ApiService";
import { toast } from "react-toastify";

const CreateUser = (props) => {
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
          avatarPrev: URL.createObjectURL(e.target.files[0]),
        });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <>
      <div className="manage-container ">
        <div className="manage-main container">
          <div className="header-manage">Create User</div>
          <div className="content-main">
            <div className="form-group col-3 ">
              <label>
                Name Artist<span style={{ color: "red" }}> (*)</span>
              </label>
              <input
                className="form-control mt-2"
                value={formData["firstName"]}
                name="firstName"
                onChange={handleOnchange}
              />
              {errors.nameArtist && (
                <p style={{ color: "red" }}>Name Artist has not been entered</p>
              )}
            </div>
            <div className="form-group col-3 ">
              <label>
                Description<span style={{ color: "red" }}> (*)</span>
              </label>
              <input
                className="form-control mt-2"
                value={formData["descriptionArtist"]}
                name="descriptionArtist"
                onChange={handleOnchange}
              />
              {errors.descriptionArtist && (
                <p style={{ color: "red" }}>
                  description Artist has not been entered
                </p>
              )}
            </div>

            <div className="form-group col-3 ">
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
              <div className="avt-prev mx-3">
                {formData["avatarPrev"] ? (
                  <div className="d-flex ">
                    <img
                      style={{
                        height: "170px",
                        width: "150px",
                        borderRadius: "5px",
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
export default CreateUser;
