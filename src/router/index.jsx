import React from "react";
import { Routes, Route } from "react-router-dom";

//Routes
import { allRoutes } from "./DataRoutes";

//Layouts
import MainLayout from "../Layout/MainLayout";

const AppRoutes = () => {

    return (
        <Routes>
            {allRoutes.map((route) => {
                let routeInner;
                let props = route;

                switch (route.layout) {
                    case "main":
                        routeInner = (
                            <MainLayout {...props}>
                                <route.component />
                            </MainLayout>
                        );
                        break;
                    default:
                        break;
                }

                return (
                    <Route
                        path={route.url}
                        key={route.url}
                        element={routeInner}
                    />
                );
            })}
        </Routes>
    );
};

export default AppRoutes;