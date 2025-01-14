import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Company from "./pages/Company";
import Goal from "./pages/Goal";
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
import GoalUser from "./pages/goalUser";
import HistoryGoalUsersKr from "./pages/HistoryGoalUsersKrs";
import WayOfBeing from "./pages/wayOfBeing";
import Goals from "./pages/Goals";
import Teams from "./pages/Teams";
import Users from "./pages/Users";
import RegisterPrinciples from "./pages/RegisterPrinciples";
import RegisterProposals from "./pages/RegisterProposals";
import RegisterGoals from "./pages/RegisterGoals";
import EditProfile from "./components/CompanyMenuPanel/Users/editProfile";
import RedirectPages from "./pages/redirectPages";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/editProfile" element={<EditProfile />} />
      <Route path="company/:idCompany" element={<Company />} >
        <Route index element={<RedirectPages />} />
        <Route path="wayOfBeing" element={<WayOfBeing />} />
        <Route path="goals">
          <Route index element={<Goals />} />
          <Route path=":idGoal" element={<Goal />} />
          <Route path=":idGoal/history-kr/:idgoalsKr" element={<HistoryKr />} />
          <Route path=":idGoal/history-krTeam/:idTeam" element={<HistoryKrsTeam />} />
        </Route>
        <Route path="teams" element={<Teams />} />
        <Route path="teamlist" element={<TeamList />} />
        <Route path="userslist" element={<ListUsers />} />
        <Route path="formuser" element={<FormUser />} />
        <Route path="registerfuturevision" element={<FormWayOfBeing />} />
        <Route path="formteam" element={<FormTeam />} />
        <Route path="formfuturevisionchildren/:idFutureVision" element={<FormMenuWayOfBeing />}>
          <Route index element={<RegisterGoals />} />
          <Route path="register/principles" element={<RegisterPrinciples />} />
          <Route path="register/proposals" element={<RegisterProposals />} />
        </Route>
        <Route path="users" element={<Users />} />
        <Route path="user/:idUser">
          <Route index element={<User />} />
          <Route path="history/:idGoalsUserKr" element={<HistoryGoalUsersKr />} />
          <Route path="goal/:idGoal" element={<GoalUser />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes