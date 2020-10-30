import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Description.css";

function Description({ Movielist, match }) {
  const film = Movielist.find((el) => match.params.id === el.id);
  console.log(film.title);
  return (
    <div className="Trailer-container">
      <h1>Movie trailer and description</h1>
      <h2>{film.title}</h2>
      <iframe
        title={film.id}
        width="560"
        height="315"
        src={film.trailer}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <p>{film.desc}</p>
      <Link to="/Movielist">
        <Button variant="primary">Go Home</Button>
      </Link>
    </div>
  );
}

export default Description;
