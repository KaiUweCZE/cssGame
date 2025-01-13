import React from "react";

const SkeletonTableLoader = ({ columns = 4 }) => {
  return (
    <div className="table-container skeleton-loader">
      <div className="table-header">
        <div className="skeleton-cell" />
      </div>
      <div className="table-body">
        <ul>
          {[...Array(5)].map((_, rowIndex) => (
            <li key={rowIndex} className="table-list-item">
              {[...Array(columns)].map((_, colIndex) => (
                <div key={colIndex} className="skeleton-cell" />
              ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkeletonTableLoader;
