import { Button, Modal, Table } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { IconContext } from "react-icons";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import noneAvt from "../../../assets/noneavt.jfif";
import { useState } from "react";
import {
  ApiDeleteArtist,
  ApiDeletePlaylist,
  ApiDeleteUser,
} from "../../../Service/ApiService";
import { toast } from "react-toastify";
import Select from "react-select";
const TablePlaylist = (props) => {
  const [isShowConfirm, setIsshowConfirm] = useState(false);
  const [idPlaylist, setIdplaylist] = useState("");
  const {
    totalPages,
    getTablePlaylist,
    setCurrentPages,
    currentPages,
    ListPlaylist,
    handleEditPlaylist,
  } = props;
  const handlePageClick = (event) => {
    let selectedPage = +event.selected + 1;
    if (selectedPage !== currentPages) {
      setCurrentPages(selectedPage);
    }
  };
  const handleDeleteUser = (item) => {
    setIsshowConfirm(!isShowConfirm);
    setIdplaylist(item._id);
  };
  const handleConfirmDele = async () => {
    let res = await ApiDeletePlaylist(idPlaylist);
    if (res?.EC === 0) {
      toast.success(res.MES);
      setIsshowConfirm(false);
      getTablePlaylist();
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
        </div>
        <Table striped bordered hover variant="dark" className="mt-3">
          <thead>
            <tr className="text-center ">
              <th>Name Artist</th>
              <th>Public</th>
              <th>View</th>
              <th>Total Song</th>
              <th>Action</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {ListPlaylist?.length > 0 ? (
              ListPlaylist.map((item) => {
                return (
                  <tr key={`table-${item._id}`}>
                    <td>{item.namePlaylist}</td>
                    <td>{item.isPublic ? "True" : "false"}</td>
                    <td>{item.view ? item.view : "0"}</td>
                    <td>{item.totalSong} </td>
                    <td>
                      <button
                        className="btn btn-warning mx-3"
                        onClick={() => handleEditPlaylist(item)}
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
                    <td>
                      <img
                        src={item.image ? item.image : noneAvt}
                        style={{
                          height: "50px",
                          width: "50px",
                          borderRadius: "50%",
                        }}
                      />
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="7">No playlist found</td>
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
export default TablePlaylist;
