import * as React from "react";
import { HashRouter } from "react-router-dom";
import AppRoutes from "./appRoutes";

function App() {
  return (
    <>
      <HashRouter>
          <AppRoutes />
      </HashRouter>
    </>
  );
}

export default App;
