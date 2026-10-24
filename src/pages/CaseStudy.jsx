import React from 'react';
import logoImage from '../images/Aaa.png';
import './CaseStudy.css';

// MUI Icons
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';

export default function CaseStudy({ onNavigate, onRegister }) {
  return (
    <div className="case-study-page" dir="rtl">
      {/* الشريط العلوي */}
      <header className="case-header">
        <div className="case-header-right">
          <button className="close-btn" onClick={() => onNavigate && onNavigate('portfolio')} title="إغلاق">
            <CloseRoundedIcon fontSize="small" />
          </button>
          <h2>دراسة حالة المشروع</h2>
        </div>
        <div className="case-logo" onClick={() => onNavigate && onNavigate('home')} style={{ cursor: 'pointer' }}>
          <img src={logoImage} alt="ACCESS Logo" className="case-logo-image" />
        </div>
      </header>

      {/* الحاوية الرئيسية للمحتوى */}
      <main className="case-container">
        
        {/* صورة العرض الرئيسية للمشروع */}
        <div className="case-hero-image-box">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" 
            alt="مدار - لوحة التحكم" 
            className="hero-laptop-img"
          />
        </div>

        {/* عنوان وتفاصيل المشروع */}
        <div className="case-intro">
          <div className="meta-badges">
            <span className="badge-green">
              <CheckCircleRoundedIcon sx={{ fontSize: 15, verticalAlign: 'middle', ml: 0.5 }} /> مكتمل
            </span>
            <span className="badge-category">برمجة ومواقع</span>
          </div>
          <h1>مدار - منصة إدارة أعمال ذكية SaaS</h1>
          <p className="intro-desc">
            مساحة عمل واحدة تجمع المهام والفرق والتقارير لتمنح أصحاب الأعمال رؤية أوضح ليومهم.
          </p>
        </div>

        <hr className="case-divider" />

        {/* قسم: التحدي */}
        <section className="case-section">
          <h2>التحدي الذي بدأنا منه</h2>
          <p>
            تشتّت المهام بين أدوات متعددة وصعوبة متابعة التقدم. كان المطلوب منصة سهلة الاستخدام، بصلاحيات واضحة وتجربة عربية متكاملة تنمو مع الفريق.
          </p>
        </section>

        {/* قسم: الحل والتقنيات */}
        <section className="case-section">
          <h2>حل متكامل، من الواجهة إلى البيانات</h2>
          <p>
            صممنا لوحة تحكم مرنة، وربطنا إدارة المهام بتقارير مباشرة، مع بنية تقنية قابلة للتوسع ومراجعة لكل مرحلة قبل التسليم.
          </p>
          
          <div className="tech-tags">
            <span>PostgreSQL</span>
            <span>Node.js</span>
            <span>React</span>
          </div>
        </section>

        {/* قسم: الفريق والتخصصات */}
        <section className="case-section">
          <h2>خبرات مختلفة، تحت قيادة واحدة</h2>
          <div className="team-roles-grid">
            <div className="role-card">
              <span className="role-icon">
                <PersonOutlineRoundedIcon sx={{ fontSize: 24, color: '#14A800' }} />
              </span>
              <h4>قائد تقني</h4>
            </div>
            <div className="role-card">
              <span className="role-icon">
                <PersonOutlineRoundedIcon sx={{ fontSize: 24, color: '#14A800' }} />
              </span>
              <h4>مصمم تجربة مستخدم</h4>
            </div>
            <div className="role-card">
              <span className="role-icon">
                <PersonOutlineRoundedIcon sx={{ fontSize: 24, color: '#14A800' }} />
              </span>
              <h4>مطور واجهات وخلفية</h4>
            </div>
            <div className="role-card">
              <span className="role-icon">
                <PersonOutlineRoundedIcon sx={{ fontSize: 24, color: '#14A800' }} />
              </span>
              <h4>مهندس جودة</h4>
            </div>
          </div>
        </section>

        {/* قسم: رأي العميل */}
        <section className="testimonial-box">
          <div className="quote-icon">❝</div>
          <p className="quote-text">
            «لم نكن نبحث عن تنفيذ فقط، بل عن فريق يفهم طريقة عملنا. مع مدار، أصبحت التفاصيل أوضح والتجربة أبسط.»
          </p>
          <span className="quote-author">صوت العميل - نموذج توضيحي</span>
        </section>

        {/* شريط الدعوة للعمل السفلي */}
        <div className="case-footer-cta">
          <span className="cta-note">دراسة حالة توضيحية لعرض تجربة العمل على المنصة.</span>
          <button className="btn-green-cta" onClick={onRegister}>
            ابدأ مشروعًا مشابهًا <ArrowOutwardRoundedIcon sx={{ fontSize: 16, verticalAlign: 'middle', mr: 0.5 }} />
          </button>
        </div>

      </main>
    </div>
  );
}