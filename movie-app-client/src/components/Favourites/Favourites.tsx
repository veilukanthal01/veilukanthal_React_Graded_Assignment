import { useEffect, useState } from "react";
import { Alert, Col, Row } from "react-bootstrap";
import IMovie from "../../models/IMovie";
import { getFavourites } from "../../services/Movie";
import RemoveFromFavouritesList from "../MoviesList/RemoveFavourite";

const Favourites = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchHelper = () => {
      try {
        let moviesList = JSON.parse(localStorage.getItem("movies") as string);
        setMovies(moviesList);
      } catch (error) {
        setError(error as Error);
      }
    };
    fetchHelper();
  }, []);
  return (
    <>
      <div className="results-wrap" style={{ width: "1500px" }}>
        {movies == null && <div>No data Found</div>}
        {movies != null && movies.length !== 0 && (
          <Row xs={2} md={3} lg={6}>
            {movies.map((movie) => (
              <Col key={movie.title} className="d-flex my-3">
                <RemoveFromFavouritesList movie={movie} />
              </Col>
            ))}
          </Row>
        )}
        {error && <Alert variant="danger">{error.message}</Alert>}
      </div>
    </>
  );
};

export default Favourites;
