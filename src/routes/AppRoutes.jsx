// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import { GeneralPage } from "../pages/GeneralPage";
import { FormRolePage } from "../pages/FormRolePage";
import { FormUserPage } from "../pages/FormUserPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<GeneralPage />} />
      <Route path="/form-role" element={<FormRolePage />} />
      <Route path="/form-user" element={<FormUserPage />} />

      {/* Si no se encuentra ninguna ruta válida */}
    </Routes>
  );
};

export default AppRoutes;
