import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./components/Authentication/AuthContext";
import LoginPage from "./components/Authentication/login";
import RegisterPage from "./components/Authentication/register";
import DashboardPage from "./components/Home/DashboardPage";
import ProtectedRoute from "./components/Authentication/ProtectedRoute";
import ReservationPage from "./components/Home/ReservationPage";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* 🔓 Public Routes (Accessible to Everyone) */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* 🔐 Protected Routes (Require Authentication) */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/reservation"
            element={
              <ProtectedRoute>
                <ReservationPage />
              </ProtectedRoute>
            }
          />

          {/* 🚨 Redirect Unknown Routes to Login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
