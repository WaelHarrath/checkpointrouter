import React from "react";
import { Form } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import "./AddMovie.css";
import "reactjs-popup/dist/index.css";
function Filter({ searchMovie, setSearchRate }) {
  return (
    <Form className="form-container">
      <input
        type="text"
        placeholder="Search a film.."
        onChange={(e) => searchMovie(e.target.value)}
      />
      <ReactStars
        count={5}
        onChange={(e) => setSearchRate(e)}
        size={24}
        activeColor="#ffd700"
      />
    </Form>
  );
}

export default Filter;
