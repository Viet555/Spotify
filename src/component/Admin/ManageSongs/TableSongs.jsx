import { Button, Modal, Table } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { IconContext } from "react-icons";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { formatDuration } from "../../../constant";
import { ApiDeleteSong } from "../../../Service/ApiService";
import { toast } from "react-toastify";
const TableSongs = (props) => {
  const baseUrlAudio = `http://localhost:8089`;
  const {
    listSongs,
    currentPages,
    totalPages,
    setCurrentPages,
    getAllSongsTable,
    toggleAudio,
    playingSongId,
    handleEditSong,
  } = props;
  const [isShowConfirm, setIsshowConfirm] = useState(false);
  const [idSong, setIdsong] = useState("");
  const handlePageClick = (e) => {
    let selected = +e.selected + 1;
    if (selected !== currentPages) {
      setCurrentPages(selected);
    }
  };
  const handleDeleteUser = (e) => {
    setIsshowConfirm(!isShowConfirm);
    setIdsong(e._id);
  };
  const handleConfirmDele = async () => {
    let res = await ApiDeleteSong(idSong);
    if (res?.EC === 0) {
      toast.success(res.MES);
      setIsshowConfirm(!isShowConfirm);
      getAllSongsTable();
    } else {
      toast.error(res?.MES);
    }
  };
  return (
    <>
      <div className="container">
        <span
          className="header-table"
          style={{
            color: "rgb(53, 204, 65)",
            fontSize: "32px",
            fontWeight: "600",
          }}
        >
          Table Manage Songs
        </span>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr className="text-center">
              <th>Name Song</th>
              <th>Artist</th>
              <th>release Date</th>
              <th>Public</th>
              <th>Image</th>
              <th>Duration</th>
              <th>genre</th>
              <th>Audio</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {listSongs?.length > 0 ? (
              listSongs.map((item) => {
                return (
                  <tr key={`table-${item._id}`}>
                    <td>{item?.nameSong}</td>
                    <td>{item?.artist.map((a) => a.nameArtist).join(", ")}</td>
                    <td>{item?.releaseDate?.split("T")[0]}</td>
                    <td>{item?.isPublic ? "Yes" : " No"}</td>
                    <td>
                      <img
                        src={item.image ? item.image : ""}
                        style={{
                          height: "50px",
                          width: "50px",
                          borderRadius: "50%",
                        }}
                      />
                    </td>
                    <td>{formatDuration(item.duration)}s</td>
                    <td>{item?.genre}</td>
                    <td>
                      <audio controls hidden id={`audio-${item._id}`}>
                        <source
                          src={`${baseUrlAudio}${item.audio}`}
                          type="audio/mpeg"
                        />
                        Trình duyệt không hỗ trợ audio.
                      </audio>

                      <button
                        onClick={() => toggleAudio(item._id)}
                        style={{
                          backgroundColor:
                            playingSongId === item._id ? "#FF6347" : "#4CAF50",
                          color: "white",
                          border: "none",
                          padding: "10px 20px",
                          fontSize: "16px",
                          cursor: "pointer",
                          borderRadius: "5px",
                        }}
                      >
                        {playingSongId === item._id
                          ? "Stop Audio"
                          : "Play Audio"}
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-warning mx-3"
                        onClick={() => handleEditSong(item)}
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
                Are you sure you want to delete this Song?
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
export default TableSongs;
