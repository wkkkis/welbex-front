import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

//Hooks
import { ColumnContext } from "./hooks/ColumnContext";

//Router
import AppRoutes from "./router";

//Styles
import "./App.scss";

function App() {
    const [data, setData] = useState(null);

    return (
        <ColumnContext.Provider value={{ data, setData }}>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </ColumnContext.Provider>
    );
}

export default App;
