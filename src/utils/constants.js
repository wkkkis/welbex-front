export const DEFAULT_URL = "https://wlbex-backend.herokuapp.com/api";

export const filtersArr = [
    {
        id: 1,
        key: "equals",
        name: "Равно",
    },
    {
        id: 2,
        key: "contains",
        name: "Содержит",
    },
    {
        id: 3,
        key: "more",
        name: "Больше",
    },
    {
        id: 4,
        key: "less",
        name: "Меньше",
    },
];
export const notInColumn = ["date", "tool"];
export const tableColumnArr = [
    {
        id: 1,
        key: "date",
        name: "Дата",
        type: "string",
    },
    {
        id: 2,
        key: "name_column",
        name: "Название",
        type: "string",
    },
    {
        id: 3,
        key: "count",
        name: "Колличество",
        type: "number",
    },
    {
        id: 4,
        key: "distance",
        name: "Расстояние",
        type: "number",
    },
    {
        id: 5,
        key: "tool",
        name: "Инструмент",
        type: "string",
    },
];
