import React, { useState } from "react";

import TableHeader from "./TableHeader";
import "./table-styles.css";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";
import SkeletonTableLoader from "../SkeletonTableLoader";
import useWindowSize from "@/hooks/useWindowSize";

const CreatedLevels = ({ levels, onDelete, loading = false }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const numberOfPages = Math.ceil(levels?.length / itemsPerPage || 0);
  const { width } = useWindowSize();

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const levelPage = levels?.slice(startIndex, endIndex) || [];

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const columns = [
    "Level",
    "Likes",
    width < 1000 ? "F/P" : "Finished/Played",
    "Actions",
  ];

  if (loading) {
    return <SkeletonTableLoader columns={4} />;
  }

  return (
    <div className="table-container">
      <TableHeader
        minorClass={"table-header-created-levels"}
        columns={columns}
      />
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
