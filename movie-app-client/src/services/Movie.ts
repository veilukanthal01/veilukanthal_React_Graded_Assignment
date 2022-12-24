import axios from "axios";
import IMovie from "../models/IMovie";

const baseurl = process.env.REACT_APP_BASE_URL;

export const getUpcomingMovies = async () => {
  const response = await axios.get(`${baseurl}/movies-coming`);
  return response.data as IMovie[];
};

export const getMoviesInTheaters = async () => {
  const response = await axios.get(`${baseurl}/movies-in-theaters`);
  return response.data as IMovie[];
};

export const getTopRatedIndianMovies = async () => {
  const response = await axios.get(`${baseurl}/top-rated-india`);
  return response.data as IMovie[];
};

export const getTopRatedMovies = async () => {
  const response = await axios.get(`${baseurl}/top-rated-movies`);
  return response.data as IMovie[];
};

export const getFavourites = async () => {
  const response = await axios.get(`${baseurl}/favourit`);
  return response.data as IMovie[];
};

export const addMoviesToFavourites = (addFav: Omit<IMovie, "id">) => {
  return axios
    .post<IMovie>(`${baseurl}/favourit`, addFav, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.data);
};

export const removeMoviesFromFavourites = (movieTitle: string) => {
  return axios
    .delete(`${baseurl}/favourit/${movieTitle}`)
    .then((response) => response.data);
};
