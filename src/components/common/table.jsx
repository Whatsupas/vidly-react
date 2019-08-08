import React from "react";
import TableHeader from "../common/tableHeader";
import TableBody from "../common/tableBody";

const Table = ({ onSort, sortColumn, columns, data }) => {
  return (
    <table className="table" style={{ tableLayout: "fixed" }}>
      <TableHeader onSort={onSort} sortColumn={sortColumn} columns={columns} />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
