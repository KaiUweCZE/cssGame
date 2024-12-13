import React from "react";

const TableHeader = () => {
  const columns = ["Levels", "Likes", "Finished/Played", "Actions"];
  return (
    <header className="table-header">
      {columns.map((column) => (
        <span key={column}>{column}</span>
      ))}
    </header>
  );
};

export default TableHeader;
