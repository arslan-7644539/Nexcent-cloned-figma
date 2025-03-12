import React from "react";
import { Route, Routes } from "react-router";
import { Layout } from "./componets/navbar/Layout";
import Home from "./pages/home/Home";
import Regester from "./pages/auth/Regester";
import Login from "./pages/auth/Login";
import AuthGuard from "./componets/navbar/AuthGuard";

const App = () => {
  return (
    <Routes>
      {/* ---------------------------navBar Section ------------ */}
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <AuthGuard>
              <Home />
            </AuthGuard>
          }
        />
      </Route>
      {/* /----------------auth section */}
      <Route path="/register" element={<Regester />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
