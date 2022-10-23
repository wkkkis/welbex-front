import { routes } from "../utils/routes"

//Pages
import MainPage from "../pages/Main";
import Search from "../pages/Search";

export const allRoutes = [
    {
        url: routes.MAIN,
        component: MainPage,
        layout: "main",
        title: "Главная",
    },
    {
        url: routes.SEARCH,
        component: Search,
        layout: "main",
        title: "Поиск",
    }
]