import "core-js/features/array/flat-map";
import "core-js/features/map";
import "core-js/features/promise";
import "core-js/features/set";
import "raf/polyfill";
import "whatwg-fetch";
import "./globalStyles";
import React from "react";
import ReactDOM from "react-dom";
import App from "src/core/components/App";

ReactDOM.hydrate(<App />, document.getElementById("app-root"));
