import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { NavBar } from "./pages/NavBar";

function AppContent() {
  return (
    <>
      <NavBar />
      <AppRoutes />
    </>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
