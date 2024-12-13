import React, { useState } from "react";

import TableHeader from "./TableHeader";
import "./table-styles.css";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";

const CreatedLevels = ({ levels, onDelete }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const numberOfPages = Math.ceil(levels.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const levelPage = levels.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="created-levels">
      <TableHeader />
      <TableBody
        levels={levelPage}
        currentPage={currentPage}
        onDelete={onDelete}
      />
      <TableFooter
        currentPage={currentPage}
        numberOfPages={numberOfPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default CreatedLevels;
