import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Company from "./pages/Company";
import Goal from "./pages/Goal";
import Users from "./components/Users";
import Login from "./pages/login";
import HistoryKr from "./pages/HistoryKr";
import HistoryKrsTeam from "./pages/HistoryKrsTeam";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/company/:idCompany" element={<Users />}>
        <Route index element={<Company />} />
        <Route path="goal/:idGoal" element={<Goal />} />
        <Route path="goal/:idGoal/history-kr/:idgoalsKr" element={<HistoryKr />} />
        <Route path="goal/:idGoal/history-krTeam/:idTeam" element={<HistoryKrsTeam />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes