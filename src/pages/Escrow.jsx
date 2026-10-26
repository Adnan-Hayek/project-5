import React from 'react';
import logoImage from '../images/Aaa.png';
import './Escrow.css';
import Header from '../components/Header';

export default function Escrow({ onNavigate, onLogin, onRegister }) {
  const steps = [
    {
      num: "1",
      title: "تمويل المرحلة",
      desc: "يودع صاحب المشروع دفعة المرحلة في حساب الضمان الآمن، قبل بدء العمل عليها.",
      status: "تم إيداع الدفعة",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14A800" strokeWidth="2">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
        </svg>
      )
    },
    {
      num: "2",
      title: "تنفيذ المهمة",
      desc: "يبدأ قائد الفريق والمختصون تنفيذ العمل، بينما تبقى الأموال محفوظة بأمان في حساب الضمان.",
      status: "الأموال محفوظة",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14A800" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
        </svg>
      )
    },
    {
      num: "3",
      title: "المراجعة الأولية",
      desc: "يراجع صاحب المشروع معاينة المخرجات، ويطلب التعديلات اللازمة وفق نطاق العمل المتفق عليه.",
      status: "بانتظار موافقتك",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14A800" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
      )
    },
    {
      num: "4",
      title: "تحرير الدفعة",
      desc: "يعتمد صاحب المشروع الملفات النهائية، فتُحرر دفعة المرحلة تلقائياً إلى الفريق.",
      status: "تم تحويل الدفعة",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14A800" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      )
    }
  ];

  const guarantees = [
    {
      title: "لا دفع مسبق كامل",
      desc: "لا تحتاج إلى دفع قيمة المشروع كاملة مقدماً. تموّل كل مرحلة على حدة، وتراجع مخرجاتها قبل الموافقة على تحرير دفعتها للفريق.",
      tag: "مرحلة بمرحلة، وبموافقتك على التسليم",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#14A800" strokeWidth="2">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      )
    },
    {
      title: "سياسة الاسترداد والتحكيم",
      desc: "عند وجود خلاف، تتولى إدارة أكسس مراجعة تفاصيل المشروع والتحكيم بين الطرفين، مع ضمان استرداد المبلغ عند الإخلال بالجودة أو بالموعد المتفق عليه.",
      tag: "معالجة الخلاف بناءً على الاتفاق والمخرجات",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#14A800" strokeWidth="2">
          <path d="M12 3v18M3 9l9-6 9 6M3 9v6l9 6 9-6V9" />
        </svg>
      )
    },
    {
      title: "تشفير مالي بنكي",
      desc: "بوابات دفع آمنة بنسبة 100% لحماية معاملاتك وبياناتك المالية، مع خيارات دفع تناسبك: البطاقات، Apple Pay، والتحويل البنكي.",
      badges: ["Bank Transfer", "Apple Pay", "Cards"],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#14A800" strokeWidth="2">
          <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 10v11M12 10v11M16 10v11" />
        </svg>
      )
    }
  ];

  return (
    <div className="escrow-page" dir="rtl">
      {/* Unified Header */}
      <Header 
        activePage="contact" 
        onNavigate={onNavigate} 
        onLogin={onLogin} 
        onRegister={onRegister} 
      />

      {/* شريط المسار Breadcrumb */}
      <div className="breadcrumb">
        <span onClick={() => onNavigate && onNavigate('home')} style={{ cursor: 'pointer' }}>الرئيسية</span> / <span className="active">حماية المدفوعات والضمان</span>
      </div>

      {/* الهيرو الرئيسي */}
      <section className="escrow-hero">
        <div className="shield-badge">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#14A800" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </div>

        <h1 className="escrow-title">
          أموالك ومجهود الفريق في أمان تام<br />
          مع حساب الضمان <span className="en-text">(Escrow)</span>.
        </h1>

        <p className="escrow-desc">
          تُحفظ دفعة كل مرحلة في حساب الضمان أثناء التنفيذ، ولا تُحرر للفريق إلا بعد موافقتك.<br />
          آلية واضحة تحفظ حق صاحب المشروع، وتضمن للفريق مقابل العمل المنجز.
        </p>
      </section>

      {/* قسم الخطوات */}
      <section className="escrow-steps-section">
        <h2 className="section-title">من تمويل المرحلة إلى استلام العمل</h2>
        <p className="section-sub">أربع خطوات واضحة، يتحرك فيها العمل ويبقى الجميع حقوقهم محفوظة.</p>

        <div className="steps-grid">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="step-card">
                <div className="step-header">
                  <div className="step-icon">{step.icon}</div>
                  <div className="step-number">{step.num}</div>
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                <div className="step-footer">
                  <span className="lock-icon">🔒</span>
                  <span>{step.status}</span>
                </div>
              </div>
              {idx < steps.length - 1 && <div className="step-arrow">←</div>}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* قسم الضمانات */}
      <section className="guarantees-section">
        <h2 className="section-title">ضمانات تحمي كل طرف</h2>
        <p className="section-sub">دفعات مرتبطة بالإنجاز، وآلية لمعالجة الخلافات، وحماية لمعلوماتك المالية.</p>

        <div className="guarantees-grid">
          {guarantees.map((item, idx) => (
            <div className="guarantee-card" key={idx}>
              <div className="guarantee-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              {item.tag && <div className="guarantee-tag">{item.tag}</div>}
              {item.badges && (
                <div className="guarantee-badges">
                  {item.badges.map((b, i) => (
                    <span key={i} className="pay-badge">{b}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* الفوتر */}
      <footer className="escrow-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="f-logo" onClick={() => onNavigate && onNavigate('home')} style={{ cursor: 'pointer' }}>
              <img src={logoImage} alt="ACCESS Logo" className="escrow-logo-image" />
            </div>
            <p>منصة تجمع أصحاب المشاريع بالمستقلين والوكالات، لبناء فرق متكاملة وإنجاز أعمال تستحق الثقة.</p>
          </div>
          <div className="footer-col">
            <h4>اكتشف أكسس</h4>
            <span onClick={() => onNavigate && onNavigate('home')}>الرئيسية</span>
            <span onClick={() => onNavigate && onNavigate('about')}>عن أكسس</span>
            <span onClick={() => onNavigate && onNavigate('portfolio')}>الخدمات والتخصصات</span>
            <span>مركز المساعدة</span>
          </div>
          <div className="footer-col">
            <h4>الثقة والأمان</h4>
            <span onClick={() => onNavigate && onNavigate('privacy')}>سياسة الخصوصية</span>
            <span onClick={() => onNavigate && onNavigate('escrow')}>حماية المدفوعات والضمان</span>
            <span>الشروط والأحكام</span>
          </div>
          <div className="footer-col">
            <h4>تواصل معنا</h4>
            <span>hello@access.sa</span>
            <span>الرياض، المملكة العربية السعودية</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 أكسس. جميع الحقوق محفوظة</span>
          <span>🌐 العربية - المملكة العربية السعودية</span>
        </div>
      </footer>
    </div>
  );
}
