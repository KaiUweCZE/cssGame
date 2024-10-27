import { useState } from "react";

const useNavigateToPage = (levels) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isShowed, setIsShowed] = useState({ index: 0, active: false });
  const levelsPerPage = 5;
  const indexOfLastLevel = currentPage * levelsPerPage;
  const indexOfFirstLevel = indexOfLastLevel - levelsPerPage;
  const currentLevels = levels.slice(indexOfFirstLevel, indexOfLastLevel);

  const totalPages = Math.ceil(levels.length / levelsPerPage);

  const goToNextPage = () => {
    setIsShowed({ index: 0, active: false });
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const goToPrevPage = () => {
    setIsShowed({ index: 0, active: false });
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return {
    goToNextPage,
    goToPrevPage,
    currentPage,
    totalPages,
    setCurrentPage,
    isShowed,
    setIsShowed,
    levelsPerPage,
    currentLevels,
  };
};

export default useNavigateToPage;
