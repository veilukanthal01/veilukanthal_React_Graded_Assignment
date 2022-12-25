import React from "react";
import { Card } from "react-bootstrap";
import IMovie from "../../models/IMovie";
import { removeMoviesFromFavourites } from "../../services/Movie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const baseurl = process.env.REACT_APP_BASE_URL;

interface props {
  movie: IMovie;
}
let count = 0;
toast.configure();
const RemoveFromFavouritesList = ({ movie }: props) => {
  const removeFromFavourites = (movieTitle: string) => {
    try {
      //const updated = await removeMoviesFromFavourites(movieTitle);
      var title = movieTitle;
      let moviesList = [];
      moviesList = JSON.parse(localStorage.getItem("movies") as string);
      const index = moviesList.findIndex(
        (item: { title: string }) => item.title === movieTitle
      );
      if (index > -1) {
        moviesList.splice(index, 1);
      }
      localStorage.setItem("movies", JSON.stringify(moviesList));
      toast.success("Successfully removed from favourites", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: false,
      });
     
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
   
  };

  return (
    <>
      {movie.poster.length !== 0 && (
        <Card>
          <Card.Img
            width="300px"
            height="200px"
            variant="top"
            src={baseurl + "/img/" + movie.poster}
          />

          <Card.Body>
            <div className="d-flex align-items-start" style={{ gap: "30px" }}>
              <div>
                <span data-tip={movie.title}>{movie.title}</span>
                <div
                  className="container"
                  style={{ width: "15%", display: "inline", fontSize: "13px" }}
                  onClick={(event) => removeFromFavourites(movie.title)}
                >
                  Remove Favourite
                  <FontAwesomeIcon
                    icon={faXmark}
                    style={{
                      display: "inline",
                      color: "red",
                      border: "1px solid red",
                      fontWeight: "bold",
                    }}
                  />
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default RemoveFromFavouritesList;
