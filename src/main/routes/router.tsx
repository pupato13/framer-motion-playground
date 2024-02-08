import React from "react";
import { Routes, Route, Location } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { About, Contact, Home } from "@/presentation/pages";

type Props = {
    location: Location<any>;
};

const Router: React.FC<Props> = ({ location }) => {
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    );
};

export default Router;
