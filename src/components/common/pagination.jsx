import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ onPageChange, pageSize, itemsCount, currentPage }) => {
  const paginationStyle = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "25px"
  };

  const amountOfPages = itemsCount / pageSize;

  const pages = _.range(1, amountOfPages + 1);

  if (pages.length === 1) return null;

  return (
    <React.Fragment>
      <nav aria-label="Page navigation example" style={paginationStyle}>
        <ul className="pagination">
          {pages.map(page => (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <span
                className="page-link clickable"
                onClick={() => onPageChange(page)}
              >
                <strong>{page}</strong>
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </React.Fragment>
  );
};

Pagination.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  pageSize: PropTypes.number.isRequired,
  itemsCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired
};

export default Pagination;
