import { createContext, useContext } from "react";

//Стейт менеджер для хранения и обновления данных
export const ColumnContext = createContext({
  data: null,
  setData: () => {},
});


//Для легкого использования контекста
export const useColumnConext = () => {
  const { data, setData } = useContext(ColumnContext);

  const saveData = (value) => {
    setData(value);
  };

  return { saveData, data };
};