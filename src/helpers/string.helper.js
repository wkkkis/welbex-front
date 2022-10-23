//Форматирует дату в читабельную форму dd.mm.yyyy
export const dateFormatter = (date, forUpdate = false) => {
    if (date.getFullYear() === 1) return "-";
    let dd = date.getDate().toString();
    let mm = (date.getMonth() + 1).toString();
    let yyyy = date.getFullYear();

    if (parseInt(dd) < 10) {
        dd = "0" + dd;
    }

    if (parseInt(mm) < 10) {
        mm = "0" + mm;
    }

    if (forUpdate) {
        return `${yyyy}-${mm}-${dd}`;
    }

    return `${dd}.${mm}.${yyyy}`;
};

//Чтобы цифры можно было легко прочитать (добавляет проблемы между цифрами)
export const numberWithSpaces = (sum) => {
    return sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") || "";
};

//Проверяет первая буква слова с большой буквы или нет
export const checkIfFirstLetterInLowerCase = (text) => {
    const firstChar = text.charAt(0);
    if (firstChar === firstChar.toLowerCase()) {
        return true;
    } else {
        return false;
    }
};
