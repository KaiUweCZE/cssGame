import React, { useEffect, useRef, useState } from "react";
import { list } from "../data/listOfProperities";

const SuggestList = (props) => {
  const [suggestions, setSuggestions] = useState([]);
  const [visible, setVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const focusedInput = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const findSimilar = () => {
      if (props.value !== "") {
        const filteredArray = list.filter(
          (prop) => prop.startsWith(props.value) && prop !== props.value
        );
        setSuggestions(filteredArray);
        setSelectedIndex(0);

        if (filteredArray.length < 1) {
          setVisible(false);
        } else {
          setVisible(true);
        }
      }
      if (props.value === "") {
        setVisible(false);
      }
    };
    findSimilar();
  }, [props.value]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!visible) return;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prevIndex) =>
            prevIndex < suggestions.length - 1 ? prevIndex + 1 : prevIndex
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
          break;
        case "Enter":
          if (suggestions.length > 0) {
            e.preventDefault();
            confirmText(suggestions[selectedIndex]);
          }
          break;
        case "Escape":
          setVisible(false);
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [visible, suggestions, selectedIndex]);

  useEffect(() => {
    if (visible && listRef.current) {
      const selectedElement = listRef.current.querySelector(
        `li:nth-child(${selectedIndex + 1})`
      );
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: "nearest" });
      }
    }
  }, [selectedIndex, visible]);

  const confirmText = (property) => {
    props.checkForQuotes(property);
    setVisible(false);
    props.measureText(property, `property-${props.valueIndex}`);
    props.func(props.valueIndex, property);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      focusedInput.current?.blur();
    }
  };

  return visible ? (
    <ul
      ref={(el) => {
        focusedInput.current = el;
        listRef.current = el;
      }}
      className="suggest-list"
      onKeyDown={handleKeyDown}
    >
      {suggestions.map((property, index) => {
        return (
          <li
            key={index}
            onMouseDown={() => confirmText(property)}
            className={index === selectedIndex ? "selected" : ""}
            onMouseEnter={() => setSelectedIndex(index)}
          >
            {property}
          </li>
        );
      })}
    </ul>
  ) : (
    ""
  );
};

export default SuggestList;
