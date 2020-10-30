import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./MovieList/MovieList";
import Filter from "./Addmovie/Filter";
import AddMovie from "./Addmovie/AddMovie";
import Description from "./Description/Description";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [movies, setMovies] = useState([
    {
      id: uuidv4(),
      trailer: "https://www.youtube.com/embed/6WyRpWNFfUE",
      imgSrc:
        "https://filmdb.landmarkcinemas.com/FilmImages/22/1/120573/Poster-WarWithGrandpa-REV.jpg",
      title: "The War with Grandpa",
      desc:
        "Upset that he has to share the room he loves with his grandfather, Peter decides to declare war in an attempt to get it back.",
      posterUrl: "https://123movies4u.vip/the-war-with-grandpa/",
      rate: 3,
    },
    {
      id: uuidv4(),
      trailer: "https://www.youtube.com/embed/jKCj3XuPG8M",
      imgSrc:
        "https://media.services.cinergy.ch/media/box1600/72e9cf475c04c3ed336264d3f9034babf9e2b328.jpg",
      title: "Bad Boys for Life",
      desc:
        "The Bad Boys Mike Lowrey and Marcus Burnett are back together for one last ride in the highly anticipated Bad Boys for Life.",
      posterUrl: "https://123movies4u.vip/bad-boys-for-life/",
      rate: 5,
    },
    {
      id: uuidv4(),
      trailer: "https://www.youtube.com/embed/eLEwNo78f0k",
      imgSrc:
        "https://fr.web.img6.acsta.net/pictures/20/07/08/17/43/1461793.jpg",
      title: "Ava",
      desc:
        "Ava is a deadly assassin who works for a black ops organization, traveling the globe specializing in high profile hits. When a job goes dangerously wrong she is forced to fight for her own survival.",
      posterUrl: "https://123movies4u.vip/ava/",
      rate: 4,
    },
    {
      id: uuidv4(),
      trailer: "https://www.youtube.com/embed/hej47fWFLQs",
      imgSrc:
        "https://m.media-amazon.com/images/M/MV5BMDNkODA5ZGQtODczOS00OTQxLThhMTItMjk0ZmNhMDM0YjNmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
      title: "Dolittle",
      desc: "A physician discovers that he can talk to animals.",
      posterUrl: "https://123movies4u.vip/dolittle/",
      rate: 4,
    },
    {
      id: uuidv4(),
      trailer: "https://www.youtube.com/embed/1d0Zf9sXlHk",
      imgSrc:
        "https://fr.web.img6.acsta.net/f_png/c_215_290/o_logo-netflix-n.png_5_se/pictures/20/09/23/11/08/4358352.jpg",
      title: "Enola Holmes",
      desc:
        "When Enola Holmes-Sherlock's teen sister-discovers her mother missing, she sets off to find her, becoming a super-sleuth in her own right as she outwits her famous brother and unravels a dangerous conspiracy around a mysterious young Lord.",
      posterUrl: "https://123movies4u.vip/enola-holmes/",
      rate: 1,
    },
    {
      id: uuidv4(),
      trailer: "https://www.youtube.com/embed/OEw_PACCFf4",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/en/7/7e/Fantasy_Island_poster.jpg",
      title: "Fantasy Island",
      desc:
        "A horror adaptation of the popular '70s TV show about a magical island resort.",
      posterUrl: "https://123movies4u.vip/fantasy-island/",
      rate: 2,
    },
    {
      id: uuidv4(),
      trailer: "https://www.youtube.com/embed/aK-X2d0lJ_s",
      imgSrc:
        "https://i0.wp.com/cinedweller.com/wp-content/uploads/2020/07/the-old-guard-affiche.jpg?resize=400%2C650&ssl=1",
      title: "The Old Guard",
      desc:
        "A covert team of immortal mercenaries are suddenly exposed and must now fight to keep their identity a secret just as an unexpected new member is discovered.",
      posterUrl: "https://123movies4u.vip/the-old-guard//",
      rate: 5,
    },
  ]);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchRate, setSearchRate] = useState(1);
  const addMovie = (movie) => {
    setMovies((movies) => [...movies, movie]);
  };
  const searchMovie = (search) => {
    setSearchTitle(search);
  };
  return (
    <Router>
      <Route
        path="/(|Movielist)/"
        render={() => (
          <div className="App">
            <div className="filter-container">
              <AddMovie addMovie={addMovie} />
              <Filter searchMovie={searchMovie} setSearchRate={setSearchRate} />
            </div>
            <MovieList
              Movielist={movies}
              searchRate={searchRate}
              searchTitle={searchTitle}
            />
          </div>
        )}
      />
      <Route
        path={`/Desc_trailer/:id`}
        render={(props) => <Description {...props} Movielist={movies} />}
      />
    </Router>
  );
}

export default App;
