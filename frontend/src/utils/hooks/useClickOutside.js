const useClickOutside = ({ className, setState }) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;
      const elements = document.getElementsByClassName(className);

      let clickedInside = false;

      for (let i = 0; i < elements.length; i++) {
        if (elements[i].contains(target)) {
          clickedInside = true;
          break;
        }
      }

      if (!clickedInside) {
        setState(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [className, setState]);
};
