import { useEffect, useState } from "react";
import Select from "react-select";
import { ApiCreateUser } from "../../../Service/ApiService";
import { toast } from "react-toastify";

const CreateUser = (props) => {
  const { OptionGen, roleIdOption, getAllUserTable } = props;
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    roleId: "",
    avatar: "",
    avatarPrev: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    address: "",
    image: "",
    roleId: "",
  });
  useEffect(() => {
    if (OptionGen && roleIdOption) {
      setFormData({
        ...formData,
        roleId: roleIdOption[0].label,
        gender: OptionGen[0].label,
      });
    }
  }, []);
  const isValidInput = () => {
    const newErrors = {};
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "password",
      "avatar",
      "gender",
      "roleId",
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = isValidInput();
    if (!isValid) {
      toast.error("Missing Input");
      return;
    } else {
      let res = await ApiCreateUser(formData);
      if (res && res?.EC === 0) {
        toast.success(res?.MES);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          gender: "",
          roleId: "",
          avatar: "",
          avatarPrev: "",
          phoneNumber: "",
        });
        getAllUserTable();
      } else {
        toast.error(res?.MES);
      }
    }
  };

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
                First Name<span style={{ color: "red" }}> (*)</span>
              </label>
              <input
                className="form-control mt-2"
                value={formData["firstName"]}
                name="firstName"
                onChange={handleOnchange}
              />
              {errors.firstName && (
                <p style={{ color: "red" }}>firstName has not been entered</p>
              )}
            </div>
            <div className="form-group col-3 ">
              <label>
                Last Name<span style={{ color: "red" }}> (*)</span>
              </label>
              <input
                className="form-control mt-2"
                value={formData["lastName"]}
                name="lastName"
                onChange={handleOnchange}
              />
              {errors.lastName && (
                <p style={{ color: "red" }}>lastName has not been entered</p>
              )}
            </div>
            <div className="form-group col-2 ">
              <label>
                Email<span style={{ color: "red" }}> (*)</span>
              </label>
              <input
                type="email"
                className="form-control mt-2"
                value={formData["email"]}
                name="email"
                onChange={handleOnchange}
              />
              {errors.email && (
                <p style={{ color: "red" }}>email has not been entered</p>
              )}
            </div>
            <div className="form-group col-2 ">
              <label>
                Password<span style={{ color: "red" }}> (*)</span>
              </label>
              <input
                type="password"
                className="form-control mt-2"
                value={formData["password"]}
                name="password"
                onChange={handleOnchange}
              />
              {errors.password && (
                <p style={{ color: "red" }}>password has not been entered</p>
              )}
            </div>
            <div className="form-group col-2 ">
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
                  setFormData({
                    ...formData,
                    gender: e.value,
                  })
                }
              />
            </div>
            <div className="form-group col-2 ">
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
                  setFormData({
                    ...formData,
                    roleId: e.value,
                  })
                }
              />
            </div>
            <div className="form-group col-2 ">
              <label>Phone Number</label>
              <input
                className="form-control mt-2"
                value={formData["phoneNumber"]}
                name="phoneNumber"
                onChange={handleOnchange}
              />
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
