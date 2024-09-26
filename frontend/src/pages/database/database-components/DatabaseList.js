import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DatabaseButtons from "./DatabaseButtons";

const DatabaseList = ({ items }) => {
  const [filter, setFilter] = useState("oldest");
  const [open, setOpen] = useState({ active: false, id: null });
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/database/${id}`);
  };

  const filterItems = (items) => {
    switch (filter) {
      case "mostPlayed":
        return [...items].sort((a, b) => b.usersCount - a.usersCount);
      case "mostPopular":
        return [...items].sort((a, b) => b.likeCount - a.likeCount);
      case "oldest":
        return [...items];
      case "latest":
        return [...items].reverse();
      /*default:
        return items;*/
    }
  };

  useEffect(() => {
    console.log("items are? ", items);
  }, [items]);

  return (
    <ul className="database-list">
      <ul className="database-list-filter">
        <li className="filter-item" onClick={() => setFilter("mostPlayed")}>
          most played
        </li>
        <li className="filter-item" onClick={() => setFilter("mostPopular")}>
          most popular
        </li>
        <li className="filter-item" onClick={() => setFilter("mostPopular")}>
          hardest
        </li>
        <li className="filter-item" onClick={() => setFilter("oldest")}>
          oldest
        </li>
        <li className="filter-item" onClick={() => setFilter("latest")}>
          latest
        </li>
      </ul>
      {items
        ? filterItems(items).map((item, index) => (
            <li key={index}>
              <div className="database-list-headline">
                <p>
                  {index + 1}. name: {item.name}
                </p>
                <DatabaseButtons
                  levelId={item.id}
                  likesList={item?.likes}
                  likeCount={item?.likeCount ? item.likeCount : 0}
                  finishes={item?.finish ? item.finish : 0}
                  usersPlayed={item?.usersPlayed ? item.usersPlayed : []}
                  usersCount={item?.usersCount ? item.usersCount : 0}
                />
                <div className="toggles">
                  <button onClick={() => handleNavigate(item.id)}>play</button>
                  <div
                    className={
                      open.active && open.id === index
                        ? "toggle open"
                        : "toggle"
                    }
                    onClick={() =>
                      setOpen((prev) => ({
                        active: prev.id !== index || !prev.active,
                        id: index,
                      }))
                    }
                  >
                    {" "}
                  </div>
                </div>
              </div>

              <div
                className={
                  open.active && open.id === index
                    ? "wrapper-item open"
                    : "wrapper-item"
                }
              >
                {item.description ? (
                  <p>{item.description}</p>
                ) : (
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Totam, quo dolorem. Laudantium sunt asperiores magnam,
                    nihil, vitae rem sequi quod amet at sit voluptates a.
                  </p>
                )}
              </div>
            </li>
          ))
        : null}
    </ul>
  );
};

export default DatabaseList;
