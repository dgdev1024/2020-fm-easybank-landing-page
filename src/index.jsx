/**
 * @file index.jsx
 */

import React from "react";
import { render } from "react-dom";
import App from "./com/app";

const mountNode = document.querySelector(".app-root");
render(<App />, mountNode);
