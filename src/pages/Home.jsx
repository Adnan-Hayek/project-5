import { useState } from 'react';
import logoImage from'../images/Aaa.png'
import './Home.css';
import Header from '../components/Header';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import VerifiedUserRoundedIcon from '@mui/icons-material/VerifiedUserRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

const projects = [
  {
    type: "brand",
    name: "نواة — هوية تنمو مع الطموح",
    desc: "هوية بصرية متكاملة تعكس شخصية العلامة وتمنحها حضوراً مميزاً.",
    tags: ["تصميم هوية", "استراتيجية"],
  },
  {
    type: "dashboard",
    name: "مدار — إدارة أعمال بذكاء",
    desc: "لوحة تحكم ذكية تساعد الفرق على متابعة الأداء واتخاذ القرارات.",
    tags: ["لوحة تحكم", "تجربة مستخدم"],
  },
  {
    type: "mobile",
    name: "رفيق — تجربة سفر أقرب إليك",
    desc: "تطبيق متكامل يجعل التخطيط للرحلات أسهل وأكثر راحة.",
    tags: ["تطبيق جوال", "تجربة المستخدم"],
  },
];

const benefits = [
  ["✳", "استشارة ذكية", "نساعدك على تحديد احتياجاتك واختيار المسار المناسب."],
  ["♧", "فريق متخصص", "خبرات متنوعة تعمل معاً لتحويل رؤيتك إلى نتائج."],
  ["♡", "حقوقك محفوظة", "خطوات واضحة تحفظ حقوق جميع الأطراف."],
  ["↗", "متابعة مستمرة", "تابع تقدم مشروعك في جميع مراحل التنفيذ."],
];

const steps = [
  ["1", "شاركنا فكرتك", "أخبرنا عن فكرتك وأهدافك."],
  ["2", "اختر فريقك", "تعرّف على الخبراء المناسبين لمشروعك."],
  ["3", "تابع التنفيذ", "تابع تقدم العمل وتواصل مع فريقك."],
  ["4", "استلم وانطلق", "استلم مشروعك وابدأ رحلة النجاح."],
];

export default function Home({ onLogin, onRegister, onNavigate }) {
  return (
    <div className="home-page" dir="rtl">
      <Header 
        activePage="home" 
        onNavigate={onNavigate} 
        onLogin={onLogin} 
        onRegister={onRegister} 
      />

      <main>
        <section className="home-hero home-container" id="home">
          <div className="hero-copy">
            <span className="home-eyebrow">
              <i /> منصة تجمع الأفكار مع الخبرات
            </span>

            <h1>
              حوّل فكرتك إلى مشروع
              <br />
              حقيقي مع فريق محترف
            </h1>

            <p className="hero-description">
              من أول استشارة إلى لحظة الإطلاق، نوفر لك الخبرات المناسبة
              ونضمن لك تجربة آمنة وشفافة لنجاح مشروعك.
            </p>

            <div className="hero-buttons">
              <button className="home-btn primary" onClick={onRegister}>
                ابدأ مشروعك <ArrowBackRoundedIcon sx={{ fontSize: 18, verticalAlign: 'middle', mr: 0.5 }} />
              </button>
              <button className="home-btn outline" onClick={() => onNavigate && onNavigate('portfolio')}>
                استكشف أعمالنا
              </button>
            </div>

            <div className="hero-rating">
              <span className="home-stars" style={{ display: "inline-flex", alignItems: "center", gap: "1px", color: "#F2B848" }}><StarRoundedIcon sx={{ fontSize: 18 }} /><StarRoundedIcon sx={{ fontSize: 18 }} /><StarRoundedIcon sx={{ fontSize: 18 }} /><StarRoundedIcon sx={{ fontSize: 18 }} /><StarRoundedIcon sx={{ fontSize: 18 }} /></span>
              <span><b>4.95</b> من أكثر من 250 مشروع</span>
              <span className="rating-divider" />
              <span>خبراء موثوقون</span>
            </div>
          </div>

          <div className="hero-illustration">
            <div className="illustration-title">
              خبراء متكاملون لإدارة تطورك
            </div>

            <div className="team-people">
              <div className="team-person blue-person">
                <div className="person-head" />
                <div className="person-body" />
                <span>مصمم</span>
              </div>
              <div className="team-person dark-person">
                <div className="person-head" />
                <div className="person-body" />
                <span>مطور محترف</span>
              </div>
              <div className="team-person purple-person">
                <div className="person-head" />
                <div className="person-body" />
                <span>مستشار</span>
              </div>
            </div>

            <div className="team-progress">
              <b><i /> فريقك جاهز للانطلاق</b>
              <div className="progress-labels">
                <span>تحليل</span><span>تصميم</span><span>تنفيذ</span>
              </div>
              <div className="progress-lines">
                <i /><i /><i />
              </div>
              <div className="progress-footer">
                <span>ACCESS TEAM</span>
                <span>جاهزون للعمل معك</span>
              </div>
            </div>
          </div>
        </section>

        <section className="home-container home-benefits" id="benefits">
          <div className="home-section-heading">
            <span className="home-eyebrow">لماذا ACCESS؟</span>
            <h2>طموحك يستحق تجربة أفضل</h2>
          </div>

          <div className="benefit-grid">
            {benefits.map(([icon, title, desc]) => (
              <article className="benefit-item" key={title}>
                <div className="benefit-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="home-container home-projects" id="work">
          <div className="home-section-heading heading-row">
            <div>
              <span className="home-eyebrow">قصص من أعمالنا</span>
              <h2>أفكار تحولت إلى قصص نجاح</h2>
            </div>
            <button className="home-text-link" onClick={() => onNavigate && onNavigate('portfolio')} style={{background:'none', border:'none', cursor:'pointer', fontFamily:'inherit'}}>
              جميع الأعمال ←
            </button>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="home-project-card" key={project.name} onClick={() => onNavigate && onNavigate('portfolio')} style={{cursor: 'pointer'}}>
                <div className={`project-art ${project.type}`}>
                  {project.type === "brand" && (
                    <>
                      <div className="brand-orb" />
                      <div className="nawa-word">نواة</div>
                      <div className="brand-subtitle">هوية تنمو مع الطموح</div>
                      <div className="brand-chip">نواة</div>
                    </>
                  )}

                  {project.type === "dashboard" && (
                    <div className="dashboard-mock">
                      <b>إدارة أعمال بذكاء</b>
                      <div className="dashboard-stats">
                        <div><strong>98%</strong><small>رضا العملاء</small></div>
                        <div><strong>128</strong><small>المشاريع</small></div>
                        <div><strong>24,800</strong><small>المبيعات</small></div>
                      </div>
                      <div className="mock-bars">
                        {[30, 42, 35, 54, 48, 66, 60, 78, 72, 92, 100].map((height, i) => (
                          <i key={i} style={{ height: `${height}%` }} />
                        ))}
                      </div>
                    </div>
                  )}

                  {project.type === "mobile" && (
                    <div className="mobile-mock">
                      <div className="mock-phone">
                        <div className="phone-speaker" />
                        <b>رفيق</b>
                        <small>كل خدماتك في مكان واحد</small>
                        <div className="phone-picture"><i /></div>
                        <div className="phone-action">اكتشف المزيد</div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="project-info">
                  <h3>{project.name}</h3>
                  <p>{project.desc}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="home-steps" id="steps">
          <div className="home-container steps-layout">
            <div className="steps-intro">
              <span className="home-eyebrow">رحلتك تبدأ هنا</span>
              <h2>مشروعك في أربع خطوات</h2>
              <p>رحلة واضحة ومصممة لتحويل فكرتك إلى إنجاز حقيقي.</p>
              <button className="home-btn outline" onClick={onRegister}>
                ابدأ مشروعك
              </button>
            </div>

            <div className="steps-grid">
              {steps.map(([number, title, desc]) => (
                <article className="home-step" key={number}>
                  <span className={`step-number ${number === "1" ? "current" : ""}`}>
                    {number}
                  </span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="home-container home-trust">
          <article onClick={() => onNavigate && onNavigate('about')} style={{cursor: 'pointer'}}>
            <strong className="trust-logo">ACCESS</strong>
            <h3>منصة ACCESS</h3>
            <p>مساحة تجمع الأفكار والخبرات لصناعة نتائج أفضل.</p>
          </article>
          <article onClick={() => onNavigate && onNavigate('escrow')} style={{cursor: 'pointer'}}>
            <span className="trust-symbol">◇</span>
            <h3>الثقة والأمان</h3>
            <p>وضوح في التعامل من البداية وحتى النهاية.</p>
          </article>
          <article onClick={() => onNavigate && onNavigate('about')} style={{cursor: 'pointer'}}>
            <span className="trust-symbol">✦</span>
            <h3>نصنع شيئاً مميزاً</h3>
            <p>كل مشروع فرصة لبناء تجربة تستحق أن تُروى.</p>
          </article>
          <article onClick={() => onNavigate && onNavigate('home')} style={{cursor: 'pointer'}}>
            <span className="trust-symbol">↗</span>
            <h3>انطلق بثقة</h3>
            <p>ابدأ اليوم ودعنا نساعدك في خطوتك التالية.</p>
          </article>
        </section>

        <section className="home-container home-cta" id="start">
          <div>
            <span className="home-eyebrow">جاهز للخطوة التالية؟</span>
            <h2>فكرتك تستحق أن ترى النور</h2>
            <p>دع فريق ACCESS يساعدك على تحويلها إلى مشروع حقيقي.</p>
          </div>
          <button className="home-btn primary" onClick={onRegister}>
            ابدأ مشروعك ←
          </button>
        </section>
      </main>

      <footer className="home-footer">
        <div className="home-container footer-grid">
          <div>
            <a href="#home" className="home-logo" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('home'); }}>
              <img src={logoImage} alt="ACCESS Logo" className="home-logo-image" />
            </a>
            <p>نصل الأفكار بالخبرات، ونحوّل الطموح إلى إنجاز.</p>
          </div>
          <div>
            <h4>روابط سريعة</h4>
            <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('home'); }}>الرئيسية</a>
            <a href="#work" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('portfolio'); }}>معرض الأعمال</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('about'); }}>من نحن</a>
          </div>
          <div>
            <h4>حسابك</h4>
            <button onClick={onLogin}>تسجيل الدخول</button>
            <button onClick={onRegister}>إنشاء حساب</button>
          </div>
          <div>
            <h4>ابدأ رحلتك</h4>
            <p>فكرتك القادمة تبدأ بخطوة.</p>
            <button className="home-btn primary small" onClick={onRegister}>
              ابدأ مشروعك
            </button>
          </div>
        </div>
        <div className="home-container footer-bottom">
          © 2026 ACCESS — جميع الحقوق محفوظة
        </div>
      </footer>
    </div>
  );
}