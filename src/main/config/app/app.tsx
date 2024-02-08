import React from "react";
import { useLocation } from "react-router-dom";

import Router from "@/main/routes/router";
import NavBar from "@/presentation/pages/navbar/navbar";


const App: React.FC = () => {

    const location = useLocation();

    return (
        <>
            <NavBar />
            <Router location={location} />
        </>
    );
};

export default App;
