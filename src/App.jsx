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
      setPage(target); // مثل "home", "about", "portfolio", "case", "escrow", "privacy", "dashboard", "ai", "smartConversation", "settings", "profile", "messages", "wallet"
    }
    window.scrollTo(0, 0);
  };

  // إذا اختار المستخدم صفحة تسجيل الدخول / التسجيل
  if (page === "login") {
    return <Login initialScreen={authType} onNavigate={handleNavigate} />;
  }

  // إذا توجه المستخدم إلى لوحة التحكم أو صفحات العميل الداخلية (بما فيها المحفظة، الرسائل، تفاصيل المشروع، إلخ)
  if (
    page === "dashboard" || 
    page === "client-portal" || 
    page === "projects" || 
    page === "project-details" ||
    page === "review-deliverables" ||
    page === "final-delivery" ||
    page === "wallet" || 
    page === "wallet-escrow" || /* <-- أضفنا صفحة المحفظة المالية هنا بنجاح */
    page === "settings" || 
    page === "profile" || 
    page === "messages" || 
    page === "ai" || 
    page === "new-project" ||
    page === "smartConsultation" ||
    page === "smartConversation"
  ) {
    let initialTab = "dashboard";
    if (page === "projects") initialTab = "projects";
    if (page === "project-details") initialTab = "project-details";
    if (page === "review-deliverables") initialTab = "review-deliverables";
    if (page === "final-delivery") initialTab = "final-delivery";
    if (page === "wallet" || page === "wallet-escrow") initialTab = page === "wallet-escrow" ? "wallet-escrow" : "wallet"; /* <-- توجيه تبويب المحفظة المالية */
    if (page === "settings") initialTab = "settings";
    if (page === "profile") initialTab = "profile";
    if (page === "messages") initialTab = "messages";
    if (page === "ai" || page === "new-project" || page === "smartConsultation" || page === "smartConversation") initialTab = "ai";
    
    // تمرير الحالة الحالية لـ ClientLayout لمعرفة ما إذا كنا سنعرض الاستشارة أم المحادثة
    const subView = page === "smartConversation" ? "conversation" : "consultation";

    return (
      <ClientLayout 
        initialTab={initialTab} 
        subView={subView}
        onLogout={() => handleNavigate("home")} 
        onNavigate={handleNavigate}
      />
    );
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