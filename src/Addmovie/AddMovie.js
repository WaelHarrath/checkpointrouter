import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import "./AddMovie.css";
function AddMovie({ addMovie }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [rate, setRate] = useState(1);
  const handleImage = (e) => {
    e.preventDefault();
    setImgSrc(e.target.value);
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handDesc = (e) => {
    setDesc(e.target.value);
  };
  const handlePostUrl = (e) => {
    e.preventDefault();
    setPosterUrl(e.target.value);
  };
  const handleRate = (e) => {
    setRate(e);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title===""||desc===""||imgSrc===""||posterUrl===""||rate===1)
    {alert("Please fill in all the inputs to add a movie !!");
    setPosterUrl("");
    setRate(1);
    setTitle("");
    setDesc("");
    setImgSrc("");}
    else{
    addMovie({
      title,
      desc,
      imgSrc,
      posterUrl,
      rate,
    });
    setPosterUrl("");
    setRate(1);
    setTitle("");
    setDesc("");
    setImgSrc("");
   } };
  return (
    <>
      <Button className="add-button" variant="primary" onClick={handleShow}>
        Add a Film
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>ADD a Film</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} className="add-film">
            <Form.Group id="imgsrc">
              <Form.Label>Image Source</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter image source "
                value={imgSrc}
                onChange={(e) => handleImage(e)}
              />
            </Form.Group>

            <Form.Group id="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter title "
                value={title}
                onChange={(e) => handleTitle(e)}
              />
            </Form.Group>

            <Form.Group id="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter description "
                value={desc}
                onChange={(e) => handDesc(e)}
              />
            </Form.Group>
            <Form.Group id="posterUrl">
              <Form.Label>Poster URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter the poster URL "
                value={posterUrl}
                onChange={(e) => handlePostUrl(e)}
              />
            </Form.Group>
            <Form.Group id="rate">
              <Form.Label>Rating</Form.Label>
              <ReactStars
                count={5}
                onChange={handleRate}
                size={24}
                activeColor="#ffd700"
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddMovie;
