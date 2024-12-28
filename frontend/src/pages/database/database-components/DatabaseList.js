import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatabaseButtons from "./DatabaseButtons";
import useAddPlayedLevel from "@/utils/queries/useAddPlayedLevel";
import DatabaseHeader from "./DatabaseHeader";
import { calculateDifficulty } from "../utils/calculateDifficulty";

const DatabaseList = ({ items, userId }) => {
  const [filter, setFilter] = useState("oldest");
  const [open, setOpen] = useState({ active: false, id: null });
  const navigate = useNavigate();
  const { handleAddPlayedLevel, loading } = useAddPlayedLevel();

  const handleNavigate = async (id) => {
    try {
      if (loading) return;
      await handleAddPlayedLevel(userId, id);

      navigate(`/database/${id}`);
    } catch (err) {
      console.error(err);
    }
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
      case "hardest":
        return [...items].sort((a, b) => {
          return (
            calculateDifficulty(b.finish, b.usersCount) -
            calculateDifficulty(a.finish, a.usersCount)
          );
        });
    }
  };

  return (
    <div className="container-database-list">
      <DatabaseHeader filter={filter} setFilter={setFilter} />
      <ul className="database-list">
        {items
          ? filterItems(items).map((item, index) => (
              <li key={index}>
                <div className="database-list-headline">
                  <p>
                    {index + 1}. {item.name}
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
                    <button onClick={() => handleNavigate(item.id)}>
                      play
                    </button>
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
                    <p>There is no description for this level.</p>
                  )}
                </div>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default DatabaseList;
