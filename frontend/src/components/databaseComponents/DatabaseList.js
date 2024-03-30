import React, { useContext, useState } from "react";
import { plusIcon } from "../../data/ImagesData";

const DatabaseList = ({ items }) => {
  const [open, setOpen] = useState({ active: false, id: null });

  return (
    <ul className="DatabaseList">
      {items
        ? items.map((item, index) => {
            return (
              <li key={index}>
                <div className="DatabaseListHeadline">
                  <p>
                    {index + 1}. name: {item.name} author: {item.author}
                  </p>
                  <div className="toggles">
                    <button>play</button>
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
            );
          })
        : null}
    </ul>
  );
};

export default DatabaseList;
