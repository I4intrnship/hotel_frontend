import { createContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: localStorage.getItem("token") || null,
    role: localStorage.getItem("role") || null,
  });

  const [hasNavigated, setHasNavigated] = useState(false); // 🛑 Prevent multiple navigations
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log("🟢 Auth State Updated:", auth);
    console.log("📌 Current Path:", location.pathname);

    if (auth.token && auth.role && !hasNavigated) {
      const targetPath = auth.role === "admin" ? "/admin-dashboard" : "/dashboard";

      if (location.pathname !== targetPath) {
        console.log("🚀 Redirecting to:", targetPath);
        setHasNavigated(true); // 🛑 Prevent multiple redirects
        navigate(targetPath, { replace: true });
      }
    }
  }, [auth.token, auth.role, navigate, location.pathname, hasNavigated]);

  const login = (token, role) => {
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    setAuth({ token, role });

    const targetPath = role === "admin" ? "/admin-dashboard" : "/dashboard";

    console.log("✅ Login successful. Redirecting to:", targetPath);
    navigate(targetPath, { replace: true });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setAuth({ token: null, role: null });

    console.log("🚪 Logged out. Redirecting to login.");
    navigate("/login", { replace: true });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
