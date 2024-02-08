import React from "react";
import { createRoot } from "react-dom/client";
import {BrowserRouter as Router} from 'react-router-dom';

import { App } from "@/main/config";

import "@/presentation/styles/global.scss";

const container = document.getElementById("main");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<Router><App /></Router>);
