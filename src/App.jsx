import React from "react";
import { useRoutes } from "react-router";

import { appRoutes } from "./routes/appRoute";

const App = () => {
  const routes = useRoutes(appRoutes);
  return routes;
};

export default App;
