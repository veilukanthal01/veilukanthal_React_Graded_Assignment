import Home from "./Home";
import Menu from "./Menu";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import UpcomingMovies from "./MoviesList/MovieList";
import About from "./Abount/Abount";
import Favourites from "./Favourites/Favourites";
import MoviesInTheaters from "./MoviesList/MoviesInTheaters";
import TopRatedMovies from "./MoviesList/TopRatedMovies";
import TopRatedIndianMovies from "./MoviesList/TopRatedIndianMovies";

const App = () => {
  return (
    <div>
      <Menu />
      <Container className="my-5" style={{ marginLeft: "50px" }}>
        <main>
          <Switch>
            <Route exact path="/">
              <MoviesInTheaters />
            </Route>
            <Route path="/movies">
              <UpcomingMovies />
            </Route>
            <Route path="/topRatedMovies">
              <TopRatedMovies />
            </Route>
            <Route path="/topRatedMovies">
              <TopRatedMovies />
            </Route>
            <Route path="/topRatedIndianMovies">
              <TopRatedIndianMovies />
            </Route>
            <Route path="/favourites">
              <Favourites />
            </Route>
          </Switch>
        </main>
      </Container>
    </div>
  );
};

export default App;
