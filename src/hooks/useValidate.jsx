import { useState } from "react"

//Helpers
import { checkIfFirstLetterInLowerCase } from "../helpers/string.helper";

//Utils
import { nameRegEx, numberRegEx } from "../utils/regex"

//Хук для валидации
export const useValidator = () => {
  const [errorData, setErrorData] = useState({
    fields: {
      name: false,
      date: false,
      count: false,
      distance: false
    },
    error: ""
  });

  //Для записи ошибок
  const setErrorFor = (errorField, valid, errorMsg) => {
    setErrorData(prev => {
      return { fields: { ...prev.fields, [errorField]: !valid }, error: errorMsg }
    });
  }

  //Проверка на наличие regex
  const isValid = (what, regex, errorField, errorMsg) => {
    let valid = false;
    
    if (regex.test(what)) {
      errorMsg = ""
      valid = true;
    } else {
      valid = false;
    }

    setErrorFor(errorField, valid, errorMsg);

    return valid;
  }

  //Проверка название я захотел чтобы название было с большой буквой
  const isNameValid = (name) => {
    if (checkIfFirstLetterInLowerCase(name)) {
      setErrorFor("name", false, "Название должно быть с большой буквы");
      return;
    }

    return isValid(name, nameRegEx, "name", "Поле название обязательна")
  }

  //Проверка даты
  const isDateValid = (date) => {
    if (!date) {
      setErrorFor("date", false, "Поле дата обязательна");
      return;
    }

    setErrorFor("date", true, "");;
  }

  //Проверка колличества
  const isCountValid = (count) => {
    if (parseInt(count) <= 0) {
      setErrorFor("count", false, "Колличество должно быть с больше 0");
      return;
    }

    return isValid(count, numberRegEx, "count", "Поле колличество обязательна")
  }

  //Проверка дистанции
  const isDistanceValid = (distance) => {
    if (parseInt(distance) <= 0) {
      setErrorFor("count", false, "Расстояние должно быть с больше 0");
      return;
    }

    return isValid(distance, numberRegEx, "distance", "Поле расстояние обязательна")
  }

  //Для записи ошибок из вне
  const setError = (error) => {
    setErrorData(prev => ({ ...prev, error: error }))
  }

  //Проверка имеют все филды ошибки
  const hasInvalidFields = () => {
    return Object.values(errorData.fields).find(f => f);
  }

  return {
    errorData,
    setErrorData,
    setError,
    isNameValid,
    isDateValid,
    isCountValid,
    isDistanceValid,
    hasInvalidFields
  }
}