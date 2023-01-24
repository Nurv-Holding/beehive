import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Company from "./pages/Company";
import Goal from "./pages/Goal";
import Users from "./components/Users";
import Login from "./pages/login";
import HistoryKr from "./pages/HistoryKr";
import HistoryKrsTeam from "./pages/HistoryKrsTeam";
import FormUser from "./components/CompanyMenuPanel/Users/FormUser";
import FormTeam from "./components/CompanyMenuPanel/Teams/FormTeam";
import FormWayOfBeing from "./components/CompanyMenuPanel/wayOfBeing/FormWayOfBeing";
import FormMenuWayOfBeing from "./components/CompanyMenuPanel/wayOfBeing/FormMenuWayOfBeing";
import TeamList from "./pages/TeamsList";
import ListUsers from "./components/CompanyMenuPanel/Users/ListUsers";

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
        <Route path="teamlist" element={<TeamList />} />
        <Route path="userslist" element={<ListUsers />} />
        <Route path="formuser" element={<FormUser />} />
      </Route>
      <Route path="/formteam/:idCompany" element={<FormTeam />} />
      <Route path="/registerfuturevision/:idCompany" element={<FormWayOfBeing />} />
      <Route path="/formfuturevisionchildren/:idFutureVision/:idCompany" element={<FormMenuWayOfBeing />} />
    </Routes>
  );
}

export default AppRoutes