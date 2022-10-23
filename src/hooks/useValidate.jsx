import { useState } from "react"

//Helpers
import { checkIfFirstLetterInLowerCase } from "../helpers/string.helper";

//Utils
import { nameRegEx, numberRegEx } from "../utils/regex"

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

  const setErrorFor = (errorField, valid, errorMsg) => {
    setErrorData(prev => {
      return { fields: { ...prev.fields, [errorField]: !valid }, error: errorMsg }
    });
  }

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

  const isNameValid = (name) => {
    if (name && checkIfFirstLetterInLowerCase(name)) {
      setErrorFor("name", false, "Название должно быть с большой буквы");
      return;
    }

    return isValid(name, nameRegEx, "name", "Поле название обязательна")
  }

  const isDateValid = (date) => {
    if (!date) {
      setErrorFor("date", false, "Поле дата обязательна");
      return;
    }

    setErrorFor("date", true, "");;
  }

  const isCountValid = (count) => {
    if (parseInt(count) <= 0) {
      setErrorFor("count", false, "Колличество должно быть с больше 0");
      return;
    }

    return isValid(count, numberRegEx, "count", "Поле колличество обязательна")
  }

  const isDistanceValid = (distance) => {
    if (parseInt(distance) <= 0) {
      setErrorFor("count", false, "Расстояние должно быть с больше 0");
      return;
    }

    return isValid(distance, numberRegEx, "distance", "Поле расстояние обязательна")
  }

  const setError = (error) => {
    setErrorData(prev => ({ ...prev, error: error }))
  }

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