import * as React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import TeamManagement from "./pages/team-management";
import Okrs from "./pages/okrs";
import Carreira from "./pages/carreira";

function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gerenciamentodetime" element={<TeamManagement />} />
        <Route path="/okrs" element={<Okrs />} />
        <Route path="/carreira" element={<Carreira />} />
      </Routes>
  );
}

export default AppRoutes