import { useState, useEffect } from "react";

const useSetStyle = (properties, values) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    if (properties && values) {
      const newStyle = properties.reduce((acc, property, index) => {
        acc[property] = values[index];
        return acc;
      }, {});
      setStyle(newStyle);
    }
  }, [properties, values]);

  return style;
};

export default useSetStyle;
