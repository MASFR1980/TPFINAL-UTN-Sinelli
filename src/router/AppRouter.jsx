// AppRouter.js
import React from "react";
import { Layout } from "../components/Layout";  // Importa el layout
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home"; 
import { Register } from "../pages/Register"; 
import { Dashboard } from "../pages/Dashboard"; 
import { Login } from "../pages/Login"; 
import { NotFound } from "../pages/NotFound"; 
import {PrivateRoute} from "../components/PrivateRoute"; // Importa el componente de ruta protegida

function AppRouter() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element ={
            <PrivateRoute> 
              <Dashboard />
            </PrivateRoute>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export {AppRouter};