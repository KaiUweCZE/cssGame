import { useEffect } from "react";

export const useClickOutside = ({ className, setState }) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedElement = event.target.closest(`.${className}`);

      if (!clickedElement) {
        setState({ index: 0, active: false });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [className, setState]);
};
