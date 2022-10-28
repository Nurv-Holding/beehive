import * as React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import GerenciamentoDeTime from "./pages/team-management";
import Carreira from "./pages/carreira";
import Empresas from "./pages/empresas";
import ListaDeObjetivos from "./pages/objectivesList"
import Objetivo from "./pages/objetivo";

function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gerenciamentodetime" element={<GerenciamentoDeTime />} />
        <Route path="/carreira" element={<Carreira />} />
        <Route path="/empresas" element={<Empresas />} />
        <Route path="/listadeobjetivos" element={<ListaDeObjetivos />} />
        <Route path="/objetivo" element={<Objetivo />} />
      </Routes>
  );
}

export default AppRoutes