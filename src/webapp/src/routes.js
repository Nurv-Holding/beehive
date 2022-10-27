import * as React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import TeamManagement from "./pages/team-management";
import Carreira from "./pages/carreira";
import Empresas from "./pages/empresas";

function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gerenciamentodetime" element={<TeamManagement />} />
        <Route path="/carreira" element={<Carreira />} />
        <Route path="/empresas" element={<Empresas />} />
      </Routes>
  );
}

export default AppRoutes