import React from "react";

const TableHeader = ({ minorClass, columns }) => {
  return (
    <header className={`table-header ${minorClass}`}>
      {columns.map((column) => (
        <span key={column}>{column}</span>
      ))}
    </header>
  );
};

export default TableHeader;
