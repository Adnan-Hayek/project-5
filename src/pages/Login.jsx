import { useState, useEffect } from "react";
import logoImage from '../images/Aaw.png';
import './Login.css';

// MUI Icons
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

/* ================= اللوحة الجانبية (Side Panel) ================= */
function SidePanel() {
  return (
    <div className="side" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100vh", boxSizing: "border-box" }}>
      <div>
        <div className="login-brand-box" style={{ marginBottom: "25px" }}>
          <img src={logoImage} alt="ACCESS Logo" className="login-sidebar-logo-image" />
        </div>
        <div className="badge">أفكار كبيرة. بداية واحدة.</div>
        <div className="headline" style={{ fontSize: "28px", lineHeight: "1.4", margin: "12px 0" }}>
          شريكك من الفكرة،<br />
          إلى أول إنجاز.
        </div>
        <div className="sub" style={{ fontSize: "14px", opacity: 0.9, lineHeight: "1.6" }}>
          نجمع طموحك بالفريق المناسب، في مساحة واحدة<br />
          للعمل بثقة ووضوح.
        </div>
      </div>

      <div style={{ width: "100%", marginBottom: "10px" }}>
        <div className="card" style={{ backgroundColor: "#ffffff", color: "#181818", padding: "16px 20px", borderRadius: "14px", boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h4 style={{ margin: 0, color: "#181818", fontSize: "14px" }}>مشروعك القادم</h4>
            <span style={{ fontSize: "11px", color: "#14A800", fontWeight: "bold" }}>قيد التنفيذ</span>
          </div>
          <div className="proj" style={{ marginTop: "10px", fontWeight: "bold", color: "#181818", fontSize: "13px" }}>
            من الفكرة إلى الإطلاق
          </div>
          <div className="quote" style={{ fontSize: "12px", margin: "6px 0 16px 0", color: "#666" }}>
            فريق متكامل يعمل على تحقيق رؤيتك
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "12px", borderTop: "1px solid #eaeaea", fontSize: "11px", color: "#666" }}>
            <span>خبرات مختلفة، هدف واحد</span>
            <div style={{ display: "flex", gap: "8px", fontWeight: "bold", color: "#14A800" }}>
              <span>ن</span><span>م</span><span>س</span>
            </div>
          </div>
        </div>

        <div className="rating" style={{ marginTop: "16px", fontSize: "12px", color: "#ffffff", opacity: 0.9, textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: "4px" }}>
          <span className="num" style={{ fontWeight: "bold", display: "inline-flex", alignItems: "center", gap: "2px" }}>
            <StarRoundedIcon sx={{ fontSize: 16, color: "#F2B848" }} /> 4.95
          </span>
          <span>|</span>
          <b>+250 مشروع</b>
        </div>
        <div style={{ fontSize: "11px", opacity: 0.8, marginTop: "2px", textAlign: "center", color: "#ffffff" }}>
          ثقة تتحدث عبر كل مشروع ناجح
        </div>
      </div>
    </div>
  );
}

function FormHeader({ title, desc, onClose }) {
  return (
    <>
      <button className="close" title="إغلاق" onClick={onClose}>
        <CloseRoundedIcon fontSize="small" />
      </button>
      <span className="lang" style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
        <HttpsRoundedIcon sx={{ fontSize: 15, color: "#14A800" }} /> اتصال آمن ومشفّر
      </span>
      <h2>{title}</h2>
      <div className="desc">{desc}</div>
    </>
  );
}

function Field({ label, placeholder, type = "text", icon, error, hint }) {
  return (
    <>
      {label && <label>{label}</label>}
      <div className={"field" + (error ? " error" : "")}>
        {icon === "eye"   && <button type="button" className="icon" tabIndex="-1"><VisibilityOutlinedIcon sx={{ fontSize: 18 }} /></button>}
        <input type={type} placeholder={placeholder} />
        {icon === "mail"  && <span className="icon"><MailOutlineRoundedIcon sx={{ fontSize: 18 }} /></span>}
        {icon === "phone" && <span className="icon"><LocalPhoneOutlinedIcon sx={{ fontSize: 18 }} /></span>}
        {icon === "lock"  && <span className="icon"><LockOutlinedIcon sx={{ fontSize: 18 }} /></span>}
        {icon === "user"  && <span className="icon"><PersonOutlineRoundedIcon sx={{ fontSize: 18 }} /></span>}
      </div>
      {hint && (
        <div className={"hint " + (error ? "error" : "success")} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          {error ? <InfoOutlinedIcon sx={{ fontSize: 14 }} /> : <CheckRoundedIcon sx={{ fontSize: 14 }} />}
          {hint}
        </div>
      )}
    </>
  );
}

function Checkbox({ children }) {
  const [on, setOn] = useState(true);
  return (
    <div className="check" onClick={() => setOn(!on)}>
      <span className="box" style={{ background: on ? "#14A800" : "#d0d5dd", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
        {on ? <CheckRoundedIcon sx={{ fontSize: 12, color: "#ffffff" }} /> : null}
      </span>
      {children}
    </div>
  );
}

function Socials() {
  return (
    <>
      <div className="divider">أو تسجيل الدخول عبر</div>
      <div className="socials">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="soc" style={{ textDecoration: 'none' }}>
          <span className="in">in</span> LinkedIn
        </a>
        <a href="https://accounts.google.com" target="_blank" rel="noopener noreferrer" className="soc" style={{ textDecoration: 'none' }}>
          <span className="g">G</span> Google
        </a>
      </div>
    </>
  );
}

/* ================= شاشات المصادقة الفرعية ================= */

function SignupScreen({ onSignup, go, onClose }) {
  const [role, setRole] = useState(0);
  const roles = ["صاحب عمل / عميل", "قائد فريق", "مستقل محترف"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSignup) {
      onSignup();
    } else {
      go("success");
    }
  };

  return (
    <div className="form-side">
      <FormHeader title="ابدأ رحلتك مع ACCESS" desc="حساب واحد، وفرص لا حدود لها. اختر دورك لدينا" onClose={onClose} />
      <div className="toggle">
        {roles.map((r, i) => (
          <div key={r} className={i === role ? "on" : ""} onClick={() => setRole(i)}>{r}</div>
        ))}
      </div>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <Field label="الاسم الكامل" placeholder="سارة أحمد" icon="user" />
        <Field label="البريد الإلكتروني" placeholder="name@company.com" icon="mail" />
        <Field label="رقم الهاتف" placeholder="+966 55 123 4567" icon="phone" />
        <Field label="كلمة المرور" type="password" placeholder="••••••••" icon="lock" hint="قوة كلمة المرور: قوية جداً" />
        <Checkbox>أوافق على الشروط وسياسة الخصوصية</Checkbox>
        <button type="submit" className="btn">إنشاء حساب جديد</button>
      </form>
      <div className="link">لديك حساب بالفعل؟ <button type="button" onClick={() => go("login")}>تسجيل الدخول</button></div>
    </div>
  );
}

function LoginScreen({ onLogin, go, withError, onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onLogin) {
      onLogin();
    } else {
      go("success");
    }
  };

  return (
    <div className="form-side">
      <FormHeader title="مرحباً بعودتك" desc="سجّل دخولك وأكمل رحلة إنجازك" onClose={onClose} />
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        {withError
          ? <Field label="البريد الإلكتروني" placeholder="name@company.com" icon="mail" error hint="البريد الإلكتروني أو كلمة المرور غير صحيحة" />
          : <Field label="البريد الإلكتروني" placeholder="name@company.com" icon="mail" />}
        <Field label="كلمة المرور" type="password" placeholder="••••••••" icon={withError ? "lock" : "eye"} error={withError} />
        <Checkbox>{withError ? "تذكرني" : "تسجيل الدخول تلقائياً"}</Checkbox>
        <button type="submit" className="btn">تسجيل الدخول</button>
        <button type="button" className="btn ghost" onClick={() => go("reset")}>إعادة تعيين كلمة المرور</button>
      </form>
      <Socials />
      <div className="link">ليس لديك حساب؟ <button type="button" onClick={() => go("signup")}>إنشاء حساب</button></div>
    </div>
  );
}

function ResetScreen({ onReset, go, onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onReset) {
      onReset();
    } else {
      go("success");
    }
  };

  return (
    <div className="form-side">
      <FormHeader title="إعادة تعيين كلمة المرور" desc="أدخل كلمة المرور الجديدة لحسابك لتأكيد التغيير والبدء فوراً" onClose={onClose} />
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <Field label="كلمة المرور الجديدة" type="password" placeholder="••••••••" icon="eye" />
        <Field label="تأكيد كلمة المرور الجديدة" type="password" placeholder="••••••••" icon="eye" />
        <button type="submit" className="btn" style={{ marginTop: 22 }}>حفظ كلمة المرور الجديدة</button>
        <button type="button" className="btn ghost" onClick={() => go("login")}>
          <ArrowForwardRoundedIcon sx={{ fontSize: 16, verticalAlign: 'middle', ml: 0.5 }} /> العودة لتسجيل الدخول
        </button>
      </form>
    </div>
  );
}

function SuccessScreen({ onComplete, onClose }) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPct((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 12;
      });
    }, 40);

    const redirectTimer = setTimeout(() => {
      onComplete();
    }, 500);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [onComplete]);

  return (
    <div className="form-side">
      <button className="close" onClick={onClose} title="إغلاق">
        <CloseRoundedIcon fontSize="small" />
      </button>
      <span className="lang" style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
        <HttpsRoundedIcon sx={{ fontSize: 15, color: "#14A800" }} /> اتصال آمن ومشفّر
      </span>
      <div className="success-wrap">
        <div className="ok-circle" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <CheckRoundedIcon sx={{ fontSize: 32, color: "#14A800" }} />
        </div>
        <h2 style={{ marginTop: 22 }}>مرحباً بعودتك! جاري نقلك إلى لوحة التحكم…</h2>
        <div className="details">
          تم تسجيل دخولك بنجاح. مباشرة يمكنك متابعة مشاريعك وفرقك بامتيازات كاملة<br />
          <b>name@company.com</b> — متصل بحسابك الشخصي
        </div>
        <div className="progress-wrap">
          <div className="progress-lbl"><span>جاري التحويل…</span><span>{pct}%</span></div>
          <div className="bar"><i style={{ width: `${pct}%` }}></i></div>
        </div>
        <button 
          type="button" 
          className="btn" 
          style={{ marginTop: '20px', width: '100%' }} 
          onClick={onComplete}
        >
          الدخول للوحة التحكم فوراً ←
        </button>
      </div>
    </div>
  );
}

export default function Login({ initialScreen = "login", onNavigate }) {
  const [authScreen, setAuthScreen] = useState(initialScreen);

  useEffect(() => {
    setAuthScreen(initialScreen);
  }, [initialScreen]);

  const handleLoginSuccess = () => {
    setAuthScreen("success");
  };

  const renderForm = () => {
    if (authScreen === "signup") {
      return (
        <SignupScreen 
          onSignup={handleLoginSuccess} 
          go={(s) => setAuthScreen(s)} 
          onClose={() => onNavigate("home")} 
        />
      );
    }
    if (authScreen === "reset") {
      return (
        <ResetScreen 
          onReset={handleLoginSuccess} 
          go={(s) => setAuthScreen(s)} 
          onClose={() => onNavigate("home")} 
        />
      );
    }
    if (authScreen === "success") {
      return (
        <SuccessScreen 
          onComplete={() => onNavigate("dashboard")} 
          onClose={() => onNavigate("home")} 
        />
      );
    }
    return (
      <LoginScreen 
        onLogin={handleLoginSuccess} 
        go={(s) => setAuthScreen(s)} 
        withError={false} 
        onClose={() => onNavigate("home")} 
      />
    );
  };

  return (
    <div className="auth-wrapper" dir="rtl">
      <div className="frame">
        <SidePanel />
        {renderForm()}
      </div>
    </div>
  );
}