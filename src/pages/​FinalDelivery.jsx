import React, { useState } from 'react';
import TopHeader from '../components/TopHeader';
import './​FinalDelivery.css';


export default function FinalDelivery({ onNavigate }) {
  const [agreed, setAgreed] = useState(false);

  const filesToDownload = [
    { title: 'الشعار بصيغة مفتوحة (AI, SVG, PNG)', size: '24.8 MB', type: 'AI • SVG • PNG', desc: 'الملفات المصدرية للشعار' },
    { title: 'دليل الهوية الكامل (PDF)', size: '12.4 MB', type: 'PDF', desc: 'دليل استخدام الهوية' },
    { title: 'حزمة الخطوط والألوان', size: '8.2 MB', type: 'ZIP', desc: 'ملفات الخطوط ولوحة الألوان' }
  ];

  return (
    <div className="final-delivery-page" dir="rtl">
      {/* 1. الهيدر العلوي الموحد */}
      <TopHeader 
        userName="عبدالله العتيبي" 
        userRole="حساب عميل" 
        onNewProject={() => onNavigate && onNavigate('new-project')} 
      />

      {/* 2. رأس الصفحة ومسار التنقل (على اليمين) */}
      <header className="final-top-bar" style={{ textAlign: 'right' }}>
        <div className="breadcrumb" style={{ textAlign: 'right' }}>
          <span onClick={() => onNavigate('projects')} style={{ cursor: 'pointer' }}>مشاريعي</span> / 
          <span onClick={() => onNavigate('project-details')} style={{ cursor: 'pointer' }}> هوية نواة</span> / 
          <span className="current-path"> التسليم النهائي</span>
        </div>
        <div className="final-title-row">
          <div>
            <h1>تسليم ملفات المشروع النهائية — هوية نواة</h1>
            <p>راجع المخرجات النهائية، ثم اعتمد التسليم لتحرير دفعة المرحلة المحجوزة بأمان.</p>
          </div>
          <span className="badge-waiting-approval">بانتظار اعتمادك</span>
        </div>
      </header>

      {/* 3. تنبيه عداد الاعتماد التلقائي */}
      <div className="auto-approval-timer-bar">
        <div className="timer-icon">⏱️</div>
        <div className="timer-text">
          <strong>متبقي 48:12:00 على الاعتماد التلقائي للنظام وتحرير المستحقات</strong>
          <p>يرجى فحص جميع الملفات قبل انتهاء المهلة. عند وجود مشكلة، افتح تذكرة اعتراض قبل الاعتماد التلقائي.</p>
        </div>
      </div>

      {/* 4. قسم ملفات المشروع النهائية */}
      <section className="final-files-section">
        <div className="sec-header-row">
          <div>
            <h2>ملفات المشروع النهائية</h2>
            <p>3 حزم جاهزة للتحميل، جميع الملفات المصدرية في مكان واحد.</p>
          </div>
          <button className="btn-download-all">⬇ تحميل الكل كملف مضغوط (ZIP)</button>
        </div>

        <div className="final-files-grid">
          {filesToDownload.map((f, idx) => (
            <div className="final-file-card" key={idx}>
              <div className="ff-top">
                <span className="ff-type-pill">{f.type}</span>
                <span className="ff-icon">📦</span>
              </div>
              <div className="ff-body">
                <h3>{f.title}</h3>
                <p>{f.desc} • {f.size}</p>
              </div>
              <button className="btn-single-download">⬇ تنزيل</button>
            </div>
          ))}
        </div>
      </section>

      {/* 5. قسم ملخص الاعتماد المالي والدفع */}
      <section className="financial-approval-section">
        <div className="fin-info-box">
          <div className="fin-icon">🛡️</div>
          <div>
            <h3>ملخص الاعتماد المالي</h3>
            <p>الدفعة محجوزة بأمان ولم تُحرر بعد. باعتمادك التسليم النهائي، سيتم تحرير مبلغ المرحلة للمستقل.</p>
          </div>
        </div>

        <div className="fin-amount-box">
          <span className="lbl">قيمة المرحلة النهائية</span>
          <div className="val">4,500 <small>ر.س</small></div>
          <span className="sub-escrow">حالياً قيد الضمان في Escrow</span>
        </div>

        {/* صندوق التأكيد */}
        <div className="confirmation-checkbox-box" onClick={() => setAgreed(!agreed)}>
          <span className={`custom-checkbox ${agreed ? 'checked' : ''}`}>
            {agreed ? '✓' : ''}
          </span>
          <span>أقر بأنني قمت بتحميل وفحص جميع الملفات المصدرية والتسليمات كاملة</span>
        </div>

        {/* زر الاعتماد النهائي */}
        <button 
          className={`btn-final-approval ${!agreed ? 'disabled' : ''}`}
          disabled={!agreed}
          onClick={() => alert('تم اعتماد التسليم النهائي وتحرير الدفعة المالية بنجاح!')}
        >
          ✓ اعتماد التسليم النهائي وتحرير الدفعة المالية للمستقل
        </button>

        <div className="dispute-link-center">
          <button className="link-red-dispute">فتح تذكرة اعتراض / نزاع مالي (Dispute Ticket)</button>
        </div>
      </section>

      {/* 6. حقوق النشر السفلية */}
      <footer className="final-footer-copy">
        <span>© 2026 ACCESS</span>
        <p>حقوقك محفوظة مع ACCESS وفريق الدعم هنا لمساعدتك في كل خطوة.</p>
      </footer>
    </div>
  );
}