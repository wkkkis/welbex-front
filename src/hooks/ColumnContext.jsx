import { createContext, useContext } from "react";

export const ColumnContext = createContext({
  data: null,
  setData: () => {},
});

export const useColumnConext = () => {
  const { data, setData } = useContext(ColumnContext);

  const saveData = (value) => {
    setData(value);
  };

  return { saveData, data };
};