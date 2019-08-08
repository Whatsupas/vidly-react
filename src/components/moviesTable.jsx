import React, { Component } from "react";
import PropType from "prop-types";
import Like from "./common/like";
import Table from "./common/table";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: movie => (
        <Like liked={movie.liked} onLike={() => this.props.onLike(movie._id)} />
      )
    },
    {
      key: "delete",
      content: movie => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      )
    }
  ];

  render() {
    const { onSort, movies, sortColumn } = this.props;

    return (
      <Table
        onSort={onSort}
        sortColumn={sortColumn}
        columns={this.columns}
        data={movies}
      />
    );
  }
}

MoviesTable.propType = {
  movies: PropType.array.isRequired,
  onDelete: PropType.func.isRequired,
  onLike: PropType.func.isRequired
};
export default MoviesTable;
