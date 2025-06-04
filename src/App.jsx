import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function AppContent() {
  return (
    <>
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
