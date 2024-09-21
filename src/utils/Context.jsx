import React, { createContext, useState } from "react";

export const ContextProvider = createContext(null);

const Context = ({ children }) => {
  const [active, setActive] = useState(1);
  const [pages, setPages] = useState(false);

  const handleActive = (value) => {
    setActive(value);
  };
  const handlePages = () => {
    setPages((prev) => !prev);
  };
  return (
    <ContextProvider.Provider
      value={{ active, handleActive, pages, handlePages }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export default Context;
