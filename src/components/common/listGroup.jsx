import React from "react";
import PropTypes from "prop-types";

const ListGroup = ({ onItemSelect, selectedGenreId, genres }) => {
  return (
    <React.Fragment>
      <ul className="list-group">
        {genres.map(genre => (
          <li
            key={genre._id}
            className={
              selectedGenreId !== genre._id
                ? "list-group-item clickable"
                : "list-group-item active clickable"
            }
            onClick={() => onItemSelect(genre)}
          >
            {genre.name}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

ListGroup.propTypes = {
  onItemSelect: PropTypes.func.isRequired,
  genres: PropTypes.array.isRequired,
  selectedGenreId: PropTypes.string.isRequired
};

export default ListGroup;
