import React from "react";
import { motion } from "framer-motion";

import Styles from "./transition-styles.scss";

const transition = (OriginalComponent: React.FC<{}>) => {
    return () => (
        <>
            <OriginalComponent />
            <motion.div
                className={Styles.slideIn}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1]}}
            />
            <motion.div
                className={Styles.slideOut}
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1]}}
            />
        </>
    )
}

export default transition;