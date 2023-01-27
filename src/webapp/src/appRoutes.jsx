import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Company from "./pages/Company";
import Goal from "./pages/Goal";
import CompanyApp from "./components/CompanyApp";
import Login from "./pages/login";
import HistoryKr from "./pages/HistoryKr";
import HistoryKrsTeam from "./pages/HistoryKrsTeam";
import FormUser from "./components/CompanyMenuPanel/Users/FormUser";
import FormTeam from "./components/CompanyMenuPanel/Teams/FormTeam";
import FormWayOfBeing from "./components/CompanyMenuPanel/wayOfBeing/FormWayOfBeing";
import FormMenuWayOfBeing from "./components/CompanyMenuPanel/wayOfBeing/FormMenuWayOfBeing";
import TeamList from "./pages/TeamsList";
import ListUsers from "./components/CompanyMenuPanel/Users/ListUsers";
import User from "./pages/user";
import UserGoal from "./pages/userGoal";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/company/:idCompany" element={<CompanyApp />}>
        <Route index element={<Company />} />
        <Route path="goal/:idGoal" element={<Goal />} />
        <Route path="goal/:idGoal/history-kr/:idgoalsKr" element={<HistoryKr />} />
        <Route path="goal/:idGoal/history-krTeam/:idTeam" element={<HistoryKrsTeam />} />
        <Route path="teamlist" element={<TeamList />} />
        <Route path="userslist" element={<ListUsers />} />
        <Route path="formuser" element={<FormUser />} />
        <Route path="registerfuturevision" element={<FormWayOfBeing />} />
        <Route path="formteam" element={<FormTeam />} />
        <Route path="formfuturevisionchildren/:idFutureVision" element={<FormMenuWayOfBeing />} />

        <Route path="user/:idUser">
          <Route index element={<User />} />
          <Route path="goal/:idUserGoal" element={<UserGoal />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes