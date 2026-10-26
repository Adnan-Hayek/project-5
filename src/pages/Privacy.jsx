import React from 'react';
import logoImage from '../images/Aaa.png';
import './Privacy.css';
import Header from '../components/Header';

export default function Privacy({ onNavigate, onLogin, onRegister }) {
  const sections = [
    {
      num: "01",
      title: "البيانات التي نجمعها",
      desc: "نجمع البيانات التي تقدمها عند إنشاء حسابك واستخدام خدمات المنصة، بالقدر اللازم لإدارة حسابك وتنفيذ مشاريعك. وتشمل هذه البيانات:",
      hasTable: true,
      tableData: [
        { label: "بيانات الحساب", value: "الاسم، والبريد الإلكتروني، ورقم التواصل، والمعلومات المهنية التي تضيفها إلى ملفك الشخصي." },
        { label: "ملفات المشاريع", value: "وصف المشروع ومتطلباته، والمرفقات وملفات العمل التي تشاركها مع الفريق لتنفيذ المهام." },
        { label: "بيانات الدفع", value: "بيانات الدفع اللازمة لمعالجة معاملاتك، وتُشفّر باستخدام معيار AES-256 لحماية معلوماتك المالية." }
      ]
    },
    {
      num: "02",
      title: "كيفية استخدام البيانات",
      desc: "نستخدم معلومات حسابك ومتطلبات مشروعك لمطابقتك مع قادة الفرق المناسبين، وتسهيل التواصل وتوزيع المهام بين المختصين، كما تساعدنا هذه المعلومات على إدارة المشروع ومتابعة مراحل العمل والمدفوعات المرتبطة به.\n\nنستعين بالذكاء الاصطناعي لإنشاء ملخصات للمشاريع انطلاقاً من التفاصيل التي تقدمها، لتوضيح نطاق العمل والمخرجات المتوقعة. يمكنك مراجعة الملخص وتعديله قبل اعتماده ومشاركته مع الفريق."
    },
    {
      num: "03",
      title: "سرية المحادثات والملفات المرفوعة",
      desc: "نتعامل مع محادثاتك وملفاتك باعتبارها محتوى خاصاً بالمشروع، ولا ننشرها للعامة. يقتصر الاطلاع عليها على المشاركين المعنيين بالعمل، ومن يلزم من فريق المنصة لتقديم الدعم أو معالجة نزاع يتعلق بالمشروع.\n\nنطبق إجراءات لحماية الوصول إلى المحتوى والحد من استخدامه خارج غرضه. احرص على مشاركة الملفات الضرورية فقط، وعدم إرسال كلمات المرور أو المعلومات المالية الحساسة داخل المحادثات."
    },
    {
      num: "04",
      title: "حقوق المستخدم في حذف وتعديل البيانات",
      desc: "يمكنك مراجعة بيانات حسابك وتحديثها أو تصحيحها من إعدادات الملف الشخصي، وطلب حذف بياناتك أو إغلاق حسابك بالتواصل مع مسؤول حماية البيانات. قد نطلب التحقق من هويتك قبل تنفيذ الطلب لحماية حسابك.\n\nقد يلزم الاحتفاظ ببعض السجلات لاستكمال معاملات قائمة أو الوفاء بمتطلبات نظامية أو معالجة نزاع. نوضح لك عند الطلب البيانات التي يمكن حذفها وأي أسباب تستلزم الاحتفاظ بها."
    }
  ];

  return (
    <div className="privacy-page" dir="rtl">
      {/* Unified Header */}
      <Header 
        activePage="" 
        onNavigate={onNavigate} 
        onLogin={onLogin} 
        onRegister={onRegister} 
      />

      <div className="breadcrumb">
        <span onClick={() => onNavigate && onNavigate('home')} style={{ cursor: 'pointer' }}>الرئيسية</span> / <span className="active">سياسة الخصوصية</span>
      </div>

      <section className="privacy-hero">
        <div className="privacy-icon-badge">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#14A800" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        </div>

        <h1 className="privacy-title">سياسة الخصوصية</h1>
        <p className="privacy-sub">
          خصوصيتك أساس ثقتنا. نوضح هنا ما نجمعه من بيانات، وكيف نستخدمها ونحميها،<br />
          والخيارات المتاحة لك للتحكم في معلوماتك على أكسس.
        </p>
      </section>

      {/* المحتوى الرئيسي */}
      <main className="privacy-content">
        {sections.map((sec, idx) => (
          <section key={idx} className="privacy-section">
            <div className="sec-header">
              <span className="sec-num">{sec.num}</span>
              <h2>{sec.title}</h2>
            </div>

            <p className="sec-desc">{sec.desc}</p>

            {/* الجدول / الكارت الجانبي المعنون */}
            {sec.hasTable && (
              <div className="data-table-card">
                {sec.tableData.map((row, rIdx) => (
                  <div key={rIdx} className="table-row">
                    <div className="row-label">{row.label}</div>
                    <div className="row-val">{row.value}</div>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}

        {/* كارت مسؤول حماية البيانات */}
        <div className="privacy-contact-card">
          <div className="pcc-info">
            <h3>مسؤول حماية البيانات</h3>
            <p>للاستفسار عن خصوصيتك أو تقديم طلب لتعديل بياناتك أو حذفها، تواصل معنا عبر البريد الإلكتروني.</p>
          </div>
          <div className="pcc-email-box">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#14A800" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <div className="email-details">
              <a href="mailto:privacy@access.sa" className="email-link">privacy@access.sa</a>
              <span>الرياض، المملكة العربية السعودية</span>
            </div>
          </div>
        </div>
      </main>

      {/* الفوتر السفلي */}
      <footer className="privacy-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="f-logo" onClick={() => onNavigate && onNavigate('home')} style={{ cursor: 'pointer' }}>
              <img src={logoImage} alt="ACCESS Logo" className="privacy-logo-image" />
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
