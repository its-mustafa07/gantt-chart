// export { Gantt } from "./components/gantt/gantt";
// export { ViewMode } from "./types/public-types";
// export type {
//   GanttProps,
//   Task,
//   StylingOption,
//   DisplayOption,
//   EventOption,
// } from "./types/public-types";
import "./index.css";

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
