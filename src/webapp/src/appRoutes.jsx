import * as React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Empresas from "./pages/empresas";
import Objetivo from "./pages/objetivo";
import Users from "./components/Users";
import Test from "./pages/test";

import Login from "./pages/login";

function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/teste" element={<Test/>}/>
        <Route path="/empresas/:idCompany" element={<Users />}>
          <Route index element={<Empresas />} />
          <Route path="objetivo/:idGoal" element={<Objetivo />} />
        </Route>
      </Routes>
  );
}

export default AppRoutes