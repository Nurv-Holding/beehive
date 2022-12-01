import * as React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Companies from "./pages/Company";
import Goal from "./pages/Goal";
import Users from "./components/Users";
import Login from "./pages/login";

function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/company/:idCompany" element={<Users />}>
          <Route index element={<Companies />} />
          <Route path="goal/:idGoal" element={<Goal />} />
        </Route>
      </Routes>
  );
}

export default AppRoutes