import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";
function MovieList({ Movielist, searchRate, searchTitle }) {
  console.log(searchTitle);
  return (
    <div className="cardlist">
      {Movielist.filter(
        (el) =>
          el.title.toLowerCase().includes(searchTitle) && el.rate >= searchRate
      ).map((el, i) => (
        <MovieCard
          key={i}
          imgSrc={el.imgSrc}
          title={el.title}
          desc={el.desc}
          posterUrl={el.posterUrl}
          rate={el.rate}
          id={el.id}
        />
      ))}
    </div>
  );
}

export default MovieList;
