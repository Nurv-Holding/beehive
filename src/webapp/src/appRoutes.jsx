import * as React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import GerenciamentoDeTime from "./pages/team-management";
import Empresas from "./pages/empresas";
import ListaDeObjetivos from "./pages/objectivesList"
import Objetivo from "./pages/objetivo";
import Users from "./components/Users";

function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Users />}>
          <Route index element={<Home />} />
          <Route path="/gerenciamentodetime" element={<GerenciamentoDeTime />} />
          <Route path="/empresas" element={<Empresas />} />
          <Route path="/listadeobjetivos" element={<ListaDeObjetivos />} />
          <Route path="/objetivo/:idGoal" element={<Objetivo />} />
        </Route>
      </Routes>
  );
}

export default AppRoutes