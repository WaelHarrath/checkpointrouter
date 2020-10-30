import React from "react";
import "./MovieCard.css";
import { Button, Card } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";
function MovieCard({ imgSrc, title, desc, posterUrl, rate, id }) {
  return (
    <div className="card-container">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imgSrc} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc}.</Card.Text>
          <Card.Text>
            <a href={posterUrl}>{posterUrl}</a>
          </Card.Text>
          <StarRatingComponent
            name={"rate" + rate}
            starCount={5}
            editing={false}
            value={rate}
          />
          <Link to={`/Desc_trailer/${id}`}>
            <Button variant="primary">More details..</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieCard;
