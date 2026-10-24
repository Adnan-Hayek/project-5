import { useState } from "react";
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import CaseStudy from './pages/CaseStudy';
import Escrow from './pages/Escrow';
import Privacy from './pages/Privacy';
import Login from './pages/Login'; 
import ClientLayout from './components/ClientLayout'; // مكون لوحة التحكم والتايتل المشترك

export default function App() {
  const [page, setPage] = useState("home"); 
  const [authType, setAuthType] = useState("login"); // "login" أو "signup"

  // دالة موحدة للتنقل بين كافة صفحات الموقع وسجلات الدخول
  const handleNavigate = (target) => {
    if (target === "login") {
      setAuthType("login");
      setPage("login");
    } else if (target === "register" || target === "signup") {
      setAuthType("signup");
      setPage("login");
    } else {
      setPage(target); // مثل "home", "about", "portfolio", "case", "escrow", "privacy", "dashboard"
    }
    window.scrollTo(0, 0);
  };

  // إذا اختار المستخدم صفحة تسجيل الدخول / التسجيل
  if (page === "login") {
    return <Login initialScreen={authType} onNavigate={handleNavigate} />;
  }

  // إذا توجه المستخدم إلى لوحة التحكم (بعد نجاح تسجيل الدخول)
  if (page === "dashboard" || page === "client-portal" || page === "projects") {
    const initialTab = page === "projects" ? "projects" : "dashboard";
    return <ClientLayout initialTab={initialTab} onLogout={() => handleNavigate("home")} />;
  }

  // عرض باقي صفحات الموقع بناءً على اختيار المستخدم
  switch (page) {
    case "about":
      return <About onNavigate={handleNavigate} onLogin={() => handleNavigate("login")} onRegister={() => handleNavigate("register")} />;
    case "portfolio":
      return <Portfolio onNavigate={handleNavigate} onLogin={() => handleNavigate("login")} onRegister={() => handleNavigate("register")} />;
    case "case":
      return <CaseStudy onNavigate={handleNavigate} onLogin={() => handleNavigate("login")} onRegister={() => handleNavigate("register")} />;
    case "escrow":
      return <Escrow onNavigate={handleNavigate} onLogin={() => handleNavigate("login")} onRegister={() => handleNavigate("register")} />;
    case "privacy":
      return <Privacy onNavigate={handleNavigate} onLogin={() => handleNavigate("login")} onRegister={() => handleNavigate("register")} />;
    case "home":
    default:
      return (
        <Home
          onNavigate={handleNavigate}
          onLogin={() => handleNavigate("login")}
          onRegister={() => handleNavigate("register")}
        />
      );
  }
}