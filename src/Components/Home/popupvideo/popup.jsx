import React from "react";
import Popup from "reactjs-popup";

import homevideobg1 from "../../assets/home-video-1.png";
import homevideobg2 from "../../assets/home-video-2.png";
import homevideobg3 from "../../assets/home-video-3.png";
import homevideobg4 from "../../assets/home-video-4.png";
import homevideobg5 from "../../assets/home-video-5.png";
import homevideobg6 from "../../assets/home-video-6.png";
import homevideobg7 from "../../assets/home-video-7.png";
import homevideobg8 from "../../assets/home-video-8.png";
import { VideosContainer } from "../homemainstyle";
import { Box, Modal } from "@mui/material";
import NestedModal from "../../Caravan/modal";

const PopUp = () => {
  // const [open] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50vw",
    bgcolor: "background.paper",
    display: "flex",
    justifyContent: "center",

    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  return (
    <>
      <VideosContainer>
        {/* <Popup
          trigger={
            <img
              src={homevideobg1}
              alt=""
              style={{
                width: "300px",
                height: "300px",
                cursor: "pointer",
                borderRadius: "20px",
              }}
            />
          }
          modal
          nested
        >
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box sx={{ ...style }}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/tuSP97wGxG4 "
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Box>
          </Modal>
        </Popup> */}
        <NestedModal />

        <Popup
          trigger={
            <img
              src={homevideobg2}
              alt=""
              style={{
                width: "300px",
                height: "300px",
                cursor: "pointer",
                borderRadius: "20px",
              }}
            />
          }
          modal
          nested
        >
          <div className="modal">
            <div
              className="content"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/tuSP97wGxG4    "
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </Popup>

        <Popup
          trigger={
            <img
              src={homevideobg3}
              alt=""
              style={{
                width: "300px",
                height: "300px",
                cursor: "pointer",
                borderRadius: "20px",
              }}
            />
          }
          modal
          nested
        >
          <div className="modal">
            <div
              className="content"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/tuSP97wGxG4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>{" "}
            </div>
          </div>
        </Popup>

        <Popup
          trigger={
            <img
              src={homevideobg4}
              alt=""
              style={{
                width: "300px",
                height: "300px",
                cursor: "pointer",
                borderRadius: "20px",
              }}
            />
          }
          modal
          nested
        >
          <div className="modal">
            <div
              className="content"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/tuSP97wGxG4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </Popup>

        <Popup
          trigger={
            <img
              src={homevideobg5}
              alt=""
              style={{
                width: "300px",
                height: "300px",
                cursor: "pointer",
                borderRadius: "20px",
              }}
            />
          }
          modal
          nested
        >
          <div className="modal">
            <div
              className="content"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/tuSP97wGxG4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>{" "}
            </div>
          </div>
        </Popup>

        <Popup
          trigger={
            <img
              src={homevideobg6}
              alt=""
              style={{
                width: "300px",
                height: "300px",
                cursor: "pointer",
                borderRadius: "20px",
              }}
            />
          }
          modal
          nested
        >
          <div className="modal">
            <div
              className="content"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/tuSP97wGxG4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </Popup>

        <Popup
          trigger={
            <img
              src={homevideobg7}
              alt=""
              style={{
                width: "300px",
                height: "300px",
                cursor: "pointer",
                borderRadius: "20px",
              }}
            />
          }
          modal
          nested
        >
          <div className="modal">
            <div
              className="content"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <iframe
                style={{ borderRadius: "20px" }}
                width="560"
                height="315"
                src="https://www.youtube.com/embed/tuSP97wGxG4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </Popup>

        <Popup
          trigger={
            <img
              src={homevideobg8}
              alt=""
              style={{
                width: "300px",
                height: "300px",
                cursor: "pointer",
                borderRadius: "20px",
              }}
            />
          }
          modal
          nested
        >
          <div className="modal">
            <div
              className="content"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/tuSP97wGxG4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </Popup>
      </VideosContainer>
    </>
  );
};

export default PopUp;
