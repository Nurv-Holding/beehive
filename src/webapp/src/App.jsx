import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AppRoutes from './routes'
import Header from './components/header';

function App() {
  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
}

export default App;
