interface IMovie {
    [x: string]: any;
    id?: number,
    title: string,
    year: number,
    poster: string,
    contentRating: number,
    posterurl: string
}

export default IMovie;