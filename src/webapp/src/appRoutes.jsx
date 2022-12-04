import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Companies from "./pages/Company";
import Goal from "./pages/Goal";
import Users from "./components/Users";
import Login from "./pages/login";
import History from "./pages/History";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/company/:idCompany" element={<Users />}>
        <Route index element={<Companies />} />
        <Route path="goal/:idGoal" element={<Goal />} />
        <Route path="goal/:idGoal/history/:idgoalsKr" element={<History />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes