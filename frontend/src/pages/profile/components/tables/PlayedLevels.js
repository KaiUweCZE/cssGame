import React, { useState } from "react";
import useGetPlayedLevels from "@/pages/profile/hooks/useGetPlayedLevels";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";
import "./table-styles.css";
import SkeletonTableLoader from "../SkeletonTableLoader";

const PlayedLevels = ({ userId, completedLevels }) => {
  const { levels, loading } = useGetPlayedLevels(userId);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const numberOfPages = Math.ceil(levels?.length / itemsPerPage || 0);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const levelPage = levels?.slice(startIndex, endIndex) || [];

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const columns = ["Level", "Author", "Status"];

  if (loading) {
    return <SkeletonTableLoader columns={3} />;
  }

  return (
    <div className="table-container">
      <TableHeader
        columns={columns}
        minorClass={"table-header-played-levels"}
      />
      <TableBody
        levels={levelPage}
        currentPage={currentPage}
        isPlayedLevels={true}
        completedLevels={completedLevels}
      />
      <TableFooter
        currentPage={currentPage}
        numberOfPages={numberOfPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PlayedLevels;
