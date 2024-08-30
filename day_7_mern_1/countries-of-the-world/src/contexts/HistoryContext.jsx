// src/contexts/HistoryContext.jsx
import { createContext, useState } from "react";

export const HistoryContext = createContext();

export const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  const addSearch = (search) => {
    if (!history.includes(search)) {
      setHistory([search, ...history.slice(0, 4)]);
    }
  };

  return (
    <HistoryContext.Provider value={{ history, addSearch }}>
      {children}
    </HistoryContext.Provider>
  );
};
