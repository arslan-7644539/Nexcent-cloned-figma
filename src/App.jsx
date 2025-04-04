import React, { useContext, useEffect } from "react";
import { useRoutes } from "react-router";

import { appRoutes } from "./routes/appRoute";
import { AuthContext } from "./context/authContext";

const App = () => {
  // ---------------------------------
  const { userData } = useContext(AuthContext);
  const routes = useRoutes(appRoutes(userData));
  return routes;
};

export default App;
