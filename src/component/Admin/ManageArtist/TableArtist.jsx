import { Button, Modal, Table } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { IconContext } from "react-icons";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import noneAvt from "../../../assets/noneavt.jfif";
import { useState } from "react";
import { ApiDeleteArtist, ApiDeleteUser } from "../../../Service/ApiService";
import { toast } from "react-toastify";
import Select from "react-select";
const TableArtist = (props) => {
  const [isShowConfirm, setIsshowConfirm] = useState(false);
  const [idArtist, setArtistId] = useState("");
  const {
    totalPages,
    setCurrentPages,
    handleGetListArtist,
    listArtist,
    currentPages,
    handleEditArtist,
    optionArtist,
  } = props;
  const handlePageClick = (event) => {
    let selectedPage = +event.selected + 1;
    if (selectedPage !== currentPages) {
      setCurrentPages(selectedPage);
    }
  };

  const handleDeleteUser = (item) => {
    setIsshowConfirm(!isShowConfirm);
    setArtistId(item._id);
  };
  const handleConfirmDele = async () => {
    let res = await ApiDeleteArtist(idArtist);
    if (res?.EC === 0) {
      toast.success(res.MES);
      setIsshowConfirm(false);
      handleGetListArtist();
    } else {
      toast.error(res?.MES);
    }
  };
  return (
    <>
      <div className="table-container px-3" style={{ height: "" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span
            className="header-table"
            style={{
              color: "rgb(53, 204, 65)",
              fontSize: "32px",
              fontWeight: "600",
            }}
          >
            Table Manage Artist
          </span>
          <span style={{ paddingRight: "30px", width: "17em" }}>
            <Select
              options={optionArtist}
              styles={{
                option: (base, state) => ({
                  ...base,
                  color: state.isSelected ? "white" : "black",
                }),
              }}
            />
          </span>
        </div>
        <Table striped bordered hover variant="dark" className="mt-3">
          <thead>
            <tr className="text-center ">
              <th>Name Artist</th>
              <th>Avatar</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {listArtist?.length > 0 ? (
              listArtist.map((item) => {
                return (
                  <tr key={`table-${item._id}`}>
                    <td>{item.nameArtist}</td>
                    <td>
                      <img
                        src={item.avatar ? item.avatar : noneAvt}
                        style={{
                          height: "50px",
                          width: "50px",
                          borderRadius: "50%",
                        }}
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-warning mx-3"
                        onClick={() => handleEditArtist(item)}
                      >
                        <i className="fa-solid fa-pen"></i>
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDeleteUser(item)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="7">No users found</td>
              </tr>
            )}
          </tbody>
        </Table>
        <div
          className="paginate-main d-flex gap-3 "
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: "23px",
          }}
        >
          <ReactPaginate
            containerClassName={"pagination gap-4"}
            pageClassName={"page-item"}
            activeClassName={""}
            onPageChange={handlePageClick}
            nextLabel={
              <IconContext.Provider value={{ color: "#B8C1CC", size: "36px" }}>
                <AiFillRightCircle />
              </IconContext.Provider>
            }
            pageCount={totalPages}
            breakLabel="..."
            previousLabel={
              <IconContext.Provider value={{ color: "#B8C1CC", size: "36px" }}>
                <AiFillLeftCircle />
              </IconContext.Provider>
            }
            forcePage={currentPages > 0 ? currentPages - 1 : 0}
          />
          <Modal
            show={isShowConfirm}
            onHide={() => setIsshowConfirm(!isShowConfirm)}
            animation={false}
            backdrop="static"
          >
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <span className="text-danger">
                Are you sure you want to delete this Artist?
              </span>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setIsshowConfirm(false)}
              >
                No
              </Button>
              <Button variant="danger" onClick={() => handleConfirmDele()}>
                Yes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
};
export default TableArtist;
