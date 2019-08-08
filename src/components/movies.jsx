import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    selectedGenreId: "",
    sortColumn: { path: "title", order: "asc" }
  };

  componentDidMount() {
    this.setState({
      movies: getMovies(),
      genres: [{ name: "All genres", _id: "" }, ...getGenres()]
    });
  }

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = movieId => {
    const movies = [...this.state.movies];
    movies.map(movie => {
      if (movie._id === movieId) {
        movie.liked = !movie.liked;
      }
      return movie;
    });
    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleFilteringByGenre = genre => {
    this.setState({ selectedGenreId: genre._id, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  render() {
    const {
      genres,
      pageSize,
      currentPage,
      selectedGenreId,
      movies: allMovies,
      sortColumn
    } = this.state;

    const moviesFilteredByGenres =
      selectedGenreId !== ""
        ? allMovies.filter(movies => movies.genre._id === selectedGenreId)
        : allMovies;

    const count = moviesFilteredByGenres.length;
    const SingularOrPlural = count === 1 ? "movie" : "movies";

    const sortedMovies = _.orderBy(
      moviesFilteredByGenres,
      [sortColumn.path],
      [sortColumn.order]
    );
    const movies = paginate(sortedMovies, pageSize, currentPage);

    return (
      <div className="row">
        <div className="col-2">
          <br />
          <br />
          <br />
          <br />
          <ListGroup
            className="main-list-group"
            onItemSelect={this.handleFilteringByGenre}
            selectedGenreId={selectedGenreId}
            genres={genres}
          />
        </div>
        <div className="col">
          <p>
            Showing {count} {SingularOrPlural} in database
          </p>
          <MoviesTable
            movies={movies}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
            onSort={this.handleSort}
            sortColumn={sortColumn}
          />
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
