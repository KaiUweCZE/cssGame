import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TableFooter = ({ currentPage, numberOfPages, onPageChange }) => {
  return (
    <div className="table-footer">
      <span>{`Actual page: ${currentPage}`}</span>
      <div className="pagination-controls">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft height={16} />
        </button>
        <span>{`${currentPage} / ${numberOfPages}`}</span>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === numberOfPages}
        >
          <ChevronRight height={16} />
        </button>
      </div>
    </div>
  );
};

export default TableFooter;
