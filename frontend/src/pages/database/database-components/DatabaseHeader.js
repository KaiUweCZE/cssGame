import React from "react";

const DatabaseHeader = ({ filter, setFilter }) => {
  const navItems = [
    { name: "most played", filter: "mostPlayed" },
    { name: "most popular", filter: "mostPopular" },
    { name: "hardest", filter: "mostPopular" },
    { name: "oldest", filter: "oldest" },
    { name: "latest", filter: "latest" },
  ];

  return (
    <header className="database-header">
      <nav>
        <ul className="database-list-filter">
          {navItems.map((item) => (
            <li
              key={item.filter}
              className={
                filter === item.filter ? "filter-item active" : "filter-item"
              }
              onClick={() => setFilter(item.filter)}
            >
              {item.name}
            </li>
          ))}
        </ul>
        <hr className="filter-line" />
      </nav>
    </header>
  );
};

export default DatabaseHeader;
