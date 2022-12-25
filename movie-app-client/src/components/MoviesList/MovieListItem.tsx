import { Card } from "react-bootstrap";
import IMovie from "../../models/IMovie";
import "./Movie.css";

import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

toast.configure();
const baseurl = process.env.REACT_APP_BASE_URL;

interface props {
  movie: IMovie;
}

const MovieListItem = ({ movie }: props) => {
  const addTofavourites = async (movie: IMovie) => {
    try {
      let moviesList = [];
      moviesList = JSON.parse(localStorage.getItem("movies") as string);
      if (moviesList != null && moviesList.length > 0) {
        const index = moviesList.findIndex(
          (item: { title: string }) => item.title === movie.title
        );
        if (index > -1) {
          toast.error("Alreday added to favourite", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000,
            hideProgressBar: true
          });
          return;
        } else {
          moviesList.push(movie);
          localStorage.setItem("movies", JSON.stringify(moviesList));
        }
      } else if (moviesList == null || moviesList.length == 0) {
        moviesList = [];
        moviesList.push(movie);
        localStorage.setItem("movies", JSON.stringify(moviesList));
      }

      toast.success("Successfully added to favourites", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
        hideProgressBar: true
      });
    } catch (error) {
      toast.error("Alreday Added", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
        hideProgressBar: true
      });
    }
  };

  return (
    <>
      {movie.poster.length !== 0 && (
        <Card style={{ height: "300px", width: "300px" }}>
          <Card.Img
            variant="top"
            width="200px"
            height="200px"
            src={baseurl + "/img/" + movie.poster}
          />

          <Card.Body>
            <div className="d-flex align-items-start" style={{ gap: "20px" }}>
              <div>
                <span data-tip={movie.title}>{movie.title}</span>

                <div
                  className="container"
                  style={{ width: "15%", display: "inline", fontSize: "13px" }}
                  onClick={(event) => addTofavourites(movie)}
                >
                  Add to Favourite
                  <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default MovieListItem;
